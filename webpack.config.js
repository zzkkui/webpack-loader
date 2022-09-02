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
        test: /\.less$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }]
        // use: [
        //   // compiles Less to CSS
        //   "css-loader",
        //   "less-loader",
        // ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'simple-babel-loader.js',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "ie >= 11" }]
          ]
        }
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader/src/index.js',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', { targets: "ie >= 11" }]
      //       ]
      //     }
      //   }
      // },
      {
        test: /\.txt$/i,
        use: ["a-loader.ts"],
        enforce: "pre",
      },
      // {
      //   test: /\.txt$/i,
      //   use: ["b-loader.ts"],
      // },
      // {
      //   test: /\.txt$/i,
      //   use: ["c-loader.ts"],
      //   enforce: "post",
      // },
    ],
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "loaders"),
      path.resolve(__dirname, "packages"),
    ],
  },
};