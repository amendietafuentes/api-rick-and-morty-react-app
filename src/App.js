import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';


function App() {
    
    const API_URL = 'https://rickandmortyapi.com/api/character';
    const [characters, setcharacters] = useState([]);

    const fetchCharacters = (API_URL) => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setcharacters(data.results))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCharacters(API_URL)
    }, [])
    

    return ( 
        <>
            <Navbar brand="Rick and Morty APP" />

            <div className="container mt-5">
                <Characters characters={characters} />
            </div>
        </>
    
    );
}

export default App;