import axios from "axios";
import { BaseUrl } from "privateKey";
const instance = axios.create({ baseURL: BaseUrl, withCredentials: true });

export const requestKakaoCode = (code) => instance.post("/auth/kakao", { code: code });
export const requestKakaoLogin = () => instance.get("/auth/kakao");
export const requestGoogleLogin = () => instance.get("/oauth2/authorization/google");
export const requestNickname = (params) =>
    instance.post(`/auth/nickname`, { nickname: params.nickName, userId: params.userId });
export const requestProfile = (formData) => {
    return axios({
        method: "POST",
        url: `${BaseUrl}/auth/profileimage`,
        mode: "cors",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    });
};
export const requestLogin = (platform) => instance.post(`/oauth2/authorization/${platform}`, "");

/*홈*/
export const requestBanner = () => instance.get("/banner");
export const requestCurations = () => instance.get("/curation");
export const requestSearchPlace = (search) => instance.get(`/search?search=${search}`);

/*장소상세*/
export const requestPlace = (params) => instance.get(`/place?placeId=${params.placeId}&userId=${params.userId}`);
export const requestLikePlace = (params) => instance.post(`/place/like`, params);
/* userId, placeId */
export const requestDisikePlace = (params) =>
    instance.delete(`/place/unlike`, { data: { placeId: params.placeId, userId: params.userId } });
/* userId, placeId */
export const requestPopularPlace = (params) =>
    instance.get(`/place/popular?placeId=${params.placeId}&userId=${params.userId}`);
export const requestRecentPlace = (params) =>
    instance.get(`/place/recent?placeId=${params.placeId}&userId=${params.userId}`);
export const requestSimilarPlace = (placeId) => instance.get(`/place/similar?placeId=${placeId}`);
export const requestLikeReview = (params) => instance.post("/review/like", params);
export const requestDislikeReview = (params) =>
    instance.delete("/review/unlike", { data: { reviewId: params.reviewId, userId: params.userId } });

/*피드*/
export const requestSearchFeed = (search) => instance.get(`/feed/search?search=${search}`);
export const requestPopularFeed = () => instance.get("/feed/popular", { withCredentials: true });
export const requestRecentFeed = () => instance.get("/feed/recent", { withCredentials: true });
export const requestDetailFeed = (params) =>
    instance.get(`/review?reviewId=${params.reviewId}&userId=${params.userId}`);

/*후기*/
export const requestPostReview = (formData) => {
    return axios({
        method: "POST",
        url: `${BaseUrl}/review`,
        mode: "cors",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    });
};

export const requestDeleteReview = (reviewId) => instance.delete("/review", reviewId);
export const requestSearchReviewPlace = (search) => instance.get(`/review/search?placename=${search}`);
export const requestAddReviewPlace = (params) => instance.post(`/review/location`, params);
export const requestSearchReviewKeywords = (search) => instance.get(`/review/search?keywordname=${search}`);

export const requestOtherUserpage = (userId) => instance.get(`/mypage/others?userId=${userId}`);