"use client";

// import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Component as Hyperspeed } from '@/components/landing/ui-animations/hyperspeed';
import { Lightning } from '@/components/landing/ui-animations/lightning';

// Combined component for 404 page
export default function NotFoundPage() {
  return (
    <div className="w-full h-screen bg-background overflow-hidden flex justify-center items-center relative">
      {/* Background gradient matching your theme */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="from-primary/20 via-background to-background absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]" />
        <div className="bg-primary/5 absolute top-0 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-accent/10 absolute bottom-0 right-1/4 -z-10 h-[800px] w-[800px] rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 overflow-hidden" />
      
      <MessageDisplay />
      <CharactersAnimation />
      {/* <CircleAnimation /> */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <Hyperspeed 
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 300,
            roadWidth: 8,
            islandWidth: 1.5,
            lanesPerRoad: 3,
            fov: 80,
            fovSpeedUp: 120,
            speedUp: 1.5,
            carLightsFade: 0.6,
            totalSideLightSticks: 15,
            lightPairsPerRoadWay: 25,
            colors: {
              roadColor: 0x0a0a0a,
              islandColor: 0x0c0c0c,
              background: 0x000000,
              shoulderLines: 0x00ffff,
              brokenLines: 0x00ff44,
              leftCars: [0xff0066, 0xff3366, 0xff6600],
              rightCars: [0x00ccff, 0x0066ff, 0x6600ff],
              sticks: 0x00ffff,
            }
          }}
        />
      </div>
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <Lightning 
          hue={280}
          xOffset={0}
          speed={0.9}
          intensity={0.9}
          size={2}
          className="opacity-60"
        />
      </div>
    </div>
  );
}

