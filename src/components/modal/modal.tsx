// import { title } from "process";

import { FC, MouseEventHandler, ReactNode, memo } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';
import { ModalWrapper, ModalWindow, ButtonModal } from './modal.style';

interface ModalProps {
    title: string;
    children?: ReactNode;
    onClose: MouseEventHandler;
    visible: boolean;
}

export const Modal: FC<ModalProps> = memo(({ title, visible, children, onClose }) => {
    return (
        <ModalWrapper open={visible} onClose={onClose}>
            <ModalWindow>
                {title}
                <ButtonModal onClick={onClose}>
                    <CloseIcon />
                </ButtonModal>
                {children}
            </ModalWindow>
        </ModalWrapper>
    );
});
