"use client";
import React, { useEffect, useRef } from 'react';

interface PotionBackgroundProps {
  // Particle configuration
  glitterCount?: {
    mobile?: number;
    desktop?: number;
  };
  sparkCount?: {
    mobile?: number;
    desktop?: number;
  };
  
  // Color configuration
  colors?: {
    gradient?: string[];
    glitterParticle?: {
      inner?: string;
      middle?: string;
      outer?: string;
    };
    sparkParticle?: {
      inner?: string;
      middle?: string;
      outer?: string;
    };
    highlights?: {
      primary?: string;
      secondary?: string;
      accent?: string;
    };
  };
  
  // Animation configuration
  animations?: {
    liquidShiftDuration?: number; // seconds
    surfaceRippleDuration?: number; // seconds
    shimmerSweepDuration?: number; // seconds
    particleFloatDuration?: {
      min?: number;
      max?: number;
    };
  };
  
  // Particle configuration
  particleConfig?: {
    glitterSize?: number; // px
    sparkSize?: number; // px
    opacity?: {
      min?: number;
      max?: number;
    };
  };
  
  // Feature toggles
  features?: {
    showGlitter?: boolean;
    showSparks?: boolean;
    showSurfaceHighlights?: boolean;
    showShimmer?: boolean;
  };
  
  // Custom CSS class
  className?: string;
}

