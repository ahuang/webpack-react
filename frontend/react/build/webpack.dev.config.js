// webpack.config.dev.js

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const base = require('./webpack.base.config.js');
const devEnv = require('./env.config.json').dev;

console.log(`--- envConfig ${JSON.stringify(devEnv)} ---`);

const webpackDevConfig = merge(base, {
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
        }],
    },
    devServer: {
        contentBase: './',
        compress: true,
        host: devEnv.devServerHost,
        port: devEnv.devServerPort,
        hot: true,
        proxy: {
            '/api': {
                target: `http://${devEnv.apiHost}:${devEnv.apiPort}`
            }
        }
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
