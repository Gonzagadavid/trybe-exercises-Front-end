import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);
    const addBtn = getByText('Adicionar');
    expect(addBtn).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const {getByLabelText,queryByText, getByTestId} = render(<App />);
    const inputTodo = getByLabelText('Tarefa:');
    const addBtn = queryByText('Adicionar');
    const todoList = getByTestId('todo-list');
    
    fireEvent.change(inputTodo, { target: { value: 'Tarefa teste'}})
    fireEvent.change(inputTodo, { target: { value: 'Tarefa teste2'}})
    fireEvent.click(addBtn)
    expect(todoList).toHaveTextContent('Tarefa teste')
    expect(todoList).toHaveTextContent('Tarefa teste2')
  });
});
