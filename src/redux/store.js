import { legacy_createStore as createStore} from 'redux';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, messages: [...state.messages, action.payload]}, console.log('Column has been added');
    case 'REMOVE_COLUMN':
      return { ...state, messages: state.messages.filter(message => message.id !== action.payload)}, console.log('Column adding failed');
  } 
  return state;
};

const initialState = {
  messages: [
    {
      id: 1, 
      name: 'Michal Bielecki', 
      email: 'przyklad@gmail.com',
      content: 'przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości '
    },
    {
      id: 2, 
      name: 'Michal Bielecki', 
      email: 'przyklad@gmail.com',
      content: 'przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości '
    },
    {
      id: 3, 
      name: 'Michal Bielecki', 
      email: 'przyklad@gmail.com',
      content: 'przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości '
    },
    {
      id: 4, 
      name: 'Michal Bielecki', 
      email: 'przyklad@gmail.com',
      content: 'przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości przykładowa treść wiadomości '
    },
  ]
};

const store = createStore( //funkcja tworząca magazyn
  reducer,  // referencja do funkcji "reducer" odp za modyfikację danych z magazynu
  initialState, // info o danych startowych magazeynu
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // info o pluginie devTools
);

export default store;