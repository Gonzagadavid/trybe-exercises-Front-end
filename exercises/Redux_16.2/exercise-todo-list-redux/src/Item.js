import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { actionSelected, completedTodos } from './redux/actions';
import './Item.css'

function Item(props) {
  const { task, onSelected, completed, onCompleted } = props
  return (
    <div className="Item">
      <span onClick={() => onSelected(task)}>{task}</span>
      <span onClick={() => onCompleted(task)} >{`status: ${completed.includes(task) ? 'concluída' : 'em andamento'}`}</span>
    </div>
  );
}

Item.propTypes = {
  task: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSelected: (task) => dispatch(actionSelected(task)),
  onCompleted: (task) => dispatch(completedTodos(task))
})

const mapStateToProps = (state)  => ({
  completed: state.completed
})

export default connect(mapStateToProps, mapDispatchToProps)(Item)