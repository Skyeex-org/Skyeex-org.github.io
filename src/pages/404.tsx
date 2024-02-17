import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { usePathname } from 'next/navigation'

const matchProjectsConfigWithId = (id: string): boolean => {
    return ProjectsConfig.some(item => item.id === id)
}

const removeLeadingAndTrailingSlashes = (str: string | null): string => {
    return str ? str.replace(/^\/|\/$/g, '') : '';
}

const Custom404 = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const redirectIfRequired = async () => {
            const cleanedPathname = removeLeadingAndTrailingSlashes(pathname);

            if (matchProjectsConfigWithId(cleanedPathname)) {
                await router.replace('/projects');
            }
            setIsLoading(false);
        };

        redirectIfRequired().then(null);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (isLoading) {
        return <></>;
    }

    return <h1>404 - Page Not Found</h1>;
};

export default Custom404;
