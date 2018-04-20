// webpack.config.prod.js

const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const path = require('path');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackProdConfig = merge(base, {
    devtool: 'inline-source-map',
    mode: 'production',
    plugins: [
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'demo1',
            inject: true,
            filename: path.resolve(__dirname, '../index.html'),
            template: path.resolve(__dirname, '../template.html'),
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../index.html'),
            to: path.resolve(__dirname, '../dist/index.html'),
            toType: 'file'
        }])
    ]
});

module.exports = webpackProdConfig;

