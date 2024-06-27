import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 8px 8px 8px 8px rgba(34, 60, 80, 0.09);
    background-color: #fffff0;
    padding: 25px 20px;
    font-family: 'Fugless', cursive;
    border-radius: 5px;
    font-size: 30px;
    max-width: 100vw;
    max-height: fit-content;
    display: flex;
    justify-content: space-between;
    margin: 60px 100px;
`;
export const Image = styled.img`
    border-radius: 8px;
    max-width: 400px;
    max-height: 500px;
`;
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
`;
export const ProductPrice = styled.p`
    display: flex;
    align-items: end;
`;
