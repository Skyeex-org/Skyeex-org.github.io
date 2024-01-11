import React, { useRef } from "react";
import Head from "next/head";
import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { WhatWeDo } from "@components/components/WhatWeDo/WhatWeDo";
import { Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export default function Home() {
    const whatWeDoRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <Head>
                <title>Skyeex</title>
            </Head>
            <LandingArea nextSectionReference={whatWeDoRef} />
            <WhatWeDo ref={whatWeDoRef} />
            <Separator paddingValue={30} />
        </>
    )
}
