import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

const digimon = {"name":"Angemon","img":"https://digimon.shadowsmith.com/img/angemon.jpg","level":"Champion"};


describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const { getByTestId, getByRole } = render(<Digimon digimon={digimon} />);
    const name = getByTestId('digimonName');
    const level = getByTestId('digimonLevel');
    const img = getByRole('img')

    expect(name).toHaveTextContent('Angemon')
    expect(level).toHaveTextContent('Champion')
    expect(img).toBeInTheDocument()
    expect(img).toHaveProperty('src', digimon.img)
  });
});