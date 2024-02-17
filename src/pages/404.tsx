import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ProjectsConfig } from "@components/configs/projectsConfig";
import { usePathname } from 'next/navigation'
import {
    Custom404Code,
    Custom404Message,
    Custom404VerticalLine,
    Custom404Wrapper
} from "@components/components/Custom404Design/Custom404Design.css";
import { LogoWrapper } from "@components/components/LogoWrapper/LogoWrapper";

const matchProjectsConfigWithId = (id: string): boolean => {
    return ProjectsConfig.some(item => item.id === id)
};

const removeLeadingAndTrailingSlashes = (str: string | null): string => {
    return str ? str.replace(/^\/|\/$/g, '') : '';
};

const Custom404 = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState<boolean>(true);

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

    return (
        <>
            <LogoWrapper />
            <Custom404Wrapper>
                <Custom404Code>404</Custom404Code>
                <Custom404VerticalLine></Custom404VerticalLine>
                <Custom404Message>This page could not be found.</Custom404Message>
            </Custom404Wrapper>
        </>
    )
};

export default Custom404;
