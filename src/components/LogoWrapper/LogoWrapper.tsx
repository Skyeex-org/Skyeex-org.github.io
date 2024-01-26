import React, { FC } from "react";
import SkyeexWhiteLogo from "@components/assets/SkyeexLogo.svg";
import SkyeexBlackLogo from "@components/assets/SkyeexLogoBlack.svg";
import { LandingLogo, LandingLogoLine, LandingLogoWrapper } from "@components/components/LogoWrapper/LogoWrapper.css";
import { useRouter } from "next/router";

type LogoWrapperType = {
    isDarkLogo?: boolean;
};

export const LogoWrapper: FC<LogoWrapperType> = ({ isDarkLogo }) => {
    const router = useRouter();
    const skyeexLogo = isDarkLogo ? SkyeexBlackLogo : SkyeexWhiteLogo;

    const navigateHome = () => {
        router.push(`/`).then(null);
    }

    return (
        <LandingLogoWrapper onClick={navigateHome}>
            <LandingLogo src={skyeexLogo.src} />
            <LandingLogoLine />
        </LandingLogoWrapper>
    )
}