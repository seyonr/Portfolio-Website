import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#48ACF0' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#85CEFF' : '#48ACF0')};  
    }
`;

export const ButtonLink = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#48ACF0' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        color: #FFF;
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#85CEFF' : '#48ACF0')};  
        box-shadow: rgba(72, 135, 202, 0.8) 0 0 40px 23px;
    }
`