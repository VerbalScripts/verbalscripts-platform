/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // reactStrictMode: true,
  // swcMinify: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
