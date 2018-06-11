// webpack.config.prod.js

const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const path = require('path');
const glob = require('glob-all');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const webpackProdConfig = merge(base, {  
    entry:{
        main: '@/main.js',
        'vendor-base': ['vue', 'vue-router', 'vuex'],
        'vendor-extend': ['moment', 'axios']
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: "[id].[name].[chunkHash].js",
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
                },{
                    source: path.resolve(__dirname, '../static'),
                    destination: path.resolve(__dirname, '../dist/static')
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
                path.join(__dirname, '../src/**/*.vue'),
                path.join(__dirname, '../src/**/*.js'),
            ]),
        }),
        new CompressionWebpackPlugin({ // gzip 压缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        // 为了支持按需加载抽离css 需要添加allChunks配置，但是会出现css重复问题
        // new ExtractTextPlugin({
        //     filename: '[name].[chunkhash].css',
        //     allChunks:true
        // }),
        // 支持按需加载抽离css 并且css不回出现重复问题
        new ExtractCssChunks({
            filename: '[name].[chunkhash].css',
            chunkFilename:'[id].[chunkhash].css',
        })

    ],
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {           
                'vendor-base': {
                    chunks: 'initial',
                    name: 'vendor-base',
                    test: 'vendor-base', // 手动指定打包内容
                    enforce: true,
                },
                'vendor-extend': {
                    chunks: 'initial',
                    name: 'vendor-extend',
                    test: 'vendor-extend', // 手动指定打包内容
                    enforce: true,
                },   
                'vendor-others': {
                    chunks: 'initial',
                    name: 'vendor-others',
                    test: /[\\/]node_modules[\\/]/,  // 自动识别其他公共包
                    enforce: true,
                    priority: -20, //优先级调低，防止将手动指定内容提前打包
                    reuseExistingChunk: true                    
                },
            },
        },
    }
});

module.exports = webpackProdConfig;
