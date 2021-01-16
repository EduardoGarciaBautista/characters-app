import React from 'react';

import {Link} from "react-router-dom";

import '../styles/components/CharacterCard.css';

const CharacterCard = ({id, name, image}) => {
    return (
        <div className={'card'}>
            <figure className={'figure'}>
                <img width="auto" height="auto" src={image} className={'figure__image'} alt="character icon"/>
            </figure>
            <div className="body">

                <span><b>{name}</b></span>

            </div>
            <div className="actions">
                <Link to={`/detail/${id}`}>
                    <button className={'actions__detail'}>
                        Ver
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;
