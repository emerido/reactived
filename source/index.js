// Polyfills
import 'core-js/shim';
import 'isomorphic-fetch';
import 'classlist-polyfill';

import './styles/default.sass';

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

import browserHistory from './modules/history';
import store from './store';

import Root from './containers/Root';


function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} history={syncHistoryWithStore(browserHistory, store)}/>
        </AppContainer>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept('./containers/Root', () => render(Root));
}

render(Root);