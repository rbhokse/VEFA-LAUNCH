import React, { Component } from 'react';
import logo from '../logo-v3.1.png';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Launching soon...</h1>
        <br />
      </header >
    );
  }
}
export default Header;
