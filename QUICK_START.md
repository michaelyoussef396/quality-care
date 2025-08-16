# 🚀 Quick Start - Quality Care NDIS Website

Get the Quality Care NDIS website running in production in 5 minutes.

## ⚡ Fastest Deployment (Netlify)

```bash
# 1. Clone and setup
git clone <your-repo-url>
cd quality-care
pnpm install

# 2. Build for production
pnpm run build

# 3. Deploy to Netlify (one-time setup)
npx netlify-cli deploy --prod --dir=dist/spa
```

**That's it!** Your site is live. 🎉

## 🐳 Docker (Production Ready)

```bash
# 1. Build and run
docker build -t quality-care .
docker run -d -p 80:80 --name quality-care-app quality-care

# 2. Verify
curl http://localhost/health
```

## 🔧 Manual Build & Deploy

```bash
# 1. Install dependencies
pnpm install

# 2. Test and build
pnpm run test
pnpm run typecheck
pnpm run build

# 3. Deploy the dist/spa/ folder to any static host
```

## 🛠️ One-Command Deployments

```bash
# Make deployment script executable
chmod +x scripts/deploy.sh

# Choose your deployment:
./scripts/deploy.sh netlify    # Deploy to Netlify
./scripts/deploy.sh vercel     # Deploy to Vercel  
./scripts/deploy.sh docker     # Docker deployment
./scripts/deploy.sh static     # Generate static package
```

## 📁 What Gets Built

After running `pnpm run build`, you'll have:

```
dist/
├── spa/                    # Frontend SPA files
│   ├── index.html         # Main HTML file
│   ├── assets/            # JS, CSS, images
│   └── ...                # Static assets
└── server/                # Backend files (if needed)
```

## 🌐 Live URL Examples

After deployment, your site will be available at:
- **Netlify**: `https://your-site-name.netlify.app`
- **Vercel**: `https://your-project.vercel.app`
- **Docker**: `http://localhost` (or your server IP)

## 🔍 Verify Deployment

```bash
# Check if site is working
curl -I https://your-domain.com

# Health check endpoint
curl https://your-domain.com/health

# Performance test
lighthouse https://your-domain.com
```

## 📖 Need More Details?

- **Full deployment guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Project overview**: See [README.md](./README.md)
- **Development setup**: See [package.json](./package.json) scripts

## 🆘 Issues?

**Build failing?**
```bash
rm -rf node_modules dist
pnpm install
pnpm run build
```

**404 errors on routes?**
Make sure your hosting provider serves `index.html` for all routes (SPA routing).

**Docker not starting?**
```bash
docker logs quality-care-app
```

---

🎉 **Congratulations!** Your Quality Care NDIS website is now live and ready to help people access professional disability support services.