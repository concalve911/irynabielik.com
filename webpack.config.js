const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  target,
  devtool,
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "assets/[name][ext]",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () => {
        const header = fs.readFileSync(
          path.resolve(__dirname, "src/components/header.html"),
          "utf-8"
        );
        const main = fs.readFileSync(
          path.resolve(__dirname, "src/index.html"),
          "utf-8"
        );
        const footer = fs.readFileSync(
          path.resolve(__dirname, "src/components/footer.html"),
          "utf-8"
        );

        return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Site</title>
      </head>
      <body>
        <div class="wrapper">
          <div id="header">${header}</div>
          <div id="main">${main}</div>
          <div id="footer">${footer}</div>
        </div>
      </body>
      </html>
    `;
      },
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  devServer: {
    port: 5555,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(woff2?|ttf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[ext]",
        },
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
