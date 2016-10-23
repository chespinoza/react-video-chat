import React, { Component } from 'react';
import RoomLayout from './RoomLayout';
let Promise = require('es6-promise').Promise;
import * as actions from '../duck';
import { connect } from 'react-redux'

class RoomView extends Component {
  componentDidMount() {
    this.getWebcamStream()
      .then(stream => {
        this.props.setLocalVideoStream(stream);
        console.log(this.props);
      });
  }

  getWebcamStream() {
    return new Promise((resolve, reject) => {
      let constraints = {
        audio: false,
        video: true
      };
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      navigator.getUserMedia(constraints,
        stream => {
          let src = null;
          window.stream = stream; // stream available to console
          if (window.URL) {
            src = window.URL.createObjectURL(stream);
          } else {
            src = stream;
          }
          return resolve(src);
        },
        err => {
        console.log('navigator.getUserMedia error: ', err);
        return reject(err);
      });
    });

  }

  render() {
    let { localStreamUrl } = this.props;
    return (
      <RoomLayout localStreamUrl={localStreamUrl} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    localStreamUrl: state.room.localStreamUrl
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocalVideoStream: (stream) => dispatch(actions.setLocalVideoStream(stream))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomView);