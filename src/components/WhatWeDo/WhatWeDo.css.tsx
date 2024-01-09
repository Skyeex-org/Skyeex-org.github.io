import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const WhatWeDoWrapper = styled.div`
    background: #fff;
    color: #000;
    display: flex;
    flex-wrap: wrap;
    padding: 0 6rem 0 6rem;
`;

export const WhatWeDoColumn = styled.div<{ isLastElement: boolean }>`
    flex: 1 1 100%; 
    border-right: ${(props) => props.isLastElement ? 'none' : '1px solid rgba(204, 204, 204, 0.7)'};
  
    ${minWidthQuery(Breakpoints.medium)} {
        flex: 1 1 25%;
    }
`;