import React from 'react'

import { HeroList } from '../Heroes/HeroList';

export const DcScreen = () => {
    return (
        <div>
            <h1>Heroes de DC</h1>
            <hr />

            <HeroList publisher="DC Comics" />
        </div>
    )
};
