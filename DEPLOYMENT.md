# MRT Website Deployment Guide

This guide explains how to build and deploy the MRT website to GitHub Pages.

## Prerequisites

- Node.js 18+ installed
- Git configured with your GitHub credentials
- Write access to the `marianopolis-research-team/mrt-website` repository

## Building for Production

The website is configured for static export to GitHub Pages. To build:

```bash
# Install dependencies (if not already done)
npm install

# Build the static site
npm run build
```

This creates an `out/` directory containing the static HTML, CSS, and JavaScript files.

## Deployment to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`** in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Save

3. **Push to main branch**:
```bash
git add .
git commit -m "Add deployment workflow"
git push origin main
```

The site will automatically deploy on every push to `main`.

### Option 2: Manual Deployment with gh-pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add deploy script to `package.json`**:
```json
{
  "scripts": {
    "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

4. **Configure GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)
   - Save

## Viewing the Deployed Site

After deployment, your site will be available at:
```
https://marianopolis-research-team.github.io/mrt-website/
```

## Configuration Notes

### Base Path
The `next.config.ts` includes:
```typescript
basePath: process.env.NODE_ENV === 'production' ? '/mrt-website' : '',
```

This ensures all links work correctly when deployed to a subdirectory on GitHub Pages.

### Static Export Settings
```typescript
output: 'export',
images: {
  unoptimized: true,
},
```

These settings are required for GitHub Pages static hosting.

## Custom Domain (Optional)

To use a custom domain (e.g., `mrt.marianopolis.edu`):

1. **Add CNAME file** in `public/` directory:
```
mrt.marianopolis.edu
```

2. **Update `next.config.ts`**:
```typescript
basePath: '', // Remove basePath for custom domain
```

3. **Configure DNS**:
   - Add CNAME record pointing to: `marianopolis-research-team.github.io`
   - Or A records for GitHub's IPs

4. **Enable custom domain** in GitHub Pages settings

## Troubleshooting

### 404 Errors on Refresh
- Ensure `trailingSlash: true` is in `next.config.ts`
- All routes should end with `/` (e.g., `/about/`, not `/about`)

### Images Not Loading
- Check that `images.unoptimized` is `true`
- Verify image paths don't include the base path prefix
- Use relative paths starting with `/images/...`

### Build Fails
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Styles Not Applied
- Verify Tailwind is properly configured
- Check that CSS is being generated during build
- Inspect browser console for 404s on CSS files

## Development vs Production

### Local Development
```bash
npm run dev
```
Runs on `http://localhost:3000` without base path.

### Production Build
```bash
npm run build
npm run start  # Test the production build locally
```
Test the exported site locally:
```bash
npx serve out
```

## Updating Content

After updating content (pages, images, data):

1. **Test locally**:
```bash
npm run dev
```

2. **Build and verify**:
```bash
npm run build
npx serve out  # Check at http://localhost:3000
```

3. **Commit and push** (if using GitHub Actions):
```bash
git add .
git commit -m "Update content"
git push origin main
```

Or **deploy manually** (if using gh-pages):
```bash
npm run deploy
```

## Performance Optimization

Before deploying, optimize:

1. **Images**: Compress using ImageOptim, Squoosh, or TinyPNG
2. **Code**: Build includes automatic minification
3. **3D Models**: Keep polygon counts low (<10k)
4. **Audit**: Run Lighthouse in browser DevTools

## Support

For deployment issues:
- Check GitHub Actions logs in the Actions tab
- Review [Next.js Static Export docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Contact the Technical Lead

---

**Last Updated**: January 2026
