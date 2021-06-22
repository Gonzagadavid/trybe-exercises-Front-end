import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selectTask: '',
      disabled: true,
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleRemove = this.handleRemove.bind(this);


  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  handleEvent({ target }) {
    this.setState({
      selectTask: target.innerHTML,
      disabled: false,
    })  
  }

  handleRemove() {
    const { listTodo, selectTask } = this.state;
    const newArr = listTodo.filter((itemList) => itemList !== selectTask)
    this.setState({
      listTodo: newArr,
      disabled: true,
    })
  }

  render() {
    const { listTodo, disabled } = this.state;
    return (
      <div className="App">
        <InputTodo disabled={ disabled } handleRemove={ this.handleRemove } addTodo={(todo) => this.addTodo(todo)} />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1} >
                  <Item content={todo} handleEvent={ this.handleEvent } />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
