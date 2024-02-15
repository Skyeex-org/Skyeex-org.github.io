import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ServicesWrapper = styled.div`
    text-align: center;
  
    ${minWidthQuery(Breakpoints.large)} {
        padding: 2rem 4rem 2rem 4rem;
        text-align: left;
    }
  
    ${minWidthQuery(Breakpoints.xxLarge)} {
        padding: 2rem 12rem 6rem 12rem;
    }
`;

export const ServicesTitle = styled.div`
    font-size: 2.5rem;
    font-weight: bold;
    padding-top: 2rem;

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
    color: ${Colors.paleGray};
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
        line-height: 2rem;
        font-size: 1.5rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        line-height: 1.8rem;
        font-size: 1.15rem;
    }
`;


