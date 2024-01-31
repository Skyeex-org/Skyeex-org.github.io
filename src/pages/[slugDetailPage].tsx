import ErrorPage from 'next/error';
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "@components/components/Footer/Footer";
import { DetailPageLandingArea } from "@components/components/LandingArea/DetailPageLandingArea";
import { TextContentWrapper } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { ServicesParagraph } from "@components/components/Services/Services.css";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import Head from "next/head";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import { ProjectsConfig } from "@components/configs/projectsConfig";

const fetchProjectConfigObject = (keyId: string): ProjectsConfigType | undefined => {
    return ProjectsConfig.find((obj) => obj.id === keyId);
}

const DetailPage: FC = () => {
    const { isMobile } = useGetScreenSize();
    const router = useRouter();
    const { slugDetailPage } = router.query || {};
    const [project, setProject] = useState<ProjectsConfigType>();

    useEffect(() => {
        setProject(fetchProjectConfigObject(slugDetailPage as string));
    }, [slugDetailPage])

    if (!project) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <React.Fragment>
            <Head>
                <title>{project.title}</title>
            </Head>
            {!isMobile() && <ScrollTopButton />}
            <DetailPageLandingArea project={project} wallpaper={project.icon} />
            <TextContentWrapper>
                <ServicesParagraph dangerouslySetInnerHTML={project.htmlField} />
            </TextContentWrapper>
            <Footer />
        </React.Fragment>
    )
}

export default DetailPage;