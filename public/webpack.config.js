const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    mode: "development",
    entry: {
        app: "./index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    plugins: [
        new WebpackPwaManifest({
            name: "Budget App",
            short_name: "Budget App",
            description: "An application for Budgeting",
            background_color: "#01579b",
            theme_color: "#ffffff",
            "theme-color": "#ffffff",
            start_url: "/",
            icons: [{
                src: path.resolve("icons/icon-512x512.png"),
                sizes: [192, 512],
                destination: path.join("assets", "icons")
            }]
        })
    ],
    // add configuration to use babel-loader here
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
};
module.exports = config;