import React, { Component } from 'react';

export default class WebcamViewerLayout extends Component {
  render() {
    let {src} = this.props;
    return (
      <div className="webcamViewer">
        <video src={src} autoPlay></video>
      </div>
    )
  }
}
