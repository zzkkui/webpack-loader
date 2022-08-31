function bLoader(content, map, meta) {
  console.log("开始执行bLoader Normal Loader");
  content += "bLoader->";
  this.callback(
    null,
    this.data.isLastLoader ? `module.exports = '${content}'` : content
  );
  // return this.data.isLastLoader ? `module.exports = '${content}'` : content;
}

bLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行bLoader Pitching Loader");
  if (!precedingRequest) {
    data.isLastLoader = true;
  }
};

module.exports = bLoader;
