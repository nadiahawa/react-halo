import { useState, createContext } from 'react';
import { GlobalVar } from './context/GlobalVar';

const DataProvider = props => {
    
    const [cart, setCart] = useState(GlobalVar.cart);
    //This should be global variable .cart

    return (
        <DataContext.Provider value={{'cart': GlobalVar.cart, 'setCart': setCart}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;
export let DataContext = createContext();