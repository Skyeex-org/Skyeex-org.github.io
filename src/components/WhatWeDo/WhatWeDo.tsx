import React, { forwardRef, HTMLProps } from "react";
import {
    WhatWeDoColumn, WhatWeDoContent,
    WhatWeDoFlexContainer, WhatWeDoOverTitle, WhatWeDoParagraph,
    WhatWeDoTitle,
    WhatWeDoWrapper
} from "@components/components/WhatWeDo/WhatWeDo.css";
import { ServiceCard } from "@components/components/ServiceCard/ServiceCard";
import { WhatWeDoCardsConfig, WhatWeDoContentConfig } from "@components/configs/general";
import { Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";
import { useGetScreenSize } from "@components/utils/useGetScreenSize";

// eslint-disable-next-line react/display-name
export const WhatWeDo = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>((
    props,
    ref
) => {
    const { isMobile } = useGetScreenSize();

    return (
        <WhatWeDoWrapper ref={ref}>
            <Separator paddingValue={isMobile() ? 1 : 5}>
                <WhatWeDoFlexContainer>
                    <WhatWeDoColumn columnPercentage={50}>
                        <WhatWeDoOverTitle>{WhatWeDoContentConfig.overTitle}</WhatWeDoOverTitle>
                        <WhatWeDoTitle>{WhatWeDoContentConfig.title}</WhatWeDoTitle>
                    </WhatWeDoColumn>
                    <WhatWeDoColumn columnPercentage={50}>
                        <WhatWeDoContent>
                            <WhatWeDoParagraph>
                                {WhatWeDoContentConfig.paragraphOne}
                            </WhatWeDoParagraph>
                            <Separator paddingValue={1} />
                            <WhatWeDoParagraph>
                                {WhatWeDoContentConfig.paragraphTwo}
                            </WhatWeDoParagraph>
                        </WhatWeDoContent>
                    </WhatWeDoColumn>
                </WhatWeDoFlexContainer>
            </Separator>
            <WhatWeDoFlexContainer>
                {WhatWeDoCardsConfig.map((service: ServiceConfigType, index) => {
                    const isNotTheLastElement = WhatWeDoCardsConfig.length - 1 !== index;

                    return (
                        <WhatWeDoColumn key={service.title} columnPercentage={25} shouldHaveBorder={isNotTheLastElement}>
                            <ServiceCard service={service} />
                        </WhatWeDoColumn>
                    );
                })}
            </WhatWeDoFlexContainer>
        </WhatWeDoWrapper>
    );
});
