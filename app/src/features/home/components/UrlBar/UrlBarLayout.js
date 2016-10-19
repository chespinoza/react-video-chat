import React, { Component } from 'react';
import './UrlBarLayout.css';

export default class UrlBarLayout extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  render() {
    let { placeholder } = this.props;
    return (
      <div className="url-bar">
        <form className="url-bar-form">
          <label>wetalk.com/</label>
          <input type="text" className="room-name-control" ref={(c) => this.roomNameInput = c} placeholder={placeholder}/>
          <input type="submit" className="submit-button btn btn-primary" value="Start" onClick={this.submit}/>
        </form>
      </div>
    );
  }

  submit(e) {
    e.preventDefault();
    let roomName = this.roomNameInput.value || this.props.placeholder;
    this.props.onSubmit(roomName);
    return false;
  }

}