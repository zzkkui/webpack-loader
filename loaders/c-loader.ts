function cLoader(content, map, meta) {
  console.log("开始执行cLoader Normal Loader");
  content += "[cLoader->";
  return `module.exports = '${content}'`;
}

// cLoader.pitch = function (remainingRequest, precedingRequest, data) {
//   console.log("开始执行cLoader Pitching Loader");
//   console.log(remainingRequest, precedingRequest, data);
// };

module.exports = cLoader;
