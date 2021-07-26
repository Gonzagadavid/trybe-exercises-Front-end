import store from './store.js';

window.onload = () => {
  setTimeout(() => {
    const state1 = store.getState().meuPrimeiroReducer.nome
    const state2 = store.getState().meuSegundoReducer.nome
    store.dispatch({type: `ESTADO_${state1 === 'Bruna' ? 1 : 2}`})
    store.dispatch({type: `ESTADO_${state2 === 'Bruna' ? 1 : 2}`})
  }, 3000);
};


function renderText(obj, number) {
  const keys = Object.keys(obj)
  keys.forEach(key => {
    const element = document.getElementById(`${key}-${number}`)
    element.innerHTML = obj[key]
  })
}

store.subscribe(() => {
  const state1 = store.getState().meuPrimeiroReducer
  const state2 = store.getState().meuSegundoReducer
  renderText(state1, 1)
  renderText(state2, 2)
})