#!/bin/bash

# 🚀 Hostinger Deployment Script
# This script builds and packages your portfolio for Hostinger deployment
# GUARANTEE: Original files are always restored for GitHub Pages compatibility

echo "🚀 Starting Hostinger Deployment Preparation..."
echo "================================================"

# Navigate to project directory
cd "$(dirname "$0")"

# Function to restore original files (used for cleanup)
restore_original_files() {
    echo "🔄 Restoring original GitHub Pages configuration..."
    if [ -f "next.config.js.backup" ]; then
        mv next.config.js.backup next.config.js
        echo "✅ Restored next.config.js"
    fi
    if [ -f "src/utils/images.ts.backup" ]; then
        mv src/utils/images.ts.backup src/utils/images.ts
        echo "✅ Restored src/utils/images.ts"
    fi
}

# Set trap to ensure cleanup happens even if script is interrupted
trap restore_original_files EXIT

# Verify original files exist before proceeding
if [ ! -f "next.config.js" ] || [ ! -f "src/utils/images.ts" ]; then
    echo "❌ Required configuration files not found!"
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf out
rm -f hostinger-deployment-ready.zip

# Backup original files with verification
echo "💾 Backing up original GitHub Pages configuration..."
cp next.config.js next.config.js.backup
if [ $? -ne 0 ]; then
    echo "❌ Failed to backup next.config.js"
    exit 1
fi

cp src/utils/images.ts src/utils/images.ts.backup
if [ $? -ne 0 ]; then
    echo "❌ Failed to backup src/utils/images.ts"
    restore_original_files
    exit 1
fi

echo "✅ Original files backed up successfully"

# Temporarily modify next.config.js for Hostinger (no basePath needed)
echo "⚙️ Creating temporary Hostinger configuration..."

cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Hostinger deployment configuration (no basePath needed)
  distDir: 'out',
}

module.exports = nextConfig
EOF

# Create Hostinger-specific image utility
cat > src/utils/images.ts << 'EOF'
// Utility function for Hostinger deployment (no basePath needed)
export const getImagePath = (path: string): string => {
  // For Hostinger deployment, no basePath is needed
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  return normalizedPath
}

// Alternative: Simple asset path helper for Hostinger
export const getAssetPath = (path: string): string => {
  // For Hostinger deployment, paths are relative to root
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return normalizedPath
}
EOF

echo "✅ Temporary Hostinger configuration created"

# Build the project
echo "🔨 Building project for Hostinger..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please check for errors."
    echo "🔄 Restoring original files due to build failure..."
    # Note: restore_original_files will be called automatically by EXIT trap
    exit 1
fi

# Restore original next.config.js
echo "🔄 Restoring original configuration..."
mv next.config.js.backup next.config.js
mv src/utils/images.ts.backup src/utils/images.ts

# Create deployment package
echo "📦 Creating deployment package..."
cd out
zip -r ../hostinger-deployment-ready.zip * > /dev/null 2>&1
cd ..

# Check if packaging was successful
if [ -f "hostinger-deployment-ready.zip" ]; then
    echo "✅ Deployment package created!"
    echo "📁 File: hostinger-deployment-ready.zip"
    echo "📏 Size: $(ls -lh hostinger-deployment-ready.zip | awk '{print $5}')"
else
    echo "❌ Failed to create deployment package!"
    exit 1
fi

echo ""
echo "🎉 DEPLOYMENT READY!"
echo "================================================"

# Final verification that original files are restored
echo "🔍 Verifying GitHub Pages configuration restored..."
if grep -q "/jayas-portfolio" next.config.js; then
    echo "✅ next.config.js: GitHub Pages basePath restored"
else
    echo "⚠️  Warning: next.config.js may not be properly restored"
fi

if grep -q "/jayas-portfolio" src/utils/images.ts; then
    echo "✅ images.ts: GitHub Pages basePath restored"
else
    echo "⚠️  Warning: images.ts may not be properly restored"
fi

echo ""
echo "📋 Next Steps:"
echo "1. Upload 'hostinger-deployment-ready.zip' to your Hostinger File Manager"
echo "2. Extract the zip file in your public_html folder"
echo "3. Delete the zip file after extraction"
echo "4. Test your website at your domain"
echo ""
echo "🔄 Your GitHub Pages configuration is intact and ready for deployment"
echo "📖 See HOSTINGER-READY-DEPLOYMENT.md for detailed instructions"
echo "✨ Your portfolio is ready for the world!"
