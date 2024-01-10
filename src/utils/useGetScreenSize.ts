import { useEffect, useState } from 'react';
import { SCREEN_SIZES } from "@components/utils/cssMedia";

type resolutions = keyof typeof SCREEN_SIZES;

export const useGetScreenSize = () => {
    const [resolution, setResolution] = useState<resolutions>();

    const setupResolutionAdaptation = () => {
        Object.entries(SCREEN_SIZES).some(([key, value]) => {
            if (value <= window.innerWidth) {
                setResolution(key as resolutions);
                return true;
            }
            return false;
        });

        return false;
    };

    useEffect(() => {
        if (window.innerWidth < SCREEN_SIZES.mobile) setResolution('mobile' as resolutions);
        else if (window.innerWidth < SCREEN_SIZES.tablet) setResolution('tablet' as resolutions);
        else setResolution('desktop' as resolutions);
    }, [])

    useEffect(() => {
        setupResolutionAdaptation();
        window.addEventListener('resize', setupResolutionAdaptation);

        return () => {
            window.removeEventListener('resize', setupResolutionAdaptation);
        };
    }, []);

    return {
        resolution,
        isMobile: (): boolean => resolution === 'mobile',
        isTablet: (): boolean => resolution === 'tablet',
        isDesktop: (): boolean => resolution === 'desktop'
    };
};