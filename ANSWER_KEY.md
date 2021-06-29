## exercise-1 missing_store

#### src/store/index.js:
```javascript
import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(rootReducer, compose(extension));

export default store;
```

---

## exercise-2 missing_reducers

#### src/reducers/index.js:
```javascript
import { combineReducers } from 'redux';
import Africa from './Africa';
import America from './America';
import Antarctica from './Antarctica';
import Asia from './Asia';
import Europe from './Europe';
import Oceania from './Oceania';

const rootReducer = combineReducers(
  { Africa, America, Antarctica, Asia, Europe, Oceania },
);

export default rootReducer;
```

#### src/reducers/Africa.js:
```javascript
import { AFRICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const africaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AFRICA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default africaContinent;
```

#### src/reducers/America.js:
```javascript
import { AMERICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const americaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AMERICA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default americaContinent;
```

#### src/reducers/Antarctica.js:
```javascript
import { ANTARCTICA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const antarcticaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ANTARCTICA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default antarcticaContinent;
```

#### src/reducers/Asia.js:
```javascript
import { ASIA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const asiaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ASIA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default asiaContinent;
```

#### src/reducers/Europe.js:
```javascript
import { EUROPE_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const europeContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EUROPE_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default europeContinent;
```

#### src/reducers/Oceania.js:
```javascript
import { OCEANIA_ENERGY } from '../actions';

const INITIAL_STATE = {
  percentage: 0,
};

const oceaniaContinent = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case OCEANIA_ENERGY:
    return { percentage: action.percentage };
  default:
    return state;
  }
};

export default oceaniaContinent;
```

---

## exercise-3 missing_actions

#### src/actions/index.js:
```javascript
export const PILL_TAKEN = 'PILL_TAKEN';

export const understandMatrix = (id) => ({
  type: PILL_TAKEN,
  id,
});
```

---

## exercise-4 missing_provider

#### src/index.js:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);
```

---

## exercise-5 missing_mapstatetoprops

#### src/App.js:
```javascript
const mapStateToProps = (state) => ({
  receiveIngredients: state.spiedIngredients.ingredients,
  receiveOrder: state.spiedOrder.order,
});

export default connect(mapStateToProps, null)(App);
```

---

## exercise-6 missing_connect

#### src/App.js:
```javascript
export default connect(mapStateToProps, null)(App);
```

#### src/components/RescuePeach.js:
```javascript
export default connect(null, mapDispatchToProps)(RescuePeach);
```

---

## exercise-7 missing_mapdispatchtoprops

#### src/pages/Form.js:
```javascript
const mapDispatchToProps = (dispatch) => ({
  selectedOmega: (mutant) => dispatch(showMutant(mutant)),
});

export default connect(null, mapDispatchToProps)(Form);
```

#### src/components/PrepareBurger.js:
```javascript
const mapStateToProps = (state) => ({
  receiveRecipe: state.spiedRecipe.recipe,
});

export default connect(mapStateToProps, null)(PrepareBurger);
```
