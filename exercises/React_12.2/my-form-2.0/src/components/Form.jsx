import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import statesBrazil from '../data';
import Textarea from './Textarea';

class Form extends Component {
  constructor() {
    super();
    this.hendlerMouse = this.hendlerMouse.bind(this);
    this.renderCurriculo = this.renderCurriculo.bind(this);
    this.checkCampos = this.checkCampos.bind(this);
    this.handlerBlur = this.handlerBlur.bind(this);
    this.handlerError = this.handlerError.bind(this);
    this.handlerInput = this.handlerInput.bind(this);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      curriculo: '',
      cargo: '',
      descricao: '',
      formularioError: false,
      erros: {},
      camposObrigatorios: [],
      textCurriculo: [],
      countMouse: 0,
    };
  }

  handlerBlur({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value.replace(/^\d+/g, '') });
  }

  handlerError(name, value, validation) {
    this.setState((beforeState) => {
      const { erros } = beforeState;
      erros[name] = validation(value);
      return { erros };
    }, () => {
      const { erros } = this.state;
      const erro = Object.values(erros).some((bool) => bool);
      this.setState({ formularioError: erro });
    });
  }

  handlerInput(event, validation) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
    if (validation) this.handlerError(name, value, validation);
  }

  async hendlerMouse() {
    const { countMouse } = this.state;
    await this.setState((beforeState) => ({ countMouse: beforeState.countMouse + 1 }));
    if (countMouse === 0) alert('Preencha com cuidado esta informação');
  }

  checkCampos() {
    const obrigatorios = ['nome', 'email', 'cpf', 'endereco', 'cidade', 'estado', 'curriculo', 'cargo', 'descricao'];
    obrigatorios.forEach((campo) => {
      const obj = this.state;
      if (!obj[campo]) {
        this.setState((beforeState) => {
          beforeState.camposObrigatorios.push(campo);
          return { camposObrigatorios: beforeState.camposObrigatorios };
        });
      }
    });
  }

  async renderCurriculo() {
    await this.setState({ camposObrigatorios: [] });
    await this.setState({ textCurriculo: [] });
    await this.checkCampos();
    const { camposObrigatorios } = this.state;
    if (camposObrigatorios.length === 0) {
      const obrigatorios = ['nome', 'email', 'cpf', 'endereco', 'cidade', 'estado', 'curriculo', 'cargo', 'descricao'];
      obrigatorios.forEach((campo) => {
        const obj = this.state;
        this.setState((beforeState) => {
          const text = `${campo.toUpperCase()}: ${obj[campo]}`;
          beforeState.textCurriculo.push(text);
          return { textCurriculo: beforeState.textCurriculo };
        });
      });
    }
  }

  render() {
    const {
      nome, email, cpf, endereco, cidade, estado,
      curriculo, cargo, descricao, camposObrigatorios, textCurriculo,
    } = this.state;
    return (
      <form>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <Input
            inputType="text"
            inputValue={nome.toUpperCase()}
            inputId="nome"
            inputText="Nome:"
            handler={this.handlerInput}
            validation={(value) => value.length > 40}
            erroMessage="excedeu o máximo de 40 caracters"
          />
          <Input
            inputType="text"
            inputValue={email}
            inputId="email"
            inputText="E-mail:"
            handler={this.handlerInput}
            validation={(value) => value.length > 50}
            erroMessage="excedeu o máximo de 50 caracters"
          />
          <Input
            inputType="text"
            inputValue={cpf}
            inputId="cpf"
            inputText="CPF:"
            handler={this.handlerInput}
            validation={(value) => value.length > 11}
            erroMessage="excedeu o máximo de 11 caracters"
          />
          <Input
            inputType="text"
            inputValue={endereco.replace(/\W/g, '')}
            inputId="endereco"
            inputText="Endereço:"
            handler={this.handlerInput}
            validation={(value) => value.length > 200}
            erroMessage="excedeu o máximo de 200 caracters"
          />
          <Input
            inputType="text"
            inputValue={cidade}
            inputId="cidade"
            inputText="Cidade:"
            handler={this.handlerInput}
            validation={(value) => value.length > 28}
            erroMessage="excedeu o máximo de 28 caracters"
            inputBlur={this.handlerBlur}
          />
          <Select
            idSelect="estado"
            handler={this.handlerInput}
            valueSelect={estado}
            text="Estado:"
            options={
              Object.entries(statesBrazil).map((array) => ({ value: array[0], text: array[1] }))
            }
          />
          <Input
            inputType="radio"
            inputValue="casa"
            inputId="residencia"
            inputText="Casa"
            handler={this.handlerInput}
          />
          <Input
            inputType="radio"
            inputValue="apartamento"
            inputId="residencia"
            inputText="Apartamento"
            handler={this.handlerInput}
          />
        </fieldset>
        <fieldset>
          <legend>Dados do seu último emprego</legend>
          <Textarea
            textareaValue={curriculo}
            textareaId="curriculo"
            textareaText="Resumo do curriculo:"
            handler={this.handlerInput}
            validation={(value) => value.length > 1000}
            erroMessage="excedeu o máximo de 1000 caracters"
          />
          <Textarea
            textareaValue={cargo}
            textareaId="cargo"
            textareaText="Cargo:"
            handler={this.handlerInput}
            validation={(value) => value.length > 40}
            erroMessage="excedeu o máximo de 40 caracters"
            mouseEvent={this.hendlerMouse}
          />
          <Textarea
            textareaValue={descricao}
            textareaId="descricao"
            textareaText="Descrição do cargo:"
            handler={this.handlerInput}
            validation={(value) => value.length > 500}
            erroMessage="excedeu o máximo de 500 caracters"
          />
        </fieldset>
        <ul className="error">
          {camposObrigatorios.map((campo) => <li key={campo}>{campo} é campo obrigatório</li>)}
        </ul>
        <button onClick={this.renderCurriculo} type="button">Enviar</button>
        <div>{textCurriculo.map((text) => <p key={text}>{text}</p>)}</div>
      </form>
    );
  }
}

export default Form;
