import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const WhatWeDoWrapper = styled.div`
    background: #fff;
    color: #000;
    padding: 0 12rem 0 12rem;
`;

export const WhatWeDoTitle = styled.div`
    padding: 2rem;
    font-size: 3rem;
    font-weight: bold;
`;

export const WhatWeDoContent = styled.div`
    font-size: 1rem;
    padding: 2rem;
`;


export const WhatWeDoFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const WhatWeDoColumn = styled.div<{ columnPercentage: number, shouldHaveBorder?: boolean }>`
    flex: 1 1 100%; 
    border-right: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
  
    ${minWidthQuery(Breakpoints.medium)} {
        flex: ${(props) => `1 1 ${props.columnPercentage}%;`}
    }
`;