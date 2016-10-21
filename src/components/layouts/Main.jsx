import React from 'react';

export default class Main extends React.Component {
    componentWillMount() {
        if ( !this.props.auth.loggedIn() ) {
            this.context.router.push('/login');
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

Main.contextTypes = {
    router: React.PropTypes.object
};
