import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import Button from '../components/Button';
import Input from '../components/InputText';
import '../components/Form.css';
import Textarea from '../components/Textarea';
import { actionProfessional } from '../redux/actions/actions';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      resumo: '',
      descricao: '',
      cargo: '',
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmitForms = this.onSubmitForms.bind(this);
  }

  onHandleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onSubmitForms() {
    const { storePersonalData } = this.props;
    storePersonalData({ ...this.state });
  }

  render() {
    const { resumo, cargo, descricao } = this.state;
    return (
      <fieldset className="Form">
        <legend>Dados Profissionais</legend>
        <Textarea
          labelText="RESUMO DO CURRÍCULO:"
          inputName="resumo"
          inputValue={ resumo }
          handleChange={ this.onHandleChange }
        />
        <Input
          labelText="CARGO:"
          inputName="cargo"
          inputValue={ cargo }
          handleChange={ this.onHandleChange }
        />
        <Textarea
          labelText="DESCRIÇÃO DO CARGO:"
          inputName="descricao"
          inputValue={ descricao }
          handleChange={ this.onHandleChange }
        />
        <Button path="/formDisplay" text="ENVIAR" click={ this.onSubmitForms } />
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  storePersonalData: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  storePersonalData: (currentState) => dispatch(actionProfessional(currentState)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
