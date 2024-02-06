import React from "react";
import { FlexContainer, SocialMediaWrapper, SocialMediaIcon } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { SocialMediaConfig } from "@components/configs/general";

interface BackgroundType {
    isBackgroundLight: boolean;
  }

export const SocialMediaContainer: React.FC<BackgroundType> = ({ isBackgroundLight }) => {
    const handleSocialMediaIconClick = (url: string) => {
        window.location.href = url;
    };

    return (
        <FlexContainer positionType="center">
            {SocialMediaConfig.map((platform: SocialMediaConfigType) => {
                return (
                <SocialMediaWrapper isBackgroundLight={isBackgroundLight} onClick={() => handleSocialMediaIconClick(platform.url)} key={platform.id}>
                    <SocialMediaIcon src={platform.icon} />
                </SocialMediaWrapper>
                );
            })}
        </FlexContainer>
    )
}