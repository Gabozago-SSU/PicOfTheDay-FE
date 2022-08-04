import GlobalStyle from "./styles/globalStyles";
import { Routes, Route, Switch } from "react-router-dom";
import { MediaDiv } from "./styles/common";

import BottomNav from "./components/BottomNav";
import HomePage from "pages/Home";
import MapPage from "./pages/Map";
import FeedPage from "./pages/Feed";
import ReviewPage from "./pages/Review";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                <Routes>
                    <Route exact={true} path="*" element={<HomePage />}></Route>
                    <Route exact={true} path="/map" element={<MapPage />}></Route>
                    <Route exact={true} path="/feed" element={<FeedPage />}></Route>
                    <Route exact={true} path="/review" element={<ReviewPage />}></Route>
                    <Route exact={true} path="/mypage" element={<MapPage />}></Route>
                </Routes>
                <BottomNav />
            </MediaDiv>
        </div>
    );
}

export default App;
