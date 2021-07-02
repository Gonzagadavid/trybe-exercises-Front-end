import React, { Component } from 'react';
import PropTypes, { arrayOf, func, string } from 'prop-types';

class DogList extends Component {
  render() {
    const { list, renderItem, value } = this.props;
    return (
      <ul>
        {
          list
            .map((item) => (
              <li
                role="presentation"
                key={ item.nome }
                onClick={ () => renderItem(item) }
              >
                {item[value]}
              </li>))
        }
      </ul>
    );
  }
}

DogList.propTypes = {
  list: arrayOf(PropTypes.object).isRequired,
  renderItem: func.isRequired,
  value: string.isRequired,
};

export default DogList;
