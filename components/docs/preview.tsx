"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { CodeBlock } from './code-block';

interface PreviewProps {
  children: React.ReactNode;
  code: string;
  title?: string;
  description?: string;
  className?: string;
  showCode?: boolean;
  centered?: boolean;
  minHeight?: string;
}

export const Preview: React.FC<PreviewProps> = ({
  children,
  code,
  title,
  description,
  className,
  showCode = true,
  centered = true,
  minHeight = "200px"
}) => {
  const [activeTab, setActiveTab] = React.useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={cn("not-prose my-6", className)}>
      {/* Header */}
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <div className="rounded-lg border border-border bg-background overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-border bg-muted/30">
          <div className="flex">
            <button
              onClick={() => setActiveTab('preview')}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors relative",
                activeTab === 'preview'
                  ? "text-foreground bg-background border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              Preview
            </button>
            {showCode && (
              <button
                onClick={() => setActiveTab('code')}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors relative",
                  activeTab === 'code'
                    ? "text-foreground bg-background border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                Code
              </button>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 px-4">
            <div className="flex items-center gap-1">
              <img 
                src="/icon-no-bg.png" 
                alt="Pumki UI" 
                className="w-4 h-4"
              />
              <span className="text-xs text-muted-foreground font-medium">Pumki UI</span>
            </div>
            {activeTab === 'code' && (
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
        </div>

        {/* Content */}
        <div className="relative">
          {activeTab === 'preview' ? (
            <div 
              className={cn(
                "p-6",
                centered && "flex items-center justify-center"
              )}
              style={{ minHeight, backgroundColor: '#000' }}
            >
              <div 
                className="mx-auto aspect-[16/10] w-full max-w-[900px] min-h-[360px] bg-black flex items-center justify-center rounded-lg overflow-hidden"
                style={{ aspectRatio: '16/10' }}
              >
                {children}
              </div>
            </div>
          ) : (
            <div className="bg-muted/50">
              <CodeBlock 
                language="tsx" 
                showLineNumbers={true}
                copy={false} // We handle copy in the header
                className="border-0 rounded-none bg-transparent"
              >
                {code}
              </CodeBlock>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Optional: ResponsivePreview for testing different screen sizes
export const ResponsivePreview: React.FC<PreviewProps & {
  sizes?: Array<{ name: string; width: string; icon?: React.ReactNode }>;
}> = ({ 
  children, 
  code, 
  title, 
  description, 
  className,
  sizes = [
    { name: 'Mobile', width: '375px' },
    { name: 'Tablet', width: '768px' },
    { name: 'Desktop', width: '100%' },
  ],
  ...props 
}) => {
  const [activeSize, setActiveSize] = React.useState(sizes[sizes.length - 1]);
  const [activeTab, setActiveTab] = React.useState<'preview' | 'code'>('preview');

  return (
    <div className={cn("not-prose my-6", className)}>
      {/* Header */}
      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      <div className="rounded-lg border border-border bg-background overflow-hidden">
        {/* Tabs & Size Controls */}
        <div className="flex items-center justify-between border-b border-border bg-muted/30">
          <div className="flex">
            <button
              onClick={() => setActiveTab('preview')}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                activeTab === 'preview'
                  ? "text-foreground bg-background border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                activeTab === 'code'
                  ? "text-foreground bg-background border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              Code
            </button>
          </div>

          {/* Size selector for preview mode */}
          {activeTab === 'preview' && (
            <div className="flex items-center gap-1">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  onClick={() => setActiveSize(size)}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded transition-colors",
                    activeSize.name === size.name
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {size.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative">
          {activeTab === 'preview' ? (
            <div className="p-6 flex justify-center min-h-[300px]" style={{ backgroundColor: '#000' }}>
              <div 
                className="border border-dashed border-border transition-all duration-200 bg-black flex items-center justify-center rounded-lg overflow-hidden"
                style={{ 
                  width: activeSize.width,
                  maxWidth: '100%',
                  aspectRatio: '16/10',
                  minHeight: '360px'
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  {children}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-muted/50">
              <CodeBlock 
                language="tsx" 
                showLineNumbers={true}
                copy={true}
                className="border-0 rounded-none bg-transparent"
              >
                {code}
              </CodeBlock>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};