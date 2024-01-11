import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const WhatWeDoWrapper = styled.div`
    background: #fff;
    color: #000;
    text-align: center;
  
    ${minWidthQuery(Breakpoints.large)} {
        padding: 2rem 12rem 6rem 12rem;
        text-align: left;
    }
`;

export const WhatWeDoTitle = styled.div`
    font-size: 3.5rem;
    font-weight: bold;

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 2rem;
        font-size: 4rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 3.5rem;
    }
`;

export const WhatWeDoOverTitle = styled.p`
    font-weight: bold;
    font-size: 1.20rem;
    padding-left: 2rem;
    text-transform: uppercase;
    display: none;
  
    ${minWidthQuery(Breakpoints.medium)} {
        display: inline;
    }
`;

export const WhatWeDoContent = styled.div`
    padding-top: 2rem;
    color: #333333;

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 2rem;
    }
`;

export const WhatWeDoParagraph = styled.p`
    line-height: 1.55rem;
    font-size: 1.15rem;

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1.5rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        font-size: 1.15rem;
    }
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
    border-bottom: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
  
    ${minWidthQuery(Breakpoints.large)} {
        flex: ${(props) => `1 1 ${props.columnPercentage}%;`}
        border-right: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
        border-bottom: none;
    }
`;
