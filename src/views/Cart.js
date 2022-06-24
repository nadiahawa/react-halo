import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";

export const Cart = () => {
    const contextValue = useContext(CartContext);
    return(
        <div>
            <div className = 'row'>
                <div className ='w-50px col'>
                <h3 className="text-center border rounded bg-light cartName">Your Cart</h3>
                </div>
            </div>

            <div className = 'row'>
                <div className='border border-dark ml-5 mr-5 mt-5 col'>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">ITEM</th>
      <th scope="col">ITEM TYPE</th>
      <th scope="col">PRICE</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Banshee</td>
      <td>Vehicle</td>
      <td className='text-center bg-light text-success'>$11000</td>
      <td><button className='border border-danger rounded bg-danger'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Warthog</td>
      <td>Vehicle</td>
      <td className='text-center bg-light text-success'>$9900</td>
      <td><button className='border border-danger rounded bg-danger'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Needler</td>
      <td>Weapon</td> 
      <td className='text-center bg-light text-success'>$789789</td>
      <td><button className='border border-danger rounded bg-danger'>Delete</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Energy Sword</td>
      <td>Weapon</td>
      <td className='text-center bg-light text-success'>$90000</td>
      <td><button className='border border-danger rounded bg-danger'>Delete</button></td>
    </tr>
  </tbody>
</table>
</div>
</div>
<div className='row justify-content-center'>
  <button className='mt-2 border border-dark rounded bg-primary'>
  <Link className="text-white nav-link" to="/Checkout">Checkout</Link>
  </button>
</div>
</div>
    )
}