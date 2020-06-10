import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
 BrowserRouter as Router,
 Route,
 Switch,
 Link,
 Redirect
} from "react-router-dom"

import Logindemo from './logindemo'
import Home from './Home'
import UserHome from './UserHome'
class App extends Component{
   render() {
      return (
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/Home" component = {Home}/>
            <Route exact path = "/logindemo" component = {Logindemo}/>
            <Route exact path = "/UserHome" component = {UserHome}/>
          </Switch>
        </Router>
      );
  }
}
export default App;
