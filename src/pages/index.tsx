import React from "react";
import Head from "next/head";
import { StageArea } from "@components/components/StageArea/StageArea";
import { Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export default function Home() {
    return (
        <>
            <Head>
                <title>Skyeex</title>
            </Head>
            <StageArea />
            <Separator paddingValue={30} />
        </>
    )
}
