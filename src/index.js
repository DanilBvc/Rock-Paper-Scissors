import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './state/state';
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = () => {
  root.render(
    <React.StrictMode>
      <App store={store} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

rerender()