import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selected: '',
      handler: true
    };

    this.addTodo = this.addTodo.bind(this);
    this.onSelected = this.onSelected.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  onSelected(todo) {
    this.setState({ selected: todo, handler: false });
  }

  removeTodo() {
    const { selected } = this.state;
    this.setState((prevState) => {
      const newList = prevState.listTodo.filter((task) => task !== selected);
      return ({ listTodo: newList, selected: '' , handler: true});
    })
  }

  render() {
    const { listTodo, handler } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)}/>
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} onSelected={this.onSelected} />
                </li>
              ))
            }
          </ul>
        }
        <input type="button" data-testid="id-remove" onClick={this.removeTodo} disabled={handler} value="Remover"/>
      </div>
    );
  }
}
export default App;
