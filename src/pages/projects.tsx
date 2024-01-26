import React, { FC } from "react";
import Head from "next/head";
import { Projects } from "@components/components/Projects/Projects";
import { LandingLogo, LandingLogoWrapper } from "@components/components/LandingArea/LandingArea.css";
import SkyeexLogoBlack from "@components/assets/SkyeexLogoBlack.svg";
import { SeparatorSpace, StandardBackground } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { Colors } from "@components/utils/cssMedia";

const ProjectsPage: FC = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Skyeex - Projects</title>
            </Head>
            <StandardBackground background={Colors.paleBluishGray}>
                <LandingLogoWrapper>
                    <LandingLogo src={SkyeexLogoBlack.src} />
                </LandingLogoWrapper>
                <SeparatorSpace paddingValue={3} />
                <Projects isPreviewMode={false} />
            </StandardBackground>
        </React.Fragment>
    )
}

export default ProjectsPage;