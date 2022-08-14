import { atom } from "recoil";

const ATOM_KEY = "user-session";

const $userSession = atom({
    key: ATOM_KEY,
    default: undefined,
});

export default $userSession;
