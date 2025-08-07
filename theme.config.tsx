import Image from "next/image";
import Link from "next/link";
import { DocsContributors } from "./components/DocsContributors";

export default {
  logo: <span style={{ fontFamily: 'FreeSet', fontWeight: 700 }}>Pumki UI</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Pumki UI" />
      <meta property="og:description" content="Beautiful React component library with FreeSet typography" />
      <link rel="icon" href="/icon-no-bg.png" />
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
