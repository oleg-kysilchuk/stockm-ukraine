const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PxToRem = require("postcss-pxtorem");
const FontminPlugin = require("fontmin-webpack");
const multipage = require("./multipage.config");

const mode = process.env.NODE_ENV || "development";

const devMode = mode === "development";

const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

const htmlPlugins = multipage.pages.map((page) => {
  return new HtmlWebpackPlugin({
    inject: true,
    template: page.template,
    filename: page.page,
    chunks: [...page.chunks],
  });
});

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: {
    ...multipage.entry,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[name][contenthash][ext]",
  },
  plugins: [
    ...htmlPlugins,
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // new FontminPlugin({
    //   autodetect: true, // automatically pull unicode characters from CSS
    //   glyphs: ["\uf0c8" /* extra glyphs to include */],
    //   // note: these settings are mutually exclusive and allowedFilesRegex has priority over skippedFilesRegex
    //   allowedFilesRegex: null, // RegExp to only target specific fonts by their names
    //   skippedFilesRegex: null, // RegExp to skip specific fonts by their names
    // }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(c|sc|sa)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  // PxToRem({ propList: ["*"] }),
                  // require("postcss-preset-env"),
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(jpe?g|png|webp|svg|gif|ico)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
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
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: "asset/resource",
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
