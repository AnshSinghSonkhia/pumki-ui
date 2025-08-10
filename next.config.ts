import type { NextConfig } from "next";
import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
    contentDirBasePath: '/docs', // Serve content from /docs path
    defaultShowCopyCode: true,
});

const nextConfig: NextConfig = {
  /* Disable CSS optimization (cssnano) to avoid parse errors from :has(), oklch() etc. */
  optimizeCss: false,
  
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/getting-started',
        permanent: true,
      },
      {
        source: '/docs/components',
        destination: '/docs/components/buttons',
        permanent: true,
      },
    ];
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  outputFileTracingIncludes:{"/**":["components/pumki-ui/**/*"]},
  async headers() {
        return [
            {
                source: '/r/:path*',
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig);
