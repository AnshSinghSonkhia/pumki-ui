import Image from "next/image";
import Link from "next/link";
import { DocsContributors } from "./components/DocsContributors";

export default {
  logo: <span style={{ fontFamily: 'FreeSet', fontWeight: 700 }}>Pumki UI</span>,
  // Force dark theme - disable theme switching
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark'
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="A beautiful React component library with FreeSet typography. Build modern web applications with our comprehensive collection of customizable UI components." />
      <meta name="keywords" content="React, UI components, component library, TypeScript, Tailwind CSS, FreeSet typography, design system, web development, frontend, Next.js" />
      <meta name="author" content="Ansh Singh Sonkhia" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://pumki-ui.vercel.app/" />
      <meta property="og:title" content="Pumki UI - Ship stunning UIs from one library, not ten." />
      <meta property="og:description" content="A beautiful React component library with FreeSet typography. Build modern web applications with our comprehensive collection of customizable UI components." />
      <meta property="og:image" content="https://pumki-ui.vercel.app/og_docs.png" />
      <meta property="og:site_name" content="Pumki UI" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://pumki-ui.vercel.app/" />
      <meta name="twitter:title" content="Pumki UI - Ship stunning UIs from one library, not ten." />
      <meta name="twitter:description" content="A beautiful React component library with FreeSet typography. Build modern web applications with our comprehensive collection of customizable UI components." />
      <meta name="twitter:image" content="https://pumki-ui.vercel.app/og_docs.png" />
      <meta name="twitter:creator" content="@AnshSinghSonkhia" />
      <meta name="twitter:site" content="@PumkiUI" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <meta name="theme-color" content="#350136" />
      <meta name="msapplication-TileColor" content="#350136" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://pumki-ui.vercel.app/" />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon-no-bg.png" />
      <link rel="apple-touch-icon" href="/icon-no-bg.png" />
      
      {/* Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Pumki UI",
            "description": "A beautiful React component library with FreeSet typography. Build modern web applications with our comprehensive collection of customizable UI components.",
            "url": "https://pumki-ui.vercel.app",
            "author": {
              "@type": "Person",
              "name": "Ansh Singh Sonkhia",
              "url": "https://github.com/AnshSinghSonkhia"
            },
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web Browser",
            "programmingLanguage": ["JavaScript", "TypeScript", "React"],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
      
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Force dark theme immediately
            (function() {
              document.documentElement.classList.add('dark');
              document.documentElement.setAttribute('data-theme', 'dark');
              localStorage.setItem('theme', 'dark');
              localStorage.setItem('nextra-theme', 'dark');
            })();
            
            // Add badges to navigation items
            function addNavigationBadges() {
              const sidebarLinks = document.querySelectorAll('.nextra-sidebar a, .nextra-sidebar span');
              sidebarLinks.forEach(link => {
                const text = link.textContent;
                if (text && text.includes('[') && text.includes(']')) {
                  const match = text.match(/^(.+?)\\s*\\[(\\d+)\\]$/);
                  if (match) {
                    const [, title, number] = match;
                    link.innerHTML = \`
                      <span style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                        <span>\${title}</span>
                        <span style="
                          background-color: #3b82f6; 
                          color: white; 
                          font-size: 0.75rem; 
                          font-weight: 600;
                          padding: 2px 6px; 
                          border-radius: 9999px;
                          margin-left: 8px;
                          min-width: 20px;
                          text-align: center;
                        ">\${number}</span>
                      </span>
                    \`;
                  }
                }
              });
            }
            
            // Run after DOM is loaded
            document.addEventListener('DOMContentLoaded', addNavigationBadges);
            // Also run after navigation changes
            setTimeout(addNavigationBadges, 1000);
          `
        }}
      />
      <style jsx global>{`
        /* Override Nextra's default typography to use FreeSet */
        .nextra-content {
          font-family: 'FreeSet', 'Gilroy', sans-serif !important;
        }
        
        .nextra-nav-container {
          font-family: 'FreeSet', 'Gilroy', sans-serif !important;
        }
        
        .nextra-sidebar {
          font-family: 'FreeSet', 'Gilroy', sans-serif !important;
        }
        
        /* Headings with FreeSet font */
        h1, h2, h3, h4, h5, h6,
        .nextra-content h1,
        .nextra-content h2,
        .nextra-content h3,
        .nextra-content h4,
        .nextra-content h5,
        .nextra-content h6 {
          font-family: 'FreeSet', 'Gilroy', sans-serif !important;
          font-weight: 700;
        }
        
        /* Body text */
        .nextra-content p,
        .nextra-content li,
        .nextra-content code {
          font-family: 'FreeSet', 'Gilroy', sans-serif !important;
        }
        
        /* Table of contents */
        .nextra-toc {
          font-family: 'FreeSet', 'Gilroy', sans-serif !important;
        }
      `}</style>
    </>
  ),
  project: {
    link: 'https://github.com/AnshSinghSonkhia/pumki-ui'
  },
  docsRepositoryBase: 'https://github.com/AnshSinghSonkhia/pumki-ui/tree/main/app/docs',
  footer: {
    text: <span style={{ fontFamily: 'FreeSet' }}>2025 © Pumki UI.</span>
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question??  Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }: { title: string; type: string }) {
      if (type === 'separator') {
        return (
          <span 
            className="cursor-default" 
            style={{ 
              fontFamily: 'FreeSet', 
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontSize: '0.75rem'
            }}
          >
            {title}
          </span>
        )
      }
      return <span style={{ fontFamily: 'FreeSet' }}>{title}</span>
    }
  },
  toc: {
    backToTop: true,
    extraContent: <DocsContributors />,
  }
}
