import Image from "next/image";
import GradientHero from "@/components/landing/ui/gradient-hero";
import LogoCloud from "@/components/landing/ui/logo-cloud";
import Testimonials from "@/components/landing/ui/testimonials-marquee";

export default function Home() {
  return (
    <div>        
        <GradientHero />
        <LogoCloud />
        <Testimonials />
    </div>
  );
}