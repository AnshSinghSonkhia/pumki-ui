"use client"

import { useState } from "react"
import Link from "next/link"
import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Github } from "lucide-react"

// Navigation links array to be used in both desktop and mobile menus
// const navigationLinks = [
//   { href: "#", label: "Home", active: true },
//   { href: "#", label: "Features" },
//   { href: "#", label: "Pricing" },
//   { href: "#", label: "About" },
// ]

const navigationLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/docs", label: "Components" },
  { href: "/about", label: "About" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50 border-b px-4 md:px-6">
      <div className="flex h-16 justify-between gap-4">
        {/* Left side */}
        <div className="flex gap-2">
          <div className="flex items-center md:hidden">
            {/* Mobile menu trigger */}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button 
                  className="group size-8" 
                  variant="ghost" 
                  size="icon"
                  onClick={() => console.log('Hamburger clicked', !open)}
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="z-50 w-64 p-4 md:hidden">
                <nav className="space-y-2">
                  {navigationLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block w-full rounded-md py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </PopoverContent>
            </Popover>
          </div>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 cursor-pointer">
              <img src="/icon-no-bg.png" alt="Pumki UI Logo" className="h-8 w-8 cursor-pointer" />
              {/* <span className="font-bold text-xl tracking-tight text-white cursor-pointer">Pumki UI</span> */}
              <span className="from-primary/10 via-foreground/85 to-foreground/50 bg-gradient-to-tl bg-clip-text text-2xl tracking-tight font-bold text-balance text-transparent cursor-pointer pt-1">Pumki UI</span>
            </Link>
            {/* Navigation menu */}
            <NavigationMenu className="h-full *:h-full max-md:hidden">
              <NavigationMenuList className="h-full gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index} className="h-full">
                    <NavigationMenuLink
                      asChild
                      className="text-muted-foreground hover:text-primary border-b-primary hover:border-b-primary data-[active]:border-b-primary h-full justify-center rounded-none border-y-2 border-transparent py-1.5 font-medium hover:bg-transparent data-[active]:bg-transparent!"
                    >
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* <Button asChild variant="ghost" size="sm" className="text-sm">
            <a href="#">Sign In</a>
          </Button> */}
          {/* <Button
            variant="rainbow"
            size="sm"
            className="group hover:shadow-primary/30 relative overflow-hidden rounded-full px-6 shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </span>
          </Button> */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm cursor-pointer"
          >
            <a
              href="https://github.com/AnshSinghSonkhia/pumki-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Star on GitHub
            </a>
          </Button>
          {/* <Button asChild size="sm" className="text-sm">
            <a href="#">GitHub</a>
          </Button> */}
        </div>
      </div>
    </header>
  )
}
