import {FlexWrapper} from '../FlexWrapper';
import {Icon} from '../icon/Icon';
import styled from 'styled-components';
import {theme} from '../../styles/Theme';

type SocialLinksType = {
    width: string
}
export const SocialLinks = (props: SocialLinksType) => {
    return (
        <FlexWrapper justify={'space-between'} gap={'10%'} align={'center'}>
            <Link aria-label="Вконтакте"><Icon iconId={'codeVk'} width={'35px'} heigth={'35px'}/></Link>
            <Link aria-label="Телеграмм"><Icon iconId={'codeTelegram'} width={'35px'} heigth={'35px'}/></Link>
            <Link aria-label="Инстаграмм"><Icon iconId={'codeInst'} width={'35px'} heigth={'35px'}/></Link>
        </FlexWrapper>
    )
}
const Link = styled.a`
    cursor: pointer;
    transition: ${theme.animation.transition};
    &:hover{
        transform: scale(1.2);
    }
`;
