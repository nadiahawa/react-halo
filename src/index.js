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

// const firebaseConfig = {
//   apiKey: "AIzaSyAQO6uDhKJX2InTnyJiquFsAzb4NP-hLAY",
//   authDomain: "halo-flask-d94ce.firebaseapp.com",
//   projectId: "halo-flask-d94ce",
//   storageBucket: "halo-flask-d94ce.appspot.com",
//   messagingSenderId: "359620530878",
//   appId: "1:359620530878:web:f508f5c94942245bda84ef",
//   measurementId: "G-FXCCX17LYL"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig}> */}
      <BrowserRouter>
        <ProviderLayer />
        <CartProvider />
        <Cart />
      </BrowserRouter>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
