import React, { FC } from "react";
import {
    WhatWeDoColumn, WhatWeDoContent,
    WhatWeDoFlexContainer,
    WhatWeDoTitle,
    WhatWeDoWrapper
} from "@components/components/WhatWeDo/WhatWeDo.css";
import { ServiceCard } from "@components/components/ServiceCard/ServiceCard";
import { WhatWeDoConfig } from "@components/configs/general";
import { Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

export const WhatWeDo: FC = () => {
    return (
        <WhatWeDoWrapper>
            <Separator paddingValue={5}>
                <WhatWeDoFlexContainer>
                    <WhatWeDoColumn columnPercentage={55}>
                        <WhatWeDoTitle>Take your craft to the next level</WhatWeDoTitle>
                    </WhatWeDoColumn>
                    <WhatWeDoColumn columnPercentage={45}>
                        <WhatWeDoContent>
                            <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                            <Separator paddingValue={1} />
                            <p>Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </WhatWeDoContent>
                    </WhatWeDoColumn>
                </WhatWeDoFlexContainer>
            </Separator>
            <WhatWeDoFlexContainer>
                {WhatWeDoConfig.map((service: ServiceType, index) => {
                    const isNotTheLastElement = WhatWeDoConfig.length - 1 !== index;

                    return (
                        <WhatWeDoColumn key={service.title} columnPercentage={25} shouldHaveBorder={isNotTheLastElement}>
                            <ServiceCard service={service} />
                        </WhatWeDoColumn>
                    );
                })}
            </WhatWeDoFlexContainer>
        </WhatWeDoWrapper>
    );
};