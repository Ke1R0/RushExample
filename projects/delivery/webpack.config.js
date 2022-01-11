const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin =require("eslint-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./examples/src/index.html",
});
module.exports = {
  // entry: path.join(__dirname, "examples/src/index.tsx"),
  entry: "./src/index.ts",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    // alias: {
    //   'react': path.resolve(__dirname, './node_modules/react'),
    //   'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    // }
  },
  // externals: {
  //     // Don't bundle react or react-dom      
  //   react: {
  //       commonjs: "react",
  //       commonjs2: "react",
  //       amd: "React",
  //       root: "React"
  //   },
  //   "react-dom": {
  //       commonjs: "react-dom",
  //       commonjs2: "react-dom",
  //       amd: "ReactDOM",
  //       root: "ReactDOM"
  //   }
  // },
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
    htmlPlugin
  ]
};