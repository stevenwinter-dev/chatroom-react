import React, { Component } from 'react';
import Login from './Login';
import ChatContainer from './ChatContainer';
import './App.css';

class  App extends Component {
  state = {
    username: null
  }

  setUsername = (username) => {
    this.setState({username});
  } 
  render(){
    return (
      <div className="App">
        {
          !this.state.username ?
            <Login setUsername={this.setUsername} />
            :
            <ChatContainer username={this.state.username} /> 
        }
      </div>
    );
  }
}

export default App;