var Clean = require('clean-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const terser_instance = new TerserPlugin({
                                         include:/\\.js$/,
                                         terserOptions: {
                                             output: {
                                                 comments: false,
                                             },
                                         },
                                         extractComments: false,
});






module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            terser_instance,
        ],
    },
    entry: {
        main: './index.js'
    },
    output: {
        // path: './dist',
        path: '/home/shlomif/Download/unpack/games/freecell/webpack-jquery-ui/dist/',
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
    module: {
        rules: [

            { test: /\\.css$/, use: [
                // [style-loader](/loaders/style-loader)
                { loader: 'style-loader' },
                // [css-loader](/loaders/css-loader)
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },
                // [sass-loader](/loaders/sass-loader)
                { loader: 'sass-loader' }
            ]},
            { test: /\\.ts$/, use: 'ts-loader' }
        ]
    },

    mode: 'production',
    plugins: [
        new Clean(['dist']),
        terser_instance,
        // new ExtractTextPlugin("app.[hash].css"),
        /*
        new HtmlWebpackPlugin({
                              filename: 'index.html',
                              title: 'jQuery UI Autocomplete demo, built with webpack'
        })*/
    ]
};
