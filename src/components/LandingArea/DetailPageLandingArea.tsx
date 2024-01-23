import React, { FC } from "react";
import {
    LandingAreaContentContainer,
    LandingAreaUnderText,
    LandingAreaWelcomeText,
    LandingAreaWrapper,
    LandingLogo, LandingLogoLine,
    LandingLogoWrapper
} from "@components/components/LandingArea/LandingArea.css";
import { LandingAreaConfig } from "@components/configs/general";

type DetailPageLandingAreaType = {
    project: ProjectsConfigType;
};

export const DetailPageLandingArea: FC<DetailPageLandingAreaType> = ({ project }) => {
    return (
        <LandingAreaWrapper height={60}>
            <LandingLogoWrapper>
                <LandingLogo>{LandingAreaConfig.landingLogo}</LandingLogo>
                <LandingLogoLine />
            </LandingLogoWrapper>
            <LandingAreaContentContainer>
                <LandingAreaWelcomeText>
                    {project.title}
                </LandingAreaWelcomeText>
                <LandingAreaUnderText>
                    {project.subtitle}
                </LandingAreaUnderText>
            </LandingAreaContentContainer>
        </LandingAreaWrapper>
    )
}