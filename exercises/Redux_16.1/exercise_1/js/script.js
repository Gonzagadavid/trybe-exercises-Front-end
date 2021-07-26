import action from './action.js';
import store from './store.js';

const previous = document.getElementById('previous');
const next = document.getElementById('next');
const randomColor = document.getElementById('random-color')

function addEvent(typeEvent, elemento, type) {
  elemento.addEventListener(typeEvent, () => store.dispatch(action(type)));
}

addEvent('click', next, 'NEXT_COLOR');
addEvent('click', previous, 'PREVIOUS_COLOR');
addEvent('click', randomColor, 'RANDOM_COLOR')