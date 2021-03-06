const path = require('path');
const os = require('os');
const HappyPack = require('happypack');
const webpack = require('webpack');

const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // css样式从js文件中分离出来
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin")

const FlowBabelWebpackPlugin= require('flow-babel-webpack-plugin')


module.exports = {
    entry: {
        bundle: path.join(__dirname, '..', 'src', 'app.js')
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/, // 对js,jsx文件的处理
            exclude: /node_modules/,
            include: path.join(__dirname, '..', 'src'),
            use: 'happypack/loader?id=js'
        },{
            test: /\.(css|scss)$/, // 对scss文件的处理
            exclude: /node_modules/,
            include: path.join(__dirname, '..', 'src'),
            use: [
                ExtractCssChunks.loader,
                'happypack/loader?id=scss'
              ]             
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: 'happypack/loader?id=scss'
            // }),
        }, {
            test: /\.(png|jpg|gif|jpeg)$/,
            include: path.join(__dirname, '..', 'src'),
            exclude: /node_modules/,
            use: {
                loader: 'url-loader',
                options: {
                    name: 'images/[name].[ext]',
                    limit: 30000,
                }
            }
        }, {
            test: /\.(woff|svg|eot|ttf)$/,
            include: path.join(__dirname, '..', 'src'),
            exclude: /node_modules/,
            use: {
                loader: 'url-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                    limit: 30000,
                }
            }
        }],
    },
    plugins: [
        new HappyPack({
            id: 'js',
            threads: 4,
            threadPool: happyThreadPool,
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: [],     
                    }
                }
            ]
        }),
        new HappyPack({
            id: 'scss',
            threads: 4,
            threadPool: happyThreadPool,
            loaders: ['css-loader', 'sass-loader']
        }),
        new FlowBabelWebpackPlugin()        
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    }

};
