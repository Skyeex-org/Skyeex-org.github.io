import React, { FC } from "react";
import Head from "next/head";
import {
    FlexColumn,
    FlexContainer,
    SeparatorSpace,
    StandardBackground
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { Colors } from "@components/utils/cssMedia";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { ProjectsCardsConfig } from "@components/configs/general";
import { ProjectsMetadataContainer } from "@components/components/ProjectsMetadataContainer/ProjectsMetadataContainer";
import { LogoWrapper } from "@components/components/LogoWrapper/LogoWrapper";
import { ProjectsContainer } from "@components/components/Projects/Projects.css";

const ProjectsPage: FC = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Skyeex - Projects</title>
            </Head>
            <StandardBackground background={Colors.paleBluishGray}>
                <LogoWrapper isDarkLogo={true} />
                <ProjectsContainer>
                    <SeparatorSpace paddingValue={3} />
                    <ProjectsMetadataContainer />
                    <FlexContainer positionType="space-around">
                        {ProjectsCardsConfig.map((project: ProjectsConfigType) => {
                            return (
                                <FlexColumn columnPercentage={33} alignColumnsCenter={true} key={project.title}>
                                    <ProjectCard project={project} />
                                </FlexColumn>
                            );
                        })}
                    </FlexContainer>
                </ProjectsContainer>
            </StandardBackground>
        </React.Fragment>
    )
}

export default ProjectsPage;