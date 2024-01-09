import React, { FC } from "react";

type ServiceCardType = {
    service: ServiceType;
}

export const ServiceCard: FC<ServiceCardType> = ({ service }) => {
    return (
        <div>
            <p>{service.title}</p>
            <p>{service.content}</p>
        </div>
    );
};