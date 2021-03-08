import React, { useContext } from 'react';
import { drinks, desserts, dishes } from '../data';
import MyContext from '../context/MyContext';

function Options() {
  const { handleChange, updateCart } = useContext(MyContext);
  const roundingOption = 2;

  /* const updateState = () => {

    handleChange();
  } */

  return (
    <div className="opt-wall row">
      { !updateCart
        ? (
          <main>
            <div className="dishes-column col d-flex flex-column align-items-center">
              <h3>Comida</h3>
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                { dishes.map((item) => (
                  <div
                    key={ item.name }
                    className="opt
                d-flex flex-column align-items-center justify-content-center"
                  >
                    <h4 className="title">{ item.name }</h4>
                    <span>{ `R$ ${item.value.toFixed(roundingOption)}` }</span>
                    <img
                      className="img-option"
                      src={ item.source }
                      width="100px"
                      alt={ item.name }
                    />
                    <input
                      data-type="comida"
                      data-price={ item.value }
                      name={ item.name }
                      className="input-option"
                      type="number"
                      min="0"
                      placeholder="Quantidade"
                      onChange={ handleChange }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="drinks-column col d-flex flex-column align-items-center">
              <h3>Bebida</h3>
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                { drinks.map((item) => (
                  <div
                    key={ item.name }
                    className="opt d-flex
                flex-column align-items-center justify-content-center"
                  >
                    <h4 className="title">{ item.name }</h4>
                    <span>{ `R$ ${item.value.toFixed(roundingOption)}` }</span>
                    <img
                      className="img-option"
                      src={ item.source }
                      width="100px"
                      alt={ item.name }
                    />
                    <input
                      data-type="bebida"
                      data-price={ item.value }
                      name={ item.name }
                      className="input-option"
                      type="number"
                      min="0"
                      placeholder="Quantidade"
                      onChange={ handleChange }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="desserts-column col d-flex flex-column align-items-center">
              <h3>Sobremesa</h3>
              <div className="d-flex flex-wrap align-items-center justify-content-center">
                { desserts.map((item) => (
                  <div
                    key={ item.name }
                    className="opt d-flex
                flex-column align-items-center justify-content-center"
                  >
                    <h4 className="title">{ item.name }</h4>
                    <span>{ `R$ ${item.value.toFixed(roundingOption)}` }</span>
                    <img
                      className="img-option"
                      src={ item.source }
                      width="100px"
                      alt={ item.name }
                    />
                    <input
                      data-type="sobremesa"
                      data-price={ item.value }
                      name={ item.name }
                      className="input-option"
                      type="number"
                      min="0"
                      placeholder="Quantidade"
                      onChange={ handleChange }
                    />
                  </div>
                ))}
              </div>
            </div>
          </main>)
        : null }
    </div>
  );
}

export default Options;
