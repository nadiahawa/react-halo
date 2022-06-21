import { useState, createContext } from 'react';

const DataProvider = props => {
    
    const [cart, setCart] = useState('Add Count');

    return (
        <DataContext.Provider value={{'cart': cart, 'setCart': setCart}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;
export let DataContext = createContext();