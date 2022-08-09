import styled from "styled-components";
import Logo from "../../../assets/HeaderLogo.svg";
import SearchIcon from "../../../assets/SearchFillIc.svg";
import ActiveSearchIcon from "../../../assets/SearchPinkIc.svg";
import BackIcon from "../../../assets/BackIc.svg";
import colors from "styles/colors";

export const BackHeaderLayout = styled.div`
    position: relative;
    background-size: auto;
    width: 100%;
    max-width: 768px;
    height: 53px;
    float: top;
    position: fixed;
    background-repeat: no-repeat;
    background-color: white;
    z-index: 998;
    box-shadow: 0px 3px 5px ${colors.black_10};
    padding: 0;
`;
export const TitleBox = styled.div`
    position: absolute;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    margin: 0 auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const BackIc = styled.div`
    display: flex;
    justify-content: center;
    float: left;
    align-items: center;
    width: 24px;
    height: 50px;
    margin-left: 24px;
`;

export const ActivatedBackIc = ({ isClicked, activeColor }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.0001 11H7.14006L10.7701 6.63997C10.9398 6.43575 11.0215 6.17247 10.9971 5.90805C10.9727 5.64362 10.8443 5.39971 10.6401 5.22997C10.4358 5.06023 10.1726 4.97857 9.90814 5.00295C9.64371 5.02733 9.3998 5.15575 9.23006 5.35997L4.23006 11.36C4.19642 11.4077 4.16634 11.4578 4.14006 11.51C4.14006 11.56 4.14006 11.59 4.07006 11.64C4.02473 11.7546 4.001 11.8767 4.00006 12C4.001 12.1233 4.02473 12.2453 4.07006 12.36C4.07006 12.41 4.07006 12.44 4.14006 12.49C4.16634 12.5421 4.19642 12.5922 4.23006 12.64L9.23006 18.64C9.32408 18.7529 9.44182 18.8436 9.57491 18.9059C9.70799 18.9681 9.85315 19.0002 10.0001 19C10.2337 19.0004 10.4601 18.9191 10.6401 18.77C10.7413 18.686 10.825 18.5829 10.8864 18.4666C10.9477 18.3502 10.9855 18.2229 10.9976 18.0919C11.0097 17.961 10.9958 17.8289 10.9567 17.7033C10.9177 17.5777 10.8543 17.461 10.7701 17.36L7.14006 13H19.0001C19.2653 13 19.5196 12.8946 19.7072 12.7071C19.8947 12.5195 20.0001 12.2652 20.0001 12C20.0001 11.7348 19.8947 11.4804 19.7072 11.2929C19.5196 11.1053 19.2653 11 19.0001 11Z"
                fill={isClicked ? activeColor : "#3B3B3B"}
            />
        </svg>
    );
};
