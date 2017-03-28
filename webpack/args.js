const args = require('yargs');

const argv = args
    .boolean('p').alias('p', 'production').default('p', false)
    .argv;

module.exports = {
    production : argv.production,
    environment: argv.production ? 'production' : 'development'
};