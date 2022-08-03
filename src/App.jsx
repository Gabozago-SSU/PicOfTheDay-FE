import GlobalStyle from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import HelpButton from "./components/commons/HelpButton";
import PlusButton from "./components/commons/plusButton";
import OkButton from './components/commons/okButton';
import { StyleSearchBar } from "./components/commons/searchBar";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                <br />
                <HelpButton />
                <br />
                <PlusButton />
                <br />
                <OkButton disabled="true" />
                <StyleSearchBar>
                    <input type="text" placeholder="검색" />
                </StyleSearchBar>
            </MediaDiv>
        </div>
    );
}

export default App;
