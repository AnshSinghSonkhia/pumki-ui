"use client"
import React, { useState } from "react";
import styled from "styled-components";

interface JapanMatrixProps {
  speed?: number;
  showSpeedControl?: boolean;
}

const JapanMatrix: React.FC<JapanMatrixProps> = ({ 
  speed: initialSpeed = 1,
  showSpeedControl = true 
}) => {
  // Default speed factor (lower = faster)
  const [speed, setSpeed] = useState(initialSpeed);

  // Animation timings for each column
  const columnTimings = [
    { delay: -2.5, duration: 3 },
    { delay: -3.2, duration: 4 },
    { delay: -1.8, duration: 2.5 },
    { delay: -2.9, duration: 3.5 },
    { delay: -1.5, duration: 3 },
    { delay: -3.8, duration: 4.5 },
    { delay: -2.1, duration: 2.8 },
    { delay: -2.7, duration: 3.2 },
    { delay: -3.4, duration: 3.8 },
    { delay: -1.9, duration: 2.7 },
    { delay: -3.6, duration: 4.2 },
    { delay: -2.3, duration: 3.1 },
    { delay: -3.1, duration: 3.6 },
    { delay: -2.6, duration: 2.9 },
    { delay: -3.7, duration: 4.1 },
    { delay: -2.8, duration: 3.3 },
    { delay: -3.3, duration: 3.7 },
    { delay: -2.2, duration: 2.6 },
    { delay: -3.9, duration: 4.3 },
    { delay: -2.4, duration: 3.4 },
    { delay: -1.7, duration: 2.4 },
    { delay: -3.5, duration: 3.9 },
    { delay: -2.0, duration: 3.0 },
    { delay: -4.0, duration: 4.4 },
    { delay: -1.6, duration: 2.3 },
    { delay: -3.0, duration: 3.5 },
    { delay: -3.8, duration: 4.0 },
    { delay: -2.5, duration: 2.8 },
    { delay: -3.2, duration: 3.6 },
    { delay: -2.7, duration: 3.2 },
    { delay: -1.8, duration: 2.7 },
    { delay: -3.6, duration: 4.1 },
    { delay: -2.1, duration: 3.1 },
    { delay: -3.4, duration: 3.7 },
    { delay: -2.8, duration: 2.9 },
    { delay: -3.7, duration: 4.2 },
    { delay: -2.3, duration: 3.3 },
    { delay: -1.9, duration: 2.5 },
    { delay: -3.5, duration: 3.8 },
    { delay: -2.6, duration: 3.4 },
  ];

  const renderPattern = () => {
    return columnTimings.map((timing, i) => (
      <div
        className="matrix-column"
        key={i}
        style={
          {
            "--left": `${i * 25}px`,
            "--duration": `${timing.duration * speed}s`,
            "--delay": `${timing.delay * speed}s`,
          } as React.CSSProperties
        }
      />
    ));
  };

  return (
    <StyledWrapper>
      {showSpeedControl && (
        <div style={{ position: "absolute", zIndex: 2, width: "100%", textAlign: "center", top: 10 }}>
          <label style={{ color: "#00ff41", fontWeight: "bold", marginRight: 8 }}>
            Speed:
          </label>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={speed}
            onChange={e => setSpeed(Number(e.target.value))}
            style={{ width: 200 }}
          />
          <span style={{ color: "#00ff41", marginLeft: 8 }}>
            {speed.toFixed(1)}x
          </span>
        </div>
      )}
      <div className="matrix-container">
        <div className="matrix-pattern">{renderPattern()}</div>
        <div className="matrix-pattern">{renderPattern()}</div>
        <div className="matrix-pattern">{renderPattern()}</div>
        <div className="matrix-pattern">{renderPattern()}</div>
        <div className="matrix-pattern">{renderPattern()}</div>
      </div>
    </StyledWrapper>
  );
};const StyledWrapper = styled.div`
  .matrix-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background: #000;
    display: flex;
  }

  .matrix-pattern {
    position: relative;
    width: 1000px;
    height: 100%;
    flex-shrink: 0;
  }

  .matrix-column {
    position: absolute;
    top: -100%;
    left: var(--left);
    width: 20px;
    height: 100%;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
    animation: fall linear infinite;
    animation-duration: var(--duration);
    animation-delay: var(--delay);
    white-space: nowrap;
  }

  .matrix-column::before {
    content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      #ffffff 0%,
      #ffffff 5%,
      #00ff41 10%,
      #00ff41 20%,
      #00dd33 30%,
      #00bb22 40%,
      #009911 50%,
      #007700 60%,
      #005500 70%,
      #003300 80%,
      rgba(0, 255, 65, 0.5) 90%,
      transparent 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    writing-mode: vertical-lr;
    letter-spacing: 1px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .matrix-column:nth-child(odd)::before {
    content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン123456789";
  }

  .matrix-column:nth-child(even)::before {
    content: "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴァィゥェォャュョッABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  .matrix-column:nth-child(3n)::before {
    content: "アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン0987654321";
  }

  .matrix-column:nth-child(4n)::before {
    content: "ンヲロヨモホノトソコオレメヘネテセケエルユムフヌツスクウリミヒニチシキイワラヤマハナタサカア";
  }

  .matrix-column:nth-child(5n)::before {
    content: "ガザダバパギジヂビピグズヅブプゲゼデベペゴゾドボポヴァィゥェォャュョッ!@#$%^&*()_+-=[]{}|;:,.<>?";
  }

  @keyframes fall {
    0% {
      transform: translateY(-10%);
      opacity: 1;
    }
    100% {
      transform: translateY(200%);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    .matrix-column {
      font-size: 14px;
      line-height: 16px;
      width: 18px;
    }
  }

  @media (max-width: 480px) {
    .matrix-column {
      font-size: 12px;
      line-height: 14px;
      width: 15px;
    }
  }
`;

export default JapanMatrix;