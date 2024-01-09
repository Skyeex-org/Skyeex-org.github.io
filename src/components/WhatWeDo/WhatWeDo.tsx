import React, { FC } from "react";
import { WhatWeDoColumn, WhatWeDoWrapper } from "@components/components/WhatWeDo/WhatWeDo.css";
import { ServiceCard } from "@components/components/ServiceCard/ServiceCard";
import { WhatWeDoConfig } from "@components/configs/general";

export const WhatWeDo: FC = () => {
    return (
        <WhatWeDoWrapper>
            {WhatWeDoConfig.map((service: ServiceType, index) => {
                const isLastElement = WhatWeDoConfig.length - 1 === index;

                return (
                    <WhatWeDoColumn key={service.title} isLastElement={isLastElement}>
                        <ServiceCard service={service} />
                    </WhatWeDoColumn>
                );
            })}
        </WhatWeDoWrapper>
    );
};