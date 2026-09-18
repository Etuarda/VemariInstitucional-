/** @type {import('next').NextConfig} */
const repoName = 'VemariInstitucional-';
const isProd = process.env.NODE_ENV === 'production';

// Em desenvolvimento local (npm run dev), roda na raiz '/' (http://localhost:8080).
// Em produção (npm run build), define o basePath para o subdiretório do GitHub Pages '/VemariInstitucional-'.
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isProd
      ? `/${repoName}`
      : '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
