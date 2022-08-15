import React from "react";
import { ModalLayout, Background, ModalButton, ModalCloseButton } from "./styles";

const Modal = ({ closeModal, buttonText, children }) => {
    return (
        <Background>
            <ModalLayout>
                <ModalCloseButton onClick={() => closeModal(false)} />
                {children}
                <ModalButton onClick={() => closeModal(true)}>{buttonText}</ModalButton>
            </ModalLayout>
        </Background>
    );
};

export default Modal;
