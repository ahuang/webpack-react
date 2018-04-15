// webpack.config.prod.js

const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.config.base.js');

const webpackProdConfig = merge(base, {
    devtool: 'inline-source-map' ,
    mode: 'production'
});

module.exports = webpackProdConfig;

