import ErrorPage from 'next/error';
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProjectsCardsConfig } from "@components/configs/general";
import { Footer } from "@components/components/Footer/Footer";
import { DetailPageLandingArea } from "@components/components/LandingArea/DetailPageLandingArea";

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
        <div>
            <DetailPageLandingArea project={project} />
            <h1>{project?.title}</h1>
            <Footer />
        </div>
    )
}

export default DetailPage;