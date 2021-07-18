import React from 'react';
import {render, cleanup, fireEvent, screen} from '@testing-library/react';
import TicTacToe from './TicTacToe';
import xImage from './x.png';
import oImage from './o.svg';

afterEach(cleanup);

// Alguns describe já possuem a orientação do que precisa ser testado.
// Pode modifica-los mas lembre que os testes precisam testar todo o comportamento,
// das casas. 
// A funcionalidade não está pronta, portanto esse teste não passará. Crie-a.

describe("Comportamento de cada casa", () => {
  afterEach(cleanup);
  beforeEach(() => render(<TicTacToe />))
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    // Pode modificar esse teste para se adequar a forma que estiver fazendo o jogo.
    // Aqui está simulando o clique em uma casa

    fireEvent.click(screen.getByTestId('cell_0'));
    expect(screen.getAllByAltText('X')).toHaveLength(1);
    expect(screen.queryByAltText('O')).toBeNull();
    
    // Foi testado apenas um clique em uma casa
    // Agora precisa testar um segundo clique em outra casa e verificar o comportamento esperado. 
    fireEvent.click(screen.getByTestId('cell_1'));
    expect(screen.getAllByAltText('O')).toHaveLength(1);

  });

  test("O simbolo precisa ser trocado ao clicar em uma casa para a outra, 'X' para 'O', começando com o 'X'", () => {
    const cells = screen.getAllByTestId(/cell_\d/)
    cells.forEach((cell, i)=> {
      const src = `http://localhost/${i % 2 ? oImage : xImage}`
      fireEvent.click(cell); 
      console.log(cell)
      expect(cell.firstChild.src).toBe(src)
    })
  });

  test("Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo", () => {


  });

  test("O simbolo das casas precisam ser mantidas, quando outra casa for clicada", () => {


  });

  test("O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.", () => {


  });
});
