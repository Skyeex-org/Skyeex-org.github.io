import React, { useState, useEffect, FC } from 'react';
import ArrowToTop from '../../assets/svgs/arrow-up-long-solid.svg';
import { ScrollToTopButton, ScrollToTopIcon } from "@components/components/ScrollTopButton/ScrollToTopButton.css";

const STANDARD_SCROLL_BUTTON_APPEARANCE_HEIGHT = 300;

const ScrollTopButton: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > STANDARD_SCROLL_BUTTON_APPEARANCE_HEIGHT);
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <React.Fragment>
            <ScrollToTopButton onClick={handleScrollToTop} isVisible={isVisible}>
                <ScrollToTopIcon src={ArrowToTop.src} alt={ArrowToTop.src} />
            </ScrollToTopButton>
        </React.Fragment>
    );
};

export default ScrollTopButton;