const ExtractTextPlugin = require('extract-text-webpack-plugin');// css样式从js文件中分离出来
const path = require('path');

const entryPath = path.join(__dirname, '..', 'src', 'app.js');
const outputPath = path.join(__dirname, '..', 'dist');

module.exports = {
    entry: {
        bundle: entryPath
    },
    output: {
        path: outputPath,
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
                        loader: 'url-loader'
                    }],
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css') // 提取出来的样式放在style.css文件中
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    }

};
