import React from 'react';

export default class Anon extends React.Component {
    componentWillMount() {
        if ( this.props.auth.loggedIn() ) {
            this.context.router.push('/home');
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

Anon.contextTypes = {
    router: React.PropTypes.object
};
