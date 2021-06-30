import { heroes } from './../data/heroes';

export const getHeroByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher ${publisher} do not match`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
};