import Image from "next/image";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import LogoCloud from "@/components/landing/logo-cloud";
import Testimonials from "@/components/mvpblocks/testimonials-marquee";

export default function Home() {
  return (
    <div>        
        <GradientHero />
        <LogoCloud />
        <Testimonials />
    </div>
  );
}