import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Site de contenu statique : on préfère un rendu simple et des codes
     HTTP exacts (404 réelle) au prerender mixte. */
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
