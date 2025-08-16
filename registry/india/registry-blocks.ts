import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "logocloud-jugnu",
        type: "registry:block",
        title: "Jugnu Logo Cloud Section",
        description:
            "A component that displays a sparkling effect with a smooth animation.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: ["https://raw.githubusercontent.com/AnshSinghSonkhia/pumki-ui/main/public/r/sparkles.json"],
        files: [
            {
                path: "components/pumki-ui/sections/logo-cloud/jugnu.tsx",
                type: "registry:block",
                target: "components/pumki-ui/sections/logo-cloud/jugnu.tsx",
            },
        ],
    },
    {
        name: "logocloud-sp1",
        type: "registry:block",
        title: "Social Proof Logo Cloud Sections",
        description:
            "Magic UI inspired logo cloud section with smooth animations.",
        author: "Ansh Singh Sonkhia",
        dependencies: [],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/sections/logo-cloud/sp1.tsx",
                type: "registry:block",
                target: "components/pumki-ui/sections/logo-cloud/sp1.tsx",
            },
        ],
    },
    {
        name: "feature-responsive-cards",
        type: "registry:block",
        title: "Responsive Cards Feature Section",
        description:
            "Responsive cards that adapt to any screen size and provide an optimal viewing experience.",
        author: "Ansh Singh Sonkhia",
        dependencies: ["react"],
        registryDependencies: [],
        files: [
            {
                path: "components/pumki-ui/sections/features/responsive-cards.tsx",
                type: "registry:block",
                target: "components/pumki-ui/sections/features/responsive-cards.tsx",
            },
        ],
    },
];