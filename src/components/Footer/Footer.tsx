import React, { FC } from "react";
import {
  FooterWrapper, FooterContainer, FooterMetadataContainer,
  FooterMetadataMotto, FooterMetadataTitle, FooterMetadataText,
  FooterMetadataContact, FooterLine, FooterCopyright
} from "@components/components/Footer/Footer.css";
import { SeparatorSpace } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterMetadataContainer>
          <FooterMetadataMotto>
            <p>Architecting new digital horizons</p>
          </FooterMetadataMotto>

            <FooterMetadataContact>
              <FooterMetadataTitle>Have questions?</FooterMetadataTitle>
              <FooterMetadataText>skyeex-org@gmail.com</FooterMetadataText>
            </FooterMetadataContact>
        </FooterMetadataContainer>
        <FooterLine />
        <SeparatorSpace paddingValue={0.75} />
        <FooterCopyright>
        <p>Copyright &copy; {new Date().getFullYear()} {" "}
        <a href="https://skyeex.org/">
          Skyeex
        </a>
        . All rights reserved.
        </p>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};
