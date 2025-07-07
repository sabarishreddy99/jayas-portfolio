# Deployment Guide for Hostinger

## Prerequisites
- Hostinger hosting account with file manager access
- Your Next.js project built and ready

## Step 1: Build the Project
Run the following commands in your terminal:

```bash
# Install dependencies (if not already installed)
npm install

# Build the project for static export
npm run build
```

## Step 2: Locate Build Files
After building, you'll find the static files in the `out` directory.

## Step 3: Deploy to Hostinger

### Option A: Using File Manager (Recommended)
1. Log into your Hostinger account
2. Go to File Manager
3. Navigate to the `public_html` folder (or your domain folder)
4. Upload all contents from the `out` folder to `public_html`
5. Make sure the `index.html` file is in the root of `public_html`

### Option B: Using FTP
1. Use an FTP client (like FileZilla)
2. Connect to your Hostinger FTP:
   - Host: Your domain or IP
   - Username: Your FTP username
   - Password: Your FTP password
3. Upload all files from the `out` folder to the `public_html` directory

## Step 4: Configure Domain (if needed)
- If using a custom domain, make sure it's pointed to your Hostinger hosting
- Update the `url` in your Next.js metadata to match your domain

## Step 5: Test Your Site
- Visit your domain to ensure everything is working
- Check that all pages load correctly
- Verify responsive design on different devices

## Important Notes
- The build creates static files, so server-side features won't work
- Images are unoptimized for compatibility
- Make sure all external links (Google Drive, social media) are correct

## Troubleshooting
- If images don't load, check the file paths
- If styles are missing, ensure CSS files are uploaded
- For 404 errors, check that index.html is in the root directory

## File Structure After Upload
```
public_html/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── favicon.svg
├── icon.svg
└── ... (other assets)
```
