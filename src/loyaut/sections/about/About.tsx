import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import photo from '../../../assets/1B7A6379.webp';
import {font} from '../../../styles/Common';
import {theme} from '../../../styles/Theme';

export const About:React.FC = () => {
    return (
        <StyledAbout id={'about'}>
            <SectionTitle>Давайте познакомимся </SectionTitle>
            <FlexWrapper justify={'space-between'} gap={'5%'}>
                <StyledContent>
                    <Text>Я,Тарасова Ольга - психолог общей практики, специализирующийся на применении
                          когнитивно-поведенческого подхода,
                          наиболее эффективного метода психотерапии на сегодняшний день. Моя работа включает проведение
                          краткосрочных сессий,
                          цель которых - обучить клиентов применять изученные методы в повседневной жизни для
                          самостоятельного преодоления трудностей.</Text>
                    <Text>В процессе работы мы анализируем негативные паттерны, эмоции и поведенческие реакции, которые
                          могут мешать достижению целей.
                          Я помогаю клиентам осознать, что эти механизмы, возможно, когда-то были полезными, но сейчас
                          стали неэффективными.
                          Наша цель - научиться обнаруживать и применять более адаптивные стратегии реагирования на
                          жизненные вызовы.
                          Хотя этот процесс может быть сложным, я буду рядом, чтобы поддержать вас на каждом
                          этапе.</Text>
                </StyledContent>
                <Photo  src={photo} alt={''}/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    padding-left: 10%;
`;

const StyledContent = styled.div`
    width: 60%`;

const Text = styled.p`
    padding-bottom: 3%;
    ${font({family: '"Montserrat", sans-serif', weight: 400, Fmax: 18, Fmin: 15, color: `${theme.colors.fontColor}`})};

`;
const Photo = styled.img`
    max-width: 350px;
    height: auto;
    width: 100%;
    object-fit: cover;
    transform: translateY(-30px);
`;
