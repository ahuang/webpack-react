const path = require('path');
const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const vendors = [
    'react',
    'react-dom',
    'react-router'
];
module.exports = {
    mode: 'production',
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].[chunkhash].js',
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
