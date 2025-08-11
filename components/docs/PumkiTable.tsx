"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * PumkiTable - Premium table component with sophisticated styling
 */
export const PumkiTable: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={cn(
      "overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-purple-950/60 to-pink-950/40 shadow-2xl my-8 backdrop-blur-xl",
      className
    )}
    style={{
      boxShadow: `
        0 20px 60px -12px rgba(0, 0, 0, 0.8),
        0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1),
        inset 0 -1px 0 rgba(0, 0, 0, 0.2)
      `,
    }}
  >
    <div className="overflow-x-auto">
      {children}
    </div>
  </div>
);

export const PumkiTableStyles = () => (
  <style jsx global>{`
    .pumki-table {
      border-collapse: separate;
      border-spacing: 0;
      width: 100%;
      font-feature-settings: 'liga' 1, 'kern' 1;
      min-width: 100%;
      font-size: 0.875rem;
      color: white;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
    }
    
    /* Header Styling */
    .pumki-table thead {
      position: relative;
    }
    
    .pumki-table th {
      background: linear-gradient(135deg, 
        #7c3aed 0%, 
        #a855f7 20%, 
        #c084fc 40%, 
        #a855f7 60%, 
        #7c3aed 80%, 
        #6d28d9 100%
      );
      color: white;
      font-weight: 600;
      font-size: 0.875rem;
      padding: 1rem 1.5rem;
      text-align: left;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      font-size: 0.75rem;
      position: relative;
      border-bottom: 2px solid rgba(139, 69, 19, 0.3);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }
    
    .pumki-table th::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.1) 50%, 
        transparent 100%
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .pumki-table th:hover::before {
      opacity: 1;
    }
    
    .pumki-table th:first-child {
      border-top-left-radius: 0.75rem;
    }
    
    .pumki-table th:last-child {
      border-top-right-radius: 0.75rem;
    }
    
    .pumki-table th:not(:last-child) {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    /* Row Styling */
    .pumki-table tbody tr {
      background: rgba(0, 0, 0, 0.2);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }
    
    .pumki-table tbody tr:nth-child(even) {
      background: rgba(0, 0, 0, 0.3);
    }
    
    .pumki-table tbody tr:hover {
      background: linear-gradient(90deg, 
        rgba(139, 69, 19, 0.15) 0%, 
        rgba(168, 85, 247, 0.1) 50%, 
        rgba(139, 69, 19, 0.05) 100%
      );
      transform: translateX(2px);
      box-shadow: 
        inset 3px 0 0 #8b4513,
        0 4px 20px -4px rgba(139, 69, 19, 0.3);
    }
    
    /* Cell Styling */
    .pumki-table td {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      vertical-align: top;
      font-size: 0.875rem;
      line-height: 1.5;
    }
    
    .pumki-table td:not(:last-child) {
      border-right: 1px solid rgba(255, 255, 255, 0.05);
    }
    
    /* First column (Prop names) */
    .pumki-table td:first-child {
      font-weight: 600;
      color: #fbbf24;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      background: linear-gradient(90deg, 
        rgba(251, 191, 36, 0.1) 0%, 
        transparent 100%
      );
    }
    
    /* Type column styling */
    .pumki-table td:nth-child(2) {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      color: #a78bfa;
      font-size: 0.8125rem;
    }
    
    /* Default value column */
    .pumki-table td:nth-child(3) {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      color: #34d399;
      font-size: 0.8125rem;
    }
    
    /* Description column */
    .pumki-table td:nth-child(4) {
      color: #e5e7eb;
      line-height: 1.6;
    }
    
    /* Code syntax highlighting */
    .pumki-table code,
    .pumki-table .token {
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-size: 0.8125rem;
    }
    
    .pumki-table .token.keyword {
      color: #f472b6;
    }
    
    .pumki-table .token.string {
      color: #34d399;
    }
    
    .pumki-table .token.number {
      color: #fbbf24;
    }
    
    .pumki-table .token.punctuation {
      color: #9ca3af;
    }
    
    .pumki-table .token.property {
      color: #60a5fa;
    }
    
    /* Remove bottom border from last row */
    .pumki-table tr:last-child td {
      border-bottom: none;
    }
    
    .pumki-table tr:last-child td:first-child {
      border-bottom-left-radius: 0.75rem;
    }
    
    .pumki-table tr:last-child td:last-child {
      border-bottom-right-radius: 0.75rem;
    }
    
    /* Scrollbar styling */
    .pumki-table::-webkit-scrollbar {
      height: 6px;
    }
    
    .pumki-table::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }
    
    .pumki-table::-webkit-scrollbar-thumb {
      background: linear-gradient(90deg, #8b4513, #a855f7);
      border-radius: 3px;
    }
    
    /* Responsive Design */
    @media (max-width: 1024px) {
      .pumki-table th,
      .pumki-table td {
        padding: 0.875rem 1.25rem;
        font-size: 0.8125rem;
      }
    }
    
    @media (max-width: 768px) {
      .pumki-table th,
      .pumki-table td {
        padding: 0.75rem 1rem;
        font-size: 0.75rem;
      }
      
      .pumki-table th {
        font-size: 0.6875rem;
      }
    }
    
    @media (max-width: 640px) {
      .pumki-table {
        font-size: 0.6875rem;
      }
      
      .pumki-table th,
      .pumki-table td {
        padding: 0.625rem 0.75rem;
      }
      
      /* Stack layout for very small screens */
      .pumki-table thead {
        display: none;
      }
      
      .pumki-table,
      .pumki-table tbody,
      .pumki-table tr,
      .pumki-table td {
        display: block;
      }
      
      .pumki-table tr {
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        padding: 0.75rem;
        background: rgba(0, 0, 0, 0.3);
      }
      
      .pumki-table td {
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        padding: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      
      .pumki-table td::before {
        content: attr(data-label);
        font-weight: 600;
        color: #a78bfa;
        margin-right: 1rem;
        text-transform: uppercase;
        font-size: 0.625rem;
        letter-spacing: 0.05em;
        min-width: 80px;
      }
      
      .pumki-table td:last-child {
        border-bottom: none;
      }
    }
    
    /* Loading state */
    .pumki-table-loading {
      opacity: 0.6;
      pointer-events: none;
    }
    
    .pumki-table-loading::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 100%
      );
      animation: shimmer 1.5s infinite;
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `}</style>
);

export default PumkiTable;