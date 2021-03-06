const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');// css样式从js文件中分离出来
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
        rules: [
            {
                test: /\.(js|jsx)$/, // 对js,jsx文件的处理
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    },
                },
            }, {
                test: /\.css$/, // 对css文件的处理
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            }, {
                test: /\.scss$/, // 对scss文件的处理
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                }),
            }, {
                test: /\.(png|jpg|gif|jpeg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[name].[ext]',
                            limit: 30000,
                        },
                    }],
            }, {
                test: /\.(woff|svg|eot|ttf)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            limit: 30000,
                        }
                    }],
            },
        ],
    },
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
