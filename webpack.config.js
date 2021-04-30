const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/app/App.js"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      appConfig: path.resolve(__dirname, "src/app/appConfig.js"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      utils: path.resolve(__dirname, "src/utils")
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
