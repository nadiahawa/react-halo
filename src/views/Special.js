import axios from "axios";
import { useState, useContext } from 'react';
import { DataContext } from "../DataProvider";
import '../css/Shop.css';
import { CartContext } from './CartContext';
import { GlobalVar } from '../context/GlobalVar';

let Special = () => {

    let getSpecialData = async () => {
        let data = await axios.get('http://127.0.0.1:5000/api/special');
        return data.status === 200 ? data.data : null
    }

    
    let loadSpecial = async () => {
        let data = await getSpecialData();
        let result = []
        for (var i in data){
            result.push(data[i])
        }
        console.log(result);
        setCharacters(result);

    }

    const addToCart = async (item_type, item) => {
        console.log(GlobalVar.cart)
        await axios.post('http://127.0.0.1:5000/api/additem',
        {
            method: 'POST',
            item_type: item_type,
            cart: GlobalVar.cart,
            item: item
        });
        console.log('test')
        // return data.status === 200 ? data.data : null;
    }


    const [characters, setCharacters] = useState(() => { loadSpecial(); });

    const {cart, setCart} = useContext(DataContext);



    return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <h1 className='bg-dark text-white border header'>Shop Halo Special Items</h1>
                </div>

                <div className="row">
                {characters && characters.map(({ name, price, image, species, affiliation, quantity }) => (
                    
                    <div key={name} className='class="d-flex flex-row bd-highlight mb-3'>
                        <div className="card m-3" style={{ width: 18 + 'rem' }}>
                            <img src={image} className="card-img-top" alt={species}></img>
                            <div className="bg-dark text-white card-body">
                                <h5 className="bg-dark text-white card-title1">{name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="bg-secondary list-group-item">{affiliation}</li>
                            </ul>
                            <div className="bg-dark card-body">
                                <p className="bg-dark card-link float-left" CartContext ={price}>${price}</p>
                                <button onClick={() => addToCart() } className="float-right btn btn-sm btn-info">Add + </button>

                            </div>
                        </div>
                    </div>
                    
                    
                ))}

</div>
            </div>
        )
    }

export default Special; 