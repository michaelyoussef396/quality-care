#!/bin/bash

# Production Deployment Script for Quality Care NDIS Website
# TASK-026: Production build configuration

set -e

echo "🚀 Starting deployment process..."

# Configuration
PROJECT_NAME="quality-care"
DOCKER_IMAGE="quality-care:latest"
CONTAINER_NAME="quality-care-app"
BUILD_DIR="dist"
BACKUP_DIR="backups"
DEPLOY_TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log_info "Checking prerequisites..."
    
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed"
        exit 1
    fi
    
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed"
        exit 1
    fi
    
    log_success "Prerequisites check passed"
}

# Run tests
run_tests() {
    log_info "Running tests..."
    
    if command -v pnpm &> /dev/null; then
        pnpm run test
    else
        npm test
    fi
    
    if [ $? -ne 0 ]; then
        log_error "Tests failed. Deployment aborted."
        exit 1
    fi
    
    log_success "All tests passed"
}

# Type checking
run_typecheck() {
    log_info "Running TypeScript type checking..."
    
    if command -v pnpm &> /dev/null; then
        pnpm run typecheck
    else
        npm run typecheck
    fi
    
    if [ $? -ne 0 ]; then
        log_error "Type checking failed. Deployment aborted."
        exit 1
    fi
    
    log_success "Type checking passed"
}

# Lint checking
run_lint() {
    log_info "Running linting..."
    
    if npm run lint &> /dev/null; then
        log_success "Linting passed"
    else
        log_warning "Linting issues found, but continuing deployment"
    fi
}

# Build application
build_app() {
    log_info "Building application for production..."
    
    # Clean previous build
    rm -rf $BUILD_DIR
    
    # Set production environment
    export NODE_ENV=production
    
    # Build the application
    if command -v pnpm &> /dev/null; then
        pnpm run build
    else
        npm run build
    fi
    
    if [ $? -ne 0 ]; then
        log_error "Build failed. Deployment aborted."
        exit 1
    fi
    
    # Verify build output
    if [ ! -d "$BUILD_DIR/spa" ]; then
        log_error "Build output directory not found. Build may have failed."
        exit 1
    fi
    
    if [ ! -f "$BUILD_DIR/spa/index.html" ]; then
        log_error "index.html not found in build output. Build may have failed."
        exit 1
    fi
    
    log_success "Application built successfully"
}

