import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
    render() {
        return (
            <form ref="form" className="form" onSubmit={this.onSubmit.bind(this)}>
                <div>
                    <textarea ref="message" name="message" placeholder="Enter message..."></textarea>
                </div>
                <div>
                    <input className="form__control" type="submit" value="Send" />
                </div>
            </form>
        );
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.refs.message.value);
        this.refs.form.reset();
    }


}