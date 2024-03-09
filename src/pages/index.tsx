import React, { useRef } from "react";
import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { Services } from "@components/components/Services/Services";
import { Projects } from "@components/components/Projects/Projects";
import { Footer } from "@components/components/Footer/Footer";
import { ContactForm } from "@components/components/ContactForm/ContactForm";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import Head from "next/head";
import { MetaConfig } from "@components/configs/general";
import { Partners } from "@components/components/Partners/Partners";
import { Team } from "@components/components/Team/Team";
import { AppLayoutConfig } from "@components/configs/appLayoutConfig";

export const getStandardHeaderForPages = (title: string, metaDescription?: string) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content="Skyeex, technology solutions, mobile apps, web development, AI, backend, digital innovation, quality" />
            <meta name="author" content="Skyeex" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
};

export default function Home() {
    const { isMobile } = useGetScreenSize();
    const whatWeDoRef = useRef<HTMLDivElement | null>(null);

    return (
        <React.Fragment>
            {getStandardHeaderForPages('Skyeex Software - Architecting new digital horizons', MetaConfig.homeMetaDescription)}
            {!isMobile() && <ScrollTopButton />}
            {AppLayoutConfig.landingArea && <LandingArea nextSectionReference={whatWeDoRef}/>}
            {AppLayoutConfig.services && <Services ref={whatWeDoRef} />}
            {AppLayoutConfig.projects && <Projects />}
            {AppLayoutConfig.partners && <Partners />}
            {AppLayoutConfig.team && <Team />}
            {AppLayoutConfig.contactForm && <ContactForm />}
            {AppLayoutConfig.footer && <Footer />}
            <Footer />
        </React.Fragment>
    )
}
