const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.base.config.js');
const env = require('./env.config.json').dev;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const webpackDevConfig = merge(base, {
    output: {
        chunkFilename: "[id].[name].[chunkHash].js",
    },    
    devServer: {
        contentBase: './',
        compress: true,
        host: env.FrontHost,
        port: env.FrontPort,
        hot: true,
        proxy: {
            '/api': {
                target: `http://${env.BackHost}:${env.BackPort}`,
                logLevel: 'debug'
            },
        },
    },
    devtool: 'cheap-eval-source-map',
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),
        new FileManagerPlugin({
            onEnd: {
                copy: [{
                    source: path.resolve(__dirname, '../dev.html'),
                    destination: path.resolve(__dirname, '../index.html')
                }]
            }
        }),
    ],
});

module.exports = webpackDevConfig;
