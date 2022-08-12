import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecoilRoot } from "recoil";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_KEY } from "privateKey";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <RecoilRoot>
                <GoogleOAuthProvider clientId={GOOGLE_CLIENT_KEY}>
                    <App />
                </GoogleOAuthProvider>
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>,
);
