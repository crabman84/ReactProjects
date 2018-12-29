import React, { Component } from 'react';
import './App.css';
import KeyPadComponent from "./KeyPadComponent"
import ResultComponent from "./ResultComponent"

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      result: ""
  }
}
  calculate = () =>{
    try{
      this.setState({
        //TODO: output of Calculate method should go here
        result: "calculated result"
      })
    } catch (e){
      this.setState({
        result: "error"
      })
    }
}

  render() {
    return (
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
          <ResultComponent result = {this.stat.result}/>
        {/*TODO: Get keypadComponent to print out buttons to the screen*/}
          <KeyPadComponent />

      </div>
    );
  }
}

export default App;
