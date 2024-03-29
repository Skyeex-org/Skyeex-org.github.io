import React, { FC } from "react";
import {
    ProjectCardImage, ProjectCardTitle, ProjectCardWrapper,
    ProjectCardWrapperContainer, ProjectCardDescription,
} from "@components/components/ProjectCard/ProjectCard.css";
import { SeparatorSpace, SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import { useRouter } from "next/router";
import { Colors } from "@components/utils/cssMedia";

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
        if (isMobile()) return text.slice(0, 150);
        if (isBigScreen()) return text.slice(0, 300);

        return text.slice(0, 250);
    };

    return (
        <ProjectCardWrapper onClick={project.isDetailPageEnabled ? handleProjectCardClick : () => null}>
            <ProjectCardImage imageSource={project.icon} />
            <SeparatorMargin marginValue={0.5} />
            <ProjectCardWrapperContainer>
                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                <SeparatorSpace paddingValue={isMobile() ? 0.15 : 1}/>
                <ProjectCardDescription>{getTextSizeBasedOnBigBreakpoint(project.previewDescription)}...</ProjectCardDescription>
                <SeparatorSpace paddingValue={0.5}/>
                {project.isDetailPageEnabled && <ProjectCardDescription textColor={Colors.footerWrapperEbony}>Read more</ProjectCardDescription>}
                <SeparatorSpace paddingValue={isMobile() ? 0.1 : 0.8}/>
            </ProjectCardWrapperContainer>
        </ProjectCardWrapper>
    );
};
