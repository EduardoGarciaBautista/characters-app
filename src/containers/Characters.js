import React, {useContext, useEffect} from 'react';
import {AppContext} from "../context/AppContext";
import {getCharacterByName} from "../services/characters";

import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";

import {FETCHING_DATA, NO_DATA_AVAILABLE} from "../constants/MessageConstant";

import '../styles/containers/Characteres.css';

const Characters = () => {
    const {state: {characters, query, loading}, setState} = useContext(AppContext);


    useEffect(() => {
        (async () => {

            const result = await getCharacterByName(query);
            setState(prevState => {
                return {
                    ...prevState,
                    characters: result,
                    loading: false
                }
            })
        })();
    }, [query]);

    return (
        <div className={`characters ${(loading || !loading && characters.length === 0) ? '' : 'characters__data'}`}>
            {!loading && characters.map(character => (<CharacterCard key={character.id} {...character}/>))}
            {loading &&
            <Loader message={FETCHING_DATA}/>
            }
            {!loading && characters.length === 0 &&
            <div className="characters__empty">
                {NO_DATA_AVAILABLE}
            </div>
            }
        </div>
    );
};

export default Characters;
