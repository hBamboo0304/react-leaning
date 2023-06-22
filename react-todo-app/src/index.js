import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// root : public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //strict mode:warningがあれば発見してくれる 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
