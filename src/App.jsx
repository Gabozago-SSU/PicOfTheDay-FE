import GlobalStyle from "./styles/globalStyles";
import { Routes, Route } from "react-router-dom";
import { MediaDiv } from "./styles/common";
import ToggleChip from "./components/commons/Chip";
function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <MediaDiv>
                {
                    //참고용 코드! 실행하면 토글 두개만 보이쥬 잘 만들어 진 것 같으면
                    // 밑에 코드만 삭 삭제해주면 됩니다 import도 삭제!
                }
                <ToggleChip isChecked={false}>러블리</ToggleChip>
                <ToggleChip isChecked={true}>러블리</ToggleChip>
            </MediaDiv>
        </div>
    );
}

export default App;
