import React, { FC } from "react";
import { SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import {
    ProjectParagraph,
    ProjectsContainer,
    ProjectsHeadliner,
    ProjectsTitle
} from "@components/components/Projects/Projects.css";

export const ProjectsMetadataContainer: FC = () => {
    return (
        <ProjectsContainer>
            <SeparatorMargin marginValue={1.5} />
            <ProjectsHeadliner>
                <ProjectParagraph>PRECISION & EFFICIENCY</ProjectParagraph>
            </ProjectsHeadliner>
            <ProjectsTitle>
                <ProjectParagraph>Engineered solutions</ProjectParagraph>
            </ProjectsTitle>
            <SeparatorMargin marginValue={3} />
        </ProjectsContainer>
    )
}