import React, { FC } from "react";
import {
    LandingLogo, LandingLogoLine, LandingLogoWrapper,
    LandingAreaContentContainer, LandingAreaUnderText,
    LandingAreaWelcomeText,
    LandingAreaWrapper
} from "@components/components/LandingArea/LandingArea.css";
import { Button, Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const LandingArea: FC = () => {
    return (
        <LandingAreaWrapper>
            <LandingLogoWrapper>
                <LandingLogo>Skyeex.</LandingLogo>
                <LandingLogoLine />
            </LandingLogoWrapper>
            <LandingAreaContentContainer>
                <LandingAreaWelcomeText>
                    Sky High Software Quality
                </LandingAreaWelcomeText>
                <LandingAreaUnderText>
                    We produce top-notch software for our customers
                </LandingAreaUnderText>
                <Separator paddingValue={1.5} />
                <Button>Get Started</Button>
            </LandingAreaContentContainer>
        </LandingAreaWrapper>
    )
};