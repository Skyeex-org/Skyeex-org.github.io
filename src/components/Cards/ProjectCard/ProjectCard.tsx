import React, { FC } from "react";
import {
    ProjectCardImage, ProjectCardWrapperContainer, ProjectPartner,
} from "@components/components/Cards/ProjectCard/ProjectCard.css";
import { SeparatorSpace, SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import { useRouter } from "next/router";
import { CardDescription, CardTitle, CardWrapper } from "@components/components/Cards/Cards.css";

export type ProjectCardType = {
    project: ProjectsConfigType;
}

export const ProjectCard: FC<ProjectCardType> = ({ project }) => {
    const { isMobile, isBigScreen } = useGetScreenSize();
    const router = useRouter();

    const handleProjectCardClick = () => {
        router.push(`/${project.id}`).then(null);
    };

    const getTextSizeBasedOnBigBreakpoint = (text: string): string => {
        return isBigScreen() ? text.slice(0, 300) : text.slice(0, 250);
    };

    const projectDescription = project.partner ? project.previewDescription.slice(0, 180) : getTextSizeBasedOnBigBreakpoint(project.previewDescription);

    return (
        <CardWrapper onClick={project.isDetailPageEnabled ? handleProjectCardClick : () => null} isClickable={true}>
            <ProjectCardImage imageSource={project.icon} />
            <SeparatorMargin marginValue={0.5} />
            <ProjectCardWrapperContainer>
                <CardTitle>{project.title}</CardTitle>
                <SeparatorSpace paddingValue={isMobile() ? 0.15 : 1} />
                <CardDescription>{projectDescription}...</CardDescription>
                <SeparatorSpace paddingValue={isMobile() ? 0.15 : 0.8} />
                { project.partner && <ProjectPartner src={project.partner} /> }
            </ProjectCardWrapperContainer>
        </CardWrapper>
    );
};
