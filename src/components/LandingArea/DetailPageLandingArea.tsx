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
    wallpaper: string;
};

export const DetailPageLandingArea: FC<DetailPageLandingAreaType> = ({ project, wallpaper }) => {
    return (
        <LandingAreaWrapper height={80} wallpaper={wallpaper}>
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