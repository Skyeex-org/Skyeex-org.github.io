import React from "react";
import Head from "next/head";
import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { SeparatorSpace } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { Footer } from "@components/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Skyeex</title>
            </Head>
            <LandingArea />
            <SeparatorSpace paddingValue={30} />
            <Footer />
        </>
    )
}
