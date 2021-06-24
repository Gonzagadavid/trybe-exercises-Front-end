import React, { Component } from 'react';

class EventButton extends Component {
  constructor() {
    super();
    this.state = {
      numerosDeCliques: 0,
      color: 'green',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((estadoAterior) => ({
      numerosDeCliques: estadoAterior.numerosDeCliques + 1,
      color: estadoAterior.numerosDeCliques % 2 !== 0 ? 'green' : '',
    }), () => {
      const { numerosDeCliques, color } = this.state;
      console.log(color, numerosDeCliques);
    });
  }

  render() {
    const { numerosDeCliques, color } = this.state;
    return <button type="button" style={{ background: color }} onClick={this.handleClick}>{numerosDeCliques}</button>;
  }
}

export default EventButton;
