import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Home from './component/home/index'
import Profile from './component/profile/index'
import About from './component/about/index'
import Contact from './component/contact'
import { BrowserRouter, Route, Link } from "react-router-dom";
class App extends Component  {
  render() {
    return (
      <div className="body">
        <BrowserRouter>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
