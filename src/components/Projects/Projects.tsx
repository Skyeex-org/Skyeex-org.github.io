import React, { FC } from "react";
import { ProjectsContainer,ProjectsWrapper } from "@components/components/Projects/Projects.css";
import { ProjectsCardsPreviewConfig } from "@components/configs/general";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import {
    Button,
    FlexContainer,
    SeparatorMargin,
    SeparatorSpace
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useRouter } from "next/router";
import { ProjectsMetadataContainer } from "@components/components/ProjectsMetadataContainer/ProjectsMetadataContainer";

export const Projects: FC = () => {
    const router = useRouter();

    const onShowMoreClick = () => {
        router.push(`/projects`).then(null);
    };

    return (
        <ProjectsWrapper>
            <ProjectsContainer>
                <ProjectsMetadataContainer />
                <FlexContainer positionType="space-around">
                    {ProjectsCardsPreviewConfig.map((project: ProjectsConfigType) => {
                        return (
                            <ProjectCard project={project} key={project.title} />
                        );
                    })}
                </FlexContainer>
                <SeparatorMargin marginValue={3} />
                <Button onClick={onShowMoreClick}>Show More</Button>
            </ProjectsContainer>
            <SeparatorSpace paddingValue={0.5} />
        </ProjectsWrapper>
    );
};
