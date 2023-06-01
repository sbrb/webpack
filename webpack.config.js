const port = process.env.PORT || 8000;
const path = require('path');
const HtmlWebpackPlugin = require("HTML-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    //single
    entry: "./src/index.js",
    // multiple
    // entry: {
    //     main:'./src/App.js'
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[fullhash].js',
        chunkFileName: '[name].bundle.[fullhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }, {
                test: /\.css$/i,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }, {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'images'
                },
            },
        ]
    },
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[fullhash].css",
        }),
        new CopyPlugin({
            patterns: [
                { from: "source", to: "dest" },
                { from: "other", to: "public" },
            ],
        }),
    ],
}
