# Quality Care NDIS Website - Deployment Guide

This guide provides comprehensive instructions for deploying the Quality Care NDIS website across multiple platforms and environments.

## 📋 Quick Start

### Prerequisites
- Node.js 18+ and pnpm
- Docker (for containerized deployment)
- Git access to the repository

### Basic Build & Test
```bash
# Install dependencies
pnpm install

# Run tests and build
pnpm run test
pnpm run typecheck
pnpm run build

# Verify build output
ls -la dist/spa/
```

## 🚀 Deployment Options

### 1. Automated Script Deployment

The project includes a comprehensive deployment script with multiple options:

```bash
# Make script executable
chmod +x scripts/deploy.sh

# Full production deployment (Docker)
./scripts/deploy.sh

# Build only
./scripts/deploy.sh build

# Deploy to Netlify
./scripts/deploy.sh netlify

# Deploy to Vercel
./scripts/deploy.sh vercel

# Generate static package
./scripts/deploy.sh static

# Docker deployment
./scripts/deploy.sh docker
```

### 2. Docker Deployment

#### Local Docker Build
```bash
# Build Docker image
docker build -t quality-care:latest .

# Run container
docker run -d \
  --name quality-care-app \
  -p 80:80 \
  --restart unless-stopped \
  quality-care:latest

# Health check
curl http://localhost/health
```

#### Docker Compose (Recommended)
```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:80"
      - "443:443"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 3s
      retries: 3
```

```bash
docker-compose up -d
```

### 3. Netlify Deployment

#### Via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build project
pnpm run build

# Deploy to staging
netlify deploy --dir=dist/spa

# Deploy to production
netlify deploy --prod --dir=dist/spa
```

#### Via Git Integration
1. Connect repository to Netlify
2. Set build command: `pnpm run build:client`
3. Set publish directory: `dist/spa`
4. Deploy automatically on push

#### Environment Variables
```bash
# .env (Netlify)
NODE_ENV=production
VITE_API_BASE_URL=https://api.qualitycareproviders.com.au
VITE_SITE_URL=https://qualitycareproviders.com.au
```

### 4. Vercel Deployment

#### Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to staging
vercel

# Deploy to production
vercel --prod
```

#### Configuration
The project includes `vercel.json` with optimized settings:
- SPA routing configuration
- Security headers
- Caching strategies
- Build optimization

### 5. Static Hosting (AWS S3, GitHub Pages, etc.)

#### Generate Static Package
```bash
./scripts/deploy.sh static
```

This creates a `quality-care-static-{timestamp}.tar.gz` file that can be uploaded to any static hosting provider.

#### Manual Static Deployment
```bash
# Build project
pnpm run build

# Upload dist/spa/ contents to your hosting provider
# Ensure index.html is served for all routes (SPA routing)
```

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production` file:
```bash
# Application
NODE_ENV=production
VITE_APP_NAME="Quality Care - Professional NDIS Services"
VITE_APP_VERSION=1.0.0

# API Configuration
VITE_API_BASE_URL=https://api.qualitycareproviders.com.au
VITE_CONTACT_API_ENDPOINT=/api/contact

# Site Configuration
VITE_SITE_URL=https://qualitycareproviders.com.au
VITE_SITE_NAME="Quality Care Providers"

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_GOOGLE_TAG_MANAGER_ID=GTM_CONTAINER_ID

# Performance
VITE_ENABLE_PERFORMANCE_MONITORING=true
VITE_PWA_ENABLED=true
```

### Platform-Specific Settings

#### Netlify
```toml
# netlify.toml
[build]
  command = "pnpm run build:client"
  publish = "dist/spa"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Vercel
```json
{
  "buildCommand": "pnpm run build:client",
  "outputDirectory": "dist/spa",
  "framework": null
}
```

## 🏗️ CI/CD Pipeline

### GitHub Actions

The project includes a comprehensive CI/CD workflow (`.github/workflows/ci-cd.yml`):

