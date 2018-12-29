import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      result: ""
  }
}
  render() {
    return (
      <div className="calculator-body">
        <h1>Simple Calculator</h1>


      </div>
    );
  }
}

export default App;
