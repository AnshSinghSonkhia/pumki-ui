import type { Metadata } from 'next'

interface PageMetadataProps {
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  image?: string
}

const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://pumki-ui.vercel.app'
  : 'http://localhost:3000'

export function generatePageMetadata({
  title = 'Pumki UI',
  description = 'A beautiful React component library with FreeSet typography. Build modern web applications with our comprehensive collection of customizable UI components.',
  path = '',
  keywords = [],
  image = '/og_root.png'
}: PageMetadataProps = {}): Metadata {
  const fullTitle = title === 'Pumki UI' 
    ? 'Pumki UI - Ship stunning UIs from one library, not ten.'
    : `${title} - Pumki UI`
  
  const url = `${baseUrl}${path}`
  const imageUrl = `${baseUrl}${image}`
  
  const defaultKeywords = [
    'React',
    'UI components', 
    'component library',
    'TypeScript',
    'Tailwind CSS',
    'FreeSet typography',
    'design system',
    'web development',
    'frontend',
    'Next.js'
  ]
  
  const allKeywords = [...defaultKeywords, ...keywords]

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: "Ansh Singh Sonkhia", url: "https://github.com/AnshSinghSonkhia" }],
    creator: "Ansh Singh Sonkhia",
    publisher: "Pumki UI",
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
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'Pumki UI',
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Pumki UI`,
          type: 'image/png',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@PumkiUI',
      creator: '@AnshSinghSonkhia',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    category: 'technology',
  }
}

// Helper function specifically for docs pages
export function generateDocsMetadata({
  title,
  description,
  path,
  keywords = []
}: Omit<PageMetadataProps, 'image'> & { title: string; path: string }): Metadata {
  return generatePageMetadata({
    title,
    description,
    path,
    keywords,
    image: '/og_docs.png'
  })
}

// Helper function for 404 and error pages
export function generate404Metadata(): Metadata {
  return generatePageMetadata({
    title: '404 - Page Not Found',
    description: 'The page you are looking for could not be found. Return to Pumki UI to explore our beautiful React components.',
    path: '/404',
    keywords: ['404', 'not found', 'error'],
    image: '/og_root.png'
  })
}

// Predefined metadata for common pages
export const pageMetadata = {
  home: generatePageMetadata({
    image: '/og_root.png'
  }),
  
  gettingStarted: generatePageMetadata({
    title: 'Getting Started',
    description: 'Learn how to get started with Pumki UI component library. Quick setup guide and basic usage examples.',
    path: '/docs/getting-started',
    keywords: ['getting started', 'setup', 'installation', 'quick start'],
    image: '/og_docs.png'
  }),
  
  installation: generatePageMetadata({
    title: 'Installation',
    description: 'Install Pumki UI in your React project. NPM, Yarn, and CDN installation methods.',
    path: '/docs/installation',
    keywords: ['installation', 'npm', 'yarn', 'setup', 'package manager'],
    image: '/og_docs.png'
  }),
  
  cli: generatePageMetadata({
    title: 'CLI Tools',
    description: 'Use Pumki UI CLI tools to add components to your project quickly and efficiently.',
    path: '/docs/cli',
    keywords: ['CLI', 'command line', 'tools', 'add components'],
    image: '/og_docs.png'
  }),
  
  components: generatePageMetadata({
    title: 'Components',
    description: 'Explore all available Pumki UI components. Buttons, inputs, modals, and more.',
    path: '/docs/components',
    keywords: ['components', 'UI elements', 'buttons', 'inputs', 'modals'],
    image: '/og_docs.png'
  }),
  
  about: generatePageMetadata({
    title: 'About',
    description: 'Learn more about Pumki UI, our mission, and the team behind this beautiful component library.',
    path: '/about',
    keywords: ['about', 'team', 'mission', 'story'],
    image: '/og_about.png'
  })
}
