import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Login from "./containers/Login";

export default function () {
    return (
        <Route path="/">
            <IndexRoute component={Login}/>
        </Route>
    )
}
