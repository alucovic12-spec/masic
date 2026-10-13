/** @type {import('next').NextConfig} */
const nextConfig = {
  // `STATIC_EXPORT=1 pnpm build` writes a fully static site to /out for any host
  // (Netlify, Cloudflare Pages, GitHub Pages, cPanel). Security headers for those
  // hosts live in public/_headers.
  output: process.env.STATIC_EXPORT === '1' ? 'export' : undefined,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
