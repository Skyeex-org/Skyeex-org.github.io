import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProjectsCardsConfig } from "@components/configs/general";

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

    return (
        <div>
            <h1>{project?.title}</h1>
        </div>
    )
}

export default DetailPage;