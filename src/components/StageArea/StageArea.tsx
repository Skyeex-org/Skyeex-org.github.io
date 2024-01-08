import React, { FC } from "react";
import {
    Logo,
    StageAreaContentContainer, StageAreaUnderText,
    StageAreaWelcomeText,
    StageAreaWrapper
} from "@components/components/StageArea/StageArea.css";
import { Button, Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const StageArea: FC = () => {
    return (
        <StageAreaWrapper>
            <Logo>Skyeex.</Logo>
            <StageAreaContentContainer>
                <StageAreaWelcomeText>
                    Sky High Software Quality
                </StageAreaWelcomeText>
                <StageAreaUnderText>
                    we produce top-notch software for our customers
                </StageAreaUnderText>
                <Separator paddingValue={1.5} />
                <Button>Get Started</Button>
            </StageAreaContentContainer>
        </StageAreaWrapper>
    )
};