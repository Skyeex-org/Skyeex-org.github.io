import React, { FC } from "react";
import {
    LandingAreaContentContainer,
    LandingAreaUnderText,
    LandingAreaWelcomeText,
    LandingAreaWrapper,
} from "@components/components/LandingArea/LandingArea.css";
import { LogoWrapper } from "@components/components/LogoWrapper/LogoWrapper";

type DetailPageLandingAreaType = {
    project: ProjectsConfigType;
    wallpaper: string;
};

export const DetailPageLandingArea: FC<DetailPageLandingAreaType> = ({ project, wallpaper }) => {
    return (
        <LandingAreaWrapper height={80} wallpaper={wallpaper}>
            <LogoWrapper isLogoLine={true} />
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