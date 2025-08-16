# Vercel Deployment Guide - Quality Care NDIS

## ✅ Quick Fix for Deployment Error

The deployment error "No Output Directory named 'build' found" has been fixed. The issue was that Vercel was looking for a "build" directory, but our Vite project outputs to "dist/spa".

## 🚀 Deployment Steps

### 1. Connect Your Repository to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration from `vercel.json`

### 2. Configure Build Settings (Auto-configured)

These settings are already in `vercel.json`:

- **Build Command**: `pnpm run build:client`
- **Output Directory**: `dist/spa`
- **Install Command**: `pnpm install`
- **Framework Preset**: None (custom Vite config)

### 3. Environment Variables (Optional)

Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
# API Configuration (if needed)
VITE_API_BASE_URL=https://api.qualitycareproviders.com.au
VITE_CONTACT_API_ENDPOINT=/api/contact

# Site Configuration
VITE_SITE_URL=https://your-vercel-domain.vercel.app
VITE_SITE_NAME="Quality Care Providers"

# Analytics (Optional)
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_GOOGLE_TAG_MANAGER_ID=GTM_CONTAINER_ID
```

### 4. Deploy

```bash
# Option 1: Git Push (Automatic)
git push origin main

# Option 2: Vercel CLI
vercel --prod

# Option 3: Manual in Dashboard
Click "Deploy" in Vercel Dashboard
```

## 📁 Project Structure

```
quality-care/
├── dist/
│   └── spa/              # ← Vercel serves this directory
│       ├── index.html
│       ├── assets/
│       └── ...
├── vercel.json           # ← Vercel configuration
└── package.json          # ← Build scripts
```

## 🔧 Configuration Details

### vercel.json Structure

```json
{
  "buildCommand": "pnpm run build:client",
  "outputDirectory": "dist/spa",
  "installCommand": "pnpm install",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Key Points:

- **SPA Routing**: All routes rewrite to `/index.html` for React Router
- **Output Directory**: Points to `dist/spa` where Vite builds
- **Build Command**: Uses `pnpm run build:client` (client-only build)
- **Region**: Deployed to Sydney (syd1) for Australian users

## 🐛 Troubleshooting

### Common Issues

#### 1. Build Fails
```bash
# Verify locally
pnpm install
pnpm run build:client
ls -la dist/spa/  # Should show index.html and assets
```

#### 2. 404 on Routes
- Ensure `rewrites` configuration is present in `vercel.json`
- All routes should redirect to `/index.html` for SPA

#### 3. Missing Dependencies
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 4. Environment Variables Not Working
- Add `VITE_` prefix to all client-side env variables
- Set them in Vercel Dashboard → Settings → Environment Variables

## 🎯 Deployment Checklist

- [x] `vercel.json` configured with correct output directory
- [x] Build command uses `pnpm run build:client`
- [x] Output directory set to `dist/spa`
- [x] SPA rewrites configured for React Router
- [x] Security headers configured
- [x] Caching headers for static assets
- [ ] Environment variables added (if needed)
- [ ] Custom domain configured (optional)

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Environment Variables Guide](https://vercel.com/docs/environment-variables)
- [Custom Domains](https://vercel.com/docs/custom-domains)

## ✅ Success Indicators

After successful deployment:
1. Visit `https://your-project.vercel.app`
2. Check all routes work (About, Contact, Services)
3. Verify performance with Lighthouse
4. Test mobile responsiveness
5. Confirm animations trigger on scroll

---

Your Quality Care NDIS website is now ready for production on Vercel! 🎉