import type { Registry } from "./schema";

export const component: Registry = [
    {
        name: "bg-grid-distort",
        type: "registry:ui",
        title: "Grid Distort Background",
        description:
            "Get Grid Distort background",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "three"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-grid-distort.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-grid-distort.tsx",
            },
        ],
    },
    {
        name: "bg-moai",
        type: "registry:ui",
        title: "Moai Background",
        description:
            "Get Moai-Moai",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-moai.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-moai.tsx",
            },
        ],
    },
    {
        name: "bg-lightrays",
        type: "registry:ui",
        title: "Light Rays Background",
        description:
            "A serene and captivating background featuring slow-moving, ethereal gradients.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["ogl", "react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-light-rays.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-lightrays.tsx",
            },
        ],
    },
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
        name: "button-simple",
        type: "registry:ui",
        title: "Simple Buttons",
        description:
            "A collection of simple button components with various styles and sizes.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/buttons/simple.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/buttons/simple.tsx",
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
        registryDependencies: ["https://raw.githubusercontent.com/AnshSinghSonkhia/pumki-ui/main/public/r/sliding-number.json"],
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
    {
        name: "counting-number",
        type: "registry:ui",
        title: "Counting Number",
        description:
            "A component that animates the counting effect on numbers.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/counting-number.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/counting-number.tsx",
            },
        ],
    },
    {
        name: "text-highlight",
        type: "registry:ui",
        title: "Text Highlight",
        description:
            "A component that highlights text with a smooth animation effect.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/text-highlight.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/text-highlight.tsx",
            },
        ],
    },
    {
        name: "text-gradient",
        type: "registry:ui",
        title: "Text Gradient",
        description:
            "A component that applies a gradient effect to text with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/text-gradient.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/text-gradient.tsx",
            },
        ],
    },
    {
        name: "text-roller",
        type: "registry:ui",
        title: "Text Roller",
        description:
            "A component that applies a rolling effect to text with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/text-roller.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/text-roller.tsx",
            },
        ],
    },
    {
        name: "text-splitting",
        type: "registry:ui",
        title: "Text Splitting",
        description:
            "A component that applies a splitting effect to text with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/text-splitting.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/text-splitting.tsx",
            },
        ],
    },
    {
        name: "scramble-text",
        type: "registry:ui",
        title: "Scramble Text",
        description:
            "A component that applies a scrambling effect to text with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "gsap", "@gsap/react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/scramble-text.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/scramble-text.tsx",
            },
        ],
    },
    {
        name: "distort-text",
        type: "registry:ui",
        title: "Distort Text",
        description:
            "A component that applies a distortion effect to text with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "gsap", "@gsap/react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/distort-text.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/distort-text.tsx",
            },
        ],
    },
    {
        name: "text-squash",
        type: "registry:ui",
        title: "Squash Text",
        description:
            "Characters bounce and squash into place with playful, dynamic energy, perfect for drawing attention to your text.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "gsap", "@gsap/react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/text-squash.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/text-squash.tsx",
            },
        ],
    },
    {
        name: "draw-line-text",
        type: "registry:ui",
        title: "Draw Line Text",
        description:
            "A component that applies a drawing effect to text with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "gsap", "@gsap/react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/text/draw-line-text.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/text/draw-line-text.tsx",
            },
        ],
    },
    {
        name: "tooltip-1",
        type: "registry:ui",
        title: "Tooltip 1",
        description:
            "A component that displays an interactive tooltip with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/tooltip/tooltip-1.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/tooltip/tooltip-1.tsx",
            },
        ],
    },
    {
        name: "sparkles",
        type: "registry:ui",
        title: "Sparkles",
        description:
            "A component that displays a sparkling effect with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion", "@tsparticles/react", "@tsparticles/engine", "@tsparticles/slim"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/ui/sparkles.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/ui/sparkles.tsx",
            },
        ],
    },
    {
        name: "stats-carousel",
        type: "registry:ui",
        title: "Stats Carousel",
        description:
            "A smooth carousel effect for displaying statistics, perfect for dashboards and data visualization.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion", "framer-motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/carousels/stats-carousel.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/carousels/stats-carousel.tsx",
            },
        ],
    },
    {
        name: "badge-simple",
        type: "registry:ui",
        title: "Simple Badges",
        description:
            "A collection of simple badge components with various styles and sizes.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/badges/simple.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/badges/simple.tsx",
            },
        ],
    },
    {
        name: "dropdown-dd1",
        type: "registry:ui",
        title: "Dropdown 1",
        description:
            "A simple animated dropdown component.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "framer-motion", "motion", "@radix-ui/react-dropdown-menu", "lucide-react"],
        registryDependencies: ["https://raw.githubusercontent.com/AnshSinghSonkhia/pumki-ui/main/public/r/button-simple.json"],
        files: [
            {
                path: "components/pumki-ui/dropdown/dd1.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/dropdown/dd1.tsx",
            },
        ],
    },
    {
        name: "code-preview",
        type: "registry:ui",
        title: "Code Preview Block",
        description:
            "A customizable code preview component for displaying code snippets with syntax highlighting.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: ["https://raw.githubusercontent.com/AnshSinghSonkhia/pumki-ui/main/public/r/codeblock.json"],
        files: [
            {
                path: "components/docs/preview.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/preview.tsx",
            },
        ],
    },
    {
        name: "codeblock",
        type: "registry:ui",
        title: "Code Block",
        description:
            "A customizable code preview component for displaying code snippets with syntax highlighting.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/docs/code-block.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/codeblock.tsx",
            },
        ],
    },
    {
        name: "card-swap",
        type: "registry:ui",
        title: "Card Swap",
        description:
            "A 3D animated card stack that cycles through multiple cards with configurable depth, skew, distance, and animation easing.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "gsap"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/CardSwap.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/CardSwap.tsx",
            },
        ],
    },
    {
        name: "glassicons",
        type: "registry:ui",
        title: "Glass Icons",
        description:
            "A collection of glassmorphic icons with various styles and sizes.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/GlassIcons.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/GlassIcons.tsx",
            },
        ],
    },
    {
        name: "stepper",
        type: "registry:ui",
        title: "Stepper",
        description:
            "A multi-step form component with a progress indicator.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/Stepper.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/Stepper.tsx",
            },
        ],
    },
    {
        name: "disclosure",
        type: "registry:ui",
        title: "Disclosure",
        description:
            "A component for showing and hiding content.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "react-aria-components", "lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/Disclosure.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/Disclosure.tsx",
            },
        ],
    },
    {
        name: "textfield",
        type: "registry:ui",
        title: "Text Field",
        description:
            "A component for showing and hiding content.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "react-aria-components", "class-variance-authority"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/form/textfield.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/form/textfield.tsx",
            },
        ],
    },
    {
        name: "datefield",
        type: "registry:ui",
        title: "Text Field",
        description:
            "A component for showing and hiding content.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "react-aria-components", "class-variance-authority"],
        registryDependencies: ["https://raw.githubusercontent.com/AnshSinghSonkhia/pumki-ui/main/public/r/textfield.json"],
        files: [
            {
                path: "components/pumki-ui/date-time/datefield.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/date-time/datefield.tsx",
            },
        ],
    },
    {
        name: "searchfield",
        type: "registry:ui",
        title: "Search Field",
        description:
            "A component for searching content.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "react-aria-components"],
        registryDependencies: ["https://raw.githubusercontent.com/AnshSinghSonkhia/pumki-ui/main/public/r/textfield.json"],
        files: [
            {
                path: "components/pumki-ui/form/searchfield.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/form/searchfield.tsx",
            },
        ],
    },
    {
        name: "switch",
        type: "registry:ui",
        title: "Switch",
        description:
            "A component for toggling between two states.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "react-aria-components"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/switch.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/switch.tsx",
            },
        ],
    },
    {
        name: "kbd",
        type: "registry:ui",
        title: "Kbd",
        description:
            "A component for displaying keyboard shortcuts.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "class-variance-authority", "lucide-react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/kbd.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/kbd.tsx",
            },
        ],
    },
    {
        name: "btn-standard",
        type: "registry:ui",
        title: "Button Standard",
        description:
            "A standard button component.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "@radix-ui/react-slot", "lucide-react", "class-variance-authority"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/buttons/btn-standard.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/buttons/btn-standard.tsx",
            },
        ],
    },
    {
        name: "gift-ribbon-divider",
        type: "registry:ui",
        title: "Gift Ribbon Divider",
        description:
            "A decorative divider component with a gift ribbon style.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/custom-assets/gift-ribbon-divider.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/custom-assets/gift-ribbon-divider.tsx",
            },
        ],
    },
    {
        name: "bg-ocean",
        type: "registry:ui",
        title: "Background Ocean",
        description:
            "A background component depicting an ocean scene.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "framer-motion"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/backgrounds/bg-ocean.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/backgrounds/bg-ocean.tsx",
            },
        ],
    },
    {
        name: "badge-marquee",
        type: "registry:ui",
        title: "Badge Marquee",
        description:
            "A component for displaying a scrolling marquee of badges.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/badges/badge-marquee.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/badges/badge-marquee.tsx",
            },
        ],
    },
];
