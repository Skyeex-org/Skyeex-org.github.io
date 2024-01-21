import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectCardTitle = styled.h2`
    height: 2.5rem;
    margin: 2.5rem 0rem 0rem 0rem;
    font-size: 1.1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1.5rem;
    }
`;

export const ProjectCardWrapper = styled.div`
    width: 50%;
    height: 15rem;
    background: ${Colors.paleWhite};
    border-radius: 0.85rem;
    margin: 5rem 1.25rem 0rem 1.25rem;
    user-select: none;
    
    ${minWidthQuery(Breakpoints.medium)} {
        width: 16rem;
        height: 22.5rem;
        margin: 2.5rem 0.5rem 0rem 0.5rem;
    }

    ${minWidthQuery(Breakpoints.small)} {
        margin: 2.5rem 0.5rem 0rem 0.5rem;
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
    width: 100%;
    height: 0%;
    background: ${Colors.gray};

    ${minWidthQuery(Breakpoints.medium)} {
        height: 7.5rem;
    }
`;

export const ProjectCardDescription = styled.p`
    font-size: 0.85rem;
    color: ${Colors.paleGray};

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1rem;
    }
`;