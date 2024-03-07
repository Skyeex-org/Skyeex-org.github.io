import React, { FC } from "react";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import {
    Button,
    FlexContainer,
    SeparatorMargin,
    SeparatorSpace,
    StandardBackground, StandardWrapper
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { HeadlineMetadataContainer } from "@components/components/HeadlineMetadataContainer/HeadlineMetadataContainer";
import { ProjectsCardsPreviewConfig } from "@components/configs/projectsConfig";
import { Colors } from "@components/utils/cssMedia";
import { useRouter } from "next/router";

export const Projects: FC = () => {
    const router = useRouter();

    const onShowMoreClick = () => {
        router.push(`/projects`).then(null);
    };

    return (
        <StandardBackground background={Colors.paleBluishGray} color={Colors.black}>
            <StandardWrapper>
                <HeadlineMetadataContainer topHeadliner={'PRECISION & EFFICIENCY'} headlineTitle={'Engineered solutions'} />
                <FlexContainer positionType={"space-around"}>
                    {ProjectsCardsPreviewConfig.map((project: ProjectsConfigType) => {
                        return (
                            <ProjectCard project={project} key={project.title} />
                        );
                    })}
                </FlexContainer>
                <SeparatorMargin marginValue={3} />
                <Button onClick={onShowMoreClick}>Show More</Button>
            </StandardWrapper>
            <SeparatorSpace paddingValue={1.5} />
        </StandardBackground>
    );
};
