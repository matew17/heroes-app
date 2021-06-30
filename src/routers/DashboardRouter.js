import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/Heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/NavBar'
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/hero/:heroId' component={HeroScreen} />
                    <Route exact path='/dc' component={DcScreen} />
                    <Route exact path='/search' component={SearchScreen} />

                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    )
};
