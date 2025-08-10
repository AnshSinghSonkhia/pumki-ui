import type { Registry } from "@/registry/india/schema";

export const lib: Registry = [
    {
        name: "utils",
        type: "registry:lib",
        dependencies: ["clsx", "tailwind-merge"],
        files: [
            {
                path: "lib/utils.ts",
                type: "registry:lib",
            },
        ],
    },
];