import StreamSnap from "@components/assets/projects/streamsnap.jpg";
import Cruze from "@components/assets/projects/cruze.jpg";
import CaRepair from "@components/assets/projects/caRepair.jpeg";
import Adda from "@components/assets/projects/adda.jpg";
import MedCity from "@components/assets/projects/medCity.jpg";

export const ProjectsConfig: ProjectsConfigType[] = [
    {
        id: 'cruze',
        title: 'Cruze',
        subtitle: 'Mobile corporate carpooling application',
        icon: Cruze.src,
        previewDescription: 'Cruze revolutionizes commuting with its mobile carpooling app specially tailored for businesses and institutions fostering a sense for efficient and sustainable transportation.',
        htmlField: {
            __html: 'Unlock a new era of workplace connectivity with this innovative platform designed to foster camaraderie, cut costs and save time. ' +
            'Say goodbye to the hassle of solo rides and hello to a greener, more efficient way of traveling.' +
            '<div>&nbsp;</div>' +
            '<span style="font-size: 1.8rem">Notable Features:</span>' +
            '<div>&nbsp;</div>' +
            '<li><b>Simple & intuitive interface</b> - Navigate the app effortlessly with its user-friendly design, making carpooling a breeze.</li>' +
            '<li><b>Join or create rides</b> - Easily locate and connect with colleagues traveling on similar routes or take control and set your own route. Switch between being a driver and a passenger, providing flexibility for all commuting needs.</li>' +
            '<li><b>Flexible pick-up & drop-off options</b> - Customize your commuting experience by setting your preferred points – whether it is your starting point, final destination or somewhere along the route.</li>' +
            '<li><b>Google & Waze integration</b> - Access places of reference or real-time traffic updates and optimized routes for seamless travel to your destination.</li>' +
            '<li><b>Reward system</b> - Earn rewards based on participation, encouraging sustainable transportation choices and fostering community engagement.</li>' +
            '<li><b>Personalized profile settings</b> - Easily manage your settings, update your information, and tailor your experience to suit your individual needs.</li>' +
            '<div>&nbsp;</div>' +
            '<span style="font-size: 1.8rem">Benefits:</span>' +
            '<div>&nbsp;</div>' +
            '<li><b>Convenience</b> - Save time and hassle by finding rides with coworkers, reducing the stress of commuting.</li>' +
            '<li><b>Cost reduction</b> - Lower parking expenses and decrease the need for company-provided transportation services.</li>' +
            '<li><b>Pollution reports</b> - As a company you benefit from CO2 reports at need about the environmental impact and carbon footprint.</li>' +
            '<li><b>Environmental impact</b> - Reduce carbon emissions by carpooling, contributing to a greener and more sustainable future.</li>' +
            '<li><b>Networking opportunities</b> - Build relationships and strengthen professional connections with colleagues during shared rides.</li>' +
            '<li><b>Gifts & rewards</b> - Drive or participate and get rewarded with gas vouchers or discounts at partner businesses.</li>' +
            '<div>&nbsp;</div>' +
            "Ready to transform your workplace commute? Elevate your team's travel experience with this carpooling mobile application – where connectivity, sustainability, and collaboration converge for a brighter, more efficient future! 🚀"
        },
        isDetailPageEnabled: true,
    },
    {
        id: 'car-damage-detector',
        title: 'CaRepair',
        subtitle: 'Machine Learning in Automotive Insurance Industry',
        icon: CaRepair.src,
        previewDescription: 'Our mobile application is specifically designed for the Automotive Insurance Industry ' +
            'to simplify the assessment of car damages. By allowing users to take photos or upload existing ' +
            'images of damaged cars, the Car Damage Classifier provides quick and accurate classifications of ' +
            'damage severity levels, streamlining the claim processing workflow for insurance agents and claim adjusters.',
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
            'and receive rapid results, our system streamlines the diagnostic process, facilitating early detection' +
            ' and treatment of brain tumors.',
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
        previewDescription: 'StreamSnap is a proof-of-concept (PoC) mobile streaming app designed to showcase the potential ' +
            'of a user-friendly streaming platform. The goal is to offer a sneak peek into the creation of an ' +
            'innovative, on-the-go mobile app for watching movies and TV shows. The app connects to two distinct ' +
            'backend systems service provider and an analytics platform with integrated machine learning. Additionally, ' +
            'there\'s a...',
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
                'StreamSnap offers a hassle-free solution to your streaming needs. Whether you\'re a casual viewer or a content curator, our user-friendly platform ensures that entertainment is always just a tap away.' +
                '<div>&nbsp;</div>'
        },
        isDetailPageEnabled: true,
    },
    {
        id: 'adda',
        title: 'ADDA',
        subtitle: 'Artificial vision for defect detection in the ceramic industry',
        icon: Adda.src,
        previewDescription: 'Unveiling ADDA (Automated defect detection analyser) where the convergence of machine learning and neural networks meet, paving the way for unparalleled precision in quality control processes.',
        htmlField: {
            __html: 'Revolutionize your quality control process with ADDA, a groundbreaking solution that harnesses the power of machine learning and neural networks to bring unparalleled accuracy to defect detection in dinnerware. ' +
            '<div>&nbsp;</div>' +
            '<span style="font-size: 1.8rem">Notable Features:</span>' +
            '<div>&nbsp;</div>' +
            '<li><b>Image pre-processing</b> - Efficiently pre-process 2D grayscale images to extract and isolate object borders, ensuring accurate defect analysis.</li>' +
            '<li><b>Defect detection</b> - Utilize advanced machine learning algorithms to analyze extracted borders and identify any defects present, enhancing quality control processes.</li>' +
            '<li><b>Adaptability</b> - Easily handle both circular and non-circular objects commonly found in the dinnerware industry, providing versatile defect detection capabilities.</li>' +
            '<li><b>Integration capabilities</b> - Integrate with existing production workflows and systems, minimizing disruption and maximizing efficiency.</li>' +
            '<li><b>Consistent quality</b> - Ensure consistent quality standards across production batches by leveraging automated defect detection, mitigating variations in inspection outcomes due to human error.</li>' +
            '<div>&nbsp;</div>' +
            '<span style="font-size: 1.8rem">Benefits:</span>' +
            '<div>&nbsp;</div>' +
            '<li><b>Enhanced quality control:</b> - Improve the accuracy and effectiveness of quality control processes by automating defect detection on object borders, reducing the likelihood of faulty products reaching consumers.</li>' +
            '<li><b>Increased efficiency</b> - Streamline production workflows by automating defect analysis, allowing for quicker identification and resolution of issues without compromising throughput.</li>' +
            '<li><b>Cost savings</b> - Minimize the need for manual inspection and rework by detecting defects early in the production process, resulting in reduced waste and improved resource utilization.</li>' +
            '<li><b>Market competitiveness</b> - Maintain a competitive edge in the market by delivering high-quality products that meet or exceed customer expectations, enhancing brand reputation and customer satisfaction.</li>' +
            '<li><b>Data-driven insights</b> - Gain valuable insights into production quality and defect trends through detailed analysis of defect data, informing continuous improvement efforts and decision-making.</li>' +
            '<li><b>ROI maximization</b> - Achieve a strong return on investment by leveraging automated defect detection to reduce costs, improve product quality, and enhance overall operational performance.</li>' +
            '<div>&nbsp;</div>' +
            'Experience the future of defect detection with ADDA – where machine learning, neural networks, and advanced imaging converge to elevate your quality control standards to unprecedented heights! 🌟'
        },
        isDetailPageEnabled: true,
    },
];

export const ProjectsCardsPreviewConfig = ProjectsConfig.slice(0, 3);