import * as React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {QuestionItem} from '../../../components/questionItem/QuestionItem';


const questions = [
    {
        id: 1,
        question: 'Что такое психологическая помощь и как она может быть полезна ?',
        answer: 'Психологическая помощь' +
            ' - это профессиональная поддержка, которая помогает людям решать эмоциональные проблемы, справляться с' +
            ' кризисами, улучшать отношения и достигать личных целей. Обращение к психологу не обязательно означает,' +
            ' что у вас есть серьезные проблемы. Она помогает повысить психологическое благополучие и качество жизни.'
    },
    {
        id: 2, question: 'Как определить когда нужно обратиться к психологу ?', answernsItems: [{
            id: 12, title: 'Эмоциональные' +
                ' проблемы:', text: 'Тревога, депрессия, страхи или гнев, которые мешают вам функционировать в' +
                ' повседневной жизни.'
        }, {
            id: 22, title: 'Межличностные проблемы: ', text: 'Конфликты с близкими,' +
                ' коллегами или друзьями, которые вызывают дистресс.'
        }, {
            id: 32,
            title: 'Стресс и перегрузка: ',
            text: 'Постоянное чувство напряженности или перегрузки, связанное с работой, обязанностями или личными проблемами.'
        }, {
            id: 32,
            title: 'Стресс и перегрузка: ',
            text: 'Постоянное чувство напряженности или перегрузки, связанное с работой, обязанностями или личными проблемами.'
        }, {
            id: 32,
            title: 'Стресс и перегрузка: ',
            text: 'Постоянное чувство напряженности или перегрузки, связанное с работой, обязанностями или личными проблемами.'
        }]
    },
    {
        id: 3, question: 'Как происходит первичная встреча с психологом ?', answer: '\n' +
            'Первичная встреча с психологом обычно включает в себя знакомство, обсуждение ваших проблем и целей, а также установление взаимного понимания о том, как будет проходить процесс терапии. Это время для оценки, подходит ли данный специалист вам, и для обсуждения дальнейших шагов сотрудничества.'
    },
    {
        id: 4,
        question: 'Сколько времени может занять процесс работы с психологом ?',
        answer: 'Продолжительность работы с психологом может быть разной: от нескольких сеансов краткосрочной терапии до долгосрочного процесса лечения, зависящего от характера проблемы и индивидуальных потребностей клиента.'
    },
]

export const Questions:React.FC = () => {
    return (
        <StyledQuestions id={'questions'}>
            <SectionTitle>Популярные вопросы</SectionTitle>
            <FlexWrapper justify={'space-between'} direction={'column'} gap={'20px'}>
                {
                    questions.map(el => {
                        return <QuestionItem key={el.id} question={el.question} answer={el.answer} objecAnswer={el.answernsItems}/>
                    })
                }
            </FlexWrapper>
        </StyledQuestions>
    );
};

const StyledQuestions = styled.section`
    width: 100%;
    min-height: 100vh;
    height: fit-content;
    position: relative;

    ${FlexWrapper}, ${SectionTitle} {
        width: 80%;
        margin: auto;
    }

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
        bottom: -25%;
        background-image: url("https://www.meme-arsenal.com/memes/7807f85c9497a05a2d8c7ec2cc41ed8e.jpg");
        background-position-y: bottom;
        background-size: 100% 70%;
        background-repeat: no-repeat;
        opacity: 0.05;

    }

`;

