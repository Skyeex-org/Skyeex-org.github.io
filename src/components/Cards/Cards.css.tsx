import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";
import { ProjectCardImage } from "@components/components/Cards/ProjectCard/ProjectCard.css";

export const CardTitle = styled.h2`
    height: 2.5rem;
    margin: 1.5rem 0 0 0;
    font-size: 1.25rem;
    transition: all 500ms ease;

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 2.5rem 0 0 0;
        font-size: 1.5rem;
    }
`;

export const CardWrapper = styled.div<{ padding?: number, isClickable?: boolean }>`
    width: 75%;
    height: auto;
    background: ${Colors.paleWhite};
    border-radius: 0.85rem;
    margin: 2.5rem 1.25rem 0 1.25rem;
    user-select: none;
    transition: all 500ms ease;
    cursor: ${(props) => props.isClickable ? 'pointer' : 'auto'};
    line-height: 1.5rem;
    padding: ${(props) => props.padding}rem;

    ${minWidthQuery(Breakpoints.small)} {
        width: 60%;
        margin: 2.5rem 0.5rem 0 0.5rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        width: 22rem;
        margin: 2.5rem 0.5rem 0 0.5rem;
    }

    :hover {
        box-shadow: 0 0 5rem rgba(33, 33, 33, .3);

        ${CardTitle} {
            color: ${Colors.coreDarkerBlue};
        }
    }

    ${ProjectCardImage} {
        border-radius: 0.85rem 0.85rem 0 0;
    }
`;

export const CardDescription = styled.p`
    font-size: 1.15rem;
    color: ${Colors.paleGray};

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 1rem;
    }
`;