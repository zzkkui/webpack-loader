function aLoader(content, map, meta) {
  console.log("开始执行aLoader Normal Loader");
  // content += "aLoader]";
  return `module.exports = '${content}'`;
  // return content;
}

aLoader.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行aLoader Pitching Loader");
};

module.exports = aLoader;
