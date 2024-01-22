import React, { FC } from "react";
import {
    ProjectCardImage, ProjectCardTitle, ProjectCardWrapper,
    ProjectCardWrapperContainer, ProjectCardDescription
} from "@components/components/ProjectCard/ProjectCard.css";
import { SeparatorSpace, SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

type ProjectCardType = {
    project: ProjectsConfigType;
}

export const ProjectCard: FC<ProjectCardType> = ({ project }) => {
    return (
        <ProjectCardWrapper>
            <ProjectCardImage />
            <SeparatorMargin marginValue={0.5} />
            <ProjectCardWrapperContainer>
                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                <SeparatorSpace paddingValue={1} />
                <ProjectCardDescription>{project.description}</ProjectCardDescription>
            </ProjectCardWrapperContainer>
        </ProjectCardWrapper>
    );
};