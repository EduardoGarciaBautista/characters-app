import React, {useState} from 'react';

import Layout from "./Layout/Layout";

import './styles/App.css';
import {AppContext} from "./context/AppContext";

const App = () => {
    const [state, setState] = useState({
        characters: [],
        query: '',
    });
    return (
        <AppContext.Provider value={{state, setState}}>
            <Layout/>
        </AppContext.Provider>
    );
}


export default App;
