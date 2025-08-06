import type { NextConfig } from "next";
import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // Configuration options for Nextra
  // Theme is handled by the layout components
});

const nextConfig: NextConfig = {
  /* config options here */
};

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig);
