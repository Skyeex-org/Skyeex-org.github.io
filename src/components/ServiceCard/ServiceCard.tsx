import React, { FC } from "react";
import {
    ServiceCardImage, ServiceCardTech,
    ServiceCardTitle,
    ServiceCardWrapper,
} from "@components/components/ServiceCard/ServiceCard.css";
import { FlexContainer, SeparatorSpace } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

type ServiceCardType = {
    service: ServiceConfigType;
}

export const ServiceCard: FC<ServiceCardType> = ({ service }) => {
    return (
        <ServiceCardWrapper>
            <ServiceCardImage src={service.icon} alt={service.title}/>
            <SeparatorSpace paddingValue={2}/>
            <ServiceCardTitle>{service.title}</ServiceCardTitle>
            <SeparatorSpace paddingValue={2} />
            <FlexContainer positionType={'space-around'}>
                {service.techStack.map((tech) => {
                    return <ServiceCardTech src={tech} data-aos="zoom-in-up" key={tech} alt={tech} />
                })}
            </FlexContainer>
        </ServiceCardWrapper>
    );
};
