import axios from "axios";
import { useState, useContext } from 'react';
import { DataContext } from "../DataProvider";
import '../css/Shop.css';
import { CartContext } from './CartContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { GlobalVar } from "../context/GlobalVar";

let Weapons = () => {

    // const navigate = useNavigate();

    // if (GlobalVar.username === 'test' && !window.location.href.endsWith('/login')) navigate('/login');

    let getMainCharData = async () => {
        let data = await axios.get('http://127.0.0.1:5000/api/weapons');
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



    const addToCart = async (item_type, item) => {
        console.log(item_type, item)
        let data = await axios.post('http://127.0.0.1:5000/api/additem',
        {
            item_type: item_type,
            cart: cart,
            item: item
        });
        return data.status === 200 ? data.data : null;
    }

    return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <h1 className='header'>Shop Halo Weapons</h1>
                </div>
                <div className="row">
                {characters && characters.map(({ name, price, image, species, affiliation, quantity }) => (
                    <div>
                    <div className='col'>
                    <div key={name} className='col'>
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
                                <button onClick={ addToCart } className="float-right btn btn-sm btn-info">Add + </button>

                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                    
                ))}
            </div>

            </div>
        )
    }

export default Weapons; 