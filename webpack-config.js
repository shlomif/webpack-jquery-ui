var Clean = require('clean-webpack-plugin');
const path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

let real_terser_instance = new TerserPlugin({
                                            // include:/\.js$/,
                                            test:/\.js$/,
                                            // exclude: /\/jquery\//,
                                            terserOptions: {
                                                output: {
                                                    comments: false,
                                                },
                                            },
                                            extractComments: false,
});

console.log("real_terser_instance = ", real_terser_instance);
let terser_instance = (...args)=>{
    console.log("terser_instance called" );
    let ret = real_terser_instance(...args);
    console.log("after terser_instance called" );
    return ret;

    throw "pinnnnnnnnnnnkkkkkkkkkk";
};
terser_instance = real_terser_instance;




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
    externals: {
        jquery: 'jquery',
    },
    output: {
        // path: './dist',
        path: path.resolve(__dirname, 'dist'),
        // path: '/home/shlomif/Download/unpack/games/freecell/webpack-jquery-ui/dist/',
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
        // terser_instance,
        // new ExtractTextPlugin("app.[hash].css"),
        /*
        new HtmlWebpackPlugin({
                              filename: 'index.html',
                              title: 'jQuery UI Autocomplete demo, built with webpack'
        })*/
    ],
    resolve: {
        modules: ['./js/jquery-ui/foo', 'node_modules', ],
    },
};
