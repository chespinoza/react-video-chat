import React, { Component } from 'react';
import UrlBarLayout from './UrlBarLayout'
import generateRandomWord from '../../../../helpers/generateRandomWord';

export default class UrlBarView extends Component {

  componentWillMount() {
    let placeholder = generateRandomWord(8);
    this.setState({
      placeholder: placeholder
    });

    this.roomNameTimer = setInterval(() => {
      let placeholder = generateRandomWord(8);
      this.startTypingEffect(placeholder);
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.roomNameTimer);
    clearInterval(this.effectTimer);
  }

  startTypingEffect(text) {
    clearInterval(this.effectTimer);
    this.setState({
      placeholder: text[0]
    });
    let charIndex = 1;
    this.effectTimer = setInterval(() => {
      charIndex++;
      if (charIndex > text.length - 1) {
        clearInterval(this.effectTimer);
      }
      let subtext = text.slice(0, charIndex);
      this.setState({
        placeholder: subtext
      });
    }, 100);
  }

  onSubmit(roomName) {
    console.log(roomName);
  }

  render() {
    return (
      <UrlBarLayout placeholder={this.state.placeholder} onSubmit={this.onSubmit}/>
    );
  }
}