import React, { FC } from "react";
import {
    FlexContainer,
    SeparatorMargin,
    SeparatorSpace,
    StandardBackground,
    StandardWrapper
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { Colors } from "@components/utils/cssMedia";
import { HeadlineMetadataContainer } from "@components/components/HeadlineMetadataContainer/HeadlineMetadataContainer";

export const Team: FC = () => {
    return (
        <StandardBackground background={Colors.paleBluishGray} color={Colors.black}>
            <StandardWrapper>
                <HeadlineMetadataContainer headlineTitle={'Skyeex Team'} />
                <FlexContainer positionType={"space-around"}>
                    Ok
                </FlexContainer>
                <SeparatorMargin marginValue={3} />
                Social media
            </StandardWrapper>
            <SeparatorSpace paddingValue={1.5} />
        </StandardBackground>
    );
};