import type { Registry } from "./schema";

export const component: Registry = [
    {
        name: "bg-bubble",
        type: "registry:component",
        title: "Bubble Background",
        description:
            "Animated gradient bubbles create a playful, dynamic visual display that captivates viewers with lively motion.",
        author: "Ansh Singh Sonkhia <anshssonkhia@gmail.com>",
        dependencies: ["motion", "react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bubble.tsx",
                type: "registry:component",
                target: "components/pumki-ui/backgrounds/bubble.tsx",
            },
        ],
    },
    {
        name: "bg-fireworks",
        type: "registry:component",
        title: "Fireworks Animation",
        description:
            "A vibrant fireworks animation background component for celebrations and special occasions, with colorful bursts and effects.",
        author: "Ansh Singh Sonkhia <anshssonkhia@gmail.com>",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/fireworks.tsx",
                type: "registry:component",
                target: "components/pumki-ui/backgrounds/fireworks.tsx",
            },
        ],
    },
];
