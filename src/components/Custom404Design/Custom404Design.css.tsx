import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const Custom404Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center; 
    text-align: center;
    height: 100vh;
    flex-direction: column;
  
    ${minWidthQuery(Breakpoints.medium)} {
        flex-direction: row;
    }
`;

export const Custom404Code = styled.h1`
    padding: 1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 0;
        margin-right: 1rem;
    }
`;

export const Custom404Line = styled.div`
    background: ${Colors.white};
    height: 3px;
    width: 4rem;
`;

export const Custom404Message = styled.p`
    padding: 1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 0;
        margin-left: 1rem;
    }
`;

