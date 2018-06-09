const path = require('path');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const vendors = [
    'vue',
    'vue-router',
    'vuex',
    'axios'
];
module.exports = {
    mode: 'production',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].[chunkhash:8].js',
        library: '[name]',
        publicPath: '/',
    },
    entry: {
        vendor: vendors,
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.resolve(__dirname, '../prod1.html'),
            template: path.resolve(__dirname, '../prod.html'),
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
    ],
};
