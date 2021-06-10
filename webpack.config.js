const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require("@babel/polyfill");

module.exports = {
  mode: "production",
  entry: ["@babel/polyfill", path.resolve(__dirname, "./src/app.js")],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[contenthash].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [new MiniCssExtractPlugin()],
  output: {
    path: path.resolve(__dirname, "./public/src"),
    filename: "bundle.js",
  },
};
