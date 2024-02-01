import React from "react";
import { FlexContainer, SocialMediaWrapper, SocialMediaIcon } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { SocialMediaConfigExtractor } from "@components/configs/general";

export const SocialMediaContainer: React.FC<ThemeConfigType> = ({ theme }) => {
    const SocialMediaConfig = SocialMediaConfigExtractor(theme);

    const handleSocialMediaIconClick = (url: string) => {
        window.location.href = url;
    };

    return (
        <FlexContainer positionType="center">
            {SocialMediaConfig.map((platform: SocialMediaConfigType) => {
                return (
                <SocialMediaWrapper onClick={() => handleSocialMediaIconClick(platform.url)} key={platform.id}>
                    <SocialMediaIcon src={platform.icon} />
                </SocialMediaWrapper>
                );
            })}
        </FlexContainer>
    )
}