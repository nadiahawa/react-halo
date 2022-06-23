
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from '../DataProvider'
import '../css/Navbar.css'

let Navbar = () => {

    const [count, setCount] = useState(0);


    const changeCounter = () => {
      console.log('current count' + count);
      setCount(count + 1);
    }

    const {cart} = useContext(DataContext);


    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">HALO ONLINE</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Shop
  </button>
  <div className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="/Weapons">Weapons</a>
    <a className="dropdown-item" href="/Vehicles">Vehicles</a>
    <a className="dropdown-item" href="/Special">Special</a>
  </div>
</div>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
    <li className="nav-item">
          <Link className="nav-link" to="/Cart">Cart</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="/Checkout">Checkout</Link>
      </li>
        {/* <li className="nav-item">
            <p className="nav-link m-0">{count}</p>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/Register"><button>Register</button></Link>
      </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login"><button>Login</button></Link>
      </li>
        {/* <li>
            <button className="btn btn-sm btn-info" onClick={changeCounter}>{cart}</button>
        </li> */}
    </ul>
  </div>
</nav>
    );

}

export default Navbar;
