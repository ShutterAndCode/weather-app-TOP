import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import webpack from "webpack";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const env = dotenv.config().parsed;

export default {
  entry: "./src/index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/weather-app-TOP/",
  },

  devServer: {
    static: "./dist",
    open: true,
    hot: false,
    liveReload: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
    new webpack.DefinePlugin({
      "process.env.VISUAL_CROSSING_KEY": JSON.stringify(
        env.VISUAL_CROSSING_KEY,
      ),
      "process.env.GIPHY_KEY": JSON.stringify(env.GIPHY_KEY),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
