import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Cover from './component/Portfolio/index'
class App extends Component {
  render() {
    return (
      <div className="body">
        <Cover />
      </div>
    );
  }
}

export default App;
