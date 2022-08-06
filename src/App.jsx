import GlobalStyle from "./styles/globalStyles";
import { Routes, Route, Switch } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import Login from './pages/Loginpage/Login';
import Nikname from './pages/Niknamepage/Nikname';

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                <Login />
                {/* <Nikname /> */}
            </MediaDiv>
        </div>
    );
}

export default App;
