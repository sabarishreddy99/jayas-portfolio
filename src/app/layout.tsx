import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sabarishreddyrj.gradevitian.in'),
  title: 'Jaya\'s Minikube Portfolio',
  description: 'Passionate software engineer who transforms complex challenges into user-friendly solutions. From helping researchers collaborate globally to optimizing systems for 10K+ users - I build technology that makes a difference.',
  keywords: [
    'Software Engineer',
    'DevOps Engineer',
    'Full Stack Developer',
    'Kubernetes',
    'Docker',
    'AWS',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'Cloud Computing',
    'CI/CD',
    'Microservices'
  ],
  authors: [{ name: 'Jaya Sabarish Reddy Remala' }],
  creator: 'Jaya Sabarish Reddy Remala',
  publisher: 'Jaya Sabarish Reddy Remala',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sabarishreddyrj.gradevitian.in',
    title: 'Jaya Sabarish Reddy Remala | SDE',
    description: 'Software Engineer specializing in cloud infrastructure, DevOps, and full-stack development.',
    siteName: 'Jaya Sabarish Reddy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaya Sabarish Reddy Remala | SDE',
    description: 'Software Engineer specializing in cloud infrastructure, DevOps, and full-stack development.',
    creator: '@jayasabarish',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'EVJ7Uf8Cd4Efj1j4GeIQES9JcFm3EyGs0_oJczOaKhc',
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='20' fill='url(%23grad)'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='40' font-weight='bold' text-anchor='middle' dominant-baseline='central' fill='white'%3EJR%3C/text%3E%3C/svg%3E",
        sizes: "32x32",
        type: "image/svg+xml",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='20' fill='url(%23grad)'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='40' font-weight='bold' text-anchor='middle' dominant-baseline='central' fill='white'%3EJR%3C/text%3E%3C/svg%3E",
        sizes: "16x16",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='20' fill='url(%23grad)'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='40' font-weight='bold' text-anchor='middle' dominant-baseline='central' fill='white'%3EJR%3C/text%3E%3C/svg%3E",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='20' fill='url(%23grad)'/%3E%3Ctext x='50' y='50' font-family='Arial, sans-serif' font-size='40' font-weight='bold' text-anchor='middle' dominant-baseline='central' fill='white'%3EJR%3C/text%3E%3C/svg%3E" sizes="32x32" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}