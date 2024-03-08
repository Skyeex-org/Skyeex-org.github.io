import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectCardTitle = styled.h2`
    height: 2.5rem;
    margin: 1.5rem 0 0 0;
    font-size: 1.25rem;
    transition: all 500ms ease;

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 2.5rem 0 0 0;
        font-size: 1.5rem;
    }
`;

export const ProjectCardWrapperContainer = styled.div`
    margin: 0 1rem 3rem 1rem;

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 0 1rem 0.5rem 1rem;
    }
`;

export const ProjectCardImage = styled.div<{ imageSource: string }>`
    width: 100%; 
    height: 12.5rem;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${(props) => props.imageSource});
    background-size: cover; 
    background-position: center;
`;

export const ProjectCardDescription = styled.p`
    font-size: 1.15rem;
    color: ${Colors.paleGray};

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1rem;
    }
`;

export const ProjectPartner = styled.img`
    width: 40%;
`;
