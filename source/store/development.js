import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import rootSagas from '../sagas';
import rootReducer from '../reducers';
import browserHistory from '../modules/history';

const saga = createSagaMiddleware();
const logger = createLogger();
const reducer = combineReducers({...rootReducer, routing : routerReducer});

const storeFactory = (initial = {}) => {

    const createStoreWithMiddleware = compose(
        applyMiddleware(saga, routerMiddleware(browserHistory), logger)
    )(createStore);

    const store = createStoreWithMiddleware(reducer, initial, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    saga.run(rootSagas);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers').default);
        });
    }

    return store;
};

export default storeFactory;