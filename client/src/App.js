import React, { Component } from 'react';
import './App.css';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import Login from './Login'
import DisplayInventory from './DisplayInventory'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Navbar.js"
import Register from './Register'
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomePage from './Home'
import DisplayAllProducts from './DisplayAllProducts';
// const theme = ({
//   palette: {
//     primary: {
//       // light: 'ff1a8c',
//       main: '#9900CC',
//       // dark: '339ba5',
//       // contrastText: '#000',
//     },
//     secondary: {
//       // light: '#005b64',
//       main: '#D24CFF',
//       // dark: '#ff9d00',
//       // contrastText: '#000',
//     },
//     // button: {
//     //   backgroundColor: 'orange',
//     //   textColor: 'gray',
//     //   height: 50,
//     //   width: 100,
//     //   borderRadius: 35,
//     //   opacity: 50
//     // },
//   },
// });
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route path="/home" component={HomePage}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/inventory"component={DisplayInventory}/>
          <Route path="/products" component={DisplayAllProducts}/>
        </div>
      </Router>
    );
  }
}

export default App;
