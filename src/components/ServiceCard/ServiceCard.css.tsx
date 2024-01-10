import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ServiceCardTitle = styled.h2`
    font-weight: bold;
    font-size: 1.8rem;
    transition: all 250ms ease;
`;

export const ServiceCardWrapper = styled.div`
    padding: 3.5rem;
    text-align: center;
  
    :hover {
      ${ServiceCardTitle} {
          color: ${Colors.coreDarkerBlue};
      } 
    }
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
