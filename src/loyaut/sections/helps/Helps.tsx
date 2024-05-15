import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import photo from '../../../assets/1B7A6452.webp';
import {theme} from '../../../styles/Theme';
import {Item} from '../../../components/item/Item';
import {font} from '../../../styles/Common';

export const Helps:React.FC = () => {
    return (
        <StyledHelps id={"helps"}>
            <SectionTitle>Чем могу помочь</SectionTitle>
            <FlexWrapper justify={'space-between'}  gap={'5%'}>
                <PhotoWrapper>
                    <Photo    src={photo} alt={''}/>
                </PhotoWrapper>
                <StyledContent>
                    <Text>Я оказываю заботливую поддержку в разрешении психологических преград, установок и убеждений,
                          которые мешают наслаждаться здоровой и полноценной жизнью.</Text>
                    <ContentItems>
                        <Item description={"Помогу разобраться и справиться с жизнеными ситуациями"}/>
                        <Item description={"Избавиться от тревоги"}/>
                        <Item description={"Проработать чувство вины и стыда"}/>
                        <Item description={"Найти направление для продвижения вперёд"}/>
                        <Item description={"Если вы чувствуете, что качество вашей жизни не соответствует вашим" +
                            " ожиданиям"}/>
                        <Item description={"Преодолеем преграды и трудности, связанные с общением"}/>
                    </ContentItems>

                </StyledContent>
            </FlexWrapper>

        </StyledHelps>
    );
};

const StyledHelps = styled.section`
    width: 80%;
    min-height: 100vh;
    height: fit-content;
`;
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        max-width: 300px;
        width: 100%;
        height: 100%;
        background-color: ${theme.colors.colorGray};
        position: absolute;
        top: -10px;
        left: -10px;
        z-index: -1;
    }
`;
const Photo = styled.img`
    max-width: 300px;
    height: auto;
    width: 100%;
    object-fit: cover;
`;
const StyledContent = styled.div`
    width: 65%;
`;

const Text = styled.p`
    border: 0.5px solid ${theme.colors.colorGray};
    padding: 10px 20px;
    ${font({family: '"Montserrat", sans-serif', weight: 400, Fmax: 20, Fmin: 15, color: `${theme.colors.fontColor}`})};
`;
const ContentItems = styled.ul`
    margin-top: 5%;
`;
