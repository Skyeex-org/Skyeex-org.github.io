import SeverSolid from "@components/assets/svgs/server-solid.svg";
import DesktopSolid from "@components/assets/svgs/desktop-solid.svg";
import MobileSolid from "@components/assets/svgs/mobile-solid.svg";
import BrainSolid from "@components/assets/svgs/brain-solid.svg";
import ProjectPlaceholder from "@components/assets/ProjectPlaceholder.png";

export const LandingAreaConfig: LandingAreaConfigType = {
    landingLogo: 'Skyeex.',
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

export const ContactConfig = {
    addressPartOne: '785 15h Street, Office 478',
    addressPartTwo: 'Berlin, De 81566',
    email: 'skyeex-org@gmail.com',
    phoneNumber: '+1 840 841 25 69'
};

export const FooterConfig: FooterConfigType = {
    metadataMoto: 'Architecting new digital horizons',
    metadataTitle: 'Have questions?',
    metadataText: 'skyeex-org@gmail.com',
    websiteUrl: 'https://skyeex-org.github.io/'
};

export const ProjectsCardsConfig: ProjectsConfigType[] = [
    {
        title: 'Streamsnap',
        description: 'Streamsnap is a cutting-edge multiplatform VOD streaming app with integrated analytics designed to provide a data-driven viewing experience across multiple devices.',
        icon: ProjectPlaceholder.src,
    },
    {
        title: 'Cruze',
        description: 'Cruze revolutionizes commuting with its mobile carpooling app specially tailored for businesses and institutions fostering a sense for efficient and sustainable transportation.',
        icon: ProjectPlaceholder.src,
    },
    {
        title: 'Car damage detector',
        description: 'Introducing a smart classifier engineered to accurately assess the accident-indused vehicle damage, bringing precision to the evaluation process, streamlining the repair workflow and enhance customer satisfaction.',
        icon: ProjectPlaceholder.src,
    },
    {
        title: 'ADDA',
        description: 'Unveiling ADDA (Automated defect detection analyser) where the convergence of machine learning and neural networks meet, paving the way for unparalleled precision in quality control processes.',
        icon: ProjectPlaceholder.src,
    },
];

export const ProjectsCardsPreviewConfig = ProjectsCardsConfig.slice(0, 3);
export const formSubmitCodeUrl = 'https://formsubmit.co/3429fe035dc96d7c043c7fd6bf477a8c';