import React, { FC } from "react";
import {
    LandingLogo, LandingLogoLine, LandingLogoWrapper,
    LandingAreaContentContainer, LandingAreaUnderText,
    LandingAreaWelcomeText,
    LandingAreaWrapper
} from "@components/components/LandingArea/LandingArea.css";
import { Button, SeparatorSpace } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { LandingAreaConfig } from "@components/configs/general";

type LandingAreaType = {
    nextSectionReference: any;
}

export const LandingArea: FC<LandingAreaType> = ({ nextSectionReference }) => {
    const scrollToRef = () => {
        nextSectionReference?.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <LandingAreaWrapper>
            <LandingLogoWrapper>
                <LandingLogo>{LandingAreaConfig.landingLogo}</LandingLogo>
                <LandingLogoLine />
            </LandingLogoWrapper>
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
