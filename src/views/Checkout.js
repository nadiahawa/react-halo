import axios from "axios";
import { useState, useContext } from 'react';
import { DataContext } from "../DataProvider";
import '../css/Checkout.css'


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
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <h1 className='header'>Checkout</h1>
                </div>
                <div className='row'>
                <div className='col border rounded border-info col m-4 text-black bg-info'>
                    Items:
                </div>
                <div className='col border rounded border-info col m-4 text-black bg-info'>
                    Type of Items:
                </div>
                </div>

                    <div>
                            {characters && characters.map(({ item, total_cost, item_type }) => (
                        <div className='row'>
                            <div className='col'>
                                <h4 className=' text-center border rounded bg-light items'>{item}</h4>
                        </div>
                        <div className='col'>
                            <h className=' border rounded bg-light items'>{item_type}</h>
                                <h2 className=' bg-success total'>{total_cost}</h2>
                            </div>    
                    </div>
                    ))}
                
                </div>
                <div className='row'>
                        <div id = 'Billing' className='border rounded border-info col m-4 text-white bg-dark'>Billing</div>
                        <div id ='Payment' className='border rounded border-info col m-4 text-white bg-dark'>Payment Method</div>
                        </div>
            </div>
            </div>
        )
    }

export default Checkout;