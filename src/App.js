import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/navbar.component';
import Description from './components/description/description.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Hello Vedant"
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Description />
      </div>
    );
  }
}

export default App;
