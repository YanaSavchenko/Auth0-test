import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <div className='AnonLayout'>
                {this.props.children}
            </div>
        );
    }
}
