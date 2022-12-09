import { legacy_createStore as createStore} from 'redux';

const reducer = (state, action) => {
  if(action.type === 'ADD_COLUMN') return { ...state, messages: [...state.messages, action.newColumn]}
  return state;
};

const initialState = {
  messages: [
    {
      id: 1, 
      name: 'Michal Bielecki', 
      email: 'przyklad@gmail.com',
      content: 'przykładowa treść wiadomość'
    },
  ]
};

const store = createStore( //funkcja tworząca magazyn
  reducer,  // referencja do funkcji "reducer" odp za modyfikację danych z magazynu
  initialState, // info o danych startowych magazeynu
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // info o pluginie devTools
);

export default store;