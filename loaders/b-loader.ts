function bLoader(content, map, meta) {
  console.log("开始执行bLoader Normal Loader");
  content += "bLoader->";
  this.callback(null, content);
}

bLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行bLoader Pitching Loader");
  return `bLoader.pitch`;
};

module.exports = bLoader;
