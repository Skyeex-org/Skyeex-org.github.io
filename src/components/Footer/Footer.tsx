import React, { FC } from "react";
import {
  FooterWrapper, FooterContainer, FooterMetadataContainer,
  FooterMetadataMotto, FooterMetadataTitle, FooterMetadataText,
  FooterMetadataContact, FooterLine, FooterCopyright, FooterCopyrightText
} from "@components/components/Footer/Footer.css";
import { SeparatorSpace } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterMetadataContainer>
          <FooterMetadataMotto>
            Architecting new digital horizons
          </FooterMetadataMotto>
            <FooterMetadataContact>
              <FooterMetadataTitle>Have questions?</FooterMetadataTitle>
              <FooterMetadataText>skyeex-org@gmail.com</FooterMetadataText>
            </FooterMetadataContact>
        </FooterMetadataContainer>
        <FooterLine />
        <SeparatorSpace paddingValue={0.75} />
        <FooterCopyright>
          <FooterCopyrightText href="https://skyeex.org/">
          Skyeex
          </FooterCopyrightText>
        &nbsp;&copy; {new Date().getFullYear()}. All rights reserved.
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};
