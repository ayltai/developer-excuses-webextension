import Unsplash, { toJson, } from 'unsplash-js';

import { UNSPLASH_API_ENDPOINT, } from './Config';

export const pickAny = elements => elements[Math.floor(Math.random() * elements.length)];

export const randomScale = (min, max) => Math.random() * (max - min) + min;

export const randomTranslation = (min, max, scale) => max * (scale - 1) * randomScale(min, 0);

export const uuid = () => {
    const random = () => Math.floor((Math.random() + 1) * 0x10000).toString(16).substring(1);

    return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
};

export const getRandomPhoto = (query, callback) => {
    new Unsplash({
        apiUrl : UNSPLASH_API_ENDPOINT,
    }).photos.getRandomPhoto({
        query,
        width  : window.innerWidth,
        height : window.innerHeight,
    }).then(toJson).then(response => callback(response.urls.regular.replace('w=1080', `w=${window.innerWidth}&h=${window.innerHeight}`), response.user.name, response.user.links.html)).catch(console.error);
};
