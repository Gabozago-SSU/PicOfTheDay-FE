import { DefaultValue, atom, atomFamily, selector, useRecoilValueLoadable, selectorFamily } from "recoil";

import { requestPlace } from "apis";
import { requestPopularPlace, requestRecentPlace } from "../apis/index";

export const placeIdState = atom({
    key: "placeIdState",
    default: 0,
});

export const placeValue = selectorFamily({
    key: "placeValue",
    get:
        (id) =>
        async ({ get }) => {
            get(placeIdState);
            try {
                const response = await requestPlace(id);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
    set:
        (id) =>
        ({ set }, value) => {
            if (value instanceof DefaultValue) {
                set(placeIdState, (v) => v + id);
            }
        },
});

export const popularPlaceListQuery = selectorFamily({
    key: "placePopularValue",
    get: (id) => async () => {
        try {
            const response = await requestPopularPlace(id);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
});

export const popularPlaceList = atomFamily({
    key: "placePopularList",
    default: popularPlaceListQuery,
});

export const recentPlaceListQuery = selectorFamily({
    key: "placeCurrentValue",
    get: (id) => async () => {
        try {
            const response = await requestRecentPlace(id);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
});

export const recentPlaceList = atomFamily({
    key: "placeCurrentList",
    default: recentPlaceListQuery,
});

export const usePlaceRecoilValue = (id) => useRecoilValueLoadable(placeValue(id));
export const usePoPularPlaceRecoilValue = (id) => useRecoilValueLoadable(popularPlaceListQuery(id));
export const useRecentPlaceRecoilValue = (id) => useRecoilValueLoadable(recentPlaceListQuery(id));
