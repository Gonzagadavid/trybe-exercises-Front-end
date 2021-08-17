import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [randomNumber, setNumber] = useState({ number: 0, multiple: true});
  const time = 10000;
  
  const interval  = setInterval(() => {
    const random = Math.round(Math.random() * 100);
    setNumber({number: random , multiple: random % 5 === 0 || random % 3 === 0})
    setTimeout(() => {
      setNumber({ number: random, multiple: false})
    }, 4000)
  }, time)
    
  useEffect(() => () => clearInterval(interval))
  
  return (
    <div>
      <h2>Faça um componente funcional React com as seguintes funcionalidades:</h2>
      <ul>
        <li>A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;</li>
        <li>Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;</li>
        <li>A mensagem de acerto é removida 4 segundos depois de ser exibida;</li>
        <li>O timer é removido quando o componente é desmontado.</li>
      </ul>
      <div>
        <h3>Timer</h3>
        {randomNumber.multiple && <p>Acerto!!!</p>}
        <p>{randomNumber.number}</p>
      </div>
    </div>
  )
}

export default Timer;
