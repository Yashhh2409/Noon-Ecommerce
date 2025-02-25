const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.avif$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
