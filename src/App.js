import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem: {text: '', key: ''}
    }
  }

  handleInput = e => {
    // console.log('Hello Input');
    const lItemText= e.target.value;
    const lCurrentItem = {text: lItemText, key: Date.now()}
    this.setState({
      lCurrentItem,
    })
  }

  addItem = e =>{
    e.preventDefault();
    // console.log('Hello Add Item');
    const newItem = this.state.currentItem;
    if(newItem.text !== ''){
      console.log(newItem)
      const newItems = [...this.state.items, newItem]
      this.setState({
        items: newItems,
        currentItem: {text: '', key: ''},
      })
    }

  }

  inputElement =() =>{
    console.log('Hello inputElement');
  }

  render() {
    return (
        <div className="App">
          <ToDoList
              addItem={this.addItem}
              inputElement={this.inputElement}
              hangleInput={this.handleInput}
              currentItem={this.state.currentItem}
          />
        </div>
    );
  }
}

export default App;