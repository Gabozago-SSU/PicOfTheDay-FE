import styled from "styled-components";
import colors from "../../../styles/colors";

export const StyledProfile = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${colors.black_30};
    border-radius: 30px;

    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
`;
