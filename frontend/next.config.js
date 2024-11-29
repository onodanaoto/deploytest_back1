/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.NODE_ENV === 'production'
      ? 'https://tech0-gen-8-step3-testapp-py2-25.azurewebsites.net'
      : 'http://localhost:5000'
  }
};

module.exports = nextConfig;
