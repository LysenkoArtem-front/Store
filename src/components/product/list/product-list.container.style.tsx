import styled from 'styled-components';
import { Box, CircularProgress } from '@mui/material';
export const Loader = styled(CircularProgress)`
    padding: 30% 50%;
`;
export const ProductListWrapper = styled(Box)`
    background: linear-gradient(4deg, #5462c3, #ba872c);
    position: absolute;
    width: 100vw;
`;
