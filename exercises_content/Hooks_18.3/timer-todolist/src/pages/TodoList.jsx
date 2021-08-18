import React, { useState } from 'react';
import useArray from '../hooks/useArray';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [selected, setSelected] = useState('');
  const [list, addList, removeTask] = useArray([]);
  const postTask = (task) => {
    addList(task);
    setTask('');
  }
  const deleteTask = () => {
    removeTask(selected);
    setSelected('');
  }
  return (
    <div>
      <h2>
        Agora é hora de sentir o poder dos Hooks customizados na pele!
        Faça uma Todo list simples usando um hook customizado useArray 
        para manipular os dados guardados na lista.
      </h2>
      <div>
        <h3>To Do List</h3>
        <input type="text" value={task} onChange={(({target: { value }}) => setTask(value))} />
        <button type="button" onClick={() => postTask(task)}>Add Task</button>
        <ul>
          {list.map((item, index) => (
            <li 
            key={item} 
            onClick={() => setSelected(index)} 
            style={{ color: index === selected ? 'red' : 'black'}}
            >
              {item}
            </li>
          ))}
        </ul>
          <button type="button" onClick={() => deleteTask(selected)}>Remove Task</button>
      </div>
    </div>
  )
}

export default TodoList;
