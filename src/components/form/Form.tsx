import React from 'react';
import styled from 'styled-components';
import {font} from '../../styles/Common';
import {theme} from '../../styles/Theme';

export const Form:React.FC = () => {
    return (
        <StyledForm onSubmit={()=>{}}>
            <Input name={'user_name'} type='text' required placeholder={'Ваше имя ...'} />
            <Input name={'user_email'} type='email' required placeholder={'Ваш email ...'} />
            <Input name={'title'} type='text' required placeholder={'Ваш вопрос ...'}/>
            <Input name={'message'} as={'textarea'} required placeholder={'Расскажите подробнее о своей проблеме...'}/>
            <Button type={'submit'}>Отправить</Button>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 500px;
    margin: auto ;
    gap:20px;

    textarea{
        resize: none;
        height: 155px;
        padding: 10px 10px;
    }
`;
const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 5px 10px;
    ${font({
        family: '"Montserrat", sans-serif',
        weight: 500,
        Fmax: 16,
        Fmin: 14,
        color: `${theme.colors.fontColor}`
    })};

    &:focus {
        border: 2px solid ${theme.colors.fontColor};
    }
`;

const Button= styled.button`
    padding: 5px;
    background-color:transparent;
    min-width: max-content;
    width: 40%;
    height: 40px;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid ${theme.colors.fontColor};
    ${font({
        family: '"Montserrat", sans-serif',
        weight: 500,
        Fmax: 15,
        Fmin: 13,
        color: `${theme.colors.fontColor}`
    })};
    transition: ${theme.animation.transition};
    &:hover{
        background-color:${theme.colors.colorGray} ;
        border: none;
        color: ${theme.colors.backgroundColor};
    }
`;
