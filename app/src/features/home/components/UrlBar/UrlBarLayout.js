import React, { Component } from 'react';

export default class UrlBarLayout extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  render() {
    let { placeholder } = this.props;
    return (
      <form className="url-bar">
        <label>wetalk.com/</label>
        <input type="text" id="room-name" ref={(c) => this.roomNameInput = c} placeholder={placeholder}/>
        <input type="submit" className="ui-button" value="Start" onClick={this.submit}/>
      </form>
    );
  }

  submit() {
    let roomName = this.roomNameInput.value || this.props.placeholder;
    this.props.onSubmit(roomName);
  }

}