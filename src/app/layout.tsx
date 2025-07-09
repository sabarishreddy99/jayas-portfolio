import type { Metadata } from 'next'
import { Inter, Allura, Great_Vibes, Dancing_Script } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })
const allura = Allura({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allura'
})
const greatVibes = Great_Vibes({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes'
})
const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script'
})

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
        url: "/sabari-avtar-portfolio.jpg",
        sizes: "32x32",
        type: "image/jpg",
      },
      {
        url: "/sabari-avtar-portfolio.jpg",
        sizes: "16x16",
        type: "image/jpg",
      },
    ],
    apple: [
      {
        url: "/sabari-avtar-portfolio.jpg",
        sizes: "180x180",
        type: "image/jpg",
      },
    ],
    shortcut: "/sabari-avtar-portfolio.jpg",
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
        <link rel="icon" href="/sabari-avtar-portfolio.jpg" sizes="32x32" type="image/jpg" />
        <link rel="apple-touch-icon" href="/sabari-avtar-portfolio.jpg" sizes="180x180" type="image/jpg" />
      </head>
      <body className={`${inter.className} ${allura.variable} ${greatVibes.variable} ${dancingScript.variable}`}>
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