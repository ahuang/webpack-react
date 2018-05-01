const path = require('path');
const os = require('os');
const HappyPack = require('happypack');

const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // css样式从js文件中分离出来
// const webpack = require('webpack');


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
            use: 'happypack/loader?id=js'
        }, {
            test: /\.css$/, // 对css文件的处理
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'happypack/loader?id=css'
            }),
        }, {
            test: /\.scss$/, // 对scss文件的处理
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'happypack/loader?id=scss'
            }),
        }, {
            test: /\.(png|jpg|gif|jpeg)$/,
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
            threadPool: happyThreadPool,
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                }
            ]
        }),
        new HappyPack({
            id: 'css',
            threadPool: happyThreadPool,
            loaders: ['css-loader']
        }),
        new HappyPack({
            id: 'scss',
            threadPool: happyThreadPool,
            loaders: ['css-loader', 'sass-loader']
        })
    ],
    // 4.0中已经删除CommonsChunkPlugin，替换成了splitChunks
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    }

};
