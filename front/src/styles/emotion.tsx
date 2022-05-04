import styled from '@emotion/styled';

export const OptionButton = styled.button`
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    padding: 10px;
    width: 15%;
    margin: 10px;
    transition: all 0.5s ease-in-out;
    &:hover {
    transform: scale(1.1);
    }
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const ContactEmotion = styled.div`
    width: 225px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 30px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-out;
    &:hover {
    transform: scale(0.9);
    }
`;