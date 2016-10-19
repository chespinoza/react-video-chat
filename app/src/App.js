import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import HomeView from './features/home/components/HomeView';
import About from './features/pages/components/About/About';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={HomeView} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
