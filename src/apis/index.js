import axios from "axios";
import { BaseUrl } from "privateKey";
const instance = axios.create({ baseURL: BaseUrl });

export const requestSignup = (token) => instance.post(`/user`, token);
export const requestLogin = (platform) => instance.post(`${BaseUrl}/oauth2/authorization/${platform}`, "");
