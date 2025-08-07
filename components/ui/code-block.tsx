"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  highlight?: string; // e.g., "6" or "1,4-6" or "1-3,5" for lines, or "/text/" for substring
  copy?: boolean;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  language = 'text',
  filename,
  highlight,
  copy = true,
  showLineNumbers = true,
  className
}) => {
  const [copied, setCopied] = React.useState(false);
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Parse highlight string to get highlighted line numbers or substring
  const parseHighlight = (highlightStr: string): { lines: number[], substring: string | null } => {
    if (!highlightStr) return { lines: [], substring: null };
    
    // Check if it's substring highlighting (starts and ends with /)
    if (highlightStr.startsWith('/') && highlightStr.endsWith('/')) {
      return { lines: [], substring: highlightStr.slice(1, -1) };
    }
    
    // Line-based highlighting
    const parts = highlightStr.split(',');
    const lines: number[] = [];
    
    parts.forEach(part => {
      const trimmed = part.trim();
      if (trimmed.includes('-')) {
        const [start, end] = trimmed.split('-').map(Number);
        for (let i = start; i <= end; i++) {
          lines.push(i);
        }
      } else {
        lines.push(Number(trimmed));
      }
    });
    
    return { lines, substring: null };
  };

  const { lines: highlightedLines, substring: highlightSubstring } = parseHighlight(highlight || '');
  const lines = children.trim().split('\n');

  // Simple syntax highlighting for common languages
  const highlightSyntax = (code: string, lang: string): string => {
    // First escape HTML
    let result = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    
    // If there's a substring to highlight, wrap it with a span
    if (highlightSubstring) {
      const regex = new RegExp(`(${highlightSubstring.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(regex, '<span class="bg-yellow-200 text-yellow-900 dark:bg-pink-500/30 dark:text-white font-medium px-1 rounded">$1</span>');
    }
    
    return result;
  };

  return (
    <div className={cn("relative rounded-lg border border-border bg-muted/50 overflow-hidden", className)}>
      {/* Header - only show if filename exists */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted/80 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-sm font-medium text-muted-foreground">{filename}</span>
          </div>
          {copy && (
            <button
              onClick={copyToClipboard}
              className="p-1.5 rounded-md hover:bg-background/50 transition-colors text-muted-foreground hover:text-foreground"
              title="Copy to clipboard"
            >
              {copied ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          )}
        </div>
      )}
      
      {/* Floating copy button - only show when no filename and copy is enabled */}
      {!filename && copy && (
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 z-10 p-1.5 rounded-md bg-background/80 hover:bg-background border border-border transition-colors text-muted-foreground hover:text-foreground shadow-sm"
          title="Copy to clipboard"
        >
          {copied ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      )}
      
      {/* Code Content */}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className="font-mono">
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              const isHighlighted = highlightedLines.includes(lineNumber);
              
              return (
                <div
                  key={index}
                  className={cn(
                    "flex",
                    isHighlighted && "bg-primary/10 border-l-2 border-primary -ml-4 pl-3 mr-[-1rem] pr-4"
                  )}
                >
                  {showLineNumbers && (
                    <span className="select-none text-muted-foreground/60 mr-4 min-w-[2rem] text-right">
                      {lineNumber}
                    </span>
                  )}
                  <span
                    className="flex-1"
                    dangerouslySetInnerHTML={{
                      __html: highlightSyntax(line || ' ', language)
                    }}
                  />
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
};
