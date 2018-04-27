const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const entryPath = path.join(__dirname, '..', 'src', 'main.js');
const outputPath = path.join(__dirname, '..', 'dist');

module.exports = {
    entry: entryPath,
    output: {
        path: outputPath,
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                    },
                },
            },
        ],
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.join(__dirname, '..', 'src'),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};
