import ErrorPage from 'next/error';
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProjectsCardsConfig } from "@components/configs/general";
import { Footer } from "@components/components/Footer/Footer";
import { DetailPageLandingArea } from "@components/components/LandingArea/DetailPageLandingArea";
import { TextContentWrapper } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { ServicesParagraph } from "@components/components/Services/Services.css";

const fetchProjectConfigObject = (keyId: string): ProjectsConfigType | undefined => {
    return ProjectsCardsConfig.find((obj) => obj.id === keyId);
}

const DetailPage: FC = () => {
    const [project, setProject] = useState<ProjectsConfigType>();
    const router = useRouter();
    const { slugDetailPage } = router.query || {};

    useEffect(() => {
        setProject(fetchProjectConfigObject(slugDetailPage as string));
    }, [slugDetailPage])

    if (!project) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <React.Fragment>
            <DetailPageLandingArea project={project} wallpaper={project.icon} />
            <TextContentWrapper>
                <ServicesParagraph dangerouslySetInnerHTML={project.htmlField} />
            </TextContentWrapper>
            <Footer />
        </React.Fragment>
    )
}

export default DetailPage;