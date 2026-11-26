import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'ashen-portfolio'; // Match the GitHub Pages project repository name.

const nextConfig: NextConfig = {
  output: 'export',
  distDir: process.env.NEXT_DIST_DIR ?? (isProd ? '.next' : '.next-dev'),
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
