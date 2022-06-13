import axios from "axios";
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from "../DataProvider";
import '../css/Shop.css';
import { CartContext } from './CartContext';


let Shop = () => {

    const {cart, setCart} = useContext(DataContext);

    let getMainCharData = async () => {
        let data = await axios.get('http://127.0.0.1:5000/api/characters');
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



    const addToCart = () => {
        console.log("clicked..");
        // let mutableCart = {...cart};
        // mutableCart.total += characters.price;
        // mutableCart.items[characters.id] ?
        // mutableCart.items[characters.id].quantity++:
        // mutableCart.items[characters.id] = { 'obj': characters, 'quantity': 1 }
        // console.log(mutableCart);
        // setCart(mutableCart);
    }

    return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <h1 className='header'>Shop Halo Characters</h1>
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
                                <li className="list-group-item">{name}</li>
                            </ul>
                            <div className="card-body">
                                <p className="card-link float-left" CartContext ={price}>${price}</p>
                                <button onClick={ addToCart } className="float-right btn btn-sm btn-info">Add + </button>
                                {/* <h2>
                                    <CartContext pricey={price} />
                                </h2> */}
                                {/* {quantity < 1 ?
                                    <button disabled className="float-right btn btn-sm btn-info">Out of stock</button>
                                    :
                                    // <button onClick={() => { takeCharacter(character) }} className="float-right btn btn-sm btn-info">Take</button>
                                } */}
                            </div>
                        </div>
                    </div>
                    
                    
                ))}
                {/* <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <h5 className="card-title font-italic">{character.species}</h5>
                <p className="card-text">{character.id}</p>
                </div> */}
                {/* <div className='row justify-content-center'>
                    {typeof characters === 'array' && characters[1] ? characters.map((character, index) => {
                        return <div key={index} className="card m-3" style={{ width: 18 + 'rem' }}>
                            <img src={character.image} className="card-img-top" alt={character.species} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <h5 className="card-title font-italic">{character.species}</h5>
                                <p className="card-text">{character.id}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{character.affiliation}</li>
                                <li className="list-group-item">{character.name}</li>
                            </ul>
                            <div className="card-body">
                                <p className="card-link float-left">${character.price}</p>
                                {character.quantity < 1 ?
                                    <button disabled className="float-right btn btn-sm btn-info">Out of stock</button>
                                    :
                                    <button onClick={() => { takeCharacter(character) }} className="float-right btn btn-sm btn-info">Take</button>
                                }
                            </div>
                        </div>
                    })
                        : <h3>Loading characters</h3>}
                </div> */}

            </div>
        )
    }

export default Shop;