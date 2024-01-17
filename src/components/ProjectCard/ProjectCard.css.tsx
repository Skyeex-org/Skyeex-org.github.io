import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectCardTitle = styled.h2`
    height: 2.5rem;
    font-size: 1.1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1.5rem;
    }
`;

export const ProjectCardWrapper = styled.div`
    width: 50%;
    height: 15rem;
    background: #F4F8FA;
    border-radius: 0.85rem;
    margin: 0rem 1.25rem 0rem 1.25rem;
    user-select: none;
    
    ${minWidthQuery(Breakpoints.medium)} {
        width: 15rem;
        height: 20rem;
    }

    :hover {
        transition: all 500ms ease;
        box-shadow: 0 0 25px rgba(33, 33, 33, .15); 

        ${ProjectCardTitle} {
            transition: all 500ms ease;
            color: ${Colors.coreDarkerBlue};
        }
    }

    * {
        border-radius: 0.85rem 0.85rem 0rem 0rem;
    }
`;

export const ProjectCardWrapperContainer = styled.div`
    margin: 0rem 1rem 0.5rem 1rem;
`;

export const ProjectCardImage = styled.img`
    height: 5rem;

    ${minWidthQuery(Breakpoints.medium)} {
        height: 7.5rem;
    }
`;

export const ProjectCardDescription = styled.p`
    height: 75px;
    font-size: 0.85rem;
    color: #5F5F65;

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1rem;
    }
`;