import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";


type NavPropsType = {
    itemsMenu: Array<{ title: string, href: string }>,
    width: string
}


export const Nav = (props: NavPropsType) => {
    return (
        <StyledNav style={{width: props.width}}>
            <ul>
                {
                    props.itemsMenu.map((item, index) => {
                        return <ItemMenu key={index}><Link href={`#${item.href}`}>{item.title}</Link></ItemMenu>
                    })
                }
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        gap: 2%;
    }
`;

const ItemMenu = styled.li`
    box-sizing: border-box;
   
`;

const Link = styled.a`
    ${font({family: "\"Montserrat\", sans-serif", weight: 400, Fmax: 16, Fmin: 14, color: `${theme.colors.colorGray}`})};
    white-space: nowrap;
    text-transform: uppercase;
    transition: ${theme.animation.transition};
    &:hover{
        color: ${theme.colors.fontColor};
        border-bottom: 1.5px solid ${theme.colors.fontColor};
        font-weight: 500;
    }
`;
