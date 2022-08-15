import styled from "styled-components";
import colors from "styles/colors";
import { ToastContainer } from "react-toastify";

export const ScrollDiv = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 30px;
    overflow: scroll;

    h2 {
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
    }
`;
export const ReviewLabel = styled.div`
    padding: 17px 22px;
`;

export const SearchWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding: 17px 22px;
    gap: 18px;
`;

export const KewordsWrapper = styled.div`
    width: 100%;
    display: flex;
    height: fit-content;
    flex-direction: row;
    gap: 7px;
    overflow-x: scroll;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }
`;

export const DefaultLine = styled.hr`
    width: 100%;
    height: 0.5px;
    border: 0.5px solid ${colors.black_30};
    bottom: 0;
    padding: 0;
`;

export const RatingWrapper = styled.div`
    width: fit-content;
    padding: 17px 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    h1 {
        margin-bottom: 17px;
        text-align: center;
    }
`;

export const ReviewEditBox = styled.textarea`
    position: relative;
    width: calc(100%);
    min-height: 117px;
    height: fit-content;
    padding: 20px;
    background-color: ${"#EFEFEF"};
    border-radius: 5px;
    margin-top: 17px;

    font-weight: 500;
    font-size: 12px;
    line-height: 19px;

    ::placeholder {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: ${colors.black_40};
    }
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
    className: "toast-container",
    toastClassName: "toast",
    bodyClassName: "body",
    progressClassName: "progress",
})`
    &&&.Toastify__toast-container {
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: red !important;
        padding: 12px;
    }
    .Toastify__toast {
        background: #f6e2e6;
        border: 1px solid #ff3358;
        box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        color: ${colors.red_100};
    }
    .Toastify__toast-body {
    }
    .Toastify__progress-bar {
    }
    .Toastify__toast-theme--colored {
        color: ${colors.red_100};
    }
    .Toastify__toast-theme--dark {
        color: ${colors.red_100};
    }
    .Toastify__toast-theme--light {
        color: ${colors.red_100};
    }
    .toast {
        background: #f6e2e6;
        border: 1px solid #ff3358;
        box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        color: ${colors.red_100};
    }
    .body {
        color: ${colors.red_100};
    }

    .Toastify__close-button > svg {
        display: none;
    }
`;