export const PotionBackground: React.FC<PotionBackgroundProps> = ({
  glitterCount = { mobile: 250, desktop: 500 },
  sparkCount = { mobile: 200, desktop: 350 },
  colors = {},
  animations = {},
  particleConfig = {},
  features = {},
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Default color values
  const defaultColors = {
    gradient: [
      '#faf398', // 0%
      '#f9f295', // 15%
      '#e0aa3e', // 40%
      '#b88a44', // 70%
      '#8b6f47', // 100%
    ],
    glitterParticle: {
      inner: '#ffffff',
      middle: '#faf398',
      outer: '#e0aa3e',
    },
    sparkParticle: {
      inner: '#fff',
      middle: 'rgba(255, 255, 255, 0.9)',
      outer: 'rgba(224, 170, 62, 0.9)',
    },
    highlights: {
      primary: 'rgba(255, 255, 255, 0.1)',
      secondary: 'rgba(255, 255, 255, 0.15)',
      accent: 'rgba(212, 175, 55, 0.1)',
    },
  };

  // Merge user colors with defaults
  const finalColors = {
    gradient: colors.gradient || defaultColors.gradient,
    glitterParticle: { ...defaultColors.glitterParticle, ...colors.glitterParticle },
    sparkParticle: { ...defaultColors.sparkParticle, ...colors.sparkParticle },
    highlights: { ...defaultColors.highlights, ...colors.highlights },
  };

  // Default animation values
  const defaultAnimations = {
    liquidShiftDuration: 8,
    surfaceRippleDuration: 6,
    shimmerSweepDuration: 10,
    particleFloatDuration: { min: 3, max: 7 },
  };

  const finalAnimations = { ...defaultAnimations, ...animations };
  if (animations.particleFloatDuration) {
    finalAnimations.particleFloatDuration = { 
      ...defaultAnimations.particleFloatDuration, 
      ...animations.particleFloatDuration 
    };
  }

  // Default particle config
  const defaultParticleConfig = {
    glitterSize: 4,
    sparkSize: 2,
    opacity: { min: 0.5, max: 1.0 },
  };

  const finalParticleConfig = { ...defaultParticleConfig, ...particleConfig };
  finalParticleConfig.opacity = {
    ...defaultParticleConfig.opacity,
    ...(particleConfig.opacity || {}),
  };

  // Default features
  const defaultFeatures = {
    showGlitter: true,
    showSparks: true,
    showSurfaceHighlights: true,
    showShimmer: true,
  };

  const finalFeatures = { ...defaultFeatures, ...features };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = 
      typeof window !== 'undefined' && 
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const isMobile = 
      typeof window !== 'undefined' && 
      (window.matchMedia?.('(max-width: 768px)').matches || 
       ('ontouchstart' in window && navigator.maxTouchPoints > 0));

    const finalGlitterCount = isMobile ? glitterCount.mobile! : glitterCount.desktop!;
    const finalSparkCount = isMobile ? sparkCount.mobile! : sparkCount.desktop!;

    // Create glitter particles
    if (finalFeatures.showGlitter) {
      for (let i = 0; i < finalGlitterCount; i++) {
        const glitter = document.createElement('div');
        glitter.className = 'glitter-particle';
        glitter.style.cssText = `
          position: absolute;
          width: ${finalParticleConfig.glitterSize}px;
          height: ${finalParticleConfig.glitterSize}px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, ${finalColors.glitterParticle.inner} 0%, ${finalColors.glitterParticle.middle} 40%, ${finalColors.glitterParticle.outer} 100%);
          box-shadow: 0 0 8px rgba(224, 170, 62, 0.8);
          pointer-events: none;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: floatUp ${(finalAnimations.particleFloatDuration.min ?? 3) + Math.random() * ((finalAnimations.particleFloatDuration.max ?? 7) - (finalAnimations.particleFloatDuration.min ?? 3))}s ease-in-out infinite;
          animation-delay: ${Math.random() * 5}s;
          opacity: ${(finalParticleConfig.opacity.min ?? 0.5) + Math.random() * ((finalParticleConfig.opacity.max ?? 1.0) - (finalParticleConfig.opacity.min ?? 0.5))};
          z-index: 1;
        `;
        container.appendChild(glitter);
      }
    }

    // Create spark particles
    if (finalFeatures.showSparks) {
      for (let i = 0; i < finalSparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark-particle';
        spark.style.cssText = `
          position: absolute;
          width: ${finalParticleConfig.sparkSize}px;
          height: ${finalParticleConfig.sparkSize}px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, ${finalColors.sparkParticle.inner} 0%, ${finalColors.sparkParticle.middle} 50%, ${finalColors.sparkParticle.outer} 100%);
          box-shadow: 0 0 6px rgba(224, 170, 62, 0.7);
          pointer-events: none;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: sparkleFloat ${(finalAnimations.particleFloatDuration.min ?? 3) - 0.5 + Math.random() * ((finalAnimations.particleFloatDuration.max ?? 7) - (finalAnimations.particleFloatDuration.min ?? 3))}s ease-in-out infinite;
          animation-delay: ${Math.random() * 4}s;
          opacity: ${(finalParticleConfig.opacity.min ?? 0.5) + Math.random() * ((finalParticleConfig.opacity.max ?? 1.0) - (finalParticleConfig.opacity.min ?? 0.5))};
          z-index: 1;
        `;
        container.appendChild(spark);
      }
    }

    // Cleanup function
    return () => {
      const particles = container.querySelectorAll('.glitter-particle, .spark-particle');
      particles.forEach(particle => particle.remove());
    };
  }, [glitterCount, sparkCount, finalColors, finalAnimations, finalParticleConfig, finalFeatures]);

  const gradientBackground = `linear-gradient(180deg, ${finalColors.gradient.map((color, index) => {
    const stops = [0, 15, 40, 70, 100];
    return `${color} ${stops[index] || index * 25}%`;
  }).join(', ')})`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        background: `
          ${gradientBackground},
          radial-gradient(ellipse at 30% 20%, ${finalColors.highlights.primary} 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, rgba(224, 170, 62, 0.2) 0%, transparent 40%)
        `,
        backgroundSize: '100% 100%, 200% 200%, 300% 300%',
        animation: `liquidShift ${finalAnimations.liquidShiftDuration}s ease-in-out infinite`,
      }}
    >
      {/* Liquid surface highlights */}
      {finalFeatures.showSurfaceHighlights && (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 30% at 20% 30%, ${finalColors.highlights.secondary} 0%, transparent 70%),
              radial-gradient(ellipse 40% 20% at 80% 60%, ${finalColors.highlights.primary} 0%, transparent 60%),
              radial-gradient(ellipse 70% 40% at 50% 20%, ${finalColors.highlights.accent} 0%, transparent 50%)
            `,
            animation: `surfaceRipple ${finalAnimations.surfaceRippleDuration}s ease-in-out infinite`,
            opacity: 0.8,
          }}
        />
      )}

      {/* Subtle shimmer overlay */}
      {finalFeatures.showShimmer && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              45deg,
              transparent 40%,
              rgba(255, 255, 255, 0.05) 50%,
              transparent 60%
            )`,
            backgroundSize: '200% 200%',
            animation: `shimmerSweep ${finalAnimations.shimmerSweepDuration}s ease-in-out infinite`,
            opacity: 0.6,
          }}
        />
      )}

      <style jsx>{`
        @keyframes liquidShift {
          0%, 100% {
            background-position: 0% 0%, 0% 0%, 0% 0%;
          }
          33% {
            background-position: 0% 0%, 20% 30%, 30% 20%;
          }
          66% {
            background-position: 0% 0%, -10% 50%, 50% 60%;
          }
        }

        @keyframes surfaceRipple {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.8;
          }
          25% {
            transform: scale(1.02) translate(2%, -1%);
            opacity: 0.6;
          }
          50% {
            transform: scale(0.98) translate(-1%, 2%);
            opacity: 0.9;
          }
          75% {
            transform: scale(1.01) translate(-2%, -1%);
            opacity: 0.7;
          }
        }

        @keyframes shimmerSweep {
          0% {
            background-position: -200% -200%;
          }
          50% {
            background-position: 200% 200%;
          }
          100% {
            background-position: -200% -200%;
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes sparkleFloat {
          0% {
            transform: translateY(0px) rotate(0deg) scale(0.6);
            opacity: 0.5;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(180deg) scale(1);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};