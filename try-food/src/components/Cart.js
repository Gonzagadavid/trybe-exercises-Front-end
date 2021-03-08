import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Cart() {
  const { orderList, updateCart } = useContext(MyContext);
  /* const user = JSON.parse(localStorage.getItem(login)); */
  const start = 0;
  const orderItems = [...orderList.comida, ...orderList.bebida, ...orderList.sobremesa];
  const total = orderItems
    .map((item) => Number(item.quantity))
    .reduce((acc, next) => acc + next, start);

  return (
    <div>
      { updateCart
        ? (
          <main className="cart-wall">
            {/* <h5>{ user.email }</h5> */}
            <div className="list-items">
              { console.log(orderItems) }
              { orderItems
                .map((item) => (
                  <ul
                    key={ item.id }
                    className="d-flex flex-column
                  justify-content-end"
                  >
                    <li className="d-flex flex-row">
                      <p>{ item.quantity }</p>
                      <p>{ item.id }</p>
                      <p>{ `R$ ${item.totalPrice}` }</p>
                    </li>
                  </ul>
                )) }
            </div>
            <div className="d-flex w-50 flex-row justify-content-start">
              <span className="total">Total items:</span>
              <span className="total">{ total }</span>
            </div>
          </main>)
        : null }
    </div>
  );
}

export default Cart;
