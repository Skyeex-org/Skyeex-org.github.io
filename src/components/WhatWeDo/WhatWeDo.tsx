import React, { FC } from "react";
import { WhatWeDoColumn, WhatWeDoWrapper } from "@components/components/WhatWeDo/WhatWeDo.css";
import { ServiceCard } from "@components/components/ServiceCard/ServiceCard";
import { WhatWeDoConfig } from "@components/configs/general";

export const WhatWeDo: FC = () => {
    return (
        <WhatWeDoWrapper>
            {WhatWeDoConfig.map((service: ServiceType) => {
                return (
                    <WhatWeDoColumn key={service.title}>
                        <ServiceCard service={service} />
                    </WhatWeDoColumn>
                );
            })}
        </WhatWeDoWrapper>
    );
};