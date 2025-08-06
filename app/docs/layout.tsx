import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../globals.css'

const banner = <Banner storageKey="pumki-ui-docs">Welcome to Pumki UI Documentation 🎉</Banner>
const navbar = (
  <Navbar
    logo={<span className="font-bold text-lg" style={{ fontFamily: 'FreeSet' }}>Pumki UI</span>}
    // ... Your additional navbar options
  />
)
const footer = <Footer><span style={{ fontFamily: 'FreeSet' }}>2025 © Pumki UI.</span></Footer>

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout
      banner={banner}
      navbar={navbar}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/AnshSinghSonkhia/pumki-ui/tree/main/docs"
      footer={footer}
      // ... Your additional layout options
    >
      {children}
    </Layout>
  )
}
