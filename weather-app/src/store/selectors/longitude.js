import { Coords } from "../atoms/coords";
import {selector}  from 'recoil'

export const longitude = selector({
    key: 'longitude',
    get: ({get}) => get(Coords).lon
});