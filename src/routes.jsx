import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import App   from './App.jsx';
import Main  from './components/layouts/Main.jsx';
import Anon  from './components/layouts/Anon.jsx';
import Home  from './components/pages/Home.jsx';
import Login from './components/pages/Login.jsx';

export default (
    <Route component={App}>
        <Route path="/" component={Anon}>
            <Route path="login"               component={Login} />
            <Route path="access_token=:token" component={Login} />
        </Route>

        <Route path="/" component={Main}>
            <IndexRedirect to="/home" />
            <Route path="home" component={Home}/>
        </Route>
    </Route>
);
