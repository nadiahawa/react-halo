import axios from "axios";
import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from "../DataProvider";


let Shop = () => {

    let getMainCharData = async () => {
        let data = await axios.get('https://halo-proj.herokuapp.com/api/characters');
        return data.status === 200 ? data.data : null
    }

    let loadMainCharData = async () => {
        let data = await getMainCharData();
        console.log(data);
        setCharacters(data.Characters);
    }

    const [characters, setCharacters] = useState(() => { loadMainCharData(); });
    const {cart, setCart} = useContext(DataContext);

    return (
    <div className='container'>
            <div className='row justify-content-center'>
                <h1>Buy Halo Characters</h1>
            </div>
            <div className='row justify-content-center'>
                {typeof characters === 'object' && characters[1] ? characters.map((character, index) => {
                    return <div key={index} className="card m-3" style={{ width: 18 + 'rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <h5 className="card-title font-italic">{character.species}</h5>
                            <p className="card-text">{character.affiliation}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{character.name}</li>
                            <li className="list-group-item">{character.species}</li>
                        </ul>
                    </div>
                })
                    : <h3>Loading Characters...</h3>}
            </div>
        </div>
        // <h1>{typeof characters === 'object' && characters[0] ? console.log(typeof characters) : 'false' }</h1>
    )
}

export default Shop;