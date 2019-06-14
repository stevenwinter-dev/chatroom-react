import React, { Component } from 'react';
import './MessageInput.css';

class MessageInput extends Component {

    messageHandler = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            this.props.getMessage(e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div id="messageInput">
                <input onKeyDown={this.messageHandler} placeholder="Type here then press enter" className="MessageInput"></input>
            </div>
        )
    }
}

export default MessageInput;