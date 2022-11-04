// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = "style-loader";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
      library: 'MyLibrary',
      libraryTarget: 'umd'
  },
  devServer: {
    open: true,
    host: "localhost",
    port: '3000'
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
    <html lang="en">
      <body>
        <div id="root"></div>
      </body>
    </html>
  `
    }),
    new ModuleFederationPlugin({
      name: 'main',
      filename: 'remoteEntry.js',
      remotes: {
        navMF:'navMF@http://localhost:3001/remoteEntry.js',
        heroMF: 'heroMF@http://localhost:5173/remoteEntry.js'
      },
      exposes: {}
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  optimization: {
    sideEffects: false,
    moduleIds: 'named',
    chunkIds: 'named',
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
