import type { Registry } from "./schema";

export const component: Registry = [
    {
        name: "bg-ambient-aurora",
        type: "registry:ui",
        title: "Ambient Aurora Background",
        description:
            "A serene and captivating background featuring slow-moving, ethereal gradients.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["motion", "react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-ambient-aurora.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-ambient-aurora.tsx",
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
    {
        name: "bg-hexagon",
        type: "registry:ui",
        title: "Hexagon Background",
        description:
            "An unique interactive hexagon grid background component for modern applications, with customizable colors and patterns.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-hexagon.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-hexagon.tsx",
            },
        ],
    },
];
