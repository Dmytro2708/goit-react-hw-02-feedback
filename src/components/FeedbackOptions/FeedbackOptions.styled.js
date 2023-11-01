import styled from 'styled-components';

export const BtnFeedback = styled.button`

    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: none;
    padding: 5px;
    background-color: orange;

     &:hover {
        background-color: blueviolet;
        color: #fff;
    }
    
`;

export const BtnList = styled.div`
display: flex;
    justify-content: center;
    gap: 10px;
`;