"use client"

import React, { useEffect, useRef, useCallback } from 'react';

// Helper to parse 'rgb(r, g, b)' or 'rgba(r, g, b, a)' string to {r, g, b}
const parseRgbColor = (colorString: string) => {
  if (!colorString) return null;
  const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  if (match) {
    return {
      r: parseInt(match[1], 10),
      g: parseInt(match[2], 10),
      b: parseInt(match[3], 10),
    };
  }
  return null;
};

interface StickyArrowProps {
  targetSelector?: string;
  className?: string;
  containerSelector?: string; // Container to constrain the arrow within
  arrowColor?: string; // Custom arrow color
}

const StickyArrow: React.FC<StickyArrowProps> = ({ 
  targetSelector = '[data-sticky-arrow-target]',
  className = '',
  containerSelector = '[data-sticky-arrow-container]',
  arrowColor
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef({ x: null as number | null, y: null as number | null });
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const resolvedCanvasColorsRef = useRef({
    strokeStyle: { r: 128, g: 128, b: 128 }, // Default mid-gray
  });

  useEffect(() => {
    const tempElement = document.createElement('div');
    tempElement.style.display = 'none';
    document.body.appendChild(tempElement);

    const updateResolvedColors = () => {
      tempElement.style.color = 'var(--foreground)';
      const computedFgColor = getComputedStyle(tempElement).color;
      const parsedFgColor = parseRgbColor(computedFgColor);
      if (parsedFgColor) {
        resolvedCanvasColorsRef.current.strokeStyle = parsedFgColor;
      } else {
        console.warn("StickyArrow: Could not parse --foreground for canvas arrow. Using fallback.");
        const isDarkMode = document.documentElement.classList.contains('dark');
        resolvedCanvasColorsRef.current.strokeStyle = isDarkMode 
          ? { r: 250, g: 250, b: 250 } 
          : { r: 10, g: 10, b: 10 };
      }
    };

    updateResolvedColors();

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && 
            mutation.attributeName === 'class' && 
            mutation.target === document.documentElement) {
          updateResolvedColors();
          break;
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
      if (tempElement.parentNode) {
        tempElement.parentNode.removeChild(tempElement);
      }
    };
  }, []);

  const drawArrow = useCallback(() => {
    if (!canvasRef.current || !ctxRef.current) return;

    // Check if screen is mobile/tablet (less than 1024px)
    if (window.innerWidth < 1024) return;

    const targetEl = document.querySelector(targetSelector) as HTMLElement;
    const containerEl = document.querySelector(containerSelector) as HTMLElement;
    if (!targetEl) return;

    const ctx = ctxRef.current;
    const mouse = mousePosRef.current;

    const x0 = mouse.x;
    const y0 = mouse.y;

    if (x0 === null || y0 === null) return;

    // Check if mouse is within container bounds
    if (containerEl) {
      const containerRect = containerEl.getBoundingClientRect();
      if (y0 < containerRect.top || y0 > containerRect.bottom || 
          x0 < containerRect.left || x0 > containerRect.right) {
        return; // Don't draw arrow if mouse is outside container
      }
    }

    const rect = targetEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const a = Math.atan2(cy - y0, cx - x0);
    const x1 = cx - Math.cos(a) * (rect.width / 2 + 12);
    const y1 = cy - Math.sin(a) * (rect.height / 2 + 12);

    const midX = (x0 + x1) / 2;
    const midY = (y0 + y1) / 2;
    const offset = Math.min(200, Math.hypot(x1 - x0, y1 - y0) * 0.5);
    const t = Math.max(-1, Math.min(1, (y0 - y1) / 200));
    const controlX = midX;
    const controlY = midY + offset * t;
    
    const r = Math.sqrt((x1 - x0)**2 + (y1 - y0)**2);
    const opacity = Math.min(1.0, (r - Math.max(rect.width, rect.height) / 2) / 500); 

    let finalArrowColor;
    if (arrowColor) {
      // Use custom color if provided
      finalArrowColor = arrowColor;
    } else {
      // Use theme-based color
      const themeColor = resolvedCanvasColorsRef.current.strokeStyle;
      finalArrowColor = `rgb(${themeColor.r}, ${themeColor.g}, ${themeColor.b})`;
    }

    ctx.strokeStyle = `rgba(${finalArrowColor.replace('rgb(', '').replace(')', '')}, ${opacity})`;
    ctx.lineWidth = 2;

    // Draw curve
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(controlX, controlY, x1, y1);
    ctx.setLineDash([10, 5]);
    ctx.stroke();
    ctx.restore();

    // Draw arrowhead
    const angle = Math.atan2(y1 - controlY, x1 - controlX);
    const headLength = 10 * (ctx.lineWidth / 1.5); 
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle - Math.PI / 6),
      y1 - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.moveTo(x1, y1);
    ctx.lineTo(
      x1 - headLength * Math.cos(angle + Math.PI / 6),
      y1 - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.stroke();
  }, [targetSelector, containerSelector, arrowColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext("2d");
    const ctx = ctxRef.current;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleMouseMove);
    updateCanvasSize();

    const animateLoop = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawArrow();
      }
      animationFrameIdRef.current = requestAnimationFrame(animateLoop);
    };
    
    animateLoop();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [drawArrow]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed inset-0 pointer-events-none z-30 hidden lg:block ${className}`}
    />
  );
};

export { StickyArrow };
