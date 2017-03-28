const path = require('path');
const args = require('./args');

const helpers = [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
];

/**
 * Reducing output file size for production
 *
 * @param {string} file
 *
 * @returns {string[]|string}
 */
exports.entry = function (file) {
    if (args.production) {
        return file;
    }
    return helpers.slice().concat(file)
};

exports.path = function (address) {
    return path.resolve(__dirname, '..', address);
};