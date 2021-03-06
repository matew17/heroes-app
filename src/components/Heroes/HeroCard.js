import React from 'react'
import { Link } from 'react-router-dom';

import { heroesImages } from '../../helpers/image-helper';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appareance,
    characters
}) => {
    return (
        <div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img
                        src={heroesImages(`./${id}.jpg`)?.default}
                        // src={`./assets/heroes/${id}.jpg`} 
                        className="card-img"
                        alt={superhero}
                    />
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            {superhero}
                        </h5>

                        <p className="card-text">{alter_ego}</p>

                        {
                            (alter_ego !== characters) &&
                            <p className="card-text">{characters}</p>
                        }

                        <p className="card-text">
                            <small className="text-muted">{first_appareance}</small>
                        </p>


                        <Link to={`./hero/${id}`}>Ver mas ...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
