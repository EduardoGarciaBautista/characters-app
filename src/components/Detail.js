import React from 'react';
import {Link, useParams} from 'react-router-dom';

import {useGetCharacter} from "../hooks/useGetCharacter";

import '../styles/components/Detail.css';

const Detail = () => {

        const {id} = useParams();

        const {character, loading} = useGetCharacter(id);

        return (
            <div className={'detail'}>
                <Link to="/" className={'detail__button'}>
                    <button className={'detail__button--back'}>
                        Regresar
                    </button>
                </Link>

                {!loading &&
                <div className="detail-card">

                    <div className="character-info">

                        <figure className={'character-info__character-image'}>
                            <img src={character.image} alt="character image"/>
                        </figure>

                        <div className="character-info__information">

                            <div className="character-info__information--text">
                                <span>Name: </span>
                                <span>{character.name}</span>
                            </div>

                            <div className="character-info__information--text">
                                <span>Location: </span>
                                <span>{character.location.name}</span>
                            </div>

                            <div className="character-info__information--text">
                                <span>Gender: </span>
                                <span>{character.gender}</span>
                            </div>

                            <div className="character-info__information--text">
                                <span>Created: </span>
                                <span>{character.created}</span>
                            </div>


                        </div>


                    </div>

                    <div className="left">
                    </div>
                    <div className="right">
                    </div>
                </div>
                }
                {loading &&
                <div>
                    Cargando...
                </div>
                }
            </div>
        );
    }
;

export default Detail;
