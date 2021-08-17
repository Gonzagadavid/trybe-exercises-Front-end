import React from 'react';
import  ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const root = document.getElementById('root')

ReactDom.render( 
  < BrowserRouter>
    <App /> 
  </BrowserRouter>,
  root
);