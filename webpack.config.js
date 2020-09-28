const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  // CopyWebpackPlugin = require("copy-webpack-plugin"),
  TerserJSPlugin = require("terser-webpack-plugin"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// ExtractTextPlugin = require("extract-text-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "production";
const isProd = !isDevelopment;
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all"
    }
  };

  if (isProd) {
    config.minimizer = [new OptimizeCSSAssetsPlugin(), new TerserJSPlugin()];
  }
  return config;
};

const babelOptions = preset => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"]
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: "babel-loader",
      options: babelOptions()
    }
  ];

  if (isDevelopment) {
    loaders.push("eslint-loader");
  }

  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development", // production
  entry: ["@babel/polyfill", "./index.ts"],

  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "./dist/src/js")
  },

  resolve: {
    extensions: [".js", ".json", ".png", ".css", ".ts"]
    // alias: {
    //     '@': path.resolve(__dirname, "src/assets/asdsaf/sdgdfg/dfhgfh/fghgfh")
    // }
  },

  devServer: {
    port: 8000,
    hot: isDevelopment
  },
  devtool: isDevelopment ? "source-map" : "",
  optimization: optimization(),

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isDevelopment
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",

      options: {
        hmr: isDevelopment,
        reloadAll: true
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },

          "css-loader"
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        use: ["file-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
