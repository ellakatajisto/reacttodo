import React from 'react';
import './App.css';
import Navigation from './navigation/navbar'
import ListItems from './ListItems'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
          this.handleInput = this.handleInput.bind(this);
          this.addItem = this.addItem.bind(this);
          this.deleteItem = this.deleteItem.bind(this);
          this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault(); //prevents the page from refreshing when adding an item
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      //google: destructuring assignment
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

// filters the items and makes a list of the items whose keys dont match */}
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
    item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  setUpdate(text,key){
    const items = this.state.items;
    items.map(item =>{
      if (item.key===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <p>To do list</p>

        <form id="to-do-form" onSubmit={this.addItem}>
        <input type ="text" placeholder="enter a task"
        value={this.state.currentItem.text}
        onChange={this.handleInput}></input>

        <button type ="submit">Add :)</button>
        </form>
        {/* displays the text when new task is added */}
        <p>{this.state.items.text}</p>
        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}></ListItems>
      </header>
    </div>
  );
}
}
export default App;
