import React, {useContext, useEffect} from 'react';

import '../styles/components/Finder.css';

import useForm from "../hooks/useForm";
import {AppContext} from "../context/AppContext";
import useDebounce from "../hooks/useDebounce";

const Finder = () => {

    const {setState} = useContext(AppContext);

    const {form, handleChange} = useForm({
        query: ''
    });

    const {query} = form;

    const debounced = useDebounce(query, 500);

    useEffect(() => {
        setState(prevPros => {
            return {
                ...prevPros,
                query: debounced
            }
        });
    }, [debounced, setState]);


    return (
        <div className={'finder'}>
            <label className={'finder__label'}>Encuentra a tu personaje favorito</label>
            <input type="text" className={'finder__input'} value={query} name={'query'} onChange={handleChange} placeholder={'EJ: Rick'}/>
        </div>
    );
}

export default Finder;
