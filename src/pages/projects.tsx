import React, { FC } from "react";
import {
    FlexColumn,
    FlexContainer,
    SeparatorSpace,
    StandardBackground
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { Colors } from "@components/utils/cssMedia";
import { ProjectCard } from "@components/components/ProjectCard/ProjectCard";
import { HeadlineMetadataContainer } from "@components/components/HeadlineMetadataContainer/HeadlineMetadataContainer";
import { LogoWrapper } from "@components/components/LogoWrapper/LogoWrapper";
import { ProjectsContainer } from "@components/components/Projects/Projects.css";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { Footer } from "@components/components/Footer/Footer";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import { getStandardHeaderForPages } from "@components/pages/index";
import { MetaConfig } from "@components/configs/general";

const ProjectsPage: FC = () => {
    const { isMobile } = useGetScreenSize();

    return (
        <React.Fragment>
            {getStandardHeaderForPages('Skyeex Software - Projects', MetaConfig.projectsMetaDescription)}
            {!isMobile() && <ScrollTopButton />}
            <StandardBackground background={Colors.paleBluishGray}>
                <LogoWrapper isDarkLogo={true} />
                <ProjectsContainer>
                    <SeparatorSpace paddingValue={3} />
                    <HeadlineMetadataContainer topHeadliner={'PRECISION & EFFICIENCY'} headlineTitle={'Engineered solutions'} />
                    <FlexContainer positionType={"space-around"}>
                        {ProjectsConfig.map((project: ProjectsConfigType) => {
                            return (
                                <FlexColumn columnPercentage={33} alignColumnsCenter={true} key={project.title}>
                                    <ProjectCard project={project} />
                                </FlexColumn>
                            );
                        })}
                    </FlexContainer>
                </ProjectsContainer>
                <SeparatorSpace paddingValue={isMobile() ? 2 : 1} />
            </StandardBackground>
            <Footer />
        </React.Fragment>
    )
}

export default ProjectsPage;