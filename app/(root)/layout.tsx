import Footer from "@/components/layout/Footer";
import { generatePageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
    title: "Pumki UI",
    description: "Ship stunning UIs from one library, not ten.",
    image: "/og_root.png"
});

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <Header /> */}
            <main className="relative w-full pt-0 md:pt-0 bg-white dark:bg-black">
                {children}
            </main>
            <Footer />
        </>
    );
}