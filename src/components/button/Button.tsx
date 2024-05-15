import React from 'react';
import styled from 'styled-components';
import {font} from '../../styles/Common';
import {theme} from '../../styles/Theme';

type ButtonPropsType = {
    width?: string
    height?: string
    title: string
    arrow?: string
    type:'button' | 'submit' | 'reset'
    callback:()=>void
}

export const Button = (props: ButtonPropsType) => {


    return (
        <StyledButton onClick={props.callback} type={props.type} style={{maxWidth: props.width || '350px', height: props.height || '40px'}}>
                <Title>{props.title}</Title>
                <Arrow aria-hidden={true} >{props.arrow}</Arrow>
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 100%;
    background-color: transparent;
    margin-top: 20px;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: ${theme.animation.transition};
    &:hover{
    background-color:${theme.colors.colorGray} ;
    border-color: ${theme.colors.colorGray};
    }
    &:hover span{
        color: ${theme.colors.backgroundColor};
    }
`;
const Title = styled.span`
    text-transform: uppercase;
    ${font({family:'"Montserrat", sans-serif', weight: 600, Fmax: 13, Fmin: 10, color: `${theme.colors.fontColor}`})};
    
`;
const Arrow = styled.span`
    position: absolute;
    right: 10px;
    top:-7px;
    ${font({ weight: 300, Fmax: 40, Fmin: 30, color: `${theme.colors.fontColor}`})};
    
`;
