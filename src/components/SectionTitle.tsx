import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    position: relative;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.14em;
    text-align: center;
    margin-bottom: 90px;

    &::before {
        content: ' ';
        display: inline-block;
        height: 1px;
        width: 55px;
        background-color: ${theme.colors.accent};

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);
    }
`
