import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

const GameCell = ({ content, onClick, id })  => (
  <div
    role="button"
    tabIndex="0"
    aria-label="Cell"
    onKeyPress={onClick}
    data-testid={`cell_${id}`}
    className="game-cell"
    onClick={onClick}
  >
    {
      content > 0 &&
      <img 
        data-testid={`cell_${id}_image`} 
        alt={ `${ content === 2 ? 'O' : 'X'}`}
        src={ content === 2 ? oImage : xImage}
      />
    }
  </div>
);

GameCell.propTypes = {
  content: PropTypes.oneOf([0, 1, 2]),
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

GameCell.defaultProps = {
  content: 0,
};
export default GameCell;