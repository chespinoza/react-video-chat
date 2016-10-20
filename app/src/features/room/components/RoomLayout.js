import React, { Component } from 'react';
import WebcamViewerView from './WebcamViewer/WebcamViewerView';

export default class RoomLayout extends Component {
  render() {
    return (
      <div className="room-page">
        <WebcamViewerView streamUrl={this.props.localStreamUrl} />
      </div>
    );
  }
}