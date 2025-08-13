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
        registryDependencies: ["https://pumki-ui.vercel.app/r/sparkles.json"],
        files: [
            {
                path: "components/pumki-ui/sections/logo-cloud/jugnu.tsx",
                type: "registry:block",
                target: "components/pumki-ui/sections/logo-cloud/jugnu.tsx",
            },
        ],
    },
];