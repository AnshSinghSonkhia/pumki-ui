"use client";

import React, { useRef, useEffect, useState } from "react";

function Dot({ dotColor = "#52644D" }: { dotColor?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 5 6"
            style={{ margin: "0 12px" }}
            width={12}
            height={12}
        >
            <circle cx="2.25" cy="3" r="2.25" fill={dotColor} />
        </svg>
    );
}

export interface BadgeMarqueProps {
    speed?: number; // px per frame
    background?: string;
    color?: string;
    padding?: string;
    items: string[];
    size?: number | string; // New prop for whole badge size
    dotColor?: string; // dot color prop
}

export const BadgeMarquee: React.FC<BadgeMarqueProps> = (props) => {
    const {
        speed = 1.2,
        background = "linear-gradient(rgb(82, 100, 77) -43.73%, rgba(82, 100, 77, 0) 129.91%)",
        color = "rgb(134, 156, 128)",
        padding = "8px 0",
        items,
        size,
        dotColor = "#52644D", // default dot color
    } = props;
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [contentWidth, setContentWidth] = useState(0);

    const safeItems = Array.isArray(items) ? items : [];
    const scrollItems = [...safeItems, ...safeItems];

    useEffect(() => {
        if (marqueeRef.current) {
            const firstSet = marqueeRef.current.querySelectorAll('.badge-marque-item');
            let width = 0;
            firstSet.forEach((el) => {
                width += (el as HTMLElement).offsetWidth;
            });
            setContentWidth(width);
        }
    }, [items]);

    const duration = contentWidth > 0 ? Math.max(5, contentWidth / (speed * 10)) : 10;
    return (
        <div
            style={{
                background,
                color,
                overflow: "hidden",
                width: size ? size : "100%",
                position: "relative",
                padding,
            }}
        >
            <style>{`
                @keyframes badge-marque-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${contentWidth}px); }
                }
            `}</style>
            <div
                ref={marqueeRef}
                style={{
                    display: "flex",
                    whiteSpace: "nowrap",
                    willChange: "transform",
                    minWidth: contentWidth ? `${contentWidth * 2}px` : undefined,
                    animation: contentWidth ? `badge-marque-scroll ${duration}s linear infinite` : undefined,
                }}
            >
                {scrollItems.map((label, i) => (
                    <span
                        key={i}
                        className="badge-marque-item"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontWeight: 500,
                            fontSize: "1rem",
                            letterSpacing: "0.02em",
                            marginRight: 4,
                        }}
                    >
                        <span>{label}</span>
                        <Dot dotColor={dotColor} />
                    </span>
                ))}
            </div>
        </div>
    );
};