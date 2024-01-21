import React, { FC } from "react";
import {
    ProjectsContainer, ProjectsHeadliner, ProjectsTitle,
    ProjectsWrapper, ProjectsFlexContainer
} from "@components/components/Projects/Projects.css";
import { ProjectsCardsConfig } from "@components/configs/general";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { Button, SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const Projects: FC = () => {
    return (
        <ProjectsWrapper>
            <ProjectsContainer>
            <SeparatorMargin value={1.5} />
                <ProjectsHeadliner>
                    <p>PRECISION & EFFICIENCY</p>
                </ProjectsHeadliner>
                <ProjectsTitle>
                    <p>Engineered solutions</p>
                </ProjectsTitle>
                <ProjectsFlexContainer>
                    {ProjectsCardsConfig.map((project: ProjectsConfigType, index) => {
                        if (index < ProjectsCardsConfig.length - 1) {
                            return (
                                <ProjectCard project={project} />
                            );
                        }
                    })}
                </ProjectsFlexContainer>
                <SeparatorMargin value={3} />
                <Button>SHOW MORE</Button>
            </ProjectsContainer>
        </ProjectsWrapper>
    );
};
