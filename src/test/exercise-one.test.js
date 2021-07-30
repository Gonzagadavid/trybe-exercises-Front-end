import React from 'react';
import { fireEvent, cleanup, screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './helper/renderWithRedux';

afterEach(cleanup);

describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    renderWithRedux(<App />);
    const addBtn = screen.getByText('Adicionar');
    expect(addBtn).toBeInTheDocument();
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou ao store e a lista`, () => {
    const { store } = renderWithRedux(<App />);
    const inputTodo = screen.getByLabelText('Tarefa:');
    const addBtn = screen.queryByText('Adicionar');
    const todoList = screen.getByTestId('todo-list');
    
    fireEvent.change(inputTodo, { target: { value: 'Tarefa teste1'}})
    fireEvent.click(addBtn)
    expect(store.getState().listTodo).toContain('Tarefa teste1')
    expect(todoList).toHaveTextContent('Tarefa teste1')
    
    fireEvent.change(inputTodo, { target: { value: 'Tarefa teste2'}})
    fireEvent.click(addBtn)
    expect(store.getState().listTodo).toContain('Tarefa teste1')
    expect(todoList).toHaveTextContent('Tarefa teste2')
  });
});
