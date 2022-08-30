const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: ["a-loader.ts", "b-loader.ts", "c-loader.ts"],
      },
    ],
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "loaders"),
    ],
  },
};