import GlobalStyle from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { MediaDiv } from "./styles/common";
function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                <Routes></Routes>
            </MediaDiv>
        </div>
    );
}

export default App;
