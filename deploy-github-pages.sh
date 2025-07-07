#!/bin/bash

# 🚀 GitHub Pages Deployment Script
# This script prepares and deploys your portfolio to GitHub Pages

echo "🚀 Starting GitHub Pages Deployment..."
echo "====================================="

# Navigate to project directory
cd "$(dirname "$0")"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing git repository..."
    git init
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No GitHub remote found!"
    echo "Please set up your GitHub repository first:"
    echo "1. Create a repository named 'jayas-portfolio' on GitHub"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/jayas-portfolio.git"
    echo "3. Run this script again"
    exit 1
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf out

# Build the project for GitHub Pages
echo "🔨 Building project for GitHub Pages..."
NODE_ENV=production npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi

# Add .nojekyll file
echo "📝 Adding .nojekyll file..."
touch out/.nojekyll

# Add and commit all changes
echo "📝 Committing changes..."
git add .
git commit -m "Deploy to GitHub Pages: $(date)"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Failed to push to GitHub. Please check your credentials."
    exit 1
fi

echo ""
echo "🎉 DEPLOYMENT INITIATED!"
echo "====================================="
echo "📋 What happens next:"
echo "1. GitHub Actions will automatically build and deploy your site"
echo "2. Check the 'Actions' tab in your repository for progress"
echo "3. Your site will be live at: https://YOUR_USERNAME.github.io/jayas-portfolio"
echo "4. Custom domain (if configured): https://sabarishreddyrj.gradevitian.in"
echo ""
echo "⏱️  Deployment usually takes 2-5 minutes"
echo "✨ Your portfolio will be live soon!"
