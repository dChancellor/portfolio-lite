import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// eslint-disable-next-line no-unused-vars
import style from './universals.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const setInitialTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.getElementById('root').classList.add('light');
    return;
  }
  document.getElementById('root').classList.add('dark');
};

setInitialTheme();
