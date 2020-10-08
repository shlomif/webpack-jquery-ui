var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                             include:/\.js$/,
                             terserOptions: {
                                 output: {
                                     comments: false,
                                 },
                             },
                             extractComments: false,
            }),
        ],
    },
    entry: {
        main: './index.js'
    },
    output: {
        path: './dist',
        filename: 'tot.js'
    },
    /*
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file'
            },
        ]
    },
    */
    mode: 'production',
    plugins: [
        new Clean(['dist']),
        new ExtractTextPlugin("app.[hash].css"),
        /*
        new HtmlWebpackPlugin({
                              filename: 'index.html',
                              title: 'jQuery UI Autocomplete demo, built with webpack'
        })*/
    ]
};
