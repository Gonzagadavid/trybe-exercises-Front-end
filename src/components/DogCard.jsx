import React, { Component } from 'react';
import { string, func } from 'prop-types';

class DogCard extends Component {
  componentDidMount() {
    const { button } = this.props;
    button();
  }

  render() {
    const { imagePath } = this.props;
    return (
      <div>
        <img src={ imagePath } alt="cachorros felizes" />
      </div>
    );
  }
}

DogCard.propTypes = {
  imagePath: string.isRequired,
  button: func.isRequired,
};

export default DogCard;
