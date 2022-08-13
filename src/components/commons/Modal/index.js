import React from "react";
import { ModalLayout, Background, ModalButton } from "./styles";

const Modal = ({ closeModal, buttonText, children }) => {
    return (
        <Background>
            <ModalLayout>
                {children}
                <ModalButton onClick={closeModal}>{buttonText}</ModalButton>
            </ModalLayout>
        </Background>
    );
};

export default Modal;
