#!/bin/bash

# 🚀 Hostinger Deployment Script
# This script builds and packages your portfolio for Hostinger deployment

echo "🚀 Starting Hostinger Deployment Preparation..."
echo "================================================"

# Navigate to project directory
cd "$(dirname "$0")"

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf out
rm -f hostinger-deployment-ready.zip

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi

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
echo "📋 Next Steps:"
echo "1. Upload 'hostinger-deployment-ready.zip' to your Hostinger File Manager"
echo "2. Extract the zip file in your public_html folder"
echo "3. Delete the zip file after extraction"
echo "4. Test your website at your domain"
echo ""
echo "📖 See HOSTINGER-READY-DEPLOYMENT.md for detailed instructions"
echo "✨ Your portfolio is ready for the world!"
