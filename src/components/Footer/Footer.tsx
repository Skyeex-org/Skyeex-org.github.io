import React, { FC } from "react";
import {
    FooterWrapper, FooterContainer, FooterMetadataContainer,
    FooterMetadataMotto, FooterMetadataTitle, FooterMetadataText,
    FooterMetadataContact, FooterLine, FooterCopyright, FooterCopyrightText
} from "@components/components/Footer/Footer.css";
import { SocialMediaContainer } from "@components/components/common/SocialMediaContainer";
import { SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { FooterConfig, ThemeConfig } from "@components/configs/general";

export const Footer: FC = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterMetadataContainer>
                    <FooterMetadataMotto>
                        {FooterConfig.metadataMoto}
                    </FooterMetadataMotto>
                    <FooterMetadataContact>
                        <FooterMetadataTitle>{FooterConfig.metadataTitle}</FooterMetadataTitle>
                        <FooterMetadataText>{FooterConfig.metadataText}</FooterMetadataText>
                    </FooterMetadataContact>
                </FooterMetadataContainer>
                <FooterLine />
                <SeparatorMargin marginValue={1.5} />
                <SocialMediaContainer theme={ThemeConfig[0].theme}/>
                <SeparatorMargin marginValue={1.5} />
                <FooterCopyright>
                    <FooterCopyrightText href={FooterConfig.websiteUrl}>
                        Skyeex
                    </FooterCopyrightText>
                    &nbsp;&copy; {new Date().getFullYear()}. All rights reserved.
                </FooterCopyright>
            </FooterContainer>
        </FooterWrapper>
    );
};
