import React, { FC } from "react";
import { CardWrapper } from "@components/components/Cards/Cards.css";
import { SeparatorMargin } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { ProjectCard } from "@components/components/Cards/ProjectCard/ProjectCard";

type ProfileCardType = {
    profile: TeamProfileConfigType;
};

export const ProfileCard: FC<ProfileCardType> = ({ profile }) => {
    return (
        <CardWrapper>
            {profile.fullName}
            <SeparatorMargin marginValue={1.5} />
            {profile.position}
            <SeparatorMargin marginValue={1.5} />
            {profile.socialMedia.map((social: SocialMediaConfigType) => {
                return (
                    <p key={social.id}>{social.id}</p>
                );
            })}
        </CardWrapper>
    )
}