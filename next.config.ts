/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/Travel_website-frontend' : '',    
  assetPrefix: isProd ? '/Travel_website-frontend/' : '', 
  output: "export",              
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
