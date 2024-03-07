import React, { FC } from "react";
import {
    FlexColumn,
    FlexContainer,
    StandardBackground, StandardWrapper
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { PartnersLogo } from "@components/components/Partners/Partners.css";
import NttData from "@components/assets/projects/nttData.png";
import { HeadlineMetadataContainer } from "@components/components/HeadlineMetadataContainer/HeadlineMetadataContainer";

export const Partners: FC  = () => {
    return (
        <StandardBackground>
            <StandardWrapper>
                <HeadlineMetadataContainer topHeadliner={'WORKING WITH INDUSTRY LEADING COMPANIES'} headlineTitle={'Our partners'} />
                <FlexContainer positionType={'center'}>
                    <FlexColumn columnPercentage={33}>
                        <PartnersLogo src={NttData.src} />
                    </FlexColumn>
                </FlexContainer>
            </StandardWrapper>
        </StandardBackground>
    );
}