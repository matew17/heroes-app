import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom';

import { getHerobyID } from './../../selectors/getHerobyId'
import { heroesImages } from '../../helpers/image-helper';


export const HeroScreen = ({ history }) => {
    const { heroId } = useParams();
    const hero = useMemo(() => getHerobyID(heroId), [heroId]);

    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        history.goBack();
    };

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={heroesImages(`./${heroId}.jpg`)?.default}
                    alt={superhero}
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-grou-item"><b>Alter Ego: {alter_ego}</b></li>
                    <li className="list-grou-item"><b>Publisher: {publisher}</b></li>
                    <li className="list-grou-item"><b>First appearance: {first_appearance}</b></li>
                </ul>

                <h5>Characters</h5>

                <p>{characters}</p>

                <button
                    onClick={handleReturn}
                    className="btn btn-outline-info">
                    Return
                </button>

            </div>

        </div>
    )
};
