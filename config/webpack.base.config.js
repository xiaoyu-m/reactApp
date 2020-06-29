const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const aliyunTheme = require("@ant-design/aliyun-theme");
const CopyPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin("css/[name]-one.css");
const extractLESS = new ExtractTextPlugin("css/[name]-two.css");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([
          "style-loader",
          "css-loader",
          "postcss-loader",
        ]),
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      { test: /\.(jpg|png|jpeg|gif)$/, loader: "url-loader" },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: aliyunTheme,
            },
          },
          {
            loader: "sass-resources-loader",
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, "../src/assets/less/public.less"),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" },
        // { from: 'other', to: 'public' },
      ],
    }),
  ],
  resolve: {
    // 取消后缀名
    extensions: [".js", ".jsx", ".json"],
    // 设置别名
    alias: {
      "@": path.join(__dirname, "../src/"),
    },
  },
};
