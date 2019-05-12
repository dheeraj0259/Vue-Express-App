const express     = require("express");
const compression = require("compression");
const path        = require("path");   

const app = express();
const port = 3008;
const hostname = process.env.NODE_ENV === "production" ? undefined : "127.0.0.1";
const appBaseUrl = "/vue-express"

if (process.env.NODE_ENV !== "production") {
    const webpack = require("webpack");
    const webpackDevMiddleware = require("webpack-dev-middleware");
    const compiler = webpack(require("../build/webpack.config.dev"));
    app.use(webpackDevMiddleware(compiler,{
        stats: { colors: true },
        noInfo: true, // comment this out for more verbose webpack information
    }));
    console.log("Starting Development Environment....");
} else {
    console.log("Starting Production Environment...");
}

app.use(compression());
app.use(`${appBaseUrl}`, express.static("./dist"));
app.use("/*", (err, req, res, next) => {
    console.error(err.stack);
    next();
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
});

const server = app.listen(port, hostname, () => {
    const address = server.address();
    const url = `http://${address.host || "localhost"}:${port}`;
    console.info(`Listening at ${url}${appBaseUrl}`);
})