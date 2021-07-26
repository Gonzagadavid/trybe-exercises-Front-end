
const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case 'ESTADO_1': return ESTADO_INICIAL_2 
    
    case 'ESTADO_2': return ESTADO_INICIAL_1 
    
    default:
      return state;
    }
  };
  
  const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case 'ESTADO_1': return ESTADO_INICIAL_1
    
    case 'ESTADO_2': return ESTADO_INICIAL_2 

    default:
      return state;
  }
};

const reducers = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer})

export default reducers