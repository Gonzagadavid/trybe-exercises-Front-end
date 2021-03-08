```javascript

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [orderList, setOrderList] = useState({
    comida: [],
    bebida: [],
    sobremesa: [],
  });

  const [updateCart, setUpdateCart] = useState(false);

  const showCart = () => {
    if (updateCart) {
      setUpdateCart(false);
    } else {
      setUpdateCart(true);
    }
  };

  const verifyIfExcluded = (name, value, columnType, itemPrice) => {
    const noQuantity = 0;
    // Se a quantidade do item for diferente de 0, incrementar ele na lista
    if (Number(value) !== noQuantity) {
      const orderState = orderList[columnType];
      // Encontrar o item pelo nome
      const index = orderState.findIndex((item) => item.id === name);
      // Estabelecer os novos valores para o item
      const newItemValue = { id: name, quantity: value, totalPrice: value * itemPrice };
      // Substituir o item antigo pelo item com os novos valores na lista
      orderState.splice(index, 1, newItemValue);
      setOrderList({ ...orderList,
        [columnType]: orderState });
    } else {
      // Se a quantidade do item for igual a 0, remover ele da lista
      const orderState = orderList[columnType];
      // Encontrar o item pelo nome
      const index = orderState.findIndex((item) => item.id === name);
      // Remover da lista
      orderState.splice(index, 1);
      setOrderList({ ...orderList,
        [columnType]: orderState });
    }
  };

  const handleChange = ({ target }) => {
    // Verificando se é comida, bebida ou sobremesa
    const columnType = target.getAttribute('data-type');
    // Guardando o preço do item
    const itemPrice = target.getAttribute('data-price');
    const { name, value } = target;
    // Verificar se na lista o id já existe
    const verifyName = orderList[columnType].some((item) => item.id === name);
    if (!verifyName) {
      // Se o id não existir, criar um item na lista com o id
      setOrderList({ ...orderList,
        [columnType]: [...orderList[columnType],
          { id: name, quantity: value, totalPrice: value * itemPrice }] });
    } else {
      // Agora precisamos verificar se o item foi retirado do pedido
      verifyIfExcluded(name, value, columnType, itemPrice);
    }
  };

  return (
    <MyContext.Provider value={ { handleChange, orderList, updateCart, showCart } }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;

```