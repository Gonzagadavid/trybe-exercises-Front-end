import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const {getByLabelText, queryByText, getByTestId } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
    const inputTodo = getByLabelText('Tarefa:');
    const addBtn = queryByText('Adicionar');
    const todoList = getByTestId('todo-list');
    
    listTodo.forEach((task) => {
      fireEvent.change(inputTodo, { target: { value: task}});
      fireEvent.click(addBtn);
      expect(todoList).toHaveTextContent(task);
    })
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const { getByText } = render(<Item  content="test task"/>)
    const itemTest = getByText('test task')
    expect(itemTest).toBeInTheDocument();
  })
})
