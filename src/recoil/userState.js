import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import { DecryptAuth } from "utils/ encryption";

import { localStorageEffect, sessionStorageEffect } from "./localStorageEffect";

// ! sessionStorage 와 localStorage 에 동시에 적용할 순 없음

const { persistAtom } = recoilPersist({
    key: "recoil-persist-atom",
    //storage: sessionStorage,
    storage: localStorage,
});

export const userState = atom({
    key: "user",
    default: null,
    // effects: [localStorageEffect("user"), sessionStorageEffect("user")],
    effects_UNSTABLE: [persistAtom],
});

export const userPlatform = atom({
    key: "userPlatform",
    default: "",
});

export const loginUser = selector({
    key: "filteredUserState",
    get: ({ get }) => {
        const list = get(userState);
        if (list === null) return null;
        const platform = get(userPlatform);
        const auths = list.map((a) => DecryptAuth(a));

        if (platform === "google") return auths.filter((i) => i.platforms === "google");
        else return auths.filter((i) => i.platforms === "kakao");
    },
});
