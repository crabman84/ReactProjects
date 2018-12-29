import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList'
import ToDoItems from './TodoItems'

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
    const itemText= e.target.value;
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
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

    deleteItem = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems,
        })
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
            <ToDoItems
                entries = {this.state.items}
                deleteItem={this.deleteItem}
            />
        </div>
    );
  }
}

export default App;