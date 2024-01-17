import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "@components/utils/cssMedia";

export const ProjectsWrapper = styled.div`
    background: #cad7dd;
    text-align: center;
`;

export const ProjectsContainer = styled.div`
    padding: 2.5rem;
`;

export const ProjectsTitle = styled.div`
    margin-top: 1rem;
    font-weight: bold;
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
`;

export const ProjectsHeadliner = styled.div`
    font-weight: bold;
    letter-spacing: 0.25rem;
`;

export const ProjectsFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ProjectsColumn = styled.div<{
    columnPercentage: number,
    shouldHaveBorder?: boolean
}>`
    flex: 1 1 100%;
    border-bottom: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};

    ${minWidthQuery(Breakpoints.medium)} {
        flex: ${(props) => `1 1 ${props.columnPercentage}%;`}
        border-right: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
        border-bottom: none;
    }
`;