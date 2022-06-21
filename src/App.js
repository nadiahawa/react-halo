import Navbar from './components/Navbar';
import './css/App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import Checkout from './views/Checkout';
import Register from './views/Register';
import { Cart } from './views/Cart';
import Dashboard from './views/Dashboard';
import Login from './Login';
import Weapons from './views/Weapons';
import Vehicles from './views/Vehicles';
import Special from './views/Special';


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
      <h1>hello {window.name}</h1>
    <Routes>
      <Route children path ='/' element={<Home characters={characters} shuffleCharacters={shuffleCharacters} />} />
      <Route children path ='/shop' element={<Shop />} />
      <Route children path ='/weapons' element={<Weapons />} />
      <Route children path ='/vehicles' element={<Vehicles />} />
      <Route children path ='/special' element={<Special />} />
      <Route children path ='/cart' element={<Cart />} />
      <Route children path ='/checkout' element={<Checkout />} />
      <Route children path ='/register' element={<Register />} />
      <Route children path ='/dashboard' element={<Dashboard />} />
      <Route children path ='/login' element={<Login />} />
    </Routes>
    </React.Fragment>
  );
}
export default App;


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <div>
//           <div className="header">
//             <NavLink exact activeClassName="active" to="/">Home</NavLink>
//             <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
//             <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
//           </div>
//           <div className="content">
//             <Switch>
//               <Route exact path="/" component={Home} />
//               <Route path="/login" component={Login} />
//               <Route path="/dashboard" component={Dashboard} />
//             </Switch>
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   );
// }
 
// export default App;