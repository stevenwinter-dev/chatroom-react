import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './Conversation.css';

class Conversation extends Component {

    displayMessage = () => this.props.messages.map(message => <div key={uuid()} className="hi">{message.username}: {message.message}</div>)
    
    componentDidMount() {
        this.scrollToBottom();
      }
    
      componentDidUpdate() {
        this.scrollToBottom();
      }
    
      scrollToBottom() {
        this.lastMessage.scrollIntoView({ behavior: 'smooth' });
      }
    

    render() {
        return (
            <div className="Conversation-outer">
            <div id="Conversation" className="Conversation Conversation-scrollbar">
                { this.displayMessage() }
            <div ref={lastMessage => { this.lastMessage = lastMessage; }}></div>
            </div>
            </div>
            
            
        )
    }
}

export default Conversation;