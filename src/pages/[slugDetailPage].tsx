import ErrorPage from 'next/error';
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "@components/components/Footer/Footer";
import { DetailPageLandingArea } from "@components/components/LandingArea/DetailPageLandingArea";
import { TextContentWrapper } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { ServicesParagraph } from "@components/components/Services/Services.css";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { getStandardHeader } from "@components/utils/general";

const fetchProjectConfigObject = (keyId: string): ProjectsConfigType | undefined => {
    return ProjectsConfig.find((obj) => obj.id === keyId);
};

const DetailPage: FC = () => {
    const { isMobile } = useGetScreenSize();
    const router = useRouter();
    const { slugDetailPage } = router.query || {};

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [project, setProject] = useState<ProjectsConfigType>();

    useEffect(() => {
        if (slugDetailPage) {
            setIsLoading(true);

            const fetchProject = async (): Promise<void> => {
                const projectData = await fetchProjectConfigObject(slugDetailPage as string);

                setProject(projectData);
                setIsLoading(false);
            };

            fetchProject().then(null);
        }
    }, [slugDetailPage])

    if (isLoading) {
        return <></>;
    }

    if (!project) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <React.Fragment>
            {getStandardHeader(project.title)}
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