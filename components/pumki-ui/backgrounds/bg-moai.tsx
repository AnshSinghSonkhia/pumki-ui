"use client";

import React, { useEffect, useMemo, useRef } from "react";

export type MoaiParallaxBackgroundProps = {
  imageUrl?: string;
  count?: number;
  speed?: number;
  interactive?: boolean;
  zIndex?: number;
  className?: string;
  seed?: number;
};

type Instance = {
  x: number;
  y: number;
  depth: number;
  scale: number;
  flip: boolean;
  bobDur: number;
  tiltDur: number;
  delay: number;
  hue: number;
  blur: number;
  opacity: number;
};

const DEFAULT_IMG =
  "https://raw.githubusercontent.com/AnshSinghSonkhia/AnshSinghSonkhia/refs/heads/main/pumki-assets/moai.png";

export const MoaiParallaxBackground: React.FC<MoaiParallaxBackgroundProps> = ({
  imageUrl = DEFAULT_IMG,
  count = 12,
  speed = 1,
  interactive = true,
  zIndex = 0,
  className,
  seed = 42,
}) => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Deterministic PRNG
  const rand = useMemo(() => {
    let s = seed >>> 0;
    return () => {
      s ^= s << 13;
      s ^= s >>> 17;
      s ^= s << 5;
      const t = (s >>> 0) / 4294967296;
      return t;
    };
  }, [seed]);

  const instances = useMemo<Instance[]>(() => {
    const arr: Instance[] = [];
    for (let i = 0; i < count; i++) {
      const depth = 0.25 + rand() * 0.9;
      const scale = 0.6 + rand() * 0.7;
      const yBase = 0.15 + rand() * 0.7;
      const xBase = rand();
      const flip = rand() > 0.5;
      const bobDur = 10 + rand() * 14;
      const tiltDur = 12 + rand() * 18;
      const delay = -rand() * 20;
      const hue = (rand() - 0.5) * 10;
      const blur = Math.round((1 - depth) * 6) / 2;
      const opacity = 0.25 + depth * 0.65;
      arr.push({
        x: xBase,
        y: yBase,
        depth,
        scale,
        flip,
        bobDur,
        tiltDur,
        delay,
        hue,
        blur,
        opacity,
      });
    }
    return arr.sort((a, b) => a.depth - b.depth); // far → near
  }, [count, rand]);

  // Parallax follow mouse
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !interactive) return;

    let raf = 0;
    let targetX = 0,
      targetY = 0,
      currentX = 0,
      currentY = 0;

    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth) * 2 - 1;
      targetY = (e.clientY / innerHeight) * 2 - 1;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      el.style.setProperty("--mx", currentX.toFixed(4));
      el.style.setProperty("--my", currentY.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [interactive]);

  return (
    <div
      ref={rootRef}
      className={`moai-bg ${className || ""}`}
      style={{ zIndex }}
    >
      {instances.map((inst, i) => (
        <img
          key={i}
          src={imageUrl}
          alt="Moai"
          className="moai"
          style={
            {
              "--x": inst.x,
              "--y": inst.y,
              "--depth": inst.depth,
              "--scale": inst.scale,
              "--bobDur": `${inst.bobDur / speed}s`,
              "--tiltDur": `${inst.tiltDur / speed}s`,
              "--delay": `${inst.delay}s`,
              "--hue": `${inst.hue}deg`,
              "--blur": `${inst.blur}px`,
              "--opacity": inst.opacity,
              "--flip": inst.flip ? "-1" : "1",
            } as React.CSSProperties
          }
        />
      ))}
      <style jsx>{`
        .moai-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          --mx: 0;
          --my: 0;
          background: black;
        }
        .moai {
          position: absolute;
          width: 240px;
          height: auto;
          left: calc((var(--x) * 100%) - 4vw);
          top: calc(var(--y) * 100%);
          transform: translate(-50%, -50%)
            scale(calc(var(--scale) * var(--depth)))
            scaleX(var(--flip));
          opacity: var(--opacity);
          filter: hue-rotate(var(--hue)) blur(var(--blur));
          animation: bob var(--bobDur) ease-in-out infinite alternate,
            tilt var(--tiltDur) ease-in-out infinite alternate;
          animation-delay: var(--delay);
          transform-origin: center bottom;
        }
        .moai-bg .moai {
          transform: translate(
              calc((-50% + var(--mx) * 30px) * var(--depth)),
              calc((-50% + var(--my) * 20px) * var(--depth))
            )
            scale(calc(var(--scale) * var(--depth)))
            scaleX(var(--flip));
        }
        @keyframes bob {
          from {
            transform: translateY(0) scaleX(var(--flip));
          }
          to {
            transform: translateY(-15px) scaleX(var(--flip));
          }
        }
        @keyframes tilt {
          from {
            transform: rotate(-2deg) scaleX(var(--flip));
          }
          to {
            transform: rotate(2deg) scaleX(var(--flip));
          }
        }
      `}</style>
    </div>
  );
};