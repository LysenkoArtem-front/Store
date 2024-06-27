import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';

export const FormWrapper = styled('form')`
    display: flex;
    margin-top: 40px;
    width: 100%;
    flex-direction: column;
    align-items: normal;
    gap: 20px;
`;
export const ButtonWrapper = styled(Box)`
    display: flex;
    justify-content: end;
    margin-right: 10px;
    margin-top: 100px;
`;
export const ButtonCreater = styled(Button)`
    color: #fff;
    transition: all 0.5s;
    position: relative;
`;
export const InputCreate = styled(TextField)`
    color: #ffffff;
    text-decoration: none;
    border-bottom: solid 2px #1059ff;
    transition: all 0.25s ease;
    cursor: pointer;
`;
