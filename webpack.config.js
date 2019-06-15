const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    devtool: "source-map",
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve(__dirname + "/dist/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./frontend/public/index.html",
            filename: "./index.html",
            favicon: "./frontend/public/favicon.ico"
        })
    ],
    devServer: {
        compress: true,
        port: 7070
    }
}