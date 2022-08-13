import styled from "styled-components";
import colors from "../../../styles/colors";

export const StyledProfile = styled.div`
    width: 1.875rem;
    height: 1.875rem;
    background-color: ${colors.black_30};
    border-radius: 1.875rem;

    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;
