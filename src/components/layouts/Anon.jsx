import React from 'react';
import { browserHistory } from 'react-router';

export default class Main extends React.Component {
    componentWillMount() {
        if ( this.props.auth.loggedIn() ) {
            browserHistory.replace('/#/home');
        }
    }

    render() {
        return (
            <div className='AnonLayout'>
                {this.props.children}
            </div>
        );
    }
}
