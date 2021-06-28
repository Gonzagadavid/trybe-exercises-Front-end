import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import '../index.css';

class Form extends Component {
  constructor() {
    super();
    this.handlerErro = this.handlerErro.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      name: '',
      age: '',
      language: 'java',
      student: false,
      formularioComErros: false,
      erros: {},
    };
  }

  handlerErro(validation, value, name) {
    const { erros } = this.state;
    this.setState((estadoAnterior) => {
      const objErro = estadoAnterior.erros;
      objErro[name] = validation ? validation(value) : false;
      return { erros: objErro };
    }, () => {
      const checkError = Object.values(erros).some((bool) => bool);
      this.setState({ formularioComErros: checkError });
    });
  }

  handlerChange(event, validation) {
    const { target } = event;
    const {
      value, name, type, checked,
    } = target;
    const newValue = type === 'checkbox' ? checked : value;
    this.setState({ [name]: newValue });
    this.handlerErro(validation, value, name);
  }

  render() {
    const {
      name, age, language, student, formularioComErros,
    } = this.state;
    return (
      <form className="form">
        <fieldset className="forms">
          <legend>Formulario React</legend>
          <Input
            typeInput="text"
            idInput="name"
            handler={this.handlerChange}
            valueInput={name}
            text="Nome:"
            validation={(string) => string.length > 20}
          />

          <Input
            typeInput="number"
            idInput="age"
            handler={this.handlerChange}
            valueInput={age}
            text="Idade:"
            validation={(number) => number > 120}
          />

          <Select
            idSelect="language"
            handler={this.handlerChange}
            value={language}
            options={[
              { value: 'java', text: 'Java' },
              { value: 'javascript', text: 'JavaScript' },
              { value: 'python', text: 'Python' },
            ]}
            text="Na sua opnião, qual a melhor language"
          />

          <Input
            typeInput="checkbox"
            idInput="student"
            handler={this.handlerChange}
            valueInput={student}
            text="Prático essa linguagem atualmente"
          />

          <Input typeInput="file" idInput="project" text="Escolha um projeto você fez" />
          <span className="error">{formularioComErros ? 'não é possivel enviar' : ''}</span>
        </fieldset>
      </form>
    );
  }
}

export default Form;
