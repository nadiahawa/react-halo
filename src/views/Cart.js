import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Cart = () => {
    const contextValue = useContext(CartContext);
    return(
        <div>
            <div className = 'row'>
                <h3 className="cartName">Your Cart</h3>
            </div>
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
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
    )
}