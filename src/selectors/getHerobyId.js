import { heroes } from './../data/heroes';

export const getHerobyID = (id) => {
    return heroes.find(hero => hero.id === id);
};
