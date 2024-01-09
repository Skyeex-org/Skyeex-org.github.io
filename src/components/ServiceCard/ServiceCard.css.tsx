import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ServiceCardWrapper = styled.div`
    padding: 3.5rem;
  
    :hover {
        img {
            filter: invert(46%) sepia(23%) saturate(1555%) hue-rotate(171deg) brightness(80%) contrast(86%);
        }
    }
`;

export const ServiceCardImage = styled.img`
    width: 3rem;
    height: 3rem;
    filter: invert(51%) sepia(38%) saturate(963%) hue-rotate(173deg) brightness(95%) contrast(86%);
    transition: all 250ms ease;
  
    ${minWidthQuery(Breakpoints.medium)} {
        width: 6rem;
        height: 6rem;
    }
`;

export const ServiceCardTitle = styled.h2`
    font-weight: bold;
    font-size: 1.8rem;
`;
