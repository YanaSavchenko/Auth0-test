require('babel-polyfill');

const $        = window.$ = window.jQuery = require('jquery');
window.React   = require('react');

import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes.jsx';

import AuthService from './utils/AuthService';
import config from './config.js';

$(document).ready(function() {
    const auth = new AuthService( config.AUTH0_CLIENT_ID, config.AUTH0_DOMAIN );

    ReactDOM.render(
        <Router
            createElement = {(Component, props) => <Component {...props} auth={auth} />}
            routes={routes}
            history={hashHistory} />,
        document.getElementById('content')
    );
});
