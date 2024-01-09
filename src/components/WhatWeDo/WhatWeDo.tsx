import React, { FC } from "react";
import { WhatWeDoColumn, WhatWeDoWrapper } from "@components/components/WhatWeDo/WhatWeDo.css";
import { ServiceCard } from "@components/components/ServiceCard/ServiceCard";

export const WhatWeDo: FC = () => {
    return (
        <WhatWeDoWrapper>
            <WhatWeDoColumn>
                <ServiceCard />
            </WhatWeDoColumn>
            <WhatWeDoColumn>
                <ServiceCard />
            </WhatWeDoColumn>
            <WhatWeDoColumn>
                <ServiceCard />
            </WhatWeDoColumn>
            <WhatWeDoColumn>
                <ServiceCard />
            </WhatWeDoColumn>
        </WhatWeDoWrapper>
    );
};