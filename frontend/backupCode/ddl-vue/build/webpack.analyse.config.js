const merge = require('webpack-merge');
const prod = require('./webpack.prod.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackAnalyizerConfig = merge(prod, {
    plugins: [
        new BundleAnalyzerPlugin()
    ],
});

module.exports = webpackAnalyizerConfig;

