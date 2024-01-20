import React, { useRef } from "react";
import Head from "next/head";
import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { Services } from "@components/components/Services/Services";
import { Footer } from "@components/components/Footer/Footer";
import { ContactForm } from "@components/components/ContactForm/ContactForm";

export default function Home() {
    const whatWeDoRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Head>
                <title>Skyeex</title>
            </Head>
            <LandingArea nextSectionReference={whatWeDoRef} />
            <Services ref={whatWeDoRef} />
            <ContactForm />
            <Footer />
        </>
    )
}
