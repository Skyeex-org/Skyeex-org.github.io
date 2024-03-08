import React, { FC } from "react";
import {
    FlexContainer,
    SeparatorSpace,
    StandardBackground,
    StandardWrapper
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { Colors } from "@components/utils/cssMedia";
import { HeadlineMetadataContainer } from "@components/components/HeadlineMetadataContainer/HeadlineMetadataContainer";
import { ProfileCard } from "@components/components/Cards/ProfileCard/ProfileCard";
import { TeamConfig } from "@components/configs/general";

export const Team: FC = () => {
    return (
        <StandardBackground background={Colors.paleBluishGray} color={Colors.black}>
            <StandardWrapper>
                <HeadlineMetadataContainer headlineTitle={'Skyeex Team'} />
                <FlexContainer positionType={"space-around"}>
                    {TeamConfig.map((teamMember) => {
                        return (
                            <ProfileCard profile={teamMember} key={teamMember.fullName} />
                        )
                    })}
                </FlexContainer>
            </StandardWrapper>
            <SeparatorSpace paddingValue={1.5} />
        </StandardBackground>
    );
};