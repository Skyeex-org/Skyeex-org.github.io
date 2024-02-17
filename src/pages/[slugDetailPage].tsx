import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Footer } from "@components/components/Footer/Footer";
import { DetailPageLandingArea } from "@components/components/LandingArea/DetailPageLandingArea";
import { TextContentWrapper } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { ServicesParagraph } from "@components/components/Services/Services.css";
import ScrollTopButton from "@components/components/ScrollTopButton/ScrollTopButton";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";
import { ProjectsConfig } from "@components/configs/projectsConfig";
import Custom404 from "@components/pages/404";
import { getStandardHeaderForPages } from "@components/pages/index";

const fetchProjectConfigObject = (keyId: string): ProjectsConfigType | undefined => {
    // return ProjectsConfig.find((obj) => obj.id === keyId);
    return undefined;
};

const DetailPage: FC = () => {
    const { isMobile } = useGetScreenSize();
    const router = useRouter();
    const { slugDetailPage } = router.query || {};
    const [project, setProject] = useState<ProjectsConfigType>();

    useEffect(() => {
        setProject(fetchProjectConfigObject(slugDetailPage as string));
    }, [slugDetailPage])

    if (!project) {
        return <Custom404 />;
    }

    return (
        <React.Fragment>
            {getStandardHeaderForPages(project.title)}
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