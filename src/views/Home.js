import { useEffect, useState } from 'react';
import axios from "axios";

let Home = props => {

    const[characterfact, setCharacterfact] = useState();
    const getCharacterFact = async () => {
        let response = await axios.get('https://catfact.ninja/fact');
        return response.status === 200 ? response.data : null;
    }

    const loadCharacterFact = async () => {
        let fact = await getCharacterFact();
        console.log(fact, typeof fact);
        setCharacterfact(fact.fact);
    }

    useEffect(() => {loadCharacterFact();}, []);


    return (
        <div className="container mt-2">
            <div className='row'>
                {console.log('hello nerds')}
                <h1 className='characters'>{props.characters}</h1>r
                <button className='btn btn-sm btn-info' onClick={props.shuffleCharacters}>Shuffle Char</button>
            </div>
            <div className="row justify-content-center">
                <h1>Char info</h1>
            </div>
            <div className="row justify-content-center">
                <h3>{characterfact}</h3>
            </div>
        </div>
    )
}

export default Home;