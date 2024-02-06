import React, { FC } from "react";
import {
    LandingAreaContentContainer, LandingAreaUnderText,
    LandingAreaWelcomeText,
    LandingAreaWrapper
} from "@components/components/LandingArea/LandingArea.css";
import { Button, SeparatorSpace } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { LandingAreaConfig } from "@components/configs/general";
import { LogoWrapper } from "@components/components/LogoWrapper/LogoWrapper";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";

type LandingAreaType = {
    nextSectionReference: any;
}

export const LandingArea: FC<LandingAreaType> = ({ nextSectionReference }) => {
    const { isMobile } = useGetScreenSize();

    const scrollToRef = () => {
        nextSectionReference?.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <LandingAreaWrapper isMobile={isMobile()}>
            <LogoWrapper isLogoLine={true} />
            <LandingAreaContentContainer>
                <LandingAreaWelcomeText>
                    {LandingAreaConfig.welcomeText}
                </LandingAreaWelcomeText>
                <LandingAreaUnderText>
                    {LandingAreaConfig.underWelcomeText}
                </LandingAreaUnderText>
                <SeparatorSpace paddingValue={1.5} />
                <Button onClick={scrollToRef}>{LandingAreaConfig.buttonText}</Button>
            </LandingAreaContentContainer>
        </LandingAreaWrapper>
    )
};
