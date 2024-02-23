import {atom } from 'recoil';

export const Coords = atom({
    key: 'Coords',
    default: {
        isLoading: true,
        lon:72.8479,
        lat:19.0144
    },
});
