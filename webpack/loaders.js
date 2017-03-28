const args = require('./args');

const ExtractTextPlugin = require('extract-text-webpack-plugin');


const stylesLoaders = ['css?sourceMap', 'postcss?pack=custom', 'sass?sourceMap'];

exports.styles = ExtractTextPlugin.extract(stylesLoaders.join('!'));
