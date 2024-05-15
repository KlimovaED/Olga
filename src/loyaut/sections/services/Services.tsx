import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {theme} from '../../../styles/Theme';
import photo from '../../../assets/1B7A6321-2.webp';
import {ServicesItem} from '../../../components/servicesItem/ServicesItem';


export const Services:React.FC = () => {
    return (
        <StyledServices id={"services"}>
            <SectionTitle>Мои консультации </SectionTitle>
            <FlexWrapper justify={"space-between"} gap={"3%"}>
                <PhotoWrapper>
                    <Photo  src={photo} alt={''}/>
                </PhotoWrapper>
                <StyledContent>
                    <ServicesItem title={"Разовая консультация"} price={2000} description={"Формат разовой" +
                        " консультации подходит для решения конкретных узкиз задач, связанных в первую очередь с" +
                        " вашим видением ситуации, некоторым дефицитом информации или её искажением. Результатом" +
                        " сессии будет новый взгляд на ситуацию, получение информации, опираясь на которую вы дальше" +
                        " можете принимать решения и действовать наилучшим для вас образом."}/>
                    <ServicesItem title={"Пакет из 5 консультаций"} price={9000} description={"Долгосрочная терапия" +
                        " - для запросов, связанных с изменением внутреннего мира, характера, отношений с самим" +
                        " собой. Связь запроса с вот этим вот всем может быть как прямая (болезненно реагирую на" +
                        " любую критику, ругаю себя за малейший провал, трудно говорить на публике, и вообще я" +
                        " какой-то не такой, доктор поменяйте меня), так и косвенная (раз за разом строю отношения," +
                        " а получается какая-то несуразица, и друзей у меня как-бы и нет, а те что есть - ну разве" +
                        " это друзья, они все скучные и неуспешные, и вообще людей я не люблю, но так одиноко, так" +
                        " одиноко, вот как бы мне так отношения построить ?)."}/>

                </StyledContent>
            </FlexWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    width: 80%;
    min-height: 100vh;
    height: fit-content;
    &:nth-child(2){
        padding-top: 40px;
    }
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        max-width: 300px;
        width: 100%;
        max-height: 450px;
        height: 100%;
        border: 2px solid ${theme.colors.fontColor};
        position: absolute;
        top:-20px;
        left: -20px;
        z-index: 1;

    }
`;
const Photo = styled.img`
    max-width: 300px;
    width: 100%;
    max-height: 450px;
    height: 100%;
    object-fit: cover;
`;

const StyledContent = styled.div`
    width: 70%;
    transform: translateY(-20px);
`;


