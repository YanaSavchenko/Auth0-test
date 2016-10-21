import React    from 'react';
import {Button} from 'react-bootstrap';

export default class Login extends React.Component {
    render() {
        return (
            <div className='LoginPage'>
                <Button onClick={this.props.auth.login.bind(this)}>
                    Login
                </Button>
            </div>
        );
    }
}
