import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const currentState = {체중:70, 키:170}

function reducer(state = currentState, action){
if(action.type === '체중증가'){
  state.체중++;
}
if(action.type === '키증가'){
  state.키++;
}
const newState = {...state};
return newState;
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);