# 🚀 Hostinger Deployment Checklist

## ✅ Pre-Deployment Checklist
- [x] Project built successfully
- [x] Static files generated in `out` folder
- [x] Deployment zip file created: `hostinger-deployment.zip`
- [ ] Hostinger account ready
- [ ] Domain configured (if using custom domain)

## 📦 Files Ready for Deployment
Your deployment package (`hostinger-deployment.zip`) contains:
- `index.html` - Main homepage
- `_next/` - Next.js optimized assets
- Images: `nyu-logo.jpg`, `vit-logo.jpg`, `sabari-avtar.jpg`
- 404 error pages
- All CSS and JavaScript bundles

## 🌐 Hostinger Deployment Steps

### Step 1: Access Hostinger File Manager
1. Log into your Hostinger account
2. Go to **Hosting** → **Manage**
3. Click **File Manager**

### Step 2: Prepare the Directory
1. Navigate to `public_html` folder
2. Delete any existing files (if this is a fresh deployment)
3. Make sure you're in the root directory

### Step 3: Upload Your Files
**Option A: Upload Zip File**
1. Click **Upload** in File Manager
2. Select `hostinger-deployment.zip`
3. After upload, right-click the zip file
4. Select **Extract** → **Extract Here**
5. Delete the zip file after extraction

**Option B: Upload Individual Files**
1. Extract `hostinger-deployment.zip` on your computer
2. Select all files from the extracted folder
3. Drag and drop or upload to `public_html`

### Step 4: Verify File Structure
Ensure your `public_html` contains:
```
public_html/
├── index.html ← This is crucial!
├── _next/
├── 404.html
├── nyu-logo.jpg
├── vit-logo.jpg
├── sabari-avtar.jpg
└── 404/
```

### Step 5: Test Your Website
1. Visit your domain in a browser
2. Check that all sections load properly:
   - Hero section
   - Navigation with tooltips
   - Education section with university logos
   - Contact forms and buttons
   - Footer
3. Test responsive design on mobile
4. Verify all external links work (Google Drive, social media)

## 🔧 Domain Configuration

### If Using a New Domain:
1. Update your domain's nameservers to Hostinger's:
   - `ns1.dns-parking.com`
   - `ns2.dns-parking.com`
2. Wait 24-48 hours for propagation

### If Using a Subdomain:
1. In Hostinger panel, go to **Domains** → **Subdomains**
2. Create your subdomain pointing to `public_html`

## 🛠 Troubleshooting

### Common Issues:

**Website shows "Coming Soon" page:**
- Make sure `index.html` is in the root of `public_html`
- Clear browser cache

**Images not loading:**
- Check file names match exactly (case-sensitive)
- Verify images are in the root directory

**Styles not applied:**
- Ensure `_next` folder uploaded completely
- Check CSS files in `_next/static/css/`

**404 errors on refresh:**
- This is normal for static sites with client-side routing
- The 404 page should redirect back to home

### Performance Optimization:
- Enable **Cloudflare** in Hostinger for faster loading
- Use **GZIP compression** (usually enabled by default)
- Set up **SSL certificate** (free with Hostinger)

## 📊 Post-Deployment

### Test These Features:
- [ ] Navigation scrolling
- [ ] Theme toggle (dark/light mode)
- [ ] Email copy functionality
- [ ] Google Drive links
- [ ] Social media links
- [ ] Responsive design
- [ ] Tooltips on hover
- [ ] Animations and transitions

### SEO Setup:
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if desired)
- [ ] Verify Open Graph meta tags
- [ ] Test site speed with PageSpeed Insights

## 🎉 Success!
Your portfolio is now live! Share your new website:
- Portfolio URL: `https://yourdomain.com`
- Test on multiple devices
- Share with friends and potential employers

---
**Need help?** Contact Hostinger support or refer to their documentation for file management and domain setup.
