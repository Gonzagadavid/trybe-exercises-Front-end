import React from 'react';
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';
import TicTacToe from '../components/TicTacToe';

describe('verifica a mensagens de fim de jogo', () => {
  beforeEach(() => render(<TicTacToe />));
  afterEach(cleanup);

  it('verifica se quando o primeiro jogador vence aparece a mensagem "Jogador "X" Ganhou!!"', () => {
    Array(3).fill(0).forEach((_, i) => {
      fireEvent.click(screen.getByTestId(`cell_${i}`));
      if (i < 2)fireEvent.click(screen.getByTestId(`cell_${i + 3}`));
    });
    const menssage = screen.getByText('Jogador "X" Ganhou!!');
    expect(menssage).toBeInTheDocument();
  });
});
