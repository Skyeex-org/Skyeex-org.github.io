import React, { FC } from "react";
import Head from "next/head";
import { Projects } from "@components/components/Projects/Projects";
import { LandingLogo, LandingLogoWrapper } from "@components/components/LandingArea/LandingArea.css";
import SkyeexLogoBlack from "@components/assets/SkyeexLogoBlack.svg";
import {
    FlexColumn,
    FlexContainer,
    SeparatorSpace,
    StandardBackground
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { Colors } from "@components/utils/cssMedia";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { ProjectsCardsConfig } from "@components/configs/general";

const ProjectsPage: FC = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Skyeex - Projects</title>
            </Head>
            <StandardBackground background={Colors.paleBluishGray}>
                <LandingLogoWrapper>
                    <LandingLogo src={SkyeexLogoBlack.src} />
                </LandingLogoWrapper>
                <SeparatorSpace paddingValue={3} />
                <FlexContainer>
                    {ProjectsCardsConfig.map((project: ProjectsConfigType) => {
                        return (
                            <FlexColumn columnPercentage={33} alignColumnsCenter={true} key={project.title}>
                                <ProjectCard project={project} />
                            </FlexColumn>
                        );
                    })}
                </FlexContainer>
            </StandardBackground>
        </React.Fragment>
    )
}

export default ProjectsPage;