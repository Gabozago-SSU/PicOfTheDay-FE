import GlobalStyle from "./styles/globalStyles";
import { Routes, Route, Switch } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import Login from "./pages/Loginpage/Login";
import Nikname from "./pages/Niknamepage/Nikname";

import BottomNav from "./components/BottomNav";
import HomePage from "pages/Home";
import MapPage from "./pages/Map";
import FeedPage from "./pages/Feed";
import ReviewPage from "./pages/Review";
import SelectChip from "pages/SelectTagChip/SelectChip";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                <SelectChip/>
            </MediaDiv>
        </div>
    );
}

export default App;
