import styled from "styled-components";
import { Breakpoints, Colors, minWidthQuery } from "@components/utils/cssMedia";
import { ProjectCardTitle } from "@components/components/Cards/ProjectCard/ProjectCard.css";

export const CardWrapper = styled.div`
    width: 75%;
    height: auto;
    background: ${Colors.paleWhite};
    border-radius: 0.85rem;
    margin: 2.5rem 1.25rem 0 1.25rem;
    user-select: none;
    transition: all 500ms ease;
    cursor: pointer;
    line-height: 1.5rem;

    ${minWidthQuery(Breakpoints.small)} {
        width: 60%;
        margin: 2.5rem 0.5rem 0 0.5rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        width: 22rem;
        margin: 2.5rem 0.5rem 0 0.5rem;
    }

    :hover {
        box-shadow: 0 0 5rem rgba(33, 33, 33, .15);

        ${ProjectCardTitle} {
            color: ${Colors.coreDarkerBlue};
        }
    }

    * {
        border-radius: 0.85rem 0.85rem 0 0;
    }
`;