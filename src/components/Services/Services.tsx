import React, { forwardRef, HTMLProps } from "react";
import {
    ServicesContent,
    ServicesOverTitle, ServicesParagraph,
    ServicesTitle,
    ServicesWrapper
} from "@components/components/Services/Services.css";
import { ServiceCard } from "@components/components/ServiceCard/ServiceCard";
import { WhatWeDoCardsConfig, WhatWeDoContentConfig } from "@components/configs/general";
import {
    SeparatorSpace,
    FlexColumn,
    FlexContainer
} from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";

// eslint-disable-next-line react/display-name
export const Services = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((
    props,
    ref
) => {
    const { isMobile } = useGetScreenSize();

    return (
        <ServicesWrapper ref={ref}>
            <SeparatorSpace paddingValue={isMobile() ? 1 : 5}>
                <FlexContainer>
                    <FlexColumn columnPercentage={50}>
                        <ServicesOverTitle>{WhatWeDoContentConfig.overTitle}</ServicesOverTitle>
                        <ServicesTitle>{WhatWeDoContentConfig.title}</ServicesTitle>
                    </FlexColumn>
                    <FlexColumn columnPercentage={50}>
                        <ServicesContent>
                            <ServicesParagraph>
                                {WhatWeDoContentConfig.paragraphOne}
                            </ServicesParagraph>
                            <SeparatorSpace paddingValue={1} />
                            <ServicesParagraph>
                                {WhatWeDoContentConfig.paragraphTwo}
                            </ServicesParagraph>
                        </ServicesContent>
                    </FlexColumn>
                </FlexContainer>
            </SeparatorSpace>
            <FlexContainer>
                {WhatWeDoCardsConfig.map((service: ServiceConfigType, index) => {
                    const isNotTheLastElement = WhatWeDoCardsConfig.length - 1 !== index;

                    return (
                        <FlexColumn key={service.title} columnPercentage={25} shouldHaveBorder={isNotTheLastElement}>
                            <ServiceCard service={service} />
                        </FlexColumn>
                    );
                })}
            </FlexContainer>
        </ServicesWrapper>
    );
});