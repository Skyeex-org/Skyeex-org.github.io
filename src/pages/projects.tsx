import React, { FC } from "react";
import Head from "next/head";
import { Projects } from "@components/components/Projects/Projects";
import { LandingLogo, LandingLogoLine, LandingLogoWrapper } from "@components/components/LandingArea/LandingArea.css";
import SkyeexLogoBlack from "@components/assets/SkyeexLogoBlack.svg";
import { SeparatorSpace, StandardBackground } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

const ProjectsPage: FC = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Skyeex - Projects</title>
            </Head>
            <StandardBackground>
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