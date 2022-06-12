import axios from "axios";
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from "../DataProvider";


let Shop = () => {

    const {cart, setCart} = useContext(DataContext);

    let getMainCharData = async () => {
        let data = await axios.get('http://127.0.0.1:5000/api/characters');
        return data.status === 200 ? data.data : null
    }

    let loadMainCharData = async () => {
        let data = await getMainCharData();
        console.log(data);
        setCharacters(data.Characters);
    }

    const [characters, setCharacters] = useState(() => { loadMainCharData(); });


    const takeCharacter = character => {
        let mutableCart = {...cart};
        mutableCart.total += character.price;
        mutableCart.items[character.id] ?
        mutableCart.items[character.id].quantity++:
        mutableCart.items[character.id] = { 'obj': character, 'quantity': 1 }
        console.log(mutableCart);
        setCart(mutableCart);
    }

    return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <h1>Buy Characters here</h1>
    
                </div>
                <div className='row justify-content-center'>
                    {typeof characters === 'object' && characters[1] ? characters.map((character, index) => {
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
                </div>

            </div>
        )
    }

export default Shop;