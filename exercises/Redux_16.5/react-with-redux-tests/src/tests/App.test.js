import React from 'react';
import renderWithRedux from './helpers/renderWithRedux';
import App from '../App.jsx';
import { screen, fireEvent, cleanup } from '@testing-library/react';

const imgSrc = (img) => `http://localhost/${img}.jpeg`

describe('testa a rendrização e o funcionamento do componente App', () => {
  afterEach(cleanup)
  
  it('verifica a mudança de estado do semaforo no vermelho', () => {
    const { store } = renderWithRedux(<App />);
    const signal = screen.getByTestId('signal');
    expect(signal).toBeInTheDocument();

    const btnGreen = screen.getByText('Green');
    expect(btnGreen).toBeInTheDocument();
    
    const btnYellow = screen.getByText('Yellow');
    expect(btnYellow).toBeInTheDocument();
    
    const btnRed = screen.getByText('Red');
    expect(btnRed).toBeInTheDocument();
    
    fireEvent.click(btnGreen)
    expect(store.getState().reducerSignal.signal.color).toBe('green')
    expect(signal).toHaveProperty('src', imgSrc('greenSignal'))

    fireEvent.click(btnYellow)
    expect(store.getState().reducerSignal.signal.color).toBe('yellow')
    expect(signal).toHaveProperty('src', imgSrc('yellowSignal'))
   
    fireEvent.click(btnRed)
    expect(store.getState().reducerSignal.signal.color).toBe('red')
    expect(signal).toHaveProperty('src', imgSrc('redSignal'))
  })

  it('verifica a mudanca de estado do carro vermelho', () => {
    const { store } = renderWithRedux(<App />);

    const redCar  = screen.getByAltText('red car')
    expect(redCar).toBeInTheDocument()
    
    const redCarBtn = screen.getByTestId('red-car')
    expect(redCarBtn).toBeInTheDocument()
    
    expect(store.getState().reducerCar.cars.red).toBeFalsy()
    expect(redCar).toHaveProperty('className', 'car-left')
    
    fireEvent.click(redCarBtn)
    expect(store.getState().reducerCar.cars.red).toBeTruthy()
    expect(redCar).toHaveProperty('className', 'car-right')
    
    fireEvent.click(redCarBtn)
    expect(store.getState().reducerCar.cars.red).toBeFalsy()
    expect(redCar).toHaveProperty('className', 'car-left')
  })
    
  it('verifica a mudanca de estado do carro azul', () => {
    const { store } = renderWithRedux(<App />);

    const blueCar  = screen.getByAltText('blue car')
    expect(blueCar).toBeInTheDocument()

    const blueCarBtn = screen.getByTestId('blue-car')
    expect(blueCarBtn).toBeInTheDocument()
    
    expect(store.getState().reducerCar.cars.blue).toBeFalsy()
    expect(blueCar).toHaveProperty('className', 'car-left')
    
    fireEvent.click(blueCarBtn)
    expect(store.getState().reducerCar.cars.blue).toBeTruthy()
    expect(blueCar).toHaveProperty('className', 'car-right')
    
    fireEvent.click(blueCarBtn)
    expect(store.getState().reducerCar.cars.blue).toBeFalsy()
    expect(blueCar).toHaveProperty('className', 'car-left')
  })    
    
  it('verifica a mudanca de estado do carro amarelo', () => {
    const { store } = renderWithRedux(<App />);

    const yellowCar  = screen.getByAltText('yellow car')
    expect(yellowCar).toBeInTheDocument()

    const yellowCarBtn = screen.getByTestId('yellow-car')
    expect(yellowCarBtn).toBeInTheDocument()
    
    expect(store.getState().reducerCar.cars.yellow).toBeFalsy()
    expect(yellowCar).toHaveProperty('className', 'car-left')
    
    fireEvent.click(yellowCarBtn)
    expect(store.getState().reducerCar.cars.yellow).toBeTruthy()
    expect(yellowCar).toHaveProperty('className', 'car-right')
    
    fireEvent.click(yellowCarBtn)
    expect(store.getState().reducerCar.cars.yellow).toBeFalsy()
    expect(yellowCar).toHaveProperty('className', 'car-left')
  })
})
