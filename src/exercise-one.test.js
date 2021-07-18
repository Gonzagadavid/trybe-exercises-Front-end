import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  beforeEach(() => render(<TicTacToe />))
  test('Verificar se foi renderizada nove casas', () => {
    const casas = screen.getAllByTestId(/cell_\d/)
    expect(casas).toHaveLength(9)
  });

  test('Começar com todos os espaços em branco.', () => {
    const casas = screen.getAllByTestId(/cell_\d/)
    casas.forEach(casa => expect(casa.firstChild).toBe(null))
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const text = screen.getByText(/Fim de jogo/i)
    expect(text).not.toBeInTheDocument()
  });
});
