function aLoader(content, map, meta) {
  console.log("开始执行aLoader Normal Loader");
  content += "aLoader]";
  return this.data.isLastLoader ? `module.exports = '${content}'` : content;
}

aLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行aLoader Pitching Loader");
  if (!precedingRequest) {
    data.isLastLoader = true;
  }
};

module.exports = aLoader;
