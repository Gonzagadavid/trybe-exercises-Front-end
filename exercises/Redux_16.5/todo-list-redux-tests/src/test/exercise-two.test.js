import React from 'react';
import { fireEvent, cleanup, screen } from '@testing-library/react';
import App from '../App';
import Item from '../Item';
import renderWithRedux from './helper/renderWithRedux';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação  e no store', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; 
    const { store } = renderWithRedux(<App />);
    const inputTodo = screen.getByLabelText('Tarefa:');
    const addBtn = screen.queryByText('Adicionar');
    const todoList = screen.getByTestId('todo-list');
    
    listTodo.forEach((task) => {
      fireEvent.change(inputTodo, { target: { value: task}});
      fireEvent.click(addBtn);
      expect(todoList).toHaveTextContent(task);
    })
    
    expect(store.getState().listTodo).toStrictEqual(listTodo)
  })
});

describe('Teste do componente Item', () => {
  afterEach(cleanup);
  test('Ao receber uma string como props ela precisa aparecer na tela', () => {
    renderWithRedux(<Item task={'test task'} />);
    const itemTest = screen.getByText('test task');
    expect(itemTest).toBeInTheDocument();
  })
  
  test('Ao receber uma string como props e a mesma estar como completa ela aparece como concluída ', () => {
    renderWithRedux(<Item task={'test task'} />, { listTodo: ['test task'], selected: '', completed: ['test task'] });
    const itemTest = screen.getByText('test task');
    expect(itemTest).toBeInTheDocument();
    const status = screen.getByTestId('status')
    expect(status).toHaveTextContent('concluída');
  })
  
  test('a tarefa inicia em andamento, e ao clicar no status a mesma é adicionada em concluidas e muda para concluída ', () => {
    const { store } = renderWithRedux(<Item task={'test task'} />);
    const itemTest = screen.getByText('test task');
    expect(itemTest).toBeInTheDocument();
    const status = screen.getByTestId('status')
    expect(status).toHaveTextContent('em andamento');
    expect(store.getState().completed).not.toContain('test task')
    fireEvent.click(status)
    expect(status).toHaveTextContent('concluída');
    expect(store.getState().completed).toContain('test task')
    fireEvent.click(status)
    expect(status).toHaveTextContent('em andamento');
    expect(store.getState().completed).not.toContain('test task')
  })
})
