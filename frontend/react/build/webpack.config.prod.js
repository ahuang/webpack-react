// webpack.config.prod.js

const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const path = require('path');
const glob = require('glob-all');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

const webpackProdConfig = merge(base, {
    devtool: 'source-map',
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
        new FileManagerPlugin({
            onEnd: {
                copy: [{
                    source: path.resolve(__dirname, '../index.html'),
                    destination: path.resolve(__dirname, '../dist/index.html')
                }]
            }
        }),
        new PurifyCSSPlugin({
            paths: glob.sync([
                path.join(__dirname, '../src/**/*.jsx'),
                path.join(__dirname, '../src/**/*.js'),
            ]),
        }),
    ],
    optimization: {
        minimize: true
    }
});

module.exports = webpackProdConfig;
