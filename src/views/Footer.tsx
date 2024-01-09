import React, { FC } from "react";

import { FooterWrapper } from "@components/views/Footer.css";
import { FooterContainer } from "@components/views/Footer.css";

import { FooterMetadataContainer } from "@components/views/Footer.css";
import { FooterMetadataMotto } from "@components/views/Footer.css";
import { FooterMetadataTitle } from "@components/views/Footer.css";
import { FooterMetadataText } from "@components/views/Footer.css";

import { FooterMetadataAddress } from "@components/views/Footer.css";
import { FooterMetadataContact } from "@components/views/Footer.css";

import { FooterCopyright } from "@components/views/Footer.css";

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterMetadataContainer>
          <FooterMetadataMotto>
            <p>Crafting digital horizons, one line at a time</p>
          </FooterMetadataMotto>
            <FooterMetadataAddress>
              <FooterMetadataTitle>Address</FooterMetadataTitle>
              <FooterMetadataText>Romania <br></br> Dorobantilor street, Office 13</FooterMetadataText>
            </FooterMetadataAddress>
            <FooterMetadataContact>
              <FooterMetadataTitle>Have questions?</FooterMetadataTitle>
              <FooterMetadataText>skyeex-org@gmail.com</FooterMetadataText>
            </FooterMetadataContact>
        </FooterMetadataContainer>

        <hr></hr>
        
        <FooterCopyright>
        <p>Copyright &copy; {new Date().getFullYear()} {" "}
        <a href="https://skyeex.org/">
          Skyeex
        </a>
        {/* <p>&copy; {new Date().getFullYear()} {" "} */}
        . All rights reserved.
        </p>
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  );
};
