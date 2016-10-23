import React, { Component } from 'react';
import WebcamViewerLayout from './WebcamViewerLayout';

export default class WebcamViewerView extends Component {
  render() {
    let {streamUrl} = this.props;
    return (
      <WebcamViewerLayout src={streamUrl}/>
    )
  }
}

WebcamViewerView.defaultsProps = {
  streamUrl: null
}