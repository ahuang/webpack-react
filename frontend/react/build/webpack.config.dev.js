// webpack.config.dev.js

const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.config.base.js');
const devEnv = require('./env-config.json').dev;

console.log(`--- envConfig ${JSON.stringify(devEnv)} ---`);

const webpackDevConfig = merge(base, {
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
        }],
    },
    devServer: {
        contentBase: './',
        compress: true,
        host: devEnv.devServerHost,
        port: devEnv.devServerPort,
        hot: true,
        proxy: {
            '/api': {
                target: `http://${devEnv.apiHost}:${devEnv.apiPort}`
            }
        }
    },
    devtool: 'cheap-eval-source-map',
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});

module.exports = webpackDevConfig;