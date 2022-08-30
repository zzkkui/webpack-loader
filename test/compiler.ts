import path from "path";
import webpack, { Stats } from "webpack";
import { createFsFromVolume, Volume } from "memfs";

export default (fixture, options = {}) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: {
            loader: path.resolve(__dirname, "../src/loader.ts"),
            options,
          },
        },
      ],
    },
  });

  compiler.outputFileSystem = createFsFromVolume(new Volume());
  compiler.outputFileSystem.join = path.join.bind(path);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats?: Stats) => {
      if (err) reject(err);
      if (stats) {
        if (stats.hasErrors()) reject(stats.toJson().errors);

        resolve(stats);
      }
    });
  });
};
