import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter'

test('renders learn react link', () => {
  const { getByText, getByRole, history } = renderWithRouter(<App />);
  const linkElement = getByText(/david gonzaga/i);
  expect(linkElement).toBeInTheDocument();
  
  const Home = getByRole('link', {name: 'Home'})
  const About = getByRole('link', {name: 'About'})
  const Contact = getByRole('link', {name: 'Contact'})
  const Projects = getByRole('link', {name: 'Projects'})

  expect(getByRole('heading', { name: 'Página inicial'}))
  history.location.pathname = '/'
  
  fireEvent.click(About)
  expect(getByRole('heading', { name: 'Quem sou eu'}))
  history.location.pathname = '/about'
  
  fireEvent.click(Contact)
  expect(getByRole('heading', { name: 'Contato'}))
  history.location.pathname = '/contact'
  
  fireEvent.click(Projects)
  expect(getByRole('heading', { name: 'Projetos'}))
  history.location.pathname = '/projects'
  
  history.push('/não-existe')
  expect(getByRole('heading', { name: 'Essa Página não existe'}))
  
  fireEvent.click(Home)
  expect(getByRole('heading', { name: 'Página inicial'}))
  history.location.pathname = '/'

});
