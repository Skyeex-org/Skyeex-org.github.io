import React, { FC } from "react";
import {
    ProjectsContainer,
    ProjectsHeadliner,
    ProjectsTitle,
    ProjectsWrapper
} from "@components/components/Projects/Projects.css";
import { ProjectsCardsConfig, ProjectsCardsPreviewConfig } from "@components/configs/general";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import {
    Button,
    FlexContainer,
    SeparatorMargin,
    SeparatorSpace
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useRouter } from "next/router";

type ProjectsType = {
    isPreviewMode?: boolean;
};

export const Projects: FC<ProjectsType> = ({ isPreviewMode = true }) => {
    const projectsConfig = isPreviewMode ? ProjectsCardsPreviewConfig : ProjectsCardsConfig;
    const router = useRouter();

    const onShowMoreClick = () => {
        router.push(`/projects`).then(null);
    };

    return (
        <ProjectsWrapper>
            <ProjectsContainer>
            <SeparatorMargin marginValue={1.5} />
                <ProjectsHeadliner>
                    <p>PRECISION & EFFICIENCY</p>
                </ProjectsHeadliner>
                <ProjectsTitle>
                    <p>Engineered solutions</p>
                </ProjectsTitle>
                <SeparatorMargin marginValue={3} />
                <FlexContainer>
                    {projectsConfig.map((project: ProjectsConfigType) => {
                        return (
                            <ProjectCard project={project} key={project.title} />
                        );
                    })}
                </FlexContainer>
                <SeparatorMargin marginValue={3} />
                {isPreviewMode && <Button onClick={onShowMoreClick}>Show More</Button>}
            </ProjectsContainer>
            <SeparatorSpace paddingValue={0.5} />
        </ProjectsWrapper>
    );
};
