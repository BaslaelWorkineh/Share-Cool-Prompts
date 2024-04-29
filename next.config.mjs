/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
dotenv.config();


const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com'],
      },
};

export default nextConfig;
