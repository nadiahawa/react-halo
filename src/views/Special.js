import axios from "axios";
import { useState, useContext } from 'react';
import { DataContext } from "../DataProvider";
import '../css/Shop.css';
import { CartContext } from './CartContext';


let Special = () => {

    const addToCart = async () => {
        let data = await axios.get('http://127.0.0.1:5000/api/additem');
        console.log('testing')
        return data.status === 200 ? data.data : null;
    }

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


    const [characters, setCharacters] = useState(() => { loadSpecial(); });

    const {cart, setCart} = useContext(DataContext);



    return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <h1 className='header'>Shop Halo Weapons</h1>
                </div>


                {characters && characters.map(({ name, price, image, species, affiliation, quantity }) => (
                    
                    <div key={name} className='class="d-flex flex-row bd-highlight mb-3'>
                        <div className="card m-3" style={{ width: 18 + 'rem' }}>
                            <img src={image} className="card-img-top" alt={species}></img>
                            <div className="card-body">
                                <h5 className="card-title1">{name}</h5>
                                <h6 className="card-title font-italic">{species}</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{affiliation}</li>
                            </ul>
                            <div className="card-body">
                                <p className="card-link float-left" CartContext ={price}>${price}</p>
                                <button onClick={ addToCart() } className="float-right btn btn-sm btn-info">Add + </button>

                            </div>
                        </div>
                    </div>
                    
                    
                ))}


            </div>
        )
    }

export default Special; 