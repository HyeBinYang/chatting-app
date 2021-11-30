module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
      config.module.rules.push({
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      });
    }

    return config;
  },
};
