import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../components/Input';
import Button from '../components/Button';
import TextArea from '../components/TextArea';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitForm() {
    const { history } = this.props;
    console.log(this.state);
    history.push('/formdisplay');
  }

  render() {
    const { curriculo, cargo, descricao } = this.state;
    return (
      <fieldset>

        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ this.onSubmitForm }
        />
      </fieldset>
    );
  }
}
ProfessionalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfessionalForm;
