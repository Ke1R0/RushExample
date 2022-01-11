const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin =require("eslint-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-typescript"
          ],
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};