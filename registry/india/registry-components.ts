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
    {
        name: "bg-potion",
        type: "registry:ui",
        title: "Magical Potion Background",
        description:
            "Immersive liquid potion background effect perfect for fantasy games, magical applications, or any project that needs an enchanting animated background.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-potion.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-potion.tsx",
            },
        ],
    },
    {
        name: "bg-wormhole",
        type: "registry:ui",
        title: "Wormhole Background",
        description:
            "An immersive futuristic gateway with animated grid perspective and glowing portal core.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-wormhole.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-wormhole.tsx",
            },
        ],
    },
    {
        name: "button-copy",
        type: "registry:ui",
        title: "Copy Button",
        description:
            "A button that copies text to the clipboard with an accompanying animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion", "lucide-react", "class-variance-authority"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/buttons/copy.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/buttons/copy.tsx",
            },
        ],
    },
    {
        name: "button-flip",
        type: "registry:ui",
        title: "Flip Button",
        description:
            "A button that flips between two states with an accompanying animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/buttons/flip.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/buttons/flip.tsx",
            },
        ],
    },
    {
        name: "button-icon",
        type: "registry:ui",
        title: "Icon Button",
        description:
            "A button that displays an icon with an accompanying animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/buttons/icon.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/buttons/icon.tsx",
            },
        ],
    },
    {
        name: "button-input",
        type: "registry:ui",
        title: "Input Button",
        description:
            "An input field that displays an icon with an accompanying animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion", "lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/buttons/input.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/buttons/input.tsx",
            },
        ],
    },
    {
        name: "button-ripple",
        type: "registry:ui",
        title: "Ripple Button",
        description:
            "A button that shows a ripple effect on click.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion", "class-variance-authority"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/buttons/ripple.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/buttons/ripple.tsx",
            },
        ],
    },
    {
        name: "github-star",
        type: "registry:ui",
        title: "GitHub Star Button",
        description:
            "An animated button that shows the number of stars a GitHub repository has.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion", "lucide-react"],
        registryDependencies: ["https://pumki-ui.vercel.app/r/sliding-number.json"],
        files: [
            {
                path: "components/pumki-ui/buttons/github-star.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/buttons/github-star.tsx",
            },
        ],
    },
    {
        name: "sliding-number",
        type: "registry:ui",
        title: "Sliding Number",
        description:
            "A component that animates the transition between numbers.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion", "react-use-measure"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/sliding-number.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/sliding-number.tsx",
            },
        ],
    },
    {
        name: "text-rotator",
        type: "registry:ui",
        title: "Text Rotator",
        description:
            "A component that smoothly rotates through text.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/text-rotator.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/text-rotator.tsx",
            },
        ],
    },
    {
        name: "lustrous-text",
        type: "registry:ui",
        title: "Lustrous Text",
        description:
            "A component that animates the lustrous effect on text.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/lustrous-text.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/lustrous-text.tsx",
            },
        ],
    },
    {
        name: "word-cascade",
        type: "registry:ui",
        title: "Word Cascade",
        description:
            "A component that animates the cascade effect on words.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/word-cascade.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/word-cascade.tsx",
            },
        ],
    },
];
