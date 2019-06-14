import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

    login = (e) => {
        e.preventDefault();
        this.props.setUsername(e.target.username.value);
    }

    render() {
        return (
            <div className='Login'>
                <form onSubmit={this.login}>
                    <label>Username:</label><br/>
                    <input type='text' id='username' className="Login-username" /><br/>
                    <input type='submit' value='Log In' /><br/>
                </form>
            </div>
        )
    }
}

export default Login;