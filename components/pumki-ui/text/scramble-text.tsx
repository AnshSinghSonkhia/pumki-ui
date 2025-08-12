"use client";

import { ComponentProps, useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

type ScrambleTextProps = {
    random?: boolean;
    scrambleOnLoad?: boolean;
    text?: string;
} & ComponentProps<"div">;

const defaultChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const ScrambleText = ({ scrambleOnLoad = true, random = true, text, children, ...props }: ScrambleTextProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const { contextSafe } = useGSAP();

    const scramble = contextSafe(() => {
        const target = wrapperRef.current;
        if (gsap.isTweening(target) || !target) return;
        const scrambleTextValue = text ?? target.innerText;
        gsap.to(target, {
            duration: 1,
            ease: "sine.in",
            scrambleText: {
                text: scrambleTextValue,
                speed: 2,
                chars: random ? defaultChars : scrambleTextValue.replace(/\s/g, ""),
            },
        });
    });

    useEffect(() => {
        if (scrambleOnLoad) scramble();
        const target = wrapperRef.current;
        target?.addEventListener("pointerenter", scramble);
        return () => target?.removeEventListener("pointerenter", scramble);
    }, [wrapperRef, scramble, scrambleOnLoad]);

    return (
        <div {...props} ref={wrapperRef}>
            {text ?? children}
        </div>
    );
};
