const KAKAO_REST_KEY = {
    key: process.env.REACT_APP_KAKAO_REST_KEY,
};

const KAKAO_REDIRECT_URI = {
    key: process.env.REACT_APP_KAKAO_REDIRECT_URI,
};

export const GOOGLE_CLIENT_KEY = `${process.env.REACT_APP_GOOGLE_CLIENT_ID_KEY}`;

export const BaseUrl = {
    key: process.env.REACT_APP_BASEURL,
};

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_KEY.key}&redirect_uri=${KAKAO_REDIRECT_URI.key}&response_type=code`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=713262651990-bh58ql4ljag5a91pgat87gsc4f8a43qc.apps.googleusercontent.com&scope=profile%20email&state=vyvtWrMwTSA6zP_15Q2JeMQNbI6nbMr0fUzpr8zMrL0%3D&redirect_uri=${KAKAO_REDIRECT_URI.key}&flowName=GeneralOAuthFlow`;
