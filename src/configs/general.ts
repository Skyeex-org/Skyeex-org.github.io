import SeverSolid from "@components/assets/svgs/server-solid.svg";
import DesktopSolid from "@components/assets/svgs/desktop-solid.svg";
import MobileSolid from "@components/assets/svgs/mobile-solid.svg";
import BrainSolid from "@components/assets/svgs/brain-solid.svg";
import LinkedIn from "@components/assets/svgs/socialMedia/linkedin.svg";
import Medium from "@components/assets/svgs/socialMedia/medium.svg";
import SkyeexLogo from "@components/assets/SkyeexLogo.svg";

export const LandingAreaConfig: LandingAreaConfigType = {
    landingLogo: SkyeexLogo.src,
    welcomeText: 'Architecting new digital horizons',
    underWelcomeText: "Quality isn't an afterthought – it's the cornerstone of everything we do",
    buttonText: 'Get Started'
};

export const ServicesConfig: ServicesConfigType = {
    overTitle: 'Our Services',
    title: 'Take your craft to the next level',
    paragraphOne: "Our comprehensive tech stack empowers us to deliver a diverse range of services, spanning backend development, web and mobile application development, and even cutting-edge machine learning solutions.",
    paragraphTwo: "From concept to execution, we are your dedicated partners in turning visions into reality because success is not just a goal; it is our shared destination."
};

export const ServicesCardsConfig: ServiceConfigType[] = [
    {
        icon: SeverSolid.src,
        title: 'Backend',
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
        title: 'AI & ML',
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
    }
];

export const FooterConfig: FooterConfigType = {
    metadataMoto: 'Discover new heights with us',
    metadataTitle: 'Have questions?',
    metadataText: 'skyeex-org@gmail.com',
    websiteUrl: 'https://skyeex-org.github.io/'
};

export const MetaConfig: MetaConfigType = {
    homeMetaDescription: 'Skyeex pioneers the creation of new digital landscapes, architecting innovative solutions for mobile, web, AI, and backend needs. At Skyeex, quality isn\'t an afterthought – it\'s the foundation of every project. Let us lead you into the future of technology, where quality and innovation go hand in hand.',
    projectsMetaDescription: 'Explore Skyeex\'s exciting projects in mobile apps, websites, AI, and backend systems. Quality is key to everything we do. See how we excel in our work, exceed expectations, and set new standards. Let us guide you through our projects and into a future filled with quality and innovation.'
};

export const formSubmitUrl = 'https://formsubmit.co/3429fe035dc96d7c043c7fd6bf477a8c';
