import {ERROR_CHARACTERS} from "../constants/MessageConstant";

const BASE_API_URL = 'https://rickandmortyapi.com/api/character/';


export const getInitialCharacters = async () => {
    const API_URL = `${BASE_API_URL}?page=1`;
    try {
        const result = await fetch(API_URL);

        const {results} = await result.json();

        return results;
    } catch (e) {
        console.log(ERROR_CHARACTERS, e)
    }
};

export const getCharacterByName = async (name) => {
    const API_URL = `${BASE_API_URL}?name=${name}`;
    try {
        const result = await fetch(API_URL);

        const {results} = await result.json();
        return results ? results : [];
    } catch (e) {
        console.log(ERROR_CHARACTERS, e)
    }
};
