// webpack.config.prod.js

const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const path = require('path');
const glob = require('glob-all');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const webpackProdConfig = merge(base, {
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    devtool: 'source-map',
    mode: 'production',
    plugins: [
        new WebpackCleanupPlugin(),
        new FileManagerPlugin({
            onEnd: {
                copy: [{
                    source: path.resolve(__dirname, '../index.html'),
                    destination: path.resolve(__dirname, '../dist/index.html')
                }]
            }
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../index.html'),
            template: path.resolve(__dirname, '../prod.html'),
        }),
        new PurifyCSSPlugin({
            paths: glob.sync([
                path.join(__dirname, '../src/**/*.jsx'),
                path.join(__dirname, '../src/**/*.js'),
            ]),
        }),
        new CompressionWebpackPlugin({ // gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'), // 压缩 js 与css
            threshold: 10240,
            minRatio: 0.8
        }),
        new ExtractTextPlugin('style.[chunkhash].css'),
    ],
    optimization: {
        minimize: true
    }
});

module.exports = webpackProdConfig;
