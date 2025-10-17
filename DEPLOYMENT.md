# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Sign in and click "Add New Project"
4. Import your Git repository
5. Vercel will auto-detect Next.js and configure settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Environment Variables

If you need to set environment variables:

1. Copy `.env.example` to `.env.local` for local development
2. In Vercel dashboard, go to Project Settings → Environment Variables
3. Add your variables there

## Custom Domain

1. Go to your project in Vercel dashboard
2. Navigate to Settings → Domains
3. Add your custom domain (e.g., glowduck.app)
4. Follow the DNS configuration instructions

## Performance Optimization

The site is already optimized with:
- ✅ Static page generation
- ✅ Next.js Image optimization
- ✅ Automatic code splitting
- ✅ Tailwind CSS purging
- ✅ Compressed assets

## Post-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify mobile responsiveness
- [ ] Check Open Graph preview (share on social media)
- [ ] Run Lighthouse audit (aim for 90+ in all categories)
- [ ] Test App Store/Play Store download links
- [ ] Verify contact email works
- [ ] Set up analytics (optional)
- [ ] Configure custom domain (if applicable)

## Monitoring

Consider adding:
- Vercel Analytics for performance monitoring
- Google Analytics for user tracking
- Sentry for error tracking

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Pushes to `main` or `master` branch
- **Preview**: Pull requests and other branches

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Images Not Loading
- Ensure images are in the `public` folder
- Check Next.js Image configuration in `next.config.js`

### Styling Issues
- Clear your browser cache
- Check if Tailwind CSS is building correctly
- Verify `tailwind.config.ts` includes all content paths

## Support

For deployment issues, contact: support@glowduck.app

