const { resolve } = require('path');

const args = require('./args');
const utils = require('./utils');
const loaders = require('./loaders');

module.exports = {
    entry: {
        bundle: utils.entry('./index.js')
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, '../dist'),
        publicPath: '/'
    },

    context: resolve(__dirname, '../source'),
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    resolveLoader: {
        moduleExtensions: ['-loader'],
    },

    module: {
        rules: [
            {
                test: /\.sass$/,
                loader: loaders.styles
            },
            {
                test: /\.js$/,
                use: [
                    'babel?cacheDirectory',
                ],
                exclude: /node_modules/
            },
        ],
    },

    devtool: args.production ? '' : '#inline-source-map',

    plugins: require('./plugins'),

    devServer: {
        hot: true,
        proxy: {
            "/api" : {
                target: "http://sso.33slona.ru",
                // secure: false,
            }
        },
        historyApiFallback: true,
        contentBase: resolve(__dirname, '../dist'),
        publicPath: '/'
    }
};