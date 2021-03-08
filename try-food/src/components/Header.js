import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import TryFood from '../images/tryfood.png';

function Header() {
  const { orderList, showCart, updateCart } = useContext(MyContext);

  const roundingOption = 2;
  const start = 0;

  const dishesValue = orderList.comida
    .map((item) => item.totalPrice).reduce((acc, next) => acc + next, start);
  const drinksValue = orderList.bebida
    .map((item) => item.totalPrice).reduce((acc, next) => acc + next, start);
  const dessertsValue = orderList.sobremesa
    .map((item) => item.totalPrice).reduce((acc, next) => acc + next, start);

  return (
    <div>
      <div className="header d-flex flex-row align-items-center justify-content-around">
        <img src={ TryFood } alt="try food logo" width="150px" />
        <div>
          <span className="header-price">
            Valor total:
          </span>
          <span className="header-price">
            { `R$ ${(dishesValue + drinksValue + dessertsValue)
              .toFixed(roundingOption)}` }
          </span>
        </div>
        <button
          className="btn btn-danger"
          type="button"
          onClick={ showCart }
        >
          { updateCart ? 'Ver opções' : 'Ver sacola' }
        </button>
      </div>
    </div>
  );
}

export default Header;
