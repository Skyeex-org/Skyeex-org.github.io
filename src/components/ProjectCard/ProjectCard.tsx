import React, { FC } from "react";
import {
    ProjectCardImage, ProjectCardTitle, ProjectCardWrapper,
    ProjectCardWrapperContainer, ProjectCardDescription,
} from "@components/components/ProjectCard/ProjectCard.css";
import { SeparatorSpace, SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import { useRouter } from "next/router";

export type ProjectCardType = {
    project: ProjectsConfigType;
}

export const ProjectCard: FC<ProjectCardType> = ({ project }) => {
    const { isMobile } = useGetScreenSize();
    const router = useRouter();

    const handleProjectCardClick = () => {
        router.push(`/${project.id}`).then(null);
    };

    return (
        <ProjectCardWrapper onClick={project.isDetailPageEnabled ? handleProjectCardClick : () => null}>
            <ProjectCardImage imageSource={project.icon} />
            <SeparatorMargin marginValue={0.5} />
            <ProjectCardWrapperContainer>
                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                <SeparatorSpace paddingValue={isMobile() ? 0.15 : 1} />
                <ProjectCardDescription>{project.previewDescription}</ProjectCardDescription>
            </ProjectCardWrapperContainer>
        </ProjectCardWrapper>
    );
};