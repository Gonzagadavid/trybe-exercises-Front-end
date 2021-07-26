import reducer from './reducer.js';

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const container = document.getElementById('container');
  const colorName = document.getElementById('value')
  const getStore = store.getState();
  const { colors, index } = getStore
  container.style.backgroundColor = colors[index]
  colorName.innerHTML = colors[index]
});

export default store;
