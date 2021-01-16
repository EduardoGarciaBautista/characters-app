import React, {useContext, useEffect} from 'react';
import {AppContext} from "../context/AppContext";
import {getCharacterByName} from "../services/characters";
import CharacterCard from "../components/CharacterCard";

import '../styles/containers/Characteres.css';

const Characters = () => {
    const {state: {characters, query}, setState} = useContext(AppContext);


    useEffect(() => {
        (async () => {
            const result = await getCharacterByName(query);
            setState(prevState => {
                return {
                    ...prevState,
                    characters: result
                }
            })
        })();
    }, [query]);

    return (
        <div className={'characters'}>
            {characters.map(character => (<CharacterCard key={character.id} {...character}/>))}
        </div>
    );
};

export default Characters;
