import React, { useRef } from "react";
import Head from "next/head";
import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { Services } from "@components/components/Services/Services";
import { Projects } from "@components/components/Projects/Projects";
import { Footer } from "@components/components/Footer/Footer";

export default function Home() {
    const whatWeDoRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Head>
                <title>Skyeex</title>
            </Head>
            <LandingArea nextSectionReference={whatWeDoRef} />
            <Services ref={whatWeDoRef} />
            <Projects />
            <Footer />
        </>
    )
}
