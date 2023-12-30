import React, { FC } from "react";
import TypeWriter from 'typewriter-effect';
import {
    StageAreaContentContainer, StageAreaUnderText,
    StageAreaWelcomeText,
    StageAreaWrapper
} from "@components/components/StageArea/StageArea.css";
import { StageAreaConfig } from "@components/configs/generalConfig";

export const StageArea: FC = () => {
    return (
        <StageAreaWrapper>
            <StageAreaContentContainer>
                <StageAreaWelcomeText>
                    SKYEEX
                </StageAreaWelcomeText>
                <StageAreaUnderText>
                    Sky High Software
                    <TypeWriter
                        options={{
                            strings: StageAreaConfig.TypeWriterContext,
                            autoStart: true,
                            loop: true,
                            delay: 90
                        }}
                    />
                </StageAreaUnderText>
            </StageAreaContentContainer>
        </StageAreaWrapper>
    )
};