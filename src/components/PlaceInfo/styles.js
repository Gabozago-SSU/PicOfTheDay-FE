import styled from "styled-components";
import colors from "styles/colors";
import { ToastContainer } from "react-toastify";
export const PlaceinfoLayout = styled.div`
    width: 100%;
    min-height: 140px;
    padding-top: 20px;
    position: relative;
    padding-left: 17px;
    padding-right: 17px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
    position: absolute;
    right: 0;
    top: 20px;
    height: fit-content;
`;

export const AddressTextBox = styled.div`
    margin-left: 6px;
    margin-right: 6px;
    color: ${colors.black_80};
    overflow: hidden;
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-content: center;

    p {
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        text-align: center;
        height: 100%;
        align-items: center;
        align-self: center;
    }
`;

export const PhotoZonWrapper = styled.div`
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    color: ${colors.red_100};
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
`;
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: fit-content;

    align-items: center;
`;
export const RatingText = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: ${colors.red_100};
    margin-left: 3px;
    height: fit-content;
    align-self: center;
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
