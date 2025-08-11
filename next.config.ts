import type { NextConfig } from "next";
import nextra from "nextra";
import type { Configuration } from 'webpack';


// Set up Nextra with its configuration
const withNextra = nextra({
    contentDirBasePath: '/docs', // Serve content from /docs path
    defaultShowCopyCode: true,
});

const nextConfig: NextConfig = {
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
    },
    webpack: (config) => {
        config.plugins = config.plugins.filter(
            (plugin: any) => plugin.constructor.name !== 'CssMinimizerPlugin'
        );
        return config;
    },
};

// Export the final Next.js config with Nextra included
export default withNextra(nextConfig);
