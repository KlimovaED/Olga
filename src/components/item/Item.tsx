import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/Theme';
import {font} from '../../styles/Common';

type ItemPropsType= {
    description:string
}
export const Item = (props:ItemPropsType) => {
    return (
        <StyledItem>
            <Arrow aria-hidden={true}>&#10230;</Arrow>
            <ItemText>{props.description}</ItemText>
        </StyledItem>
    );
};

const StyledItem = styled.li`
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 3%;
`;

const Arrow = styled.span`
    ${font({family: '"Montserrat", sans-serif', weight: 500, Fmax: 25, Fmin: 15, color: `${theme.colors.colorGray}`})};
    margin-bottom: 10px;
`;

const ItemText = styled.span`
    ${font({family: '"Montserrat", sans-serif', weight: 300, Fmax: 20, Fmin: 10, color: `${theme.colors.colorGray}`})};
`;


