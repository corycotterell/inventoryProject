import React, { Component } from 'react';
import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Login from './Login'
import DisplayOil from './DisplayOil'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={Login}/>
          <Route path="/oil"component={DisplayOil}/>
        </div>
      </Router>
    );
  }
}

export default App;
