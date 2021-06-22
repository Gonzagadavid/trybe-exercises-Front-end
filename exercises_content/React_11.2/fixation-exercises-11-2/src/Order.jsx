// arquivo Order.js
import React from 'react';
import PropTypes from 'prop-types';
import { headphone } from './date';

function Order({ order }) {
  const { user, product, price } = order;
  const { value, currency } = price;

  return (
    <div className="order">
      <p> {user} bought {product} for {value} {currency} </p>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    user: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  }),
};

Order.defaultProps = {
  order: headphone,
};

export default Order;
