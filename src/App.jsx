import GlobalStyle from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import HelpButton from "./components/commons/HelpButton";
import PlusButton from "./components/commons/plusButton";
import OkButton from "./components/commons/okButton";
import SearchBar from "./components/commons/SearchBar/searchBar";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                <SearchBar />
            </MediaDiv>
        </div>
    );
}

export default App;
