import React, { Component } from 'react';
import { string, func } from 'prop-types';
import './dogCard.css';

class DogCard extends Component {
  componentDidMount() {
    const { button } = this.props;
    button();
  }

  render() {
    const { imagePath } = this.props;
    return (
      <div className="dogCard">
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
