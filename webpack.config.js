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
        use: ["a-loader.ts"],
        enforce: "pre",
      },
      {
        test: /\.txt$/i,
        use: ["b-loader.ts"],
      },
      {
        test: /\.txt$/i,
        use: ["c-loader.ts"],
        enforce: "post",
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