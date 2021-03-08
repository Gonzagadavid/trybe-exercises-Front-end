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
    if (Number(value) !== noQuantity) {
      const orderState = orderList[columnType];
      const index = orderState.findIndex((item) => item.id === name);
      const newItemValue = { id: name, quantity: value, totalPrice: value * itemPrice };
      orderState.splice(index, 1, newItemValue);
      setOrderList({ ...orderList,
        [columnType]: orderState });
    } else {
      const orderState = orderList[columnType];
      const index = orderState.findIndex((item) => item.id === name);
      orderState.splice(index, 1);
      setOrderList({ ...orderList,
        [columnType]: orderState });
    }
  };

  const handleChange = ({ target }) => {
    const columnType = target.getAttribute('data-type');
    const itemPrice = target.getAttribute('data-price');
    const { name, value } = target;
    const verifyName = orderList[columnType].some((item) => item.id === name);
    if (!verifyName) {
      setOrderList({ ...orderList,
        [columnType]: [...orderList[columnType],
          { id: name, quantity: value, totalPrice: value * itemPrice }] });
    } else {
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
