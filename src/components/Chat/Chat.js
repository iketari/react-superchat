import React, { Component } from 'react';
import './Chat.css';

import Message from './../Message/Message';

export default class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <div className="chat__container">
                    <div className="header">
                        <h2>You are logged in as {this.props.user}</h2>
                        <small>
                            <a href="/main">To main menu</a>
                        </small>
                    </div>
                    <div className="chat__box">
                        {this.props.messages.map((message, index) => {
                            return <Message key={index} message={message}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}