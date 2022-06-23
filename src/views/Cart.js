import React, { useContext } from 'react';
import { CartContext } from './CartContext';

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
                <div className='ml-5 mr-5 mt-5 col'>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">ITEM</th>
      <th scope="col">ITEM TYPE</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Banshee</td>
      <td>Vehicle</td>
      <td>11000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Warthog</td>
      <td>Vehicle</td>
      <td>9900</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Needler</td>
      <td>Wepon</td>
      <td>789789</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
    )
}