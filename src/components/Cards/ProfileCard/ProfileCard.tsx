import React, { FC } from "react";
import { CardDescription, CardTitle, CardWrapper } from "@components/components/Cards/Cards.css";
import { SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { ProfileCardImage } from "@components/components/Cards/ProfileCard/ProfileCard.css";
import { SocialMediaContainer } from "@components/components/SocialMediaContainer/SocialMediaContainer";

type ProfileCardType = {
    profile: TeamProfileConfigType;
};

export const ProfileCard: FC<ProfileCardType> = ({ profile }) => {
    return (
        <CardWrapper padding={1.5}>
            <ProfileCardImage src={profile.image} />
            <SeparatorMargin marginValue={1.5} />
            <CardTitle>{profile.fullName}</CardTitle>
            <CardDescription>{profile.position}</CardDescription>
            <SeparatorMargin marginValue={1.5} />
            <SocialMediaContainer isBackgroundLight={true} socialMediaIcons={profile.socialMedia} />
        </CardWrapper>
    )
}