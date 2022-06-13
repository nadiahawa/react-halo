import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Cart = () => {
    const contextValue = useContext(CartContext);
    return(
        <div>
            <span>Iems in Cart: 0</span>
            <br />
            <span>Total Price: 0 {contextValue}</span>
        </div>
    )
}