import React, {Component} from 'react';
import {Provider} from "react-redux";
import {Router} from "react-router";
import routes from '../routes';

export default class Root extends Component
{

    static propTypes = {
        history: React.PropTypes.object.isRequired,
        store: React.PropTypes.object.isRequired
    };

    render = () => (
        <Provider store={this.props.store}>
            <Router history={this.props.history} routes={routes()} />
        </Provider>
    )
}