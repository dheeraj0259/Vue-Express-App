const webpack = require("webpack");
const path    = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

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
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:  "url-loader",
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:  "file-loader",
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
        new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("development") } }),
        new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    resolve: {
        extensions: [
            ".js",
            ".json",
            ".vue",
        ],
        alias:              { "vue$": "vue/dist/vue.esm.js" },
    },
    externals: [
        { "./cptable": "var cptable" },
        { "../xlsx.js": "var _XLSX" },
    ],
};
