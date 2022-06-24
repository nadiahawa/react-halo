import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './Provider';
import { Cart } from './views/Cart';
import { CartProvider } from './views/CartContext';


// i need to after login have my username and cart number to become my universal variable below
// in order to do this i have to import a variable from my login function here and there redefine it as my universal variable
// main problem is exporting that function as a subset function of my main defualt exported login function 
// response.data.user (this is what we need to extract cart number and username to create global variabls)



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
