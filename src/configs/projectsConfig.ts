import StreamSnap from "@components/assets/projects/streamsnap.jpg";
import Cruze from "@components/assets/projects/cruze.jpg";
import CaRepair from "@components/assets/projects/caRepair.jpeg";
import Adda from "@components/assets/projects/adda.jpg";
import MedCity from "@components/assets/projects/medCity.jpg";

export const ProjectsConfig: ProjectsConfigType[] = [
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
        subtitle: 'Machine Learning in Automotive Insurance Industry',
        icon: CaRepair.src,
        previewDescription: 'Our mobile application is specifically designed for the Automotive Insurance Industry ' +
            'to simplify the assessment of car damages. By allowing users to take photos or upload existing ' +
            'images of damaged cars...',
        htmlField: {
            __html: 'Our mobile application is specifically designed for the Automotive Insurance Industry to simplify the assessment of car damages. By allowing users to take photos or upload existing images of damaged cars, the Car Damage Classifier provides quick and accurate classifications of damage severity levels, streamlining the claim processing workflow for insurance agents and claim adjusters.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Notable Features:</span>' +
                '<div>&nbsp;</div>' +
                '<li><b>Advanced Image Recognition</b> - The Car Damage Classifier utilizes advanced image recognition technology to analyze images of damaged cars and classify the severity of the damages.</li>' +
                '<li><b>Simple Interface</b> - Our user-friendly interface makes it easy for insurance agents and claim adjusters to upload images and receive detailed damage classifications.</li>' +
                '<li><b>Three Severity Levels</b> -  Damages are categorized into three main severity levels: Minor Damage, Moderate Damage, and Severe Damage, providing clear and understandable classifications.</li>' +
                '<li><b>Objective Assessments</b> - By automating the assessment process, the Car Damage Classifier ensures consistent and objective evaluations, reducing errors and discrepancies in claim settlements.</li>' +
                '<li><b>Efficiency and Cost-Effectiveness</b> - With streamlined claim processing and accurate damage assessments, insurance companies can save time and resources, leading to cost savings and improved efficiency.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Benefits:</span>' +
                '<div>&nbsp;</div>' +
                '<li><b>Time Savings</b> - Eliminate the need for manual assessment processes, allowing insurance agents to process claims more quickly.</li>' +
                '<li><b>Accuracy</b> - Reduce errors and inconsistencies in claim settlements with objective damage assessments.</li>' +
                '<li><b>Transparency</b> - Provide transparent classifications of damages, fostering trust between insurance companies and policyholders.</li>' +
                '<li><b>Cost-Effectiveness</b> - Optimize repair and replacement decisions, minimizing unnecessary costs for insurance companies and policyholders alike.</li>' +
                '<div>&nbsp;</div>' +
                'The Car Damage Classifier is a valuable tool for the Automotive Insurance Industry, offering a streamlined and efficient way to assess car damages. With its advanced technology and user-friendly interface, our application simplifies the claim processing workflow, improves accuracy, and ultimately benefits insurance companies, agents, and policyholders..' +
                '<div>&nbsp;</div>'
        },
        isDetailPageEnabled: true,
    },
    {
        id: 'brain-tumor-detector',
        title: 'MedCity',
        subtitle: 'Brain Tumor Analysis in Medical Industry',
        icon: MedCity.src,
        previewDescription: 'Our web-based application is a breakthrough in the medical field, designed to aid doctors in the ' +
                'detection of glioma, meningioma, and pituitary tumors. By allowing doctors to upload X-ray images ' +
                'and receive rapid results...',
        htmlField: {
            __html: 'Our web-based application is a breakthrough in the medical field, designed to aid doctors in the detection of glioma, meningioma, and pituitary tumors. By allowing doctors to upload X-ray images and receive rapid results, our system streamlines the diagnostic process, facilitating early detection and treatment of brain tumors.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Notable Features:</span>' +
                '<div>&nbsp;</div>' +
                '<li><b>Web-Based Accessibility</b> - The Brain Tumor Detection System is accessible via a web browser, providing doctors with the flexibility to upload X-ray images from any internet-connected device.</li>' +
                '<li><b>Advanced Image Analysis</b> - Leveraging state-of-the-art image processing algorithms, our system analyzes uploaded X-ray images to identify and classify different types of brain tumors, including glioma, meningioma, and pituitary tumors.</li>' +
                '<li><b>User-Friendly Interface</b> - With an intuitive and easy-to-navigate interface, doctors can quickly upload X-ray images and receive instant results, enhancing the efficiency of the diagnostic process.</li>' +
                '<li><b>Multi-Tumor Detection</b> - Our system is capable of detecting multiple types of brain tumors, allowing doctors to identify and differentiate between glioma, meningioma, and pituitary tumors with high accuracy.</li>' +
                '<li><b>Quick Results</b> - By automating the tumor detection process, our system provides rapid results, enabling doctors to make timely decisions regarding patient care and treatment plans.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Benefits:</span>' +
                '<div>&nbsp;</div>' +
                '<li><b>Early Detection</b> - The Brain Tumor Detection System facilitates early detection of brain tumors, enabling doctors to initiate treatment promptly and improve patient outcomes.</li>' +
                '<li><b>Accurate Diagnosis</b> - With advanced image analysis algorithms, our system delivers accurate and reliable tumor classifications, reducing the risk of misdiagnosis and ensuring appropriate treatment strategies.</li>' +
                '<li><b>Time Savings</b> - By streamlining the diagnostic process, our system saves valuable time for doctors, allowing them to focus on patient care and treatment.</li>' +
                '<li><b>Improved Patient Care</b> - Timely and accurate tumor detection enhances patient care by enabling doctors to provide targeted treatments and interventions tailored to individual patient needs.</li>' +
                '<div>&nbsp;</div>' +
                'The Brain Tumor Detection System is a game-changer in the medical field, revolutionizing the way brain tumors are diagnosed and treated. With its web-based accessibility, advanced image analysis capabilities, and user-friendly interface, our system empowers doctors to detect and classify glioma, meningioma, and pituitary tumors with speed and accuracy. Thank you for considering the Brain Tumor Detection System for your medical diagnostic needs.' +
                '<div>&nbsp;</div>'
        },
        isDetailPageEnabled: true,
    },
    {
        id: 'streamsnap',
        title: 'Streamsnap',
        subtitle: 'Stream and VideoOnDemand mobile app',
        icon: StreamSnap.src,
        previewDescription: 'Streamsnap is a cutting-edge multiplatform VOD streaming app with integrated analytics designed to provide a data-driven viewing experience across multiple devices.',
        htmlField: {
            __html: '<span style="font-size: 1.8rem">StreamSnap</span> is a proof-of-concept (PoC) mobile streaming ' +
                'app designed to showcase the potential of a user-friendly streaming platform. The goal is to offer ' +
                'a sneak peek into the creation of an innovative, on-the-go mobile app for watching movies and TV ' +
                'shows.' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Notable Features:</span>' +
                '<div>&nbsp;</div>' +
                '<li><b>Seamless Integration</b> - StreamSnap seamlessly connects to two distinct backend systems, ensuring a smooth and uninterrupted streaming experience. The app taps into an external service provider, powered by a Django-based REST API, to host images, movies, assets, and videos. Additionally, it interfaces with a robust analytics platform, equipped with integrated machine learning, to track user activity and offer personalized recommendations.</li>' +
                '<li><b>Personalized Recommendations</b> - Delve into a world of tailored entertainment with StreamSnap\'s advanced recommendation system. By analyzing user interactions and preferences, the platform delivers both general suggestions and genre-specific recommendations, enhancing the discovery of new content.</li>' +
                '<li><b>Customizable Configuration</b> - Empowering content managers with flexibility, StreamSnap allows for the customization of app configurations through the external service provider. From publishing and unpublishing collections of movies to automatically filtering content based on predefined conditions, the platform offers granular control and efficiency. It\'s vital for content managers to understand specific rules in the configuration process to optimize content delivery.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">Benefits:</span>' +
                '<div>&nbsp;</div>' +
                '<li><b>Enhanced User Experience</b> - StreamSnap prioritizes user experience above all else, offering a seamless interface and intuitive navigation. With personalized recommendations and customizable configurations, users can discover and enjoy content tailored to their preferences effortlessly.</li>' +
                '<li><b>Efficient Content Management</b> - Content managers benefit from StreamSnap\'s streamlined processes, enabling them to curate and deliver content with precision. The platform\'s configurable options empower managers to make data-driven decisions and optimize content distribution effectively.</li>' +
                '<li><b>Future-Proof Technology</b> - With a foundation built on cutting-edge technology and innovative solutions, StreamSnap sets the stage for the future of mobile streaming. By embracing machine learning and adaptable configurations, the platform remains agile and ready to evolve alongside shifting industry trends.</li>' +
                '<div>&nbsp;</div>' +
                '<span style="font-size: 1.8rem">StreamSnap</span> offers a hassle-free solution to your streaming needs. Whether you\'re a casual viewer or a content curator, our user-friendly platform ensures that entertainment is always just a tap away.' +
                '<div>&nbsp;</div>'
        },
        isDetailPageEnabled: true,
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

export const ProjectsCardsPreviewConfig = ProjectsConfig.slice(0, 3);