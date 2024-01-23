import React, { FC } from "react";
import {
    ProjectCardImage, ProjectCardTitle, ProjectCardWrapper,
    ProjectCardWrapperContainer, ProjectCardDescription
} from "@components/components/ProjectCard/ProjectCard.css";
import { SeparatorSpace, SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useRouter } from "next/router";

export type ProjectCardType = {
    project: ProjectsConfigType;
}

export const ProjectCard: FC<ProjectCardType> = ({ project }) => {
    const router = useRouter();

    const handleProjectCardClick = () => {
        router.push(`/${project.id}`).then(null);
    };

    return (
        <ProjectCardWrapper onClick={project.isDetailPageEnabled ? handleProjectCardClick : () => null}>
            <ProjectCardImage />
            <SeparatorMargin marginValue={0.5} />
            <ProjectCardWrapperContainer>
                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                <SeparatorSpace paddingValue={1} />
                <ProjectCardDescription>{project.previewDescription}</ProjectCardDescription>
            </ProjectCardWrapperContainer>
        </ProjectCardWrapper>
    );
};