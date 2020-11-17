var path = require("path");

function resolve(filePath) {
  return path.join(__dirname, filePath)
}

module.exports = {
  entry: [resolve("src/Renderer/Entry.fs.js"), resolve("src/Renderer/scss/main.scss")],
  output: {
    filename: "renderer.js"
  },
  module: {
    rules: [
    ]
  }
}
