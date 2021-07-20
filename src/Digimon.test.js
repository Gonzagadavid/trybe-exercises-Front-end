import React from 'react';
import { render } from '@testing-library/react';
import Digimon from './Digimon';

const digimon = {"name":"Angemon","img":"https://digimon.shadowsmith.com/img/angemon.jpg","level":"Champion"}


describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    const {} = render(<Digimon digimon={digimon} />)
  });
});