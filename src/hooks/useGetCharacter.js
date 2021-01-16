import {useContext, useEffect, useState} from 'react';
import {AppContext} from "../context/AppContext";

export const useGetCharacter = (id) => {

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    const {state: {characters = []}} = useContext(AppContext);

    useEffect(() => {
        if (id && characters) {
            const founded = characters.find(character => character.id.toString() === id.toString());
            if (founded) {
                setCharacter(founded);
                setLoading(false);
            }
        }
    }, [characters, id]);

    return {character, loading};
};
