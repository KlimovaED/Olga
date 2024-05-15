import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {font} from '../../../styles/Common';
import {theme} from '../../../styles/Theme';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Form} from '../../../components/form/Form';
import photo from '../../../assets/1B7A6254.webp';
import {SocialLinks} from '../../../components/socialLinks/SocialLinks';

export const Contacts: React.FC = () => {
    return (
        <StyledContacts>
            <SectionTitle>Мои контакты</SectionTitle>
            <StyledSubtitle>// Вы можете связаться со мной в удобном для вас мессанджаре или же заполнить форму обратной
                            связи</StyledSubtitle>
            <FlexWrapper justify={'space-between'} align={'center'} gap={'5%'}>
                <Content>
<Photo src={photo} alt={''} />
                   <SocialLinks width={'100%'}/>
                </Content>
                <Form/>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    width: 80%;
    min-height: 100vh;
    height: fit-content;
    margin: auto;

    ${SectionTitle} {
        padding-bottom: 20px;
    }
`;
const StyledSubtitle = styled.h3`
    text-transform: uppercase;
    margin-bottom: 5%;
    ${font({
        family: '"Montserrat", sans-serif',
        weight: 400,
        Fmax: 17,
        Fmin: 15,
        color: `${theme.colors.colorGray}`,
        lineHeight: 1.4
    })};
`;
const Content = styled.div`
    align-self: flex-start;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:50px;
    align-items: center;
`;
const Photo = styled.img`
    width: 80%;
`;

