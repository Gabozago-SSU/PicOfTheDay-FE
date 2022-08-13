import CryptoJS from "crypto-js";

export default function Authentication(id, nickName, platform) {
    const data = { authId: id, authNickname: nickName, platforms: platform };
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET_KEY).toString();

    return encrypted;
}

export function DecryptAuth(encrypted) {
    const bytes = CryptoJS.AES.decrypt(encrypted, process.env.REACT_APP_SECRET_KEY);
    const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decrypted;
}
