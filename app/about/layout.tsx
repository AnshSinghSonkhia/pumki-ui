import Footer from "@/components/layout/Footer";

import { Metadata } from "next";

export const metadata:Metadata = {
    title: "About - Pumki UI",
    description: "Learn more about Pumki UI and its features.",
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <Navbar /> */}
            <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black">
                {children}
            </main>
            <Footer />
        </>
    );
}