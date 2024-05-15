import * as React from 'react';
import styled, {css} from 'styled-components';
import {font} from '../../styles/Common';
import {theme} from '../../styles/Theme';
import {Icon} from '../icon/Icon';
import {useState} from 'react';
import {FlexWrapper} from '../FlexWrapper';


type AnswerItems = {
    id: number
    title: string
    text: string
}


type QuestionItemPropsType = {
    question: string
    answer?: string
    objecAnswer?: Array<AnswerItems>
};
export const QuestionItem = (props: QuestionItemPropsType) => {

    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <StyledQuestionItem>
            <Title>{props.question}</Title>
            <Button isOpen={showAnswer} aria-label='Open' type={'button'} onClick={() => {
                setShowAnswer(!showAnswer)
            }}><span></span></Button>
            {showAnswer && <StyledAnswer>
                {!props.answer ? <>{props.objecAnswer?.map((e,index) => {
                    return (<FlexWrapper  gap={'5px'} wrap={'wrap'}><Index>{index+1}.</Index>
                        <AnswerTitle>{e.title}</AnswerTitle><Text style={{width:"65%"}}>{e.text}</Text></FlexWrapper>)
                })}</> : <Text>{props.answer}</Text>}
            </StyledAnswer> }
        </StyledQuestionItem>
    );
};

const StyledQuestionItem = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Title = styled.h4`
    width: 90%;
    ${font({family: '"Montserrat", sans-serif', weight: 500, Fmax: 23, Fmin: 15, color: `${theme.colors.fontColor}`})};
    padding-bottom: 20px;
`;
const Button = styled.button<{isOpen:boolean}>`
    width: 36px;
    height: 36px;
    background: none;
    cursor: pointer;
    position: relative;
    border: none;
    
span{
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${theme.colors.fontColor};
    ${props => props.isOpen && css<{isOpen:boolean}>`
                transform:rotate(-45deg) translateY(0);
        `}
}
    &::after {
        content: "";
        display: block;
        position: absolute;
        top:0;
        left: 46%;
        width: 2px;
        height: 100%;
        background-color: ${theme.colors.fontColor};
        ${props => props.isOpen && css<{isOpen:boolean}>`
                transform:rotate(-45deg) translateY(0);
            top:4%;
            
        `}
       
    }
`;
const StyledAnswer = styled.div`
    border: 1px solid ${theme.colors.fontColor};
    border-width: 0 0 0 1px;
    padding: 15px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap:20px;
    ${FlexWrapper}{
        width: 100%;
    }
`;

const Text = styled.p`
    ${font({family: '"Montserrat", sans-serif', weight: 400, Fmax: 20, Fmin: 15, color: `${theme.colors.colorGray}`})};
`;

const AnswerTitle = styled.h5`
    ${font({
        family: '"Montserrat", sans-serif',
        weight: 500,
        Fmax: 20,
        Fmin: 15,
        color: `${theme.colors.colorGray}`
    })};
    width: 33%;
`;

const Index = styled.span`
    ${font({
        family: '"Montserrat", sans-serif',
        weight: 500,
        Fmax: 20,
        Fmin: 15,
        color: `${theme.colors.colorGray}`
    })};
`;

//<Icon iconId={'plus'} width={'30px'} heigth={'30px'} viewBox={'0 0 30 30'}/>
