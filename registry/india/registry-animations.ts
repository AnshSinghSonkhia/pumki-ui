import type { Registry } from "./schema";

export const animation: Registry = [
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