/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'production'
      ? 'https://tech0-gen-8-step3-testapp-node2-25.azurewebsites.net'
      : 'http://localhost:5000'
  }
};

module.exports = nextConfig;
