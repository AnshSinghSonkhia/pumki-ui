
import type { Metadata } from "next";
import "./globals.css";
import { ForceTheme } from "@/components/ForceTheme";

export const metadata: Metadata = {
  metadataBase: new URL('https://pumki-ui.vercel.app'),
  title: "Pumki UI - Ship stunning UIs from one library, not ten.",
  description: "A beautiful React component library with FreeSet typography. Build modern web applications with our comprehensive collection of customizable UI components.",
  keywords: [
    "React",
    "UI components", 
    "component library",
    "TypeScript",
    "Tailwind CSS",
    "FreeSet typography",
    "design system",
    "web development",
    "frontend",
    "Next.js"
  ],
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
    url: 'https://pumki-ui.vercel.app',
    siteName: 'Pumki UI',
    title: 'Pumki UI - Ship stunning UIs from one library, not ten.',
    description: 'A beautiful React component library with FreeSet typography. Build modern web applications with our comprehensive collection of customizable UI components.',
    images: [
      {
        url: '/og_root.png',
        width: 1200,
        height: 630,
        alt: 'Pumki UI - React Component Library',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PumkiUI',
    creator: '@AnshSinghSonkhia',
    title: 'Pumki UI - Ship stunning UIs from one library, not ten.',
    description: 'A beautiful React component library with FreeSet typography. Build modern web applications with our comprehensive collection of customizable UI components.',
    images: ['/og_root.png'],
  },
  alternates: {
    canonical: 'https://pumki-ui.vercel.app',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
        <head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#350136" />
          <meta name="msapplication-TileColor" content="#350136" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icon-no-bg.png" />
          <link rel="manifest" href="/manifest.json" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Force dark theme before any other scripts run
                (function() {
                  const html = document.documentElement;
                  html.classList.add('dark');
                  html.setAttribute('data-theme', 'dark');
                  
                  // Override localStorage theme settings
                  try {
                    localStorage.setItem('theme', 'dark');
                    localStorage.setItem('nextra-theme', 'dark');
                  } catch (e) {
                    // localStorage might not be available
                  }
                })();
              `
            }}
          />
        </head>
        <body className="antialiased dark">
          <ForceTheme />
          {children}
        </body>
      </html>
  );
}
