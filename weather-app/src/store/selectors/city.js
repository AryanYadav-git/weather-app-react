import { locationState } from "../atoms/location";
import { selector } from "recoil";

export const city = selector({
    key: "city",
    get: ({ get }) => {
        return get(locationState).location;
    }
});
