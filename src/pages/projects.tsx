import React, { FC } from "react";
import {
    FlexColumn,
    FlexContainer,
    SeparatorSpace,
    StandardBackground
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { Colors } from "@components/utils/cssMedia";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { ProjectsMetadataContainer } from "@components/components/ProjectsMetadataContainer/ProjectsMetadataContainer";
import { LogoWrapper } from "@components/components/LogoWrapper/LogoWrapper";
import { ProjectsContainer } from "@components/components/Projects/Projects.css";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { getStandardHeader } from "@components/utils/general";
import { Footer } from "@components/components/Footer/Footer";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";

const ProjectsPage: FC = () => {
    const { isMobile } = useGetScreenSize();

    return (
        <React.Fragment>
            {getStandardHeader('Skyeex - Projects')}
            {!isMobile() && <ScrollTopButton />}
            <StandardBackground background={Colors.paleBluishGray}>
                <LogoWrapper isDarkLogo={true} />
                <ProjectsContainer>
                    <SeparatorSpace paddingValue={3} />
                    <ProjectsMetadataContainer />
                    <FlexContainer positionType="space-around">
                        {ProjectsConfig.map((project: ProjectsConfigType) => {
                            return (
                                <FlexColumn columnPercentage={33} alignColumnsCenter={true} key={project.title}>
                                    <ProjectCard project={project} />
                                </FlexColumn>
                            );
                        })}
                    </FlexContainer>
                </ProjectsContainer>
            </StandardBackground>
            <Footer />
        </React.Fragment>
    )
}

export default ProjectsPage;