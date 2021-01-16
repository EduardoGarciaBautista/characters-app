import React from 'react';

import '../styles/components/Loader.css';

const Loader = ({message}) => {
    return (
        <div className="loader">
            <span className={'loader__message'}>
                {message}
            </span>
            <div className={'spinner'}>
            </div>
        </div>
    );
};

export default Loader;
