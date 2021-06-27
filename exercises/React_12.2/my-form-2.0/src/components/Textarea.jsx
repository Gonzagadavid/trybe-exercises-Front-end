import React, { Component } from 'react';

class Textarea extends Component {
  render() {
    const {
      textareaValue, textareaId, textareaText, handler, validation, erroMessage, mouseEvent,
    } = this.props;
    return (
      <label htmlFor="textareaId" className="element">{textareaText}
        <textarea
          value={textareaValue}
          id={textareaId}
          name={textareaId}
          onInput={(event) => handler(event, validation)}
          onMouseEnter={mouseEvent}
        />
        <span className="error">{validation && validation(textareaValue) ? erroMessage : ''}</span>
      </label>
    );
  }
}

export default Textarea;
