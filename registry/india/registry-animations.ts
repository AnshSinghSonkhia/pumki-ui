import type { Registry } from "./schema";

export const animation: Registry = [
    {
        name: "bg-galaxy",
        type: "registry:ui",
        title: "Galaxy Background",
        description:
            "A mesmerizing Dynamic 3D galaxy for your interactive background with twinkling stars and cosmic elements.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["ogl", "react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/animations/galaxy.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/animations/galaxy.tsx",
            },
        ],
    },
    {
        name: "click-spark",
        type: "registry:ui",
        title: "Click Spark",
        description:
            "A component that renders animated spark bursts on click interactions.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/landing/ui/ClickSpark.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/animations/click-spark.tsx",
            },
        ],
    },
    {
        name: "space-particles",
        type: "registry:ui",
        title: "Space Particles",
        description:
            "A component that renders a Dynamic 3D field of particles in space.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react", "three", "@types/three"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/animations/space-particles.tsx",
                type: "registry:ui",
                target: "components/pumki-ui/animations/space-particles.tsx",
            },
        ],
    },
];