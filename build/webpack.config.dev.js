const webpack = require("webpack");
const path    = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
console.log("DIrname: ", path.resolve(__dirname, "dist"))
module.exports = {
    mode:    "development",
    devtool: false,
    entry:   [
        "./src/app.js",
    ],
    output: {
        filename: "vue-express/bundle.js",
        path:     path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use:  "vue-loader",
            },
            {
                test:    /\.js$/,
                use:     "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use:  [
                    "vue-style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.scss$/,
                use:  [
                    "style-loader",
                    "css-loader",
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("development")}}),
        new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    resolve: {
        extensions: [
            ".js",
            ".json",
            ".vue",
        ],
        alias: {"vue$": "vue/dist/vue.esm.js", // 'vue/dist/vue.common.js' for webpack 1
        },
    },
    externals: [
        { "./cptable": "var cptable" },
        { "../xlsx.js": "var _XLSX" },
    ],
};