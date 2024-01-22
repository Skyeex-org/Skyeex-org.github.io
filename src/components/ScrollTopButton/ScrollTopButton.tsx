import React, { useState, useEffect, FC } from 'react';
import ArrowToTop from '../../assets/icons/arrow-up-long-solid.svg';
import { ScrollToTopButton, ScrollToTopIcon } from "@components/components/ScrollTopButton/ScrollToTopButton.css";

const ScrollTopButton: FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
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
        <div>
            {isVisible && (
                <ScrollToTopButton onClick={handleScrollToTop}>
                    <ScrollToTopIcon src={ArrowToTop.src} alt={ArrowToTop.src} />
                </ScrollToTopButton>
            )}
        </div>
    );
};

export default ScrollTopButton;