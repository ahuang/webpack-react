const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');
const FlowBabelWebpackPlugin= require('flow-babel-webpack-plugin')

const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});

const outputPath = path.join(__dirname, '..', 'dist');


module.exports = {
    entry: {
        main: '@/main',
    },
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                include: path.join(__dirname, '..', 'src'),
                loader: 'vue-loader',
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, '..', 'src'),
                use: 'happypack/loader?id=js'
            }, {
                test: /\.css$/, // 对css文件的处理
                exclude: /node_modules/,
                include: path.join(__dirname, '..', 'src'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'happypack/loader?id=css'
                }),
            }, {
                test: /\.scss$/, // 对scss文件的处理
                exclude: /node_modules/,
                include: path.join(__dirname, '..', 'src'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'happypack/loader?id=scss'
                }),
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
                        name: 'fonts/[name].[ext]?[hash:8]',
                        limit: 30000,
                    }
                }
            }
        ],
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.join(__dirname, '..', 'src'),
            'echarts': 'echarts'
        },
    },
    plugins: [
        new VueLoaderPlugin(),
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
            id: 'css',
            threads: 4,
            threadPool: happyThreadPool,
            loaders: ['css-loader']
        }),
        new HappyPack({
            id: 'scss',
            threads: 4,
            threadPool: happyThreadPool,
            loaders: ['css-loader', 'sass-loader']
        }),
        new FlowBabelWebpackPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
    ],
};
