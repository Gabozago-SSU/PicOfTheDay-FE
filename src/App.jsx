import GlobalStyle from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import HelpButton from "./components/commons/HelpButton";
import PlusButton from "./components/commons/plusButton";
import OkButton from "./components/commons/okButton";
import SearchBar from "./components/commons/searchBar";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                <div>
                    <SearchBar />
                </div>
                <br/>
                <HelpButton></HelpButton>
                <br>
                </br>
                <OkButton disabled={true}></OkButton>
                <OkButton disabled={false}></OkButton>
                <PlusButton />
            </MediaDiv>
        </div>
    );
}

export default App;
