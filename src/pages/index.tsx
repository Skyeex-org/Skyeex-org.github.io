import React, { useRef } from "react";
import Head from "next/head";
import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { Services } from "@components/components/Services/Services";
import { Projects } from "@components/components/Projects/Projects";
import { Footer } from "@components/components/Footer/Footer";
import { ContactForm } from "@components/components/ContactForm/ContactForm";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";

export default function Home() {
    const { isMobile } = useGetScreenSize();
    const whatWeDoRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Head>
                <title>Skyeex</title>
            </Head>
            {!isMobile() && <ScrollTopButton />}
            <LandingArea nextSectionReference={whatWeDoRef} />
            <Services ref={whatWeDoRef} />
            <Projects />
            <ContactForm />
            <Footer />
        </>
    )
}
