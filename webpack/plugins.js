const args = require('./args');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
            context: '/',
            postcss: function() {
                return {
                    defaults: [autoprefixer],
                    custom: [
                        autoprefixer({
                            browsers: [
                                'ie >= 9',
                                'ie_mob >= 10',
                                'ff >= 30',
                                'chrome >= 34',
                                'safari >= 7',
                                'opera >= 23',
                                'ios >= 7',
                                'android >= 4.4',
                                'bb >= 10'
                            ]
                        })
                    ]
                };
            }
        }
    }),
    new ExtractTextPlugin('bundle.css')
];

if (args.production === false) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
} else {
    // Add minimization
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        // sourceMap: true
    }));
}

module.exports = plugins;