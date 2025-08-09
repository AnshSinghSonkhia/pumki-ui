"use client";
import { useState } from "react";
import { CodeBlock } from '../components/ui/code-block';

function getTailwindCode(colors: string[]): string {
  if (colors.length === 3) {
    return `bg-gradient-to-r from-[${colors[0]}] via-[${colors[1]}] to-[${colors[2]}]`;
  }
  return `bg-gradient-to-r from-[${colors[0]}] to-[${colors[colors.length-1]}]`;
}

function getCssCode(colors: string[]): string {
  return `background: linear-gradient(90deg, ${colors.map((c: string, i: number) => `${c} ${Math.round(i/(colors.length-1)*100)}%`).join(", ")});`;
}

function getSassCode(colors: string[]): string {
  return `$gradient: linear-gradient(90deg, ${colors.map((c: string, i: number) => `${c} ${Math.round(i/(colors.length-1)*100)}%`).join(", ")});\nbackground: $gradient;`;
}

interface Gradient {
  name: string;
  colors: string[];
  colorsname: string[];
  keywords: string[][];
}

interface GradientCardProps {
  gradient: Gradient;
}

export default function GradientCard({ gradient }: GradientCardProps) {
  const [mode, setMode] = useState("tailwind");
  let code = "";
  let language = "";
  if (mode === "tailwind") {
    code = getTailwindCode(gradient.colors);
    language = "html";
  } else if (mode === "css") {
    code = getCssCode(gradient.colors);
    language = "css";
  } else if (mode === "sass") {
    code = getSassCode(gradient.colors);
    language = "scss";
  }

  return (
    <div
      className="rounded-lg border my-4 shadow-lg p-4 backdrop-blur-sm transition-all duration-200"
      style={{
        background: "var(--card, #1a1a1a)",
        borderColor: "var(--border, #333)",
        color: "var(--card-foreground, #fff)",
      }}
    >
      {/* Gradient Preview */}
      <div
        className="h-16 w-full rounded-md mb-3"
        style={{
          background: `linear-gradient(90deg, ${gradient.colors.join(", ")})`,
        }}
      />

      {/* Gradient Name */}
      <div className="font-semibold text-base mb-2" style={{ color: "var(--card-foreground, #fff)" }}>{gradient.name}</div>

      {/* Color Codes */}
      <div className="text-xs mb-3 font-mono" style={{ color: "var(--muted-foreground, #aaa)" }}>
        {gradient.colors.join(", ")}
      </div>

      {/* Mode Toggle */}
      <div className="flex gap-1 mb-3 p-0.5 rounded-md" style={{ background: "var(--popover, #18181b)" }}>
        <button
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 flex-1 ${
            mode === "tailwind"
              ? "shadow-sm"
              : "hover:bg-gray-800/50"
          }`}
          style={
            mode === "tailwind"
              ? { background: "var(--primary, #3b82f6)", color: "var(--primary-foreground, #fff)" }
              : { color: "var(--muted-foreground, #aaa)" }
          }
          onClick={() => setMode("tailwind")}
        >
          Tailwind
        </button>
        <button
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 flex-1 ${
            mode === "css"
              ? "shadow-sm"
              : "hover:bg-gray-800/50"
          }`}
          style={
            mode === "css"
              ? { background: "var(--primary, #3b82f6)", color: "var(--primary-foreground, #fff)" }
              : { color: "var(--muted-foreground, #aaa)" }
          }
          onClick={() => setMode("css")}
        >
          CSS
        </button>
        <button
          className={`px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 flex-1 ${
            mode === "sass"
              ? "shadow-sm"
              : "hover:bg-gray-800/50"
          }`}
          style={
            mode === "sass"
              ? { background: "var(--primary, #3b82f6)", color: "var(--primary-foreground, #fff)" }
              : { color: "var(--muted-foreground, #aaa)" }
          }
          onClick={() => setMode("sass")}
        >
          SASS
        </button>
      </div>

      {/* Code Block */}
      <div style={{ background: "var(--popover, #18181b)", color: "var(--card-foreground, #fff)", borderRadius: 6 }}>
        <CodeBlock
          language={language}
          showLineNumbers={false}
          copy={true}
          className="mb-3 text-xs"
        >
          {code}
        </CodeBlock>
      </div>
    </div>
  );
}