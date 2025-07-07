// Utility function to handle GitHub Pages basePath for images
export const getImagePath = (path: string): string => {
  // Get the basePath from environment or use default
  const basePath = process.env.NODE_ENV === 'production' ? '/jayas-portfolio' : ''
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  return `${basePath}${normalizedPath}`
}

// Alternative: You can also use Next.js's basePath directly if available
export const getAssetPath = (path: string): string => {
  if (typeof window !== 'undefined') {
    // Client-side: use the current origin
    return path
  }
  
  // Server-side: use basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/jayas-portfolio' : ''
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
