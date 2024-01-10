import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const WhatWeDoWrapper = styled.div`
    background: #fff;
    color: #000;
    padding: 2rem 12rem 6rem 12rem;
`;

export const WhatWeDoTitle = styled.div`
    padding: 2rem;
    font-size: 3.5rem;
    font-weight: bold;
`;

export const WhatWeDoOverTitle = styled.p`
    font-weight: bold;
    font-size: 1.20rem;
    padding-left: 2rem;
    text-transform: uppercase;
`;

export const WhatWeDoContent = styled.div`
    padding: 2rem;
    color: #333333;
`;

export const WhatWeDoParagraph = styled.p`
    line-height: 1.55rem;
    font-size: 1.15rem;
`;


export const WhatWeDoFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const WhatWeDoColumn = styled.div<{
    columnPercentage: number,
    shouldHaveBorder?: boolean
}>`
    flex: 1 1 100%; 
    border-right: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
  
    ${minWidthQuery(Breakpoints.medium)} {
        flex: ${(props) => `1 1 ${props.columnPercentage}%;`}
    }
`;