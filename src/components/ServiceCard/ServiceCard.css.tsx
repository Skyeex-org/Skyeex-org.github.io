import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ServiceCardWrapper = styled.div`
    padding: 3.5rem;
    text-align: center;
`;

export const ServiceCardImage = styled.img`
    width: 3rem;
    height: 3rem;
    transition: all 250ms ease;
  
    ${minWidthQuery(Breakpoints.medium)} {
        width: 100%;
        height: 100%;
    }
`;

export const ServiceCardTitle = styled.h2`
    font-weight: bold;
    font-size: 1.8rem;
`;
