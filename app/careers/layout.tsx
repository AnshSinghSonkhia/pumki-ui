import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Pumki UI',
  description: "Join our 100% remote team and help build the next generation of React UI components. We're looking for talented individuals to shape the future of web development.",
  keywords: [
    'careers',
    'jobs',
    'remote work',
    'React developer',
    'UI designer',
    'frontend engineer',
    'product designer',
    'engineering manager',
    'customer success',
    'sales',
    'marketing',
    'Pumki UI careers'
  ],
  openGraph: {
    title: 'Careers - Pumki UI',
    description: "Join our 100% remote team and help build the next generation of React UI components.",
    type: 'website',
    url: 'https://pumki-ui.vercel.app/careers',
    images: [
      {
        url: '/og_careers.png',
        width: 1200,
        height: 630,
        alt: 'Pumki UI Careers - Join our remote team',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Pumki UI',
    description: "Join our 100% remote team and help build the next generation of React UI components.",
    images: ['/og_careers.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
