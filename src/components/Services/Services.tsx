import React, { forwardRef, HTMLProps } from "react";
import {
    ServicesColumn, ServicesContent,
    ServicesFlexContainer, ServicesOverTitle, ServicesParagraph,
    ServicesTitle,
    ServicesWrapper
} from "@components/components/Services/Services.css";
import { ServiceCard } from "@components/components/ServiceCard/ServiceCard";
import { WhatWeDoCardsConfig, WhatWeDoContentConfig } from "@components/configs/general";
import { Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";

// eslint-disable-next-line react/display-name
export const Services = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((
    props,
    ref
) => {
    const { isMobile } = useGetScreenSize();

    return (
        <ServicesWrapper ref={ref}>
            <Separator paddingValue={isMobile() ? 1 : 5}>
                <ServicesFlexContainer>
                    <ServicesColumn columnPercentage={50}>
                        <ServicesOverTitle>{WhatWeDoContentConfig.overTitle}</ServicesOverTitle>
                        <ServicesTitle>{WhatWeDoContentConfig.title}</ServicesTitle>
                    </ServicesColumn>
                    <ServicesColumn columnPercentage={50}>
                        <ServicesContent>
                            <ServicesParagraph>
                                {WhatWeDoContentConfig.paragraphOne}
                            </ServicesParagraph>
                            <Separator paddingValue={1} />
                            <ServicesParagraph>
                                {WhatWeDoContentConfig.paragraphTwo}
                            </ServicesParagraph>
                        </ServicesContent>
                    </ServicesColumn>
                </ServicesFlexContainer>
            </Separator>
            <ServicesFlexContainer>
                {WhatWeDoCardsConfig.map((service: ServiceConfigType, index) => {
                    const isNotTheLastElement = WhatWeDoCardsConfig.length - 1 !== index;

                    return (
                        <ServicesColumn key={service.title} columnPercentage={25} shouldHaveBorder={isNotTheLastElement}>
                            <ServiceCard service={service} />
                        </ServicesColumn>
                    );
                })}
            </ServicesFlexContainer>
        </ServicesWrapper>
    );
});
