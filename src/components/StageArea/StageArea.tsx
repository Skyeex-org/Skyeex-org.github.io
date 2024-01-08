import React, { FC } from "react";
import {
    Logo, LogoLine, LogoWrapper,
    StageAreaContentContainer, StageAreaUnderText,
    StageAreaWelcomeText,
    StageAreaWrapper
} from "@components/components/StageArea/StageArea.css";
import { Button, Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const StageArea: FC = () => {
    return (
        <StageAreaWrapper>
            <LogoWrapper>
                <Logo>Skyeex.</Logo>
                <LogoLine />
            </LogoWrapper>
            <StageAreaContentContainer>
                <StageAreaWelcomeText>
                    Sky High Software Quality
                </StageAreaWelcomeText>
                <StageAreaUnderText>
                    We produce top-notch software for our customers
                </StageAreaUnderText>
                <Separator paddingValue={1.5} />
                <Button>Get Started</Button>
            </StageAreaContentContainer>
        </StageAreaWrapper>
    )
};