# Analyze bundle
analyze_bundle() {
    log_info "Analyzing bundle size..."
    
    if [ -d "$BUILD_DIR/spa" ]; then
        # Check bundle size (approximate)
        bundle_size=$(du -sh $BUILD_DIR/spa | cut -f1)
        log_info "Total build size: $bundle_size"
        
        # Analyze individual file sizes
        log_info "Large files in build:"
        find $BUILD_DIR/spa -type f -size +100k -exec ls -lh {} \; | head -10
        
        # Check for common optimization issues
        js_files=$(find $BUILD_DIR/spa -name "*.js" | wc -l)
        css_files=$(find $BUILD_DIR/spa -name "*.css" | wc -l)
        img_files=$(find $BUILD_DIR/spa -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.webp" | wc -l)
        
        log_info "File counts - JS: $js_files, CSS: $css_files, Images: $img_files"
        
        # Warn if bundle is too large
        size_mb=$(du -sm $BUILD_DIR/spa | cut -f1)
        if [ $size_mb -gt 10 ]; then
            log_warning "Build size is ${size_mb}MB, consider optimization"
        fi
    else
        log_warning "Build directory not found for analysis"
    fi
}

# Security scan
security_scan() {
    log_info "Running security audit..."
    
    npm audit --audit-level=moderate
    if [ $? -ne 0 ]; then
        log_warning "Security vulnerabilities found. Please review."
    else
        log_success "Security audit passed"
    fi
}

# Build Docker image
build_docker_image() {
    log_info "Building Docker image..."
    
    docker build -t $DOCKER_IMAGE .
    if [ $? -ne 0 ]; then
        log_error "Docker build failed. Deployment aborted."
        exit 1
    fi
    
    log_success "Docker image built successfully"
}

# Create backup
create_backup() {
    log_info "Creating backup..."
    
    mkdir -p $BACKUP_DIR
    
    # Stop existing container if running
    if docker ps -q -f name=$CONTAINER_NAME > /dev/null; then
        log_info "Stopping existing container..."
        docker stop $CONTAINER_NAME || true
    fi
    
    # Export existing container (if exists)
    if docker ps -a -q -f name=$CONTAINER_NAME > /dev/null; then
        log_info "Creating container backup..."
        docker export $CONTAINER_NAME > "$BACKUP_DIR/backup_$DEPLOY_TIMESTAMP.tar" || true
        docker rm $CONTAINER_NAME || true
    fi
    
    log_success "Backup created"
}

# Deploy application
deploy_app() {
    log_info "Deploying application..."
    
    # Run new container
    docker run -d \
        --name $CONTAINER_NAME \
        --restart unless-stopped \
        -p 80:80 \
        -p 443:443 \
        --health-cmd="curl -f http://localhost/ || exit 1" \
        --health-interval=30s \
        --health-timeout=3s \
        --health-start-period=5s \
        --health-retries=3 \
        $DOCKER_IMAGE
    
    if [ $? -ne 0 ]; then
        log_error "Deployment failed. Rolling back..."
        rollback
        exit 1
    fi
    
    log_success "Application deployed successfully"
}

# Health check
health_check() {
    log_info "Performing health check..."
    
    # Wait for container to be ready
    sleep 10
    
    # Check if container is running
    if ! docker ps -q -f name=$CONTAINER_NAME > /dev/null; then
        log_error "Container is not running"
        return 1
    fi
    
    # Check application health
    for i in {1..30}; do
        if curl -f http://localhost/health > /dev/null 2>&1; then
            log_success "Health check passed"
            return 0
        fi
        log_info "Waiting for application to be ready... ($i/30)"
        sleep 2
    done
    
    log_error "Health check failed"
    return 1
}

# Rollback function
rollback() {
    log_warning "Rolling back deployment..."
    
    # Stop current container
    docker stop $CONTAINER_NAME || true
    docker rm $CONTAINER_NAME || true
    
    # Find latest backup
    LATEST_BACKUP=$(ls -t $BACKUP_DIR/backup_*.tar 2>/dev/null | head -n1)
    
    if [ -n "$LATEST_BACKUP" ]; then
        log_info "Restoring from backup: $LATEST_BACKUP"
        docker import $LATEST_BACKUP $PROJECT_NAME:backup
        docker run -d --name $CONTAINER_NAME -p 80:80 $PROJECT_NAME:backup
        log_success "Rollback completed"
    else
        log_error "No backup found for rollback"
    fi
}

# Cleanup old backups
cleanup_backups() {
    log_info "Cleaning up old backups..."
    
    # Keep only last 5 backups
    cd $BACKUP_DIR
    ls -t backup_*.tar 2>/dev/null | tail -n +6 | xargs rm -f
    cd ..
    
    log_success "Backup cleanup completed"
}

# Deploy to Netlify
deploy_netlify() {
    log_info "Deploying to Netlify..."
    
    if [ -z "$NETLIFY_AUTH_TOKEN" ]; then
        log_warning "NETLIFY_AUTH_TOKEN not set, skipping Netlify deployment"
        return 0
    fi
    
    if command -v netlify &> /dev/null; then
        netlify deploy --prod --dir=dist/spa --auth=$NETLIFY_AUTH_TOKEN
        log_success "Deployed to Netlify"
    else
        log_warning "Netlify CLI not installed, skipping deployment"
    fi
}

# Deploy to Vercel
deploy_vercel() {
    log_info "Deploying to Vercel..."
    
    if [ -z "$VERCEL_TOKEN" ]; then
        log_warning "VERCEL_TOKEN not set, skipping Vercel deployment"
        return 0
    fi
    
    if command -v vercel &> /dev/null; then
        vercel --prod --token=$VERCEL_TOKEN --yes
        log_success "Deployed to Vercel"
    else
        log_warning "Vercel CLI not installed, skipping deployment"
    fi
}

# Generate static deployment package
generate_static_package() {
    log_info "Generating static deployment package..."
    
    PACKAGE_NAME="quality-care-static-${DEPLOY_TIMESTAMP}.tar.gz"
    
    cd $BUILD_DIR/spa
    tar -czf "../../$PACKAGE_NAME" .
    cd ../..
    
    log_success "Static package created: $PACKAGE_NAME"
    log_info "Upload this package to any static hosting provider"
}

# Send notification (placeholder)
send_notification() {
    local status=$1
    local message=$2
    
    log_info "Sending deployment notification..."
    
    # Here you would integrate with your notification system
    # Examples: Slack webhook, email, Discord, etc.
    
    echo "Deployment Status: $status"
    echo "Message: $message"
    echo "Timestamp: $(date)"
    
    # Example Slack webhook (uncomment and configure)
    # if [ -n "$SLACK_WEBHOOK_URL" ]; then
    #     curl -X POST -H 'Content-type: application/json' \
    #         --data "{\"text\":\"🚀 Quality Care Deployment: $status - $message\"}" \
    #         $SLACK_WEBHOOK_URL
    # fi
}

# Main deployment process
main() {
    log_info "Quality Care NDIS Website Deployment"
    log_info "Timestamp: $DEPLOY_TIMESTAMP"
    
    # Run all deployment steps
    check_prerequisites
    run_tests
    run_typecheck
    run_lint
    security_scan
    build_app
    analyze_bundle
    build_docker_image
    create_backup
    deploy_app
    
    # Health check
    if health_check; then
        cleanup_backups
        send_notification "SUCCESS" "Deployment completed successfully"
        log_success "🎉 Deployment completed successfully!"
        
        # Show deployment info
        echo ""
        log_info "Deployment Information:"
        log_info "- Application URL: http://localhost"
        log_info "- Container Name: $CONTAINER_NAME"
        log_info "- Docker Image: $DOCKER_IMAGE"
        log_info "- Deployment Time: $DEPLOY_TIMESTAMP"
        echo ""
    else
        send_notification "FAILED" "Deployment failed health check"
        log_error "❌ Deployment failed!"
        rollback
        exit 1
    fi
}

# Handle script interruption
trap 'log_error "Deployment interrupted"; exit 1' INT TERM

# Check if running with specific command
case "${1:-}" in
    "test")
        run_tests
        ;;
    "build")
        check_prerequisites
        run_tests
        run_typecheck
        build_app
        analyze_bundle
        ;;
    "docker")
        check_prerequisites
        run_tests
        run_typecheck
        build_app
        build_docker_image
        ;;
    "netlify")
        check_prerequisites
        run_tests
        run_typecheck
        build_app
        deploy_netlify
        ;;
    "vercel")
        check_prerequisites
        run_tests
        run_typecheck
        build_app
        deploy_vercel
        ;;
    "static")
        check_prerequisites
        run_tests
        run_typecheck
        build_app
        generate_static_package
        ;;
    "rollback")
        rollback
        ;;
    "health")
        health_check
        ;;
    *)
        main
        ;;
esac