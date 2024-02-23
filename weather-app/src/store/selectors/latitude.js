import { Coords } from "../atoms/coords";
import {selector}  from 'recoil'

export const latitude = selector({
    key: 'latitude',
    get: ({get}) => get(Coords).lat
});