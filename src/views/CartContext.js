import React from 'react';
import { Shop } from './Shop';
// import characters from './Shop'
import { addToCart } from './Shop'

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    return (
        <CartContext.Provider value='im from context'>
            <div>{props.price}</div>
            {/* We need to make this the endpoint for total price in cart items */}
        </CartContext.Provider>
    );
}
