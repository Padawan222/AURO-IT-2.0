const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    // main

    main1: path.join(__dirname, "src/index/french/index.js"),
    main2: path.join(__dirname, "src/index/french/contact/contact.js"),
    main3: path.join(
      __dirname,
      "src/index/french/nos-competences/nos-competences.js"
    ),
    main4: path.join(
      __dirname,
      "src/index/french/qui-sommes-nous/qui-sommes-nous.js"
    ),
    main5: path.join(
      __dirname,
      "src/index/french/pme-organisations/pme-organisations.js"
    ),
    main6: path.join(
      __dirname,
      "src/index/french/tpe-associations/tpe-associations.js"
    ),

    // catala

    catala1: path.join(__dirname, "src/index/catala/cat-index.js"),
    catala2: path.join(
      __dirname,
      "src/index/catala/cat-contact/cat-contact.js"
    ),
    catala3: path.join(
      __dirname,
      "src/index/catala/cat-nos-competences/cat-nos-competences.js"
    ),
    catala4: path.join(
      __dirname,
      "src/index/catala/cat-qui-sommes-nous/cat-qui-sommes-nous.js"
    ),
    catala5: path.join(
      __dirname,
      "src/index/catala/cat-pme-organisations/cat-pme-organisations.js"
    ),
    catala6: path.join(
      __dirname,
      "src/index/catala/cat-tpe-associations/cat-tpe-associations.js"
    ),

    // english

    english1: path.join(__dirname, "src/index/english/eng-index.js"),
    english2: path.join(
      __dirname,
      "src/index/english/eng-contact/eng-contact.js"
    ),
    english3: path.join(
      __dirname,
      "src/index/english/eng-nos-competences/eng-nos-competences.js"
    ),
    english4: path.join(
      __dirname,
      "src/index/english/eng-qui-sommes-nous/eng-qui-sommes-nous.js"
    ),
    english5: path.join(
      __dirname,
      "src/index/english/eng-pme-organisations/eng-pme-organisations.js"
    ),
    english6: path.join(
      __dirname,
      "src/index/english/eng-tpe-associations/eng-tpe-associations.js"
    ),

    // spanish

    spanish1: path.join(__dirname, "src/index/spanish/spa-index.js"),
    spanish2: path.join(
      __dirname,
      "src/index/spanish/spa-contact/spa-contact.js"
    ),
    spanish3: path.join(
      __dirname,
      "src/index/spanish/spa-nos-competences/spa-nos-competences.js"
    ),
    spanish4: path.join(
      __dirname,
      "src/index/spanish/spa-qui-sommes-nous/spa-qui-sommes-nous.js"
    ),
    spanish5: path.join(
      __dirname,
      "src/index/spanish/spa-pme-organisations/spa-pme-organisations.js"
    ),
    spanish6: path.join(
      __dirname,
      "src/index/spanish/spa-tpe-associations/spa-tpe-associations.js"
    ),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },

  plugins: [
    // french

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index/french/index.html",
      chunks: ["main1"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/index/french/contact/contact.html",
      chunks: ["main2"],
    }),
    new HtmlWebpackPlugin({
      filename: "nos-competences.html",
      template: "./src/index/french/nos-competences/nos-competences.html",
      chunks: ["main3"],
    }),
    new HtmlWebpackPlugin({
      filename: "qui-sommes-nous.html",
      template: "./src/index/french/qui-sommes-nous/qui-sommes-nous.html",
      chunks: ["main4"],
    }),
    new HtmlWebpackPlugin({
      filename: "pme-organisations.html",
      template: "./src/index/french/pme-organisations/pme-organisations.html",
      chunks: ["main5"],
    }),
    new HtmlWebpackPlugin({
      filename: "tpe-associations.html",
      template: "./src/index/french/tpe-associations/tpe-associations.html",
      chunks: ["main6"],
    }),

    // catala

    new HtmlWebpackPlugin({
      filename: "cat-index.html",
      template: "./src/index/catala/cat-index.html",
      chunks: ["catala1"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-contact.html",
      template: "./src/index/catala/cat-contact/cat-contact.html",
      chunks: ["catala2"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-nos-competences.html",
      template:
        "./src/index/catala/cat-nos-competences/cat-nos-competences.html",
      chunks: ["catala3"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-qui-sommes-nous.html",
      template:
        "./src/index/catala/cat-qui-sommes-nous/cat-qui-sommes-nous.html",
      chunks: ["catala4"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-pme-organisations.html",
      template:
        "./src/index/catala/cat-pme-organisations/cat-pme-organisations.html",
      chunks: ["catala5"],
    }),
    new HtmlWebpackPlugin({
      filename: "cat-tpe-associations.html",
      template:
        "./src/index/catala/cat-tpe-associations/cat-tpe-associations.html",
      chunks: ["catala6"],
    }),

    // english

    new HtmlWebpackPlugin({
      filename: "eng-index.html",
      template: "./src/index/english/eng-index.html",
      chunks: ["english1"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-contact.html",
      template: "./src/index/english/eng-contact/eng-contact.html",
      chunks: ["english2"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-nos-competences.html",
      template:
        "./src/index/english/eng-nos-competences/eng-nos-competences.html",
      chunks: ["english3"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-qui-sommes-nous.html",
      template:
        "./src/index/english/eng-qui-sommes-nous/eng-qui-sommes-nous.html",
      chunks: ["english4"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-pme-organisations.html",
      template:
        "./src/index/english/eng-pme-organisations/eng-pme-organisations.html",
      chunks: ["english5"],
    }),
    new HtmlWebpackPlugin({
      filename: "eng-tpe-associations.html",
      template:
        "./src/index/english/eng-tpe-associations/eng-tpe-associations.html",
      chunks: ["english6"],
    }),

    // spanish

    new HtmlWebpackPlugin({
      filename: "spa-index.html",
      template: "./src/index/spanish/spa-index.html",
      chunks: ["spanish1"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-contact.html",
      template: "./src/index/spanish/spa-contact/spa-contact.html",
      chunks: ["spanish2"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-nos-competences.html",
      template:
        "./src/index/spanish/spa-nos-competences/spa-nos-competences.html",
      chunks: ["spanish3"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-qui-sommes-nous.html",
      template:
        "./src/index/spanish/spa-qui-sommes-nous/spa-qui-sommes-nous.html",
      chunks: ["spanish4"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-pme-organisations.html",
      template:
        "./src/index/spanish/spa-pme-organisations/spa-pme-organisations.html",
      chunks: ["spanish5"],
    }),
    new HtmlWebpackPlugin({
      filename: "spa-tpe-associations.html",
      template:
        "./src/index/spanish/spa-tpe-associations/spa-tpe-associations.html",
      chunks: ["spanish6"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/images/*",
          to: "src/assets/images/[name][ext]",
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  stats: "maximal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: true,
    static: path.resolve(__dirname, "./dist"),
    watchFiles: ["./src/**"],
    port: 4001,
    hot: true,
  },
};
