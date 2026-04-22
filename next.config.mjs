/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // استبدل 'novastore' باسم المستودع الخاص بك على GitHub إذا كان مختلفاً
  basePath: '/novastore',
  assetPrefix: '/novastore',
};

export default nextConfig;
