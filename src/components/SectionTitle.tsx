import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from '../styles/Common';

export const SectionTitle = styled.h2`
    padding-bottom: 7%;
    text-transform: uppercase;
    ${font({family: 'Playfair Display', weight: 500, Fmax: 40, Fmin: 30, color: `${theme.colors.fontColor}`,lineHeight:1.4})};
`;
