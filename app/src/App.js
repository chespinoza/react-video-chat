import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import HomeView from './features/home/components/HomeView';
import About from './features/pages/components/About/About';
import Room from './features/room/components/RoomView';
class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={HomeView} />
        <Route path="/about" component={About} />
        <Route path="/room/:roomName" component={Room} />
      </Router>
    );
  }
}

export default App;
