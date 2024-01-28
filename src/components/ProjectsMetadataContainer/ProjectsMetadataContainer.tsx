import React, { FC } from "react";
import { SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { ProjectsContainer, ProjectsHeadliner, ProjectsTitle } from "@components/components/Projects/Projects.css";

export const ProjectsMetadataContainer: FC = () => {
    return (
        <ProjectsContainer>
            <SeparatorMargin marginValue={1.5} />
            <ProjectsHeadliner>
                <p>PRECISION & EFFICIENCY</p>
            </ProjectsHeadliner>
            <ProjectsTitle>
                <p>Engineered solutions</p>
            </ProjectsTitle>
            <SeparatorMargin marginValue={3} />
        </ProjectsContainer>
    )
}