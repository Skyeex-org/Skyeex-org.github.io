import React, { FC } from "react";
import {
    LandingAreaContentContainer,
    LandingAreaReferenceText,
    LandingAreaUnderText,
    LandingAreaWelcomeText,
    LandingAreaWrapper,
} from "@components/components/LandingArea/LandingArea.css";
import { LogoWrapper } from "@components/components/LogoWrapper/LogoWrapper";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";

type DetailPageLandingAreaType = {
    project: ProjectsConfigType;
    wallpaper: string;
};

export const DetailPageLandingArea: FC<DetailPageLandingAreaType> = ({ project, wallpaper }) => {
    const { isMobile } = useGetScreenSize();

    return (
        <LandingAreaWrapper height={80} wallpaper={wallpaper} darkLevel={0.8} isMobile={isMobile()}>
            <LogoWrapper isLogoLine={true} />
            <LandingAreaContentContainer >
                <LandingAreaWelcomeText>
                    {project.title}
                </LandingAreaWelcomeText>
                <LandingAreaUnderText>
                    {project.subtitle}
                </LandingAreaUnderText>
            </LandingAreaContentContainer >
            {project.isImageReferenceOnly && <LandingAreaReferenceText>Image for reference only - Not actual product</LandingAreaReferenceText>}
        </LandingAreaWrapper>
    )
}