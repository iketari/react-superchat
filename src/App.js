import React, { Component } from 'react';
import './App.css';

import Chat from './components/Chat/Chat';
import Form from './components/Form/Form';

const INITIAL_STATE = {
  user: 'iketari',
  messages: [
    {
      isMine: true,
      name: 'iketari',
      text: 'Привет! Как поживаешь?'
    },
    {
      isMine: false,
      name: 'imsaxo',
      text: 'Привет! Неплохо.'
    },
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    }
  }

  render() {
    return (
      <div className="App">
        <Chat messages={this.state.messages} user={this.state.user}></Chat>
        <Form onSubmit={this.onMessage.bind(this)}></Form>
      </div>
    );
  }

  onMessage(message) {
    this.setState(state => ({
      ...state,
      messages: [...state.messages, {
        isMine: true,
        text: message,
        name: 'iketari'
      }]
    }));
  }
}

export default App;
