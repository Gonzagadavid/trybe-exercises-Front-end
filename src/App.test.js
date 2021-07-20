import React from 'react';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import App from './App';

const resp = [{"name":"Angemon","img":"https://digimon.shadowsmith.com/img/angemon.jpg","level":"Champion"}]

describe('Teste da aplicação toda', () => {

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(resp)
  })

  it('renders App', async () => {
    const { getByText, getByTestId, getByRole } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
     expect(linkElement).toBeInTheDocument();
    
      const input = getByTestId('input');
      fireEvent.change(input, { target : { value: 'angemon'}})
      expect(input.value).toBe('angemon')

      const button = getByTestId('buttonSearch');
      expect(button).toBeInTheDocument();
      fireEvent.click(button)
      await waitForDomChange()
      const h2 = getByRole( 'heading', { level: 2 })
      expect(h2).toBeInTheDocument()
      expect(h2).toHaveTextContent('Angemon')
      expect(global.fetch).toHaveBeenCalled();
      expect(linkElement).not.toBeInTheDocument();
    });
});