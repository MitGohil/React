import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import Classuser from './Classuser';
import JSuser from './JSuser';
import { Provider } from 'react-redux';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
    {/* <User /> */}
    {/* <Classuser /> */}
    {/* <JSuser /> */}
  </Provider>
  // </React.StrictMode>
);


