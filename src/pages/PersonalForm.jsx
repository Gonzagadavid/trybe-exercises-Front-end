import { connect } from 'react-redux';
import React, { Component } from 'react';
import { func } from 'prop-types';
import Input from '../components/InputText';
import Select from '../components/Select';
import { estados, inputs } from '../data/personalForm';
import '../components/Form.css';
import Button from '../components/Button';
import { actionPersonal } from '../redux/actions/actions';

class PersonalForm extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
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
    const { state } = this;
    return (
      <fieldset className="Form">
        <legend>Dados Pessoais</legend>
        { inputs
          .map((input) => (<Input
            labelText={ `${input.toUpperCase()}:` }
            inputName={ input }
            inputValue={ state[input] }
            handleChange={ this.onHandleChange }
            key={ input }
          />))}
        <Select
          labelText="ESTADO:"
          inputName="estado"
          inputValue={ state.estado }
          handleChange={ this.onHandleChange }
          options={ estados }
        />
        <Button path="/professionalForm" text="ENVIAR" click={ this.onSubmitForms } />
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  storePersonalData: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  storePersonalData: (currentState) => dispatch(actionPersonal(currentState)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
