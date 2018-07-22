import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import Homepage from './pages/homepage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
