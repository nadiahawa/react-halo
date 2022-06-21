import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './Provider';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { Cart } from './views/Cart';
import { CartProvider } from './views/CartContext';

window.$name = "Username"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>

      <BrowserRouter>
        <ProviderLayer />
        <CartProvider />
      </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();
