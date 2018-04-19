// webpack.config.prod.js

const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

const webpackProdConfig = merge(base, {
    devtool: 'inline-source-map',
    mode: 'production',
    plugins: [
        new WebpackCleanupPlugin()
    ]
});

module.exports = webpackProdConfig;

