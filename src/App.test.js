import React from 'react';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import App from './App';

const resp = [{"name":"Angemon","img":"https://digimon.shadowsmith.com/img/angemon.jpg","level":"Champion"}]

describe('Teste da aplicação toda', () => {

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(resp)
  }))

  it('renders App', async () => {
    const { getByText, getByTestId } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
     expect(linkElement).toBeInTheDocument();
    
      const input = getByTestId('input');
      fireEvent.change(input, { target : { value: 'angemon'}})
      expect(input.value).toBe('angemon')

      const button = getByTestId('buttonSearch');
      expect(button).toBeInTheDocument();
      fireEvent.click(button)
      await waitForDomChange()
      const h2 = getByText('Angemon')
      expect(h2).toBeInTheDocument()
      expect(global.fetch).toHaveBeenCalled();
      expect(linkElement).not.toBeInTheDocument();
    });
});