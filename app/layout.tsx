import type { Metadata } from "next";
import "./globals.css";

import { ViewTransitions } from "next-view-transitions";

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
        <html lang="en" className="dark">
        <body
            className="antialiased"
        >
            {children}
        </body>
        </html>
    </ViewTransitions>
  );
}
