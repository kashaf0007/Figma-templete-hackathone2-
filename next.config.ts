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
<<<<<<< HEAD
  images: {
    domains: ["cdn.sanity.io"], // Ensure this domain is correct
  },
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during builds
  },
=======
 images:{
  domains:['cdn.sanity.io']
 },
 
    typescript:{
ignoreBuildErrors:true,
},
>>>>>>> d237f5354dfdd0de10386eb7287d0b57f747ba5e
};
     
  


export default nextConfig;


