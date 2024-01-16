import React, { FC } from "react";
import {
    ServiceCardImage,
    ServiceCardTitle,
    ServiceCardWrapper
} from "@components/components/ServiceCard/ServiceCard.css";
import { SeparatorSpace } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

type ServiceCardType = {
    service: ServiceConfigType;
}

export const ServiceCard: FC<ServiceCardType> = ({ service }) => {
    return (
        <ServiceCardWrapper>
            <ServiceCardImage src={service.icon} alt={service.title} />
            <SeparatorSpace paddingValue={2} />
            <ServiceCardTitle>{service.title}</ServiceCardTitle>
        </ServiceCardWrapper>
    );
};