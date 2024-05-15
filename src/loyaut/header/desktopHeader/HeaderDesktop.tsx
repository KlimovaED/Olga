import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Nav } from "../../../components/nav/Nav";
import { SocialLinks } from "../../../components/socialLinks/SocialLinks";

type MenuPropsType= {
    menu:Array<{title:string, href:string}>
}


export const HeaderDesktop = (props:MenuPropsType)=>{
    return(
    <HeaderDesktopContainer>
       <FlexWrapper justify={"flex-end"} align={"center"} gap={"5%"}>
        <Nav  width={"70%"} itemsMenu={props.menu}/>
        <SocialLinks width={"30%"}/>
       </FlexWrapper>
       </HeaderDesktopContainer>
    )
}
const HeaderDesktopContainer= styled.div`
width:80%;
height:100%;
margin:auto;
${FlexWrapper}{
    height: 100%;
}
`;
