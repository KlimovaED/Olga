import styled from "styled-components"
import { HeaderDesktop } from "./desktopHeader/HeaderDesktop";



const Menu:Array<{title:string, href:string}>= [
    {
        title:"Чем могу помочь",
        href:"helps"
    },
    {
        title:"Обо мне",
        href:"about"
    },
    {
        title:"Услуги",
        href:"services"
    },
    {
        title:"Полезное",
        href:""
    },
    {
        title:"Вопросы",
        href:"questions"
    },
    {
        title:"Контакты",
        href:""
    }
]

export const Header = ()=>{
    return(
        <StyledHeader>
            <HeaderDesktop menu={Menu}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
height: 10vh;
`;
