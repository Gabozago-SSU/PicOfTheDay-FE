import GlobalStyle from "./styles/globalStyles";
import { Routes, Route, Switch } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import Login from "./pages/Loginpage/Login";
import Nikname from "./pages/Niknamepage/Nikname";

import BottomNav from "./components/BottomNav";
import HomePage from "pages/Home/homePage";
import MapPage from "./pages/Map";
import FeedPage from "./pages/Feed";
import ReviewPage from "./pages/Review";
import PlacePage from "./pages/Home/Place/placePage";
import SelectChip from "pages/SelectTagChip/SelectChip";
import ProfilePage from './pages/Profile/profilePage';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                <Routes>
                    <Route exact={true} path="/profile" element={<ProfilePage />}></Route>
                    <Route exact={true} path="/onboarding" element={<SelectChip />}></Route>
                    <Route exact={true} path="/" element={<HomePage />}></Route>
                    <Route exact={true} path="/place" element={<PlacePage />}></Route>
                    <Route exact={true} path="/map" element={<MapPage />}></Route>
                    <Route exact={true} path="/feed" element={<FeedPage />}></Route>
                    <Route exact={true} path="/review" element={<ReviewPage />}></Route>
                    <Route exact={true} path="/mypage" element={<MapPage />}></Route>
                    <Route exact={true} path="/login" element={<Login />}></Route>
                    <Route exact={true} path="/signup" element={<Nikname />}></Route>
                </Routes>
                <BottomNav />
            </MediaDiv>
        </div>
    );
}

export default App;
