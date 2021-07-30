export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const SELECTED = 'SELECTED'
export const COMPLETED = 'COMPLETED'

export const actionAddTodo = (state) => ({ type: ADD_TODO, state }) 

export const actionRemove = (state) => ({ type: REMOVE_TODO, state})

export const actionSelected = (state) => ({ type: SELECTED, state }) 

export const completedTodos = (state) => ({ type: COMPLETED, state})