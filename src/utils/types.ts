type LandingAreaConfigType = {
    landingLogo: string;
    welcomeText: string;
    underWelcomeText: string;
    buttonText: string;
};

type WhatWeDoConfigType = {
    overTitle: string;
    title: string;
    paragraphOne: string;
    paragraphTwo: string;
};

type ServiceConfigType = {
    icon: string;
    title: string;
    content: string;
};

type innerHtmlType = { __html: string | TrustedHTML };

type ProjectsConfigType = {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    previewDescription: string;
    htmlField: innerHtmlType;
    isDetailPageEnabled: boolean;
};

type FooterConfigType = {
    metadataMoto: string;
    metadataTitle: string;
    metadataText: string;
    websiteUrl: string;
};