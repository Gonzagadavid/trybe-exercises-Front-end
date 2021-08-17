import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';
import GameContext from './GameContext';

const GameCell = ({ content, id })  => {
  const { updateState } = useContext(GameContext)
  return(
  <div
    role="button"
    tabIndex="0"
    aria-label="Cell"
    onKeyPress={() => updateState(id)}
    data-testid={`cell_${id}`}
    className="game-cell"
    onClick={() => updateState(id)}
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
}
GameCell.propTypes = {
  content: PropTypes.oneOf([0, 1, 2]),
  id: PropTypes.number.isRequired,
};

GameCell.defaultProps = {
  content: 0,
};
export default GameCell;