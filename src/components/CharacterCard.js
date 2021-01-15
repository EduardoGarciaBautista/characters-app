import React from 'react';
import '../styles/components/CharacterCard.css';

const CharacterCard = ({id, name, image, created, gender, origin}) => {
    return (
        <div className={'card'}>
            <figure className={'figure'}>
                <img width="auto" height="auto" src={image} className={'figure__image'} alt="character icon"/>
            </figure>
            <div className="body">
                <div className="body__item">
                    <span>Name: </span>
                    <span><b>{name}</b></span>
                </div>

                <div className="body__item">
                    <span>Origen: </span>
                    <span><b>{origin.name}</b></span>
                </div>

                <div className="body__item">
                    <span>Genero: </span>
                    <span><b>{gender}</b></span>
                </div>
                <div className="body__item">
                    <span>Creation: </span>
                    <span><b>{created}</b></span>
                </div>
            </div>
            <div className="actions">
                <button className={'actions__detail'}>
                    Ver
                </button>
            </div>
        </div>
    );
};

export default CharacterCard;
