import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './helper/renderWithRedux';

describe('Testando funcionalidade de apagar item selecionado', () => {
  test('Necessário ter um botão, com o texto Remover, e ele precisa estar desabilitado caso não exista nenhum item selecionado', () => {
    renderWithRedux(<App />);
    const btnRemove = screen.getByTestId('id-remove');
    expect(btnRemove).toBeInTheDocument();
    expect(btnRemove.value).toBe('Remover');
    expect(btnRemove.disabled).toBe(true);
  });

  
  test('Testando a seleção de elemento', () => {
    const { store } = renderWithRedux(<App />);
    const inputTask = screen.getByLabelText('Tarefa:');
    const btnAdd = screen.getByText('Adicionar');
    const btnRemove = screen.getByText('Remover');
   
    fireEvent.change(inputTask, { target: { value: 'Exercitar' } })
    fireEvent.click(btnAdd);
    expect(store.getState().listTodo).toContain('Exercitar')
    
    fireEvent.change(inputTask, { target: { value: 'Estudar' } })
    fireEvent.click(btnAdd);
    expect(store.getState().listTodo).toContain('Estudar')

    const selectTask = screen.getByText('Exercitar');
    expect(selectTask).toBeInTheDocument();
    fireEvent.click(selectTask);
    expect(store.getState().selected).toBe('Exercitar')
    expect(btnRemove.disabled).toBeFalsy();

    fireEvent.click(btnRemove);
    expect(store.getState().listTodo).not.toContain('Exercitar')
    expect(store.getState().selected).toBe('')
    expect(screen.queryByText('Exercitar')).not.toBeInTheDocument();
    expect(btnRemove.disabled).toBeTruthy();
    
    const selectedTask = screen.getByText('Estudar');
    const status = screen.getByTestId('status')
    expect(status).toHaveTextContent('em andamento')
    fireEvent.click(selectedTask);
    expect(store.getState().selected).toBe('Estudar')
    fireEvent.click(status);
    expect(store.getState().completed).toContain('Estudar')
    expect(btnRemove.disabled).toBeFalsy();

    fireEvent.click(btnRemove);
    expect(store.getState().selected).toBe('')
    expect(store.getState().completed).not.toContain('Estudar')
    expect(btnRemove.disabled).toBeTruthy();
  })
});
