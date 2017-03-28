import createSagaMiddleware from 'redux-saga';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import rootSagas from '../sagas';
import rootReducer from '../reducers';

import browserHistory from '../modules/history';

const saga = createSagaMiddleware();
const reducer = combineReducers({...rootReducer, routing : routerReducer});

const storeFactory = (initial = {}) => {

    const createStoreWithMiddleware = applyMiddleware(saga, routerMiddleware(browserHistory))(createStore);

    const store = createStoreWithMiddleware(reducer, initial);

    saga.run(rootSagas);

    return store;
};

export default storeFactory;