import { createStore } from 'redux';
const reducer = (state, action) => {
  return state;
};

const initialState = {
  messages: []
};

const store = createStore( //funkcja tworząca magazyn
  reducer,  // referencja do funkcji "reducer" odp za modyfikację danych z magazynu
  initialState, // info o danych startowych magazeynu
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // info o pluginie devTools
);

export default store;