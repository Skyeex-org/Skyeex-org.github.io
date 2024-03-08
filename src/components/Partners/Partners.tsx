import React, { FC } from "react";
import {
    FlexColumn,
    FlexContainer,
    StandardBackground, StandardWrapper
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { PartnersLogo } from "@components/components/Partners/Partners.css";
import { HeadlineMetadataContainer } from "@components/components/HeadlineMetadataContainer/HeadlineMetadataContainer";
import { PartnersConfig } from "@components/configs/general";

export const Partners: FC  = () => {
    return (
        <StandardBackground>
            <StandardWrapper>
                <HeadlineMetadataContainer topHeadliner={'WORKING WITH INDUSTRY LEADING COMPANIES'} headlineTitle={'Our partners'} />
                <FlexContainer positionType={'center'}>
                    {PartnersConfig.map((partner) => {
                       return (
                           <FlexColumn columnPercentage={33} key={partner.name}>
                               <PartnersLogo src={partner.icon} alt={partner.name} />
                           </FlexColumn>
                       )
                    })}
                </FlexContainer>
            </StandardWrapper>
        </StandardBackground>
    );
}