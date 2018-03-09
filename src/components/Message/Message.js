import React, { Component } from 'react';
import logo from './logo.svg';
import './Message.css';

export default class Message extends Component {
    render() {
        return (
            <div className={'message-box ' + (this.props.message.isMine ? 'left-img' : 'right-img')}>
                <div className="picture">
                    <img src={logo} alt={this.props.message.name} title="name of user"/>
                    <span className="time">{this.props.message.date && this.props.message.date.toTimeString().split(' ')[0]}</span>
                </div>
                <div className="message">
                    <span>{this.props.message.name}</span>
                    <p>{this.props.message.text}</p>
                </div>
            </div>
        );
    }
}