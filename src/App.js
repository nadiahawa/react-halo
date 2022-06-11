import Navbar from './components/Navbar';
import './css/App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';
import Checkout from './views/Checkout'


function App() {


  const [characters, setCharacters] = useState(['MC', 'Johsnon', 'Arbiter']);

  const shuffleCharacters = () => {
    console.log('char test')
    let tempCharacters = [...characters];
    tempCharacters.sort(() => Math.random() - 0.5);
    setCharacters(tempCharacters);
  }
  
  return (
    <React.Fragment>
      <Navbar />
    <Routes>
      <Route children path ='/' element={<Home characters={characters} shuffleCharacters={shuffleCharacters} />} />
      <Route children path ='/shop' element={<Shop />} />
      <Route children path ='/cart' element={<Cart />} />
      <Route children path ='/checkout' element={<Checkout />} />
    </Routes>
    </React.Fragment>
  );
}
export default App;
