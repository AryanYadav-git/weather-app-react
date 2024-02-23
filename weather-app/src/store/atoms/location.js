import { atom } from 'recoil'

console.log("1")
export const locationState = atom({
    key: 'locationState',
    default:"Mumbai"  
});
