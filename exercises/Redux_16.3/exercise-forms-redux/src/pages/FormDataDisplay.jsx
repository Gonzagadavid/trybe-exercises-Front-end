import { string, shape } from 'prop-types';

import React from 'react';
import { connect } from 'react-redux';

const FormDataDisplay = (props) => {
  const { personal, professional } = props;
  const personalKeys = Object.keys(personal);
  const professionalKeys = Object.keys(professional);
  return (
    <div>
      <h2>Dados Pessoais</h2>
      <ul>
        {personalKeys.map((key) => <li key={ key }>{`${key}: ${personal[key]}`}</li>)}
      </ul>
      <h2>Dados Professional</h2>
      <ul>
        {
          professionalKeys
            .map((key) => <li key={ key }>{`${key}: ${professional[key]}`}</li>)
        }
      </ul>
    </div>
  );
};

FormDataDisplay.propTypes = {
  personal: shape({
    nome: string,
    email: string,
    cpf: string,
    endereço: string,
    cidade: string,
    estado: string,
  }).isRequired,
  professional: shape({
    resumo: string,
    descricao: string,
    cargo: string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  personal: state.personal,
  professional: state.professional,
});

export default connect(mapStateToProps)(FormDataDisplay);
