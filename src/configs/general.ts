import SeverSolid from "@components/assets/svgs/server-solid.svg";
import DesktopSolid from "@components/assets/svgs/desktop-solid.svg";
import MobileSolid from "@components/assets/svgs/mobile-solid.svg";
import BrainSolid from "@components/assets/svgs/brain-solid.svg";
import LinkedIn from "@components/assets/svgs/SocialMedia/linkedin.svg";
import Medium from "@components/assets/svgs/SocialMedia/medium.svg";
import SkyeexLogo from "@components/assets/SkyeexLogo.svg";

export const LandingAreaConfig: LandingAreaConfigType = {
    landingLogo: SkyeexLogo.src,
    welcomeText: 'Sky High Software Quality',
    underWelcomeText: 'We produce top-notch software for our customers',
    buttonText: 'Get Started'
};

export const WhatWeDoContentConfig: WhatWeDoConfigType = {
    overTitle: 'Top Services',
    title: 'Take your craft to the next level',
    paragraphOne: 'Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    paragraphTwo: 'Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
};

export const WhatWeDoCardsConfig: ServiceConfigType[] = [
    {
        icon: SeverSolid.src,
        title: 'Backend Services',
        content: 'We specialize in backend systems, where we excel at designing, developing, and optimizing the ' +
            'technology that powers applications. With a focus on scalability and security, ' +
            'We ensure that these systems are reliable and efficient.',
    },
    {
        icon: DesktopSolid.src,
        title: 'Web Apps',
        content: 'As a software company, our expertise also encompasses developing web applications. ' +
            'We have an in-depth understanding of web technologies, frameworks, and programming languages.',
    },
    {
        icon: MobileSolid.src,
        title: 'Mobile Apps',
        content: 'We possess a comprehensive knowledge of mobile development, specifically hybrid development. ' +
            'In addition to our existing expertise, We are committed to staying up-to-date with the latest trends and best practices.',
    },
    {
        icon: BrainSolid.src,
        title: 'Machine Learning',
        content: 'We offer Machine Learning services, leveraging my expertise in this field to provide ' +
            'tailored solutions that harness the power of data and algorithms for diverse applications',
    },
];

export const SocialMediaConfig: SocialMediaConfigType[] = [
    {
        id: 'linkedin',
        icon: LinkedIn.src,
        url: "https://skyeex-org.github.io/",
    },
    {
        id: 'medium',
        icon: Medium.src,
        url: "https://skyeex-org.github.io/",
    },
];

export const FooterConfig: FooterConfigType = {
    metadataMoto: 'Architecting new digital horizons',
    metadataTitle: 'Have questions?',
    metadataText: 'skyeex-org@gmail.com',
    websiteUrl: 'https://skyeex-org.github.io/'
};


export const formSubmitCodeUrl = 'https://formsubmit.co/3429fe035dc96d7c043c7fd6bf477a8c';