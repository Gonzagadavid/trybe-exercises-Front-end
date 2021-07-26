import store from './store.js';

window.onload = () => {
  setTimeout(() => {
    const state = store.getState().meuSegundoReducer.nome
    store.dispatch({type: `ESTADO_${state === 'Bruna' ? 1 : 2}`})
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