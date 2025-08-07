
import type { Metadata } from "next";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import { ForceTheme } from "@/components/ForceTheme";

export const metadata: Metadata = {
  title: "Pumki UI - Ship stunning UIs from one library, not ten.",
  description: "Ship stunning UIs from one library, not ten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Force dark theme before any other scripts run
                (function() {
                  const html = document.documentElement;
                  html.classList.add('dark');
                  html.setAttribute('data-theme', 'dark');
                  html.style.colorScheme = 'dark';
                  
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
    </ViewTransitions>
  );
}
