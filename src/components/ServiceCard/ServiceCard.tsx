import React, { FC } from "react";
import {
    ServiceCardImage,
    ServiceCardTitle,
    ServiceCardWrapper
} from "@components/components/ServiceCard/ServiceCard.css";
import { Separator } from "@components/components/GeneralStyleSheet/GeneralStyleSheet";

type ServiceCardType = {
    service: ServiceType;
}

export const ServiceCard: FC<ServiceCardType> = ({ service }) => {
    return (
        <ServiceCardWrapper>
            <ServiceCardImage src={service.icon} alt={service.title} />
            <Separator paddingValue={1} />
            <ServiceCardTitle>{service.title}</ServiceCardTitle>
        </ServiceCardWrapper>
    );
};