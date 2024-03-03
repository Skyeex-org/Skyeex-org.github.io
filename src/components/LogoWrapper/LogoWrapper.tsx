import React, { FC } from "react";
import SkyeexWhiteLogo from "@components/assets/SkyeexLogo.svg";
import SkyeexBlackLogo from "@components/assets/SkyeexLogoBlack.svg";
import { LandingLogo, LandingLogoLine, LandingLogoWrapper } from "@components/components/LogoWrapper/LogoWrapper.css";
import { useRouter } from "next/router";

type LogoWrapperType = {
    isDarkLogo?: boolean;
    isLogoLine?: boolean;
};

export const LogoWrapper: FC<LogoWrapperType> = ({ isDarkLogo, isLogoLine }) => {
    const router = useRouter();
    const skyeexLogo = isDarkLogo ? SkyeexBlackLogo : SkyeexWhiteLogo;

    const navigateHome = () => {
        router.push(`/`).then(null);
    }

    return (
        <LandingLogoWrapper>
            <LandingLogo src={skyeexLogo.src} onClick={navigateHome} alt={skyeexLogo.src} />
            {isLogoLine && <LandingLogoLine />}
        </LandingLogoWrapper>
    )
}