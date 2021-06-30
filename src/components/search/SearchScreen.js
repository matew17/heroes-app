import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';

import queryString from 'query-string';

import { geHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../Heroes/HeroCard';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = ({ history }) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [{ search }, handleInputChange] = useForm({ search: q });
    const heroesFiltered = useMemo(() => geHeroByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`?q=${search}`);
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Fin your hero"
                            className="form-control"
                            name="search"
                            value={search}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>


                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') &&
                        <div className="alert alert-info">Search a hero</div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">There's no a hero with {q}</div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
