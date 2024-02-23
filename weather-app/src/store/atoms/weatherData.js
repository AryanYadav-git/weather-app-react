import {atom} from 'recoil'

export const weatherData = atom({
    key: 'weatherData',
    default: {
        weather: null,
    },
})