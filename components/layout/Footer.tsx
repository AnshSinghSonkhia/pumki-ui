"use client"
import React, { useEffect, useRef, useState } from "react";
import { StickyArrow } from "@/components/landing/ui-animations/sticky-arrow";
import ClickSpark from "../landing/ui/ClickSpark";

const Footer = () => {
  const waveRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  useEffect(() => {
    let t = 0;
    const animateWave = () => {
      waveRefs.current.forEach((el, index) => {
        if (el) {
          const offset = Math.max(0, 20 * Math.sin((t + index) * 0.3));
          el.style.transform = `translateY(${index + offset}px)`;
        }
      });
      t += 0.1;
      animationFrameRef.current = requestAnimationFrame(animateWave);
    };

    if (isVisible) {
      animateWave();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white relative flex flex-col w-full h-full justify-between lg:h-screen select-none"
      data-sticky-arrow-container-footer
    >
        {/* Not for Mobile & Small screens */}
      <div className="hidden md:block w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between w-full gap-4 pb-24 pt-8">
        <div className="space-y-2">
          <ul className="flex flex-wrap gap-4">
            <li><a href="/showcase" className="text-sm hover:text-pink-400">Showcase</a></li>
            <li><a href="/sponsors" className="text-sm hover:text-pink-400">Sponsors</a></li>
          </ul>
          
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400 flex items-center gap-x-1">
            <svg className="size-3" viewBox="0 0 80 80">
              <path fill="currentColor" d="M67.4307 11.5693C52.005...Z" />
            </svg>
                2025 © PumkiUI
          </p>
        </div>
        <div className="space-y-4">
          <ul className="flex flex-wrap gap-4">
            <li><a href="/careers" className="text-sm hover:text-pink-400">Careers</a></li>
            <li><a href="/about" className="text-sm hover:text-pink-400">About</a></li>
            <li><a href="/help" className="text-sm hover:text-pink-400">Help Center</a></li>
          </ul>
          <div className="text-right mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
                A project by
                <a
                  href="https://www.linkedin.com/in/anshsinghsonkhia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-pink-400 transition-colors"
                  data-sticky-arrow-target-footer
                >
                  <span> </span> <span className="underline">Ansh Singh Sonkhia</span>
                </a>
            </p>
          </div>
        </div>
      </div>
      </div>

        {/* for Mobile & Small screens */}
      <div className="block md:hidden w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4 pb-24 pt-8">
          {/* Row 1: Showcase Sponsors */}
          <div className="flex gap-6">
            <a href="/showcase" className="text-sm hover:text-pink-400">Showcase</a>
            <a href="/sponsors" className="text-sm hover:text-pink-400">Sponsors</a>
          </div>
          
          {/* Row 2: Careers About Help Center */}
          <div className="flex gap-6">
            <a href="/careers" className="text-sm hover:text-pink-400">Careers</a>
            <a href="/about" className="text-sm hover:text-pink-400">About</a>
            <a href="/help" className="text-sm hover:text-pink-400">Help Center</a>
          </div>
          
          {/* Funny divider */}
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-xs">🎃</span>
            <span className="text-xs">·</span>
            <span className="text-xs">💻</span>
            <span className="text-xs">·</span>
            <span className="text-xs">✨</span>
          </div>
          
          {/* Row 3: @ 2025 PumkiUI */}
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-x-1">
            {/* <svg className="size-3" viewBox="0 0 80 80">
              <path fill="currentColor" d="M67.4307 11.5693C52.005...Z" />
            </svg> */}
            2025 © PumkiUI
          </p>
          
          {/* Row 4: A project by... */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A project by
            <a
              href="https://www.linkedin.com/in/anshsinghsonkhia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-pink-400 transition-colors"
              data-sticky-arrow-target-footer
            >
              <span> </span> <span className="underline">Ansh Singh Sonkhia</span>
            </a>
          </p>
      </div>
      </div>
      


    <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
    >
      <div className="w-full flex mt-4 items-center justify-center px-4">
        <h1 className="text-center text-3xl md:text-5xl lg:text-[8rem] xl:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none max-w-7xl">
          Pumki UI
        </h1>
      </div>
</ClickSpark>
      <div id="waveContainer" aria-hidden="true" style={{ overflow: "hidden", height: 200 }}>
        <div>
          {Array.from({ length: 23 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => { waveRefs.current[i] = el; }}
              className="wave-segment"
              style={{
                height: `${i + 1}px`,
                backgroundColor: "white",
                transition: "transform 0.1s ease",
                willChange: "transform",
                marginTop: "-2px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Sticky Arrow Animation for Footer */}
      <StickyArrow 
        targetSelector="[data-sticky-arrow-target-footer]"
        containerSelector="[data-sticky-arrow-container-footer]"
        arrowColor="rgb(244, 114, 182)" // pink-400
      />
    </footer>
  );
};

export default Footer;
