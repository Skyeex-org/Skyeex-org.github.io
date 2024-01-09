import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const WhatWeDoWrapper = styled.div`
    height: 100vh;
    background: #fff;
    color: #000;
    display: flex;
    flex-wrap: wrap;
`;

export const WhatWeDoColumn = styled.div`
    flex: 1 1 100%; 
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;

    ${minWidthQuery(Breakpoints.medium)} {
        flex: 1 1 25%;
    }
`;