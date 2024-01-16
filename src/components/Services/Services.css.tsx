import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ServicesWrapper = styled.div`
    background: ${Colors.white};
    color: ${Colors.black};
    text-align: center;
  
    ${minWidthQuery(Breakpoints.large)} {
        padding: 2rem 6rem 2rem 6rem;
        text-align: left;
    }
  
    ${minWidthQuery(Breakpoints.xxLarge)} {
        padding: 2rem 12rem 6rem 12rem;
    }
`;

export const ServicesTitle = styled.div`
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

export const ServicesOverTitle = styled.p`
    font-weight: bold;
    font-size: 1.20rem;
    padding-left: 2rem;
    text-transform: uppercase;
    display: none;
  
    ${minWidthQuery(Breakpoints.medium)} {
        display: inline;
    }
`;

export const ServicesContent = styled.div`
    padding-top: 2rem;
    color: ${Colors.gray};

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 2rem;
    }
`;

export const ServicesParagraph = styled.p`
    line-height: 1.55rem;
    font-size: 1.15rem;

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1.5rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        font-size: 1.15rem;
    }
`;


export const ServicesFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ServicesColumn = styled.div<{
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
