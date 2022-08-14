import axios from "axios";
import { BaseUrl } from "privateKey";
const instance = axios.create({ baseURL: BaseUrl });

export const requestSignup = (token) => instance.post(`/user`, token);
export const requestLogin = (platform) => instance.post(`/oauth2/authorization/${platform}`, "");

/*홈*/
export const requestBanner = () => instance.get("/banner");
export const requestCurations = () => instance.get("/curation");
export const requestSearchPlace = (search) => instance.get(`/search?placename=${search}`);

/*장소상세*/
export const requestPlace = (placeId) => instance.get(`/place?placeId=${placeId}`);
export const requestLikePlace = (params) => instance.post(`/place/like`, params);
/* userId, placeId */
export const requestDisikePlace = (params) => instance.post(`/place/unlike`, params);
/* userId, placeId */
export const requestPopularPlace = (placeId) => instance.get(`/place/popular?placeId=${placeId}`);
export const requestRecentPlace = (placeId) => instance.get(`/place/popular?placeId=${placeId}`);
export const requestSimilarPlace = (placeId) => instance.get(`/place/popular?placeId=${placeId}`);
export const requestLikeReview = () => instance.post("/review/like".params);

/*피드*/
export const requestSearchFeed = (search) => instance.get(`/feed/search?search=${search}`);
export const requestPopularFeed = () => instance.get("/feed/popular");
export const requestRecentFeed = () => instance.get("/feed/recent");
export const requestDetailFeed = (reviewId) => instance.get(`/review?revieId=${reviewId}`);

/*후기*/