- **Test & Build**: TypeScript checking, linting, testing
- **Security Scan**: Vulnerability scanning with Trivy
- **Docker Build**: Multi-platform container images
- **Deploy Staging**: Automatic deployment on `develop` branch
- **Deploy Production**: Automatic deployment on `main` branch
- **Performance Audit**: Lighthouse testing

### Required Secrets

Add these secrets to your GitHub repository:

```bash
# Docker Hub
DOCKER_USERNAME=your_docker_username
DOCKER_PASSWORD=your_docker_password

# Netlify
NETLIFY_AUTH_TOKEN=your_netlify_token
NETLIFY_STAGING_SITE_ID=staging_site_id
NETLIFY_PRODUCTION_SITE_ID=production_site_id

# Vercel
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id

# Notifications (Optional)
SLACK_WEBHOOK_URL=your_slack_webhook
```

## 🔍 Performance Optimization

### Build Optimization
- **Code Splitting**: Automatic vendor and route-based splitting
- **Asset Optimization**: Images, fonts, and static assets
- **Bundle Analysis**: Size monitoring and optimization alerts
- **Service Worker**: PWA capabilities with offline support

### Monitoring
```bash
# Performance audit
npm install -g lighthouse
lighthouse https://your-domain.com --view

# Bundle analysis
npx vite-bundle-analyzer dist/spa
```

## 🛡️ Security Configuration

### Security Headers
The nginx configuration includes comprehensive security headers:
- CSP (Content Security Policy)
- XSS Protection
- Frame Options
- HSTS (HTTP Strict Transport Security)

### Rate Limiting
- General: 10 requests/second
- Contact form: 1 request/second
- API endpoints: Configurable limits

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules dist
pnpm install
pnpm run build
```

#### Docker Issues
```bash
# Check container logs
docker logs quality-care-app

# Restart container
docker restart quality-care-app

# Rebuild image
docker build --no-cache -t quality-care:latest .
```

#### Routing Issues (404s)
Ensure your hosting provider serves `index.html` for all routes:
- **Netlify**: Use `_redirects` file or `netlify.toml`
- **Vercel**: Configure in `vercel.json`
- **Nginx**: Use `try_files $uri $uri/ /index.html;`

### Health Checks

```bash
# Application health
curl -f http://localhost/health

# Docker container health
docker inspect --format='{{.State.Health.Status}}' quality-care-app

# Lighthouse performance audit
lighthouse https://your-domain.com --only-categories=performance
```

## 📊 Monitoring & Maintenance

### Performance Monitoring
- **Lighthouse CI**: Automated performance testing
- **Bundle Size Monitoring**: Automated alerts for large bundles
- **Core Web Vitals**: Real user monitoring

### Log Management
```bash
# Docker logs
docker logs quality-care-app

# Nginx access logs
docker exec quality-care-app tail -f /var/log/nginx/access.log

# Application errors
docker exec quality-care-app tail -f /var/log/nginx/error.log
```

### Backup & Recovery
```bash
# Create backup
./scripts/deploy.sh # Automatically creates backups

# Manual rollback
./scripts/deploy.sh rollback

# Export container
docker export quality-care-app > backup.tar
```

## 🔄 Rollback Procedures

### Automatic Rollback
```bash
./scripts/deploy.sh rollback
```

### Manual Rollback
```bash
# Stop current deployment
docker stop quality-care-app

# Restore from backup
docker import backup.tar quality-care:backup
docker run -d --name quality-care-app -p 80:80 quality-care:backup
```

### Git-based Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# CI/CD will automatically deploy the reverted version
```

## 📞 Support

For deployment issues:
1. Check the troubleshooting section above
2. Review container/application logs
3. Verify environment variables and configuration
4. Test locally with `pnpm run build && pnpm run preview`

## 🔗 Additional Resources

- [Vite Production Build Guide](https://vitejs.dev/guide/build.html)
- [React Router Deployment](https://reactrouter.com/web/guides/deployment)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Nginx Configuration](https://nginx.org/en/docs/)