import Image from "next/image";
import GradientHero from "@/components/mvpblocks/gradient-hero";
import LogoCloud from "@/components/landing/logo-cloud";
// import TestimonialsDemo from "@/components/landing/testimonials-demo";

export default function Home() {
  return (
    <div>        
        <GradientHero />
        <LogoCloud />
        {/* <TestimonialsDemo /> */}
    </div>
  );
}