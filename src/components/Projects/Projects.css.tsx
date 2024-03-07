import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectsContainer = styled.div`
    padding: 1rem 0.25rem 1rem 0.25rem;
    text-align: center;

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 2.5rem;
    }
`;

export const HeadlineTitle = styled.div`
    margin-top: 1rem;
    font-weight: bold;
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
`;

export const TopHeadliner = styled.div`
    font-weight: bold;
    letter-spacing: 0.25rem;
`;

export const HeadlineParagraph = styled.p``;
