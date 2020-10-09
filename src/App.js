import React from 'react';
import ItemList from './components/ItemList'
import ItemEnter from './components/ItemEnter'
import './App.css';

class App extends React.Component  {
  constructor() {
    super()
    this.state = {
        items: [],
        hovered: -1,
        clicked: -1
    }
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleAsignee = this.handleAsignee.bind(this)
  }

  handleAddItem(text) {
    this.setState(prevState => {
      let updatedItems = prevState.items;
      let newItem = {
        id: updatedItems.length+1,
        text: text,
        asignee: "",
        completed: false
      }
      updatedItems.push(newItem)

      return {
        items: updatedItems
      }
    })
  }

  handleHover(id) {
    this.setState({
      hovered: id
    })
  }

  handleClick(id) {
    this.setState({
      clicked: id
    })
  }

  handleDone(id) {
    this.setState(prevState => {
        const updatedItems = prevState.items.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
        return {
            items: updatedItems
        }
    })
  }

  handleAsignee(id, value) {
    this.setState(prevState => {
        const updatedItems = prevState.items.map(item => {
            if (item.id === id) {
                item.asignee = value
            }
            return item
        })
        return {
            items: updatedItems
        }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="ItemBox">
            <ItemEnter 
              handleAddItem={this.handleAddItem}
            />
            {
              (this.state.items.length > 0) &&
              <ItemList 
                items={this.state.items}
                hovered={this.state.hovered} 
                handleHover={this.handleHover} 
                clicked={this.state.clicked} 
                handleClick={this.handleClick} 
                handleDone={this.handleDone}
                handleAsignee={this.handleAsignee}
              />
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
