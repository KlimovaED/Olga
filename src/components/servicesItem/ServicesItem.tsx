import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../FlexWrapper';
import {theme} from '../../styles/Theme';
import {font} from '../../styles/Common';

type ServicesItemProps={
    title:string
    price:number
    description:string
}

export const ServicesItem = (props:ServicesItemProps) => {
    return (
        <StyledServicesItem >
                <Title>{props.title}</Title>
                <Price>{props.price} &#8381;</Price>
                <Description>{props.description}</Description>
        </StyledServicesItem>

    );
};
const StyledServicesItem= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 30px;
`;
const Title = styled.h3`
    ${font({family: 'Playfair Display', weight: 600, Fmax: 25, Fmin: 20, color: `${theme.colors.fontColor}`,lineHeight:1.4})};
    width: 80%;
`;
const Price=styled.span`
    ${font({family: 'Playfair Display', weight: 600, Fmax: 25, Fmin: 20, color: `${theme.colors.fontColor}`,lineHeight:1.4})};
    width: 20%;
    text-align: right;
`;
const Description = styled.p`
    ${font({family: '"Montserrat", sans-serif', weight: 300, Fmax: 17, Fmin: 15, color: `${theme.colors.fontColor}`,lineHeight:1.4})};
    width: 100%;
    margin-top: 10px;
    padding: 10px 10px;
    border: 1px solid;
    border-radius: 20px;
    
`;
