import React from "react";
import Head from "next/head";
import { LandingArea } from "@components/components/LandingArea/LandingArea";
import { WhatWeDo } from "@components/components/WhatWeDo/WhatWeDo";
import { Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export default function Home() {
    return (
        <>
            <Head>
                <title>Skyeex</title>
            </Head>
            <LandingArea />
            <WhatWeDo />
            <Separator paddingValue={30} />
        </>
    )
}
