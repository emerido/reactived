let factory;

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
    factory = require('./production').default;
} else {
    factory = require('./development').default;
}

export default factory();


