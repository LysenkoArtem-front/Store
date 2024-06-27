import { Button } from '@mui/base';
import { Dialog, DialogTitle } from '@mui/material';
import styled from 'styled-components';

export const ModalWrapper = styled(Dialog)`
    width: 100%;
    height: 100%;
    background: rgba(237, 231, 225, 0.5);
`;
export const ModalWindow = styled(DialogTitle)`
    display: flex;
    font-family: 'Fugless', cursive;
    background-color: #f5f5dc;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
`;
export const ButtonModal = styled(Button)`
    border: none;
    background-color: none;
    background: transparent;
    background-color: transparent;
    cursor: pointer;
`;
