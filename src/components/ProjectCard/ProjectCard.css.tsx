import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectCardTitle = styled.h2`
    height: 2.5rem;
    margin: 1.5rem 0rem 0rem 0rem;
    font-size: 1.25rem;
    transition: all 500ms ease;

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 2.5rem 0rem 0rem 0rem;
        font-size: 1.5rem;
    }
`;

export const ProjectCardWrapper = styled.div`
    width: 75%;
    height: 22.5rem;
    background: ${Colors.paleWhite};
    border-radius: 0.85rem;
    margin: 2.5rem 1.25rem 0rem 1.25rem;
    user-select: none;
    transition: all 500ms ease;

    ${minWidthQuery(Breakpoints.small)} {
        width: 60%;
        height: 20rem;
        margin: 2.5rem 0.5rem 0rem 0.5rem;
    }

     ${minWidthQuery(Breakpoints.medium)} {
        width: 17.5rem;
        height: 25rem;
        margin: 2.5rem 0.5rem 0rem 0.5rem;
    }

    :hover {
        box-shadow: 0 0 25px rgba(33, 33, 33, .15); 

        ${ProjectCardTitle} {
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
    width: 100%;
    height: 6.5rem;
    background: ${Colors.gray};
`;

export const ProjectCardDescription = styled.p`
    font-size: 0.85rem;
    color: ${Colors.paleGray};

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1rem;
    }
`;