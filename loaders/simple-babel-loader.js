const core = require("@babel/core");

const schema = {
  type: "object",
  properties: {
    presets: {
      type: "array",
    },
  },
};

module.exports = function loader(source) {
  const options = this.getOptions(schema);
  const callback = this.async();
  core.transform(source, options, function (err, result) {
    if (err) {
      callback(err);
    } else {
      callback(null, result.code);
    }
  });
};
