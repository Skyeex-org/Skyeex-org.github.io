import SeverSolid from "@components/assets/svgs/server-solid.svg";
import DesktopSolid from "@components/assets/svgs/desktop-solid.svg";
import MobileSolid from "@components/assets/svgs/mobile-solid.svg";
import BrainSolid from "@components/assets/svgs/brain-solid.svg";
import LinkedIn from "@components/assets/svgs/socialMedia/linkedin.svg";
import Medium from "@components/assets/svgs/socialMedia/medium.svg";
import SkyeexLogo from "@components/assets/SkyeexLogo.svg";
import StreamSnap from "@components/assets/projects/streamsnap.jpg";
import CaRepair from "@components/assets/projects/caRepair.jpeg";
import Adda from "@components/assets/projects/adda.jpg";
import Cruze from "@components/assets/projects/cruze.jpg";

export const LandingAreaConfig: LandingAreaConfigType = {
    landingLogo: SkyeexLogo.src,
    welcomeText: 'Sky High Software Quality',
    underWelcomeText: 'We produce top-notch software for our customers',
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

export const ProjectsCardsConfig: ProjectsConfigType[] = [
    {
        id: 'streamsnap',
        title: 'Streamsnap',
        subtitle: 'An usecase driven approach',
        icon: StreamSnap.src,
        previewDescription: 'Streamsnap is a cutting-edge multiplatform VOD streaming app with integrated analytics designed to provide a data-driven viewing experience across multiple devices.',
        htmlField: {
            __html: 'During my time at the faculty, I had the opportunity to delve into a wide range of ' +
                'courses across various disciplines. <div>&nbsp;</div> In the field of Mathematics, I took courses such as Linear ' +
                'Algebra and Analytical Geometry, Mathematical Analysis (Differential Calculus), Mathematical ' +
                'Analysis (Integral Calculus and Differential Equations), Special Mathematics in Engineering, and ' +
                'Numerical Calculus. These courses played a fundamental role in shaping my understanding of complex ' +
                'problems and honing my analytical skills, both of which are important in programming and systems theory.\n' +
                '<div>&nbsp;</div>In Systems Engineering, I gained valuable insights into the inner workings of modern systems and ' +
                'learned efficient methods for their analysis and control. Process Modeling allowed me to ' +
                'mathematically model mechanical and electrical systems, providing a solid foundation for ' +
                'understanding their behavior. The Signals and Systems course equipped me with the ability ' +
                'to comprehend both discrete and continuous signals, enabling me to analyze and recognize ' +
                'patterns effectively. This course also delved into advanced topics like image processing and ' +
                'mathematical concepts like the Fourier transformation for modeling. Systems Theory provided a ' +
                'comprehensive understanding of how systems behave in diverse environments, offering insights into ' +
                'analysis, behavior prediction, and methods for understanding complex systems. Systems Identification, ' +
                'on the other hand, focused on pattern recognition and the ability to identify models for specific ' +
                'systems based on input-output data. I acquired proficiency in various identification methods, ' +
                'from parametrical to non-parametrical, and gained skills in evaluating model accuracy. Lastly, ' +
                'Automatic Control Engineering involved analyzing systems with predefined performance criteria ' +
                'and implementing control strategies to enhance system performance.\n' +
                '<div>&nbsp;</div>In Electronics & Engineering, I explored hardware design, hardware analysis, ' +
                'firmware development, and data transmission, broadening my knowledge of electronics and embedded systems.\n' +
                '<div>&nbsp;</div>In the realm of Software Engineering, my coursework covered a diverse array of topics. I delved ' +
                'into the intricacies of the Linux Operating System, gained proficiency in programming algorithms, ' +
                'and developed a deep understanding of Object-Oriented Programming and Design. I also delved into ' +
                'threads management and concurrent programming, explored SQL-based databases, and honed my skills ' +
                'in web backend and frontend development. Furthermore, I gained experience in assembly programming ' +
                'and learned to build graphical models using Lisp and functional programming.\n' +
                'In summary, my educational journey at the faculty provided me with a well-rounded knowledge base ' +
                'that spans mathematics, systems engineering, electronics, and software engineering. These courses' +
                ' not only enriched my technical expertise but also fostered critical thinking and problem-solving ' +
                'abilities, preparing me for a wide range of challenges and opportunities in the field of engineering ' +
                'and technology.',
        },
        isDetailPageEnabled: false,
    },
    {
        id: 'cruze',
        title: 'Cruze',
        subtitle: 'An usecase driven approach',
        icon: Cruze.src,
        previewDescription: 'Cruze revolutionizes commuting with its mobile carpooling app specially tailored for businesses and institutions fostering a sense for efficient and sustainable transportation.',
        htmlField: {
            __html: 'During my time at the faculty, I had the opportunity to delve into a wide range of ' +
                'courses across various disciplines. <div>&nbsp;</div> In the field of Mathematics, I took courses such as Linear ' +
                'Algebra and Analytical Geometry, Mathematical Analysis (Differential Calculus), Mathematical ' +
                'Analysis (Integral Calculus and Differential Equations), Special Mathematics in Engineering, and ' +
                'Numerical Calculus. These courses played a fundamental role in shaping my understanding of complex ' +
                'problems and honing my analytical skills, both of which are important in programming and systems theory.\n' +
                '<div>&nbsp;</div>In Systems Engineering, I gained valuable insights into the inner workings of modern systems and ' +
                'learned efficient methods for their analysis and control. Process Modeling allowed me to ' +
                'mathematically model mechanical and electrical systems, providing a solid foundation for ' +
                'understanding their behavior. The Signals and Systems course equipped me with the ability ' +
                'to comprehend both discrete and continuous signals, enabling me to analyze and recognize ' +
                'patterns effectively. This course also delved into advanced topics like image processing and ' +
                'mathematical concepts like the Fourier transformation for modeling. Systems Theory provided a ' +
                'comprehensive understanding of how systems behave in diverse environments, offering insights into ' +
                'analysis, behavior prediction, and methods for understanding complex systems. Systems Identification, ' +
                'on the other hand, focused on pattern recognition and the ability to identify models for specific ' +
                'systems based on input-output data. I acquired proficiency in various identification methods, ' +
                'from parametrical to non-parametrical, and gained skills in evaluating model accuracy. Lastly, ' +
                'Automatic Control Engineering involved analyzing systems with predefined performance criteria ' +
                'and implementing control strategies to enhance system performance.\n' +
                '<div>&nbsp;</div>In Electronics & Engineering, I explored hardware design, hardware analysis, ' +
                'firmware development, and data transmission, broadening my knowledge of electronics and embedded systems.\n' +
                '<div>&nbsp;</div>In the realm of Software Engineering, my coursework covered a diverse array of topics. I delved ' +
                'into the intricacies of the Linux Operating System, gained proficiency in programming algorithms, ' +
                'and developed a deep understanding of Object-Oriented Programming and Design. I also delved into ' +
                'threads management and concurrent programming, explored SQL-based databases, and honed my skills ' +
                'in web backend and frontend development. Furthermore, I gained experience in assembly programming ' +
                'and learned to build graphical models using Lisp and functional programming.\n' +
                'In summary, my educational journey at the faculty provided me with a well-rounded knowledge base ' +
                'that spans mathematics, systems engineering, electronics, and software engineering. These courses' +
                ' not only enriched my technical expertise but also fostered critical thinking and problem-solving ' +
                'abilities, preparing me for a wide range of challenges and opportunities in the field of engineering ' +
                'and technology.',
        },
        isDetailPageEnabled: false,
    },
    {
        id: 'car-damage-detector',
        title: 'CaRepair',
        subtitle: 'An usecase driven approach',
        icon: CaRepair.src,
        previewDescription: 'Introducing a smart classifier engineered to accurately assess the accident-indused vehicle damage, bringing precision to the evaluation process, streamlining the repair workflow and enhance customer satisfaction.',
        htmlField: {
            __html: 'During my time at the faculty, I had the opportunity to delve into a wide range of ' +
                'courses across various disciplines. <div>&nbsp;</div> In the field of Mathematics, I took courses such as Linear ' +
                'Algebra and Analytical Geometry, Mathematical Analysis (Differential Calculus), Mathematical ' +
                'Analysis (Integral Calculus and Differential Equations), Special Mathematics in Engineering, and ' +
                'Numerical Calculus. These courses played a fundamental role in shaping my understanding of complex ' +
                'problems and honing my analytical skills, both of which are important in programming and systems theory.\n' +
                '<div>&nbsp;</div>In Systems Engineering, I gained valuable insights into the inner workings of modern systems and ' +
                'learned efficient methods for their analysis and control. Process Modeling allowed me to ' +
                'mathematically model mechanical and electrical systems, providing a solid foundation for ' +
                'understanding their behavior. The Signals and Systems course equipped me with the ability ' +
                'to comprehend both discrete and continuous signals, enabling me to analyze and recognize ' +
                'patterns effectively. This course also delved into advanced topics like image processing and ' +
                'mathematical concepts like the Fourier transformation for modeling. Systems Theory provided a ' +
                'comprehensive understanding of how systems behave in diverse environments, offering insights into ' +
                'analysis, behavior prediction, and methods for understanding complex systems. Systems Identification, ' +
                'on the other hand, focused on pattern recognition and the ability to identify models for specific ' +
                'systems based on input-output data. I acquired proficiency in various identification methods, ' +
                'from parametrical to non-parametrical, and gained skills in evaluating model accuracy. Lastly, ' +
                'Automatic Control Engineering involved analyzing systems with predefined performance criteria ' +
                'and implementing control strategies to enhance system performance.\n' +
                '<div>&nbsp;</div>In Electronics & Engineering, I explored hardware design, hardware analysis, ' +
                'firmware development, and data transmission, broadening my knowledge of electronics and embedded systems.\n' +
                '<div>&nbsp;</div>In the realm of Software Engineering, my coursework covered a diverse array of topics. I delved ' +
                'into the intricacies of the Linux Operating System, gained proficiency in programming algorithms, ' +
                'and developed a deep understanding of Object-Oriented Programming and Design. I also delved into ' +
                'threads management and concurrent programming, explored SQL-based databases, and honed my skills ' +
                'in web backend and frontend development. Furthermore, I gained experience in assembly programming ' +
                'and learned to build graphical models using Lisp and functional programming.\n' +
                'In summary, my educational journey at the faculty provided me with a well-rounded knowledge base ' +
                'that spans mathematics, systems engineering, electronics, and software engineering. These courses' +
                ' not only enriched my technical expertise but also fostered critical thinking and problem-solving ' +
                'abilities, preparing me for a wide range of challenges and opportunities in the field of engineering ' +
                'and technology.',
        },
        isDetailPageEnabled: false,
    },
    {
        id: 'adda',
        title: 'ADDA',
        subtitle: 'An usecase driven approach',
        icon: Adda.src,
        previewDescription: 'Unveiling ADDA (Automated defect detection analyser) where the convergence of machine learning and neural networks meet, paving the way for unparalleled precision in quality control processes.',
        htmlField: {
            __html: 'During my time at the faculty, I had the opportunity to delve into a wide range of ' +
                'courses across various disciplines. <div>&nbsp;</div> In the field of Mathematics, I took courses such as Linear ' +
                'Algebra and Analytical Geometry, Mathematical Analysis (Differential Calculus), Mathematical ' +
                'Analysis (Integral Calculus and Differential Equations), Special Mathematics in Engineering, and ' +
                'Numerical Calculus. These courses played a fundamental role in shaping my understanding of complex ' +
                'problems and honing my analytical skills, both of which are important in programming and systems theory.\n' +
                '<div>&nbsp;</div>In Systems Engineering, I gained valuable insights into the inner workings of modern systems and ' +
                'learned efficient methods for their analysis and control. Process Modeling allowed me to ' +
                'mathematically model mechanical and electrical systems, providing a solid foundation for ' +
                'understanding their behavior. The Signals and Systems course equipped me with the ability ' +
                'to comprehend both discrete and continuous signals, enabling me to analyze and recognize ' +
                'patterns effectively. This course also delved into advanced topics like image processing and ' +
                'mathematical concepts like the Fourier transformation for modeling. Systems Theory provided a ' +
                'comprehensive understanding of how systems behave in diverse environments, offering insights into ' +
                'analysis, behavior prediction, and methods for understanding complex systems. Systems Identification, ' +
                'on the other hand, focused on pattern recognition and the ability to identify models for specific ' +
                'systems based on input-output data. I acquired proficiency in various identification methods, ' +
                'from parametrical to non-parametrical, and gained skills in evaluating model accuracy. Lastly, ' +
                'Automatic Control Engineering involved analyzing systems with predefined performance criteria ' +
                'and implementing control strategies to enhance system performance.\n' +
                '<div>&nbsp;</div>In Electronics & Engineering, I explored hardware design, hardware analysis, ' +
                'firmware development, and data transmission, broadening my knowledge of electronics and embedded systems.\n' +
                '<div>&nbsp;</div>In the realm of Software Engineering, my coursework covered a diverse array of topics. I delved ' +
                'into the intricacies of the Linux Operating System, gained proficiency in programming algorithms, ' +
                'and developed a deep understanding of Object-Oriented Programming and Design. I also delved into ' +
                'threads management and concurrent programming, explored SQL-based databases, and honed my skills ' +
                'in web backend and frontend development. Furthermore, I gained experience in assembly programming ' +
                'and learned to build graphical models using Lisp and functional programming.\n' +
                'In summary, my educational journey at the faculty provided me with a well-rounded knowledge base ' +
                'that spans mathematics, systems engineering, electronics, and software engineering. These courses' +
                ' not only enriched my technical expertise but also fostered critical thinking and problem-solving ' +
                'abilities, preparing me for a wide range of challenges and opportunities in the field of engineering ' +
                'and technology.',
        },
        isDetailPageEnabled: false,
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
    metadataMoto: 'Architecting new digital horizons',
    metadataTitle: 'Have questions?',
    metadataText: 'skyeex-org@gmail.com',
    websiteUrl: 'https://skyeex-org.github.io/'
};

export const ProjectsCardsPreviewConfig = ProjectsCardsConfig.slice(0, 3);
export const formSubmitCodeUrl = 'https://formsubmit.co/3429fe035dc96d7c043c7fd6bf477a8c';