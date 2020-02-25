export const UNSPLASH_API_ENDPOINT = process.env.REACT_APP_UNSPLASH_API_ENDPOINT || 'http://localhost:8080';

export const MESSAGE_DURATION = 1500;
export const ANIMATION_ZOOM   = 0.5;
export const ANIMATION_FPS    = 30;

export const FONT_WEIGHTS = [
    {
        label : 'Lightest',
        value : 100,
    },
    {
        label : 'Lighter',
        value : 200,
    },
    {
        label : 'Light',
        value : 300,
    },
    {
        label : 'Regular',
        value : 400,
    },
    {
        label : 'Bold',
        value : 500,
    },
    {
        label : 'Bolder',
        value : 700,
    },
    {
        label : 'Boldest',
        value : 900,
    },
];

export const CONFIGURATION = {
    fontFamily        : 'Helvetica, Arial, \'Times New Roman\', sans-serif, serif',
    fontSize          : 40,
    fontWeight        : 400,
    fontShadow        : 5,
    animationDuration : 15000,
    imageBlur         : 0,
    imageDarken       : 2,
    imageTopics       : [
        'nature',
        'landscape',
        'water',
        'sea',
        'forest',
        'outdoor',
        'indoor',
        'interior',
        'wallpaper',
        'urban',
        'city',
        'street',
        'tropical',
        'rock',
        'abandoned',
        'adventure',
        'architecture',
        'retro',
        'vintage',
        'coffee',
        'espresso',
        'cafe',
        'mac',
        'imac',
        'macbook',
        'iphone',
        'ipad',
        'android',
        'computer',
        'programming',
        'technology',
        'animal',
    ],
};
