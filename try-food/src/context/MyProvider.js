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

  const removeItemFromList = (orderState, indexPresentInList, itemType) => {
    orderState.splice(indexPresentInList, 1);
    setOrderList({ ...orderList,
      [itemType]: orderState });
  };

  const incrementItemInList = (orderState, indexPresentInList,
    itemName, value, itemType, itemPrice) => {
    const newItemValue = {
      id: itemName, quantity: value, totalPrice: value * itemPrice };
    orderState.splice(indexPresentInList, 1, newItemValue);
    setOrderList({ ...orderList,
      [itemType]: orderState });
  };

  const manageItemsInList = (itemName, value, itemType, itemPrice) => {
    const noQuantity = 0;
    const orderState = orderList[itemType];
    const indexPresentInList = orderState.findIndex((item) => item.id === itemName);
    if (Number(value) === noQuantity) {
      removeItemFromList(orderState, indexPresentInList, itemType);
    }
    incrementItemInList(orderState, indexPresentInList,
      itemName, value, itemType, itemPrice);
  };

  const addItemToList = (value, itemName, itemPrice, itemType) => {
    console.log(orderList[itemType]);
    setOrderList({ ...orderList,
      [itemType]: [...orderList[itemType],
        { id: itemName, quantity: value, totalPrice: value * itemPrice }] });
  };

  const handleChange = ({ target }, itemName, itemPrice, itemType) => {
    const { value } = target;
    const isPresentInList = orderList[itemType].some((item) => item.id === itemName);
    if (!isPresentInList) {
      addItemToList(value, itemName, itemPrice, itemType);
    }
    manageItemsInList(itemName, value, itemType, itemPrice);
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
