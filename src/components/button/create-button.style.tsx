import { Button } from '@mui/base';
import styled from 'styled-components';

export const CreatedButton = styled(Button)`
    display: flex;
    align-items: center;
    font-family: 'Fugless', cursive;
    font-size: 40px;
    justify-content: center;
    box-shadow: inset -20px 20px 20px rgba(0, 0, 0, 0.2), -20px 20px 30px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    border: 1px solid #00ff00;
    cursor: pointer;
    opacity: 100;
    width: 60px;
    height: 60px;
    position: fixed;
    bottom: 20px;
    right: 20px;
`;
