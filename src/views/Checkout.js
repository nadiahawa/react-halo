import axios from "axios";
import { useState, useContext } from 'react';
import { DataContext } from "../DataProvider";

let Checkout = () => {
    let getMainCharData = async () => {
        let data = await axios.get('http://127.0.0.1:5000/api/cart/items?id=1');
        return data.status === 200 ? data.data : null
    }

    
    let loadMainCharData = async () => {
        let data = await getMainCharData();
        let result = []
        for (var i in data){
            result.push(data[i])
        }
        console.log(result);
        setCharacters(result);

    }


    const [characters, setCharacters] = useState(() => { loadMainCharData(); });

    const {cart, setCart} = useContext(DataContext);



    return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <h1 className='header'>Checkout</h1>
                </div>


                {characters && characters.map(({ item, item_type, total_cost }) => (
                    
                    <div key={cart} className='class="d-flex flex-row bd-highlight mb-3'>
                        <div className="card m-3" style={{ width: 18 + 'rem' }}>
                            <div className="card-body">
                                <h5 className="card-title1">{item}</h5>
                                <h6 className="card-title font-italic">{item_type}</h6>
                                <h6 className="card-title font-italic">{total_cost}</h6>
                            </div>
                        </div>
                    </div>
                    
                    
                ))}

            </div>
        )
    }

export default Checkout;