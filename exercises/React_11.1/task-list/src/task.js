import React from 'react'
const tasks = ['terminar sudoku', 'fazer readme', 'postar no ghPages'];

const Task = (value) => <li>{value}</li>;

function  RenderTasks() {
  return (
    <div>
      <ol>
        {tasks.map(Task)}
      </ol>
    </div>
  );
}

export default RenderTasks;