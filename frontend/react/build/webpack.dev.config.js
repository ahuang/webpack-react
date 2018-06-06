// webpack.config.dev.js

const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

const base = require('./webpack.base.config.js');
const devEnv = require('./env.config.json').dev;

console.log(`--- envConfig ${JSON.stringify(devEnv)} ---`);

const webpackDevConfig = merge(base, {   
    // 通过husky使用commit之前进行eslint检查，关闭实时检查
    // module: {
    //     rules: [{
    //         enforce: 'pre',
    //         test: /\.(js|jsx)$/,
    //         exclude: /node_modules/,
    //         loader: 'eslint-loader',
    //     }],
    // },
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
    // devtool: 'cheap-module-source-map', // create-react-app config
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // 为了支持dynamic import  并且css样式打包不重复方案
        new ExtractCssChunks({
            filename: 'style.css', 
            hot: true
        }),          
        // // new ExtractTextPlugin('style.css'),
        // // 为了支持dynamic import 设置allChunks: true
        // new ExtractTextPlugin({
        //     filename: 'style.css', 
        //     allChunks: true
        // }),      
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