// 1. Message Display Component
function MessageDisplay() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="absolute flex flex-col justify-center items-center w-[90%] h-[90%] z-[100]">
      <div 
        className={`flex flex-col items-center transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-[35px] font-semibold from-primary/20 via-foreground/90 to-accent/60 bg-gradient-to-br bg-clip-text text-transparent font-['FreeSet']">
          Page Not Found
        </div>
        <div className="text-[80px] font-bold from-primary/20 via-foreground/90 to-accent/60 bg-gradient-to-br bg-clip-text text-transparent m-[1%] font-['FreeSet']">
          404
        </div>
        <div className="text-[20px] w-1/2 min-w-[40%] text-center text-accent-foreground m-[1%] font-['Gilroy']">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </div>
        <div className="flex gap-6 mt-8">
          <Button
            onClick={handleGoBack}
            variant="outline"
            size="lg"
            className="border-border bg-background/50 flex items-center gap-2 rounded-full backdrop-blur-sm hover:bg-background/70 transition-all duration-300 group cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Go Back
          </Button>
          <Button
            onClick={handleGoHome}
            size="lg"
            className="group bg-primary text-primary-foreground hover:shadow-primary/30 relative overflow-hidden rounded-full px-8 shadow-lg transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10 flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </span>
            <span className="from-primary via-primary/90 to-primary/80 absolute inset-0 z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </Button>
        </div>
      </div>
    </div>
  );
}

// 2. Characters Animation Component
type StickFigure = {
  top?: string;
  bottom?: string;
  src: string;
  transform?: string;
  speedX: number;
  speedRotation?: number;
};

function CharactersAnimation() {
  const charactersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Define floating icons with their properties
    const stickFigures: StickFigure[] = [
      {
        top: '0%',
        // src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        src: '/icon-no-bg.png',
        transform: 'rotateZ(-90deg)',
        speedX: 1500,
      },
      {
        top: '10%',
        // src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick1.svg',
        src: '/icon-no-bg.png',
        speedX: 3000,
        speedRotation: 2000,
      },
      {
        top: '20%',
        // src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick2.svg',
        src: '/icon-no-bg.png',
        speedX: 5000,
        speedRotation: 1000,
      },
      {
        top: '25%',
        // src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        src: '/icon-no-bg.png',
        speedX: 2500,
        speedRotation: 1500,
      },
      {
        top: '35%',
        // src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        src: '/icon-no-bg.png',
        speedX: 2000,
        speedRotation: 300,
      },
      {
        top: '40%',
        src: '/icon-no-bg.png',
        speedX: 4500,
        speedRotation: 1800,
      },
      {
        top: '45%',
        src: '/icon-no-bg.png',
        speedX: 3500,
        speedRotation: 800,
      },
      {
        top: '50%',
        src: '/icon-no-bg.png',
        speedX: 2800,
        speedRotation: 1200,
      },
      {
        top: '55%',
        src: '/icon-no-bg.png',
        speedX: 4000,
        speedRotation: 600,
      },
      {
        top: '60%',
        src: '/icon-no-bg.png',
        speedX: 3200,
        speedRotation: 1600,
      },
      {
        top: '65%',
        src: '/icon-no-bg.png',
        speedX: 2200,
        speedRotation: 900,
      },
      {
        top: '70%',
        src: '/icon-no-bg.png',
        speedX: 3800,
        speedRotation: 1400,
      },
      {
        top: '75%',
        src: '/icon-no-bg.png',
        speedX: 2600,
        speedRotation: 700,
      },
      {
        top: '80%',
        src: '/icon-no-bg.png',
        speedX: 4200,
        speedRotation: 1100,
      },
      {
        top: '85%',
        src: '/icon-no-bg.png',
        speedX: 1800,
        speedRotation: 1300,
      },
      {
        bottom: '5%',
        // src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick3.svg',
        src: '/icon-no-bg.png',
        speedX: 0, // No horizontal movement
      },
    ];

    // Clear existing content
    if (charactersRef.current) {
      charactersRef.current.innerHTML = '';
    }

    // Create and animate each stick figure
    stickFigures.forEach((figure, index) => {
      const stick = document.createElement('img');
      stick.classList.add('characters');
      stick.style.position = 'absolute';
      stick.style.width = '60px';
      stick.style.height = '60px';
      stick.style.objectFit = 'contain';

      // Set position
      if (figure.top) stick.style.top = figure.top;
      if (figure.bottom) stick.style.bottom = figure.bottom;
      
      // Set image source
      stick.src = figure.src;
      
      // Set initial transform if specified
      if (figure.transform) stick.style.transform = figure.transform;

      // Append to the container
      charactersRef.current?.appendChild(stick);

      // Skip animation for the last figure (static one at bottom)
      if (index === stickFigures.length - 1) return;

      // Horizontal movement animation
      stick.animate(
        [{ left: '100%' }, { left: '-20%' }],
        { duration: figure.speedX, easing: 'linear', fill: 'forwards' }
      );

      // Skip rotation for the first figure (index 0)
      if (index === 0) return;

      // Rotation animation
      if (figure.speedRotation) {
        stick.animate(
          [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }],
          { duration: figure.speedRotation, iterations: Infinity, easing: 'linear' }
        );
      }
    });

    // Cleanup function
    return () => {
      if (charactersRef.current) {
        charactersRef.current.innerHTML = '';
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (charactersRef.current) {
        charactersRef.current.innerHTML = '';
        
        // Re-create animations after resize
        charactersRef.current.dispatchEvent(new Event('contentchanged'));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={charactersRef}
      className="absolute w-[99%] h-[95%]"
    />
  );
}

// 3. Circle Animation Component
interface Circulo {
  x: number;
  y: number;
  size: number;
}

function CircleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestIdRef = useRef<number | null>(null);
  const timerRef = useRef(0);
  const circulosRef = useRef<Circulo[]>([]);

  // Initialize circles array
  const initArr = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    circulosRef.current = [];
    
    for (let index = 0; index < 300; index++) {
      const randomX = Math.floor(
        Math.random() * ((canvas.width * 3) - (canvas.width * 1.2) + 1)
      ) + (canvas.width * 1.2);
      
      const randomY = Math.floor(
        Math.random() * ((canvas.height) - (canvas.height * (-0.2) + 1))
      ) + (canvas.height * (-0.2));
      
      const size = canvas.width / 1000;
      
      circulosRef.current.push({ x: randomX, y: randomY, size });
    }
  };

  // Drawing function
  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    timerRef.current++;
    context.setTransform(1, 0, 0, 1, 0, 0);
    
    const distanceX = canvas.width / 80;
    const growthRate = canvas.width / 1000;
    
    // Using a darker, more sophisticated color that matches your theme
    context.fillStyle = 'rgba(120, 20, 50, 0.25)'; // Darker maroon/burgundy with transparency
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    circulosRef.current.forEach((circulo) => {
      context.beginPath();
      
      if (timerRef.current < 65) {
        circulo.x = circulo.x - distanceX;
        circulo.size = circulo.size + growthRate;
      }
      
      if (timerRef.current > 65 && timerRef.current < 500) {
        circulo.x = circulo.x - (distanceX * 0.02);
        circulo.size = circulo.size + (growthRate * 0.2);
      }
      
      context.arc(circulo.x, circulo.y, circulo.size, 0, 360);
      context.fill();
    });
    
    if (timerRef.current > 500) {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      return;
    }
    
    requestIdRef.current = requestAnimationFrame(draw);
  };

  // Initialize canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Initialize and start animation
    timerRef.current = 0;
    initArr();
    draw();
    
    // Handle window resize
    const handleResize = () => {
      if (!canvas) return;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      timerRef.current = 0;
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
      
      const context = canvas.getContext('2d');
      if (context) {
        context.reset();
      }
      
      initArr();
      draw();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}