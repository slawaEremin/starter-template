"use strict";

var webpack = require('webpack'),
    config  = require('./gulp/config.js');

module.exports = {
    watch: !config.isBuild,
    output: {
        filename: '[name].js'
    },
    devtool: config.isBuild? false: 'cheap-module-eval-source-map',
    cache: true,
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel?presets[]=es2015'
            }
        ]
    },
    resolve: {
        root: __dirname + '/frontend/scripts'
    }
};