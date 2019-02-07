import React, { Component } from 'react';
import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login/>
      </div>
    );
  }
}

export default App;
