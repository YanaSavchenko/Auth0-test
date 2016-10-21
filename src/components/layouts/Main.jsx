import React from 'react';
import { browserHistory } from 'react-router';

export default class Main extends React.Component {
    componentWillMount() {
        if ( !this.props.auth.loggedIn() ) {
            browserHistory.replace('/#/login');
        }
    }

    render() {
        return (
            <div className='MainLayout'>
                {this.props.children}
            </div>
        );
    }
}
