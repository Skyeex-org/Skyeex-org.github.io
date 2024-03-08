import React from "react";
import { FlexContainer, SocialMediaWrapper, SocialMediaIcon } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

type SocialMediaContainerType = {
    socialMediaIcons: SocialMediaConfigType[];
    isBackgroundLight: boolean;
};

export const SocialMediaContainer: React.FC<SocialMediaContainerType> = ({
    socialMediaIcons,
    isBackgroundLight
}) => {
    const handleSocialMediaIconClick = (url: string) => {
        window.location.href = url;
    };

    return (
        <FlexContainer positionType={"center"}>
            {socialMediaIcons.map((platform: SocialMediaConfigType) => {
                return (
                <SocialMediaWrapper isBackgroundLight={isBackgroundLight} onClick={() => handleSocialMediaIconClick(platform.url)} key={platform.id}>
                    <SocialMediaIcon isBackgroundLight={isBackgroundLight} src={platform.icon} alt={platform.icon} />
                </SocialMediaWrapper>
                );
            })}
        </FlexContainer>
    )
}