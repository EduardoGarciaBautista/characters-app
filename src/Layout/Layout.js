import React, {Component} from 'react';

import Finder from "../components/Finder";
import Characters from "../containers/Characters";

import '../styles/Layout/Layout.css';

class MyComponent extends Component {
    render() {
        return (
            <div className={'layout'}>
                <header className={'header'}>
                    <Finder/>
                </header>
                <main className={'main'}>
                    <Characters/>
                </main>
            </div>
        );
    }
}


export default MyComponent;
