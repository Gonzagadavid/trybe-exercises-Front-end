import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputTodo from './InputTodo';
import Item from './Item';
import { actionRemove, actionSelected  } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props)
    this.removeTodo = this.removeTodo.bind(this);
  }


  removeTodo() {
    const { selected, removeTodo, onSelected } = this.props;
    removeTodo(selected)
    onSelected('')
  }

  render() {
    const { listTodo, selected } = this.props;
    return (
      <div className="App">
        <InputTodo />
        {listTodo &&
          <ul data-testid='todo-list'>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item task={todo} />
                </li>
              ))
            }
          </ul>
        }
        <input type="button" data-testid="id-remove" onClick={this.removeTodo} disabled={!selected} value="Remover"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    listTodo: state.listTodo,
    selected: state.selected 
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (text) => dispatch(actionRemove(text)),
  onSelected: (text) => dispatch(actionSelected(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
