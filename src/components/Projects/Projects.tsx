import React, { FC } from "react";
import {
    ProjectsContainer, ProjectsHeadliner, ProjectsTitle,
    ProjectsWrapper, ProjectsFlexContainer
} from "@components/components/Projects/Projects.css";
import { ProjectsCardsPreviewConfig } from "@components/configs/general";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { Button, SeparatorMargin, SeparatorSpace } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const Projects: FC = () => {
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
                <SeparatorSpace paddingValue={2.5} />
                <ProjectsFlexContainer>
                    {ProjectsCardsPreviewConfig.map((project: ProjectsConfigType, index) => {
                        return (
                            <ProjectCard project={project} key={project.title}/>
                        );
                    })}
                </ProjectsFlexContainer>
                <SeparatorMargin marginValue={6} />
                <Button>Show More</Button>
            </ProjectsContainer>
            <SeparatorSpace paddingValue={2.5} />
        </ProjectsWrapper>
    );
};
