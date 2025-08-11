import type { Registry } from "./schema";

export const component: Registry = [
    {
        name: "bg-bubble",
        type: "registry:ui",
        title: "Bubble Background",
        description:
            "Animated gradient bubbles create a playful, dynamic visual display that captivates viewers with lively motion.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["motion", "react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-bubble.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-bubble.tsx",
            },
        ],
    },
    {
        name: "bg-fireworks",
        type: "registry:ui",
        title: "Fireworks Animation",
        description:
            "A vibrant fireworks animation background component for celebrations and special occasions, with colorful bursts and effects.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-fireworks.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-fireworks.tsx",
            },
        ],
    },
];
