import { createGlobalStyle } from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &:focus-visible{
        outline: 0.5px solid ${theme.colors.colorGray};
    }
}
a {
    text-decoration: none;
}
ul{
    list-style: none;
}
section:not(:first-of-type){
    padding-top: 100px;
    margin: auto;
}
body{
    background-color: ${theme.colors.backgroundColor};
    color: ${theme.colors.fontColor} ;
    height: fit-content;
    margin: 0;
    font-family:'Playfair Display' , -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;
