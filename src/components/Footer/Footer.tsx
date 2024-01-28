import React, { FC } from "react";
import {
  FooterWrapper, FooterContainer, FooterMetadataContainer,
  FooterMetadataMotto, FooterMetadataTitle, FooterMetadataText,
  FooterMetadataContact, FooterLine, FooterCopyright, FooterCopyrightText
} from "@components/components/Footer/Footer.css";
import { SeparatorMargin, FlexContainer, SocialMediaWrapper, SocialMediaIcon } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { FooterConfig, SocialMediaConfig } from "@components/configs/general";

export const Footer: FC = () => {
  const handleSocialMediaIconClick = (url: string) => {
    window.location.href = url;
  };

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
        <FlexContainer>
            {SocialMediaConfig.map((platform: SocialMediaConfigType, index) => {
              return (
              <SocialMediaWrapper onClick={() => handleSocialMediaIconClick(platform.url)}>
                <SocialMediaIcon src={platform.icon} />
              </SocialMediaWrapper>
              );
            })}
        </FlexContainer>
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
