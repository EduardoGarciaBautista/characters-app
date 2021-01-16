import React from 'react';
import Finder from "../components/Finder";
import Characters from "./Characters";

const Home = () => {
    return (
        <div className={'home'}>
            <header className={'header'}>
                <Finder/>
            </header>
            <main className={'main'}>
                <Characters/>
            </main>
        </div>
    );
};

export default Home;
