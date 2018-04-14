// webpack.config.dev.js

const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.config.base.js');

const webpackDevConfig = merge(base, {
    devServer: {
        contentBase: './',
        compress: true,
        port: 9000,
        hot: true
    },
    devtool: 'inline-source-map' ,
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = webpackDevConfig;

