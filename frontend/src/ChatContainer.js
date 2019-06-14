import React, { Component } from 'react';
import Conversation from './Conversation';
import MessageInput from './MessageInput';
import './ChatContainer.css';

class ChatContainer extends Component {
    state = {
        messages: []
    }

    connection = new WebSocket('ws://localhost:9090/');

    componentDidMount() {
        this.connection.onmessage = (newMessage) => {
            const data = JSON.parse(newMessage.data);
            this.setState({messages: [...this.state.messages, data]});
        }    
    }
    
    getMessage = (newMessage) => {
        const data = {username: this.props.username, message: newMessage}
        this.connection.send(JSON.stringify(data));
    }

    render() {
        return (
            <div id="ChatContainer" className="ChatContainer">
                <Conversation messages={this.state.messages} />
                <MessageInput getMessage={this.getMessage}/>
            </div>
        )
    }
}

export default ChatContainer;