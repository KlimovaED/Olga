import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import photoDesktop from '../../../assets/1B7A6222.webp';
import {font} from '../../../styles/Common';
import {theme} from '../../../styles/Theme';
import {Button} from '../../../components/button/Button';

const onClickSubmit= ()=>{

}
export const Main:React.FC = () => {
    return (
        <StyledMain id={"main"}>
            <FlexWrapper justify={'space-around'} align={'center'} gap={"5%"}>
                <MainContent>
                    <Name>Olga Tarasova</Name>
                    <Title>&#9135; Ваш личный психолог &#9135;</Title>
                   <Button callback={()=>onClickSubmit()} type={"submit"} title={"Записаться на прием"} width={"350px"} height={"50px"} arrow={"\u27F6"}/>
                </MainContent>
                <PhotoWrapper>
                    <Photo   src={photoDesktop} alt={''}/>
                </PhotoWrapper>
            </FlexWrapper>
        </StyledMain>
    )
};


const StyledMain = styled.section`
    padding-top: 80px;
    width: 80%;
    margin: auto;
    min-height: 90vh;
    height: fit-content;
`;
const MainContent = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name = styled.span`
    text-transform: uppercase;
    ${font({family: 'Playfair Display', weight: 700, Fmax: 60, Fmin: 30, color: `${theme.colors.fontColor}`,lineHeight:1.4})};
`;

const Title = styled.h1`
    text-transform: uppercase;
    opacity: 0.7;
    letter-spacing: 2px;
    padding-bottom: 30%;
    ${font({family: '"Montserrat", sans-serif', weight: 300, Fmax: 23, Fmin: 12, color: `${theme.colors.colorGray}`})};
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        width: 350px;
        height: 520px;
        border: 2px solid ${theme.colors.fontColor};
        position: absolute;
        top: -20px;
        left: 20px;
        z-index: -1;

    }
`;
const Photo = styled.img`
    width: 350px;
    height: auto;
    object-fit: cover;

`;


