import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Pumki UI - Ship stunning UIs from one library, not ten.",
    description: "Ship stunning UIs from one library, not ten.",
}

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