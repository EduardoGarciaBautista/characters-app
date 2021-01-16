import React, {useEffect, useContext} from 'react';

import AppRoutes from "../routes/AppRoutes";

import {getInitialCharacters} from "../services/characters";
import {AppContext} from "../context/AppContext";

import '../styles/containers/Home.css';

const Layout = () => {

    const {setState} = useContext(AppContext);

    useEffect(() => {
        (async () => {
            const result = await getInitialCharacters();

            setState(prevState => {
                return {
                    ...prevState,
                    characters: result
                }
            })
        })();
    }, []);

    return (
        <AppRoutes/>
    );

}


export default Layout;
