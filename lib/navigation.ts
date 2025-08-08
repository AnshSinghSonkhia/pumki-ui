import { NavLink } from '@/components/landing/ui/DynamicNavbar'

// Navigation configurations for different pages
export const navigationConfigs = {
  // For home/root page (/)
  home: [
    { href: "/docs", label: "Docs" },
    { href: "/docs/components", label: "Components" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
  ] as NavLink[],

  // For about page (/about)
  about: [
    { href: "/docs", label: "Docs" },
    { href: "/docs/components", label: "Components" },
    { href: "/careers", label: "Careers" },
  ] as NavLink[],

  // For careers page (/careers)
  careers: [
    { href: "/docs", label: "Docs" },
    { href: "/docs/components", label: "Components" },
    { href: "/about", label: "About" },
  ] as NavLink[],

  // For docs page (/docs)
  docs: [
    { href: "/docs/components", label: "Components" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
  ] as NavLink[],
}

// Helper function to get navigation config by page
export function getNavigationConfig(page: keyof typeof navigationConfigs): NavLink[] {
  return navigationConfigs[page] || navigationConfigs.home
}

// Alternative approach: Create custom navigation
export function createNavigation(links: { href: string; label: string; active?: boolean }[]): NavLink[] {
  return links.map(link => ({
    href: link.href,
    label: link.label,
    active: link.active || false
  }))
}
