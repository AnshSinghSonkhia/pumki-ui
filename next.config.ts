import type { NextConfig } from "next";
import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
    contentDirBasePath: '/docs', // Serve content from /docs path
    defaultShowCopyCode: true,
});

const nextConfig: NextConfig = {
  /* config options here */
};

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig);
