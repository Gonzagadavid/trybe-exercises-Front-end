import React from 'react';
import { render, fireEvent, waitForDomChange } from '@testing-library/react';
import App from './App';

const resp = [{"name":"Angemon","img":"https://digimon.shadowsmith.com/img/angemon.jpg","level":"Champion"}]
const erro = {"ErrorMsg":"Pikachu is not a Digimon in our database."}
describe('Teste da aplicação toda', () => {

  global.fetch = jest.fn()
    .mockResolvedValueOnce({ json: jest.fn().mockResolvedValue(resp)})
    .mockResolvedValueOnce({ json: jest.fn().mockResolvedValue(erro)})

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

      fireEvent.change(input, { target : { value: ''}})
      expect(input.value).toBe('')
      fireEvent.click(button)
      expect(h2).toBeInTheDocument()
      expect(h2).toHaveTextContent('Angemon')
      expect(global.fetch).toHaveBeenCalled();
      expect(linkElement).not.toBeInTheDocument();
      
      global.fetch.mockClear()

      fireEvent.change(input, { target : { value: 'pikachu'}})
      expect(input.value).toBe('pikachu')
      fireEvent.click(button)
      expect(global.fetch).toHaveBeenCalled();
      await waitForDomChange()
      const error = getByText('Pikachu is not a Digimon in our database.')
      expect(error).toBeInTheDocument()
  });
});