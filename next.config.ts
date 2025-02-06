// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//  images:{
//   domains:['cdn.sanity.io']
//  },
 
//     eslint: {
//       ignoreDuringBuilds: true,
//   },

  
// };  

// export default nextConfig;

import { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Ensure this domain is correct
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during builds
  },
};

export default nextConfig;


