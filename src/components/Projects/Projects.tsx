import React, { forwardRef, HTMLProps } from "react";
import {
    ProjectsContainer, ProjectsHeadliner, ProjectsTitle,
    ProjectsWrapper, ProjectsFlexContainer, ProjectsColumn,
} from "@components/components/Projects/Projects.css";
import { ProjectsCardsConfig } from "@components/configs/general";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { Button, SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

import { useGetScreenSize } from "@components/utils/useGetScreenSize";

// import { ProjectsConfigType } from "@components/configs/general";

// eslint-disable-next-line react/display-name
export const Projects = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(() => {
    const { isTablet } = useGetScreenSize();

    return (
        <ProjectsWrapper>
            <ProjectsContainer>
                <ProjectsHeadliner>
                    <p>PRECISION & EFFICIENCY</p>
                </ProjectsHeadliner>
                <ProjectsTitle>
                    <p>Engineered solutions</p>
                </ProjectsTitle>
                <SeparatorMargin value={2.5} />
                <ProjectsFlexContainer>
                    {ProjectsCardsConfig.map((project: ProjectsConfigType, index) => {
                        const isNotTheLastElement = ProjectsCardsConfig.length - 1 !== index;

                        return (
                            <ProjectsColumn key={project.title} columnPercentage={isTablet() ? 1 : 5} shouldHaveBorder={isNotTheLastElement}>
                                <ProjectCard project={project} />
                            </ProjectsColumn>
                        );
                    })}
                </ProjectsFlexContainer>
                <SeparatorMargin value={3} />
                <Button>SHOW MORE</Button>
            </ProjectsContainer>
        </ProjectsWrapper>
    );
});
