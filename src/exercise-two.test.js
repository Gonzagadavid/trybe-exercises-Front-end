import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import TicTacToe from './TicTacToe';

afterEach(cleanup);

// Alguns describe já possuem a orientação do que precisa ser testado.
// Pode modifica-lós mas lembre que os teste precisam testar todo o comportamento,
// Das casas. 
// Funcionalidade não está pronta portanto esse teste não passará,
// necessário criar a funcionalidade também.

describe("Comportamento de cada casa", () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    const {getByTestId, getAllByAltText, queryByAltText} = render(<TicTacToe />);

    // Pode modificar esse teste para se adequar a forma que estiver fazendo o jogo.
    // Aqui está simulando o clique em uma casa

    fireEvent.click(getByTestId('cell_0'));
    expect(getAllByAltText('X')).toHaveLength(1);
    expect(queryByAltText('O')).toBeNull();
    
    // Foi testado apenas um clique em uma casa
    // Agora precisa testar um segundo clique em outra casa e verificar o comportamento esperado. 

  });

  test("O simbolo precisa ser trocado ao clicar em uma casa para a outra, 'X' para 'O', começando com o 'X'", () => {

  });

  test("Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo", () => {


  });

  test("O simbolo das casas precisam ser mantidas, quando outra casa for clicada", () => {


  });

  test("O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.", () => {


  });
});
