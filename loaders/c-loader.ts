function cLoader(content, map, meta) {
  console.log("开始执行cLoader Normal Loader");
  content += "[cLoader->";
  this.callback(
    null,
    `module.exports = '${content}'`
    // content
  );
}

cLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行cLoader Pitching Loader");
};

module.exports = cLoader;
