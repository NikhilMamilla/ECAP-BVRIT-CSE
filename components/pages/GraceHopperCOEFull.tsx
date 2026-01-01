import React, { useEffect, useState, useRef, useCallback } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AnimatedElement from '../AnimatedElement';
import {
    Target,
    Lightbulb,
    Rocket,
    Handshake,
    Users,
    Briefcase,
    CheckCircle2,
    FileText,
    Award,
    Globe,
    Code,
    TrendingUp,
    GraduationCap,
    Building2,
    Activity,
    ArrowDown,
    ChevronLeft,
    ChevronRight,
    BookOpen,
    ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

// Faculty Team Data
const facultyTeam = [
    { name: 'Dr. Ch. Madhu Babu', designation: 'Faculty Coordinator', image: '/COEFaculty/madhubabu.jpeg' },
    { name: 'Dr. Lanke Pallavi', designation: 'Faculty Member', image: '/COEFaculty/pallavi (2).jpeg' },
    { name: 'Mr. D. Jagadeesh', designation: 'Faculty Member', image: '/COEFaculty/jagadeesh.jpeg' },
    { name: 'Mr. P. Bhaskar Rao', designation: 'Faculty Member', image: '/COEFaculty/baskarao (2).jpeg' },
    { name: 'Mrs. Ch. Sreedevi', designation: 'Faculty Member', image: '/COEFaculty/sreedevi.jpeg' },
    { name: 'Mr. S. Srinuvasarao', designation: 'Faculty Member', image: '/COEFaculty/srinivas (2).jpeg' },
    { name: 'Mr. PSRB Shashank', designation: 'Faculty Member', image: '/faculty/shashank.webp' },
    { name: 'Mr. M. Manzoor Hussain', designation: 'Faculty Member', image: '/COEFaculty/manzoorhussian.jpeg' }
];

// Industry Partners Data
const industryProjects = [
    { company: 'Hexagon R&D', projects: 2, status: 'Completed', description: 'Real-time projects on new technologies', image: '/images/companies/hexagon.png' },
    { company: 'One Convergence', projects: 2, status: 'Completed', description: 'Cloud and networking solutions', image: '/images/companies/oneconvergence.png' },
    { company: 'Qualizeal', projects: 2, status: 'Completed', description: 'Software testing and quality assurance', image: '/images/companies/qualizeal.png' },
    { company: 'ForageAI', projects: 2, status: 'Completed', description: 'AI-driven solutions and analytics', image: '/images/companies/forage.png' },
    { company: 'BHEA-Simple Skills', projects: 1, status: 'Completed', description: 'CRM Implementation using SugarCRM', image: '/images/companies/bhea.png' },
    { company: 'Smart Falcon LLP', projects: 1, status: 'Ongoing', description: 'SmartCard Operating System Development', image: '/images/companies/smartfalcon.png' },
];

// Achievements & Collaborations Hub Data
const allAchievements = [
    {
        title: 'IEEE YESIST12 Best Project',
        description: 'Students won the "Best Project" award at IEEE YESIST12 2024 for "Medical Imaging in GANs".',
        image: '/assets/grace-hopper/achievements/ieee-yesist12-winner.jpg',
        span: 'large', // 2x2
        category: 'Award',
        icon: Award
    },
    {
        title: 'Project Drona - Infosys',
        description: 'Industry-aligned training empower students with cutting-edge tech skills at Infosys Springboard.',
        image: '/assets/grace-hopper/achievements/project-drona-ceremony.jpg',
        span: 'wide', // 2x1
        category: 'Recognition',
        icon: Rocket
    },
    {
        title: 'RBI90 Quiz State Finalists',
        description: 'Reached the State Level Round of the prestigious knowledge competition by RBI.',
        image: '/assets/grace-hopper/achievements/rbi-quiz-team.jpg',
        span: 'small', // 1x1
        category: 'Achievement',
        icon: Award
    },
    {
        title: 'Project Drona Kickoff',
        description: 'Long-standing success celebration with TGCHE Chairman and industry leaders.',
        image: '/assets/grace-hopper/achievements/project-drona-kickoff.jpg',
        span: 'small', // 1x1
        category: 'Event',
        icon: Handshake
    },
    {
        title: 'Campus Collaborations',
        description: 'Interdisciplinary projects between CSE, ECE, BME, and CHE batches.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        span: 'wide', // 2x1
        category: 'Collaboration',
        icon: Users
    },
    {
        title: 'TIHAN – IIT Hyderabad',
        description: 'Research projects on drones, autonomous vehicles, and smart mobility solutions.',
        image: 'https://i.ytimg.com/vi/VbkrfSDZ_yA/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLCrRW1ztsFvOBn1l8czbtSX9vjcrQ',
        span: 'small', // 1x1
        category: 'Research',
        icon: Rocket
    },
    {
        title: 'ICRISAT AI Models',
        description: 'Building sustainable AI models for crop prediction and climate research.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
        span: 'small', // 1x1
        category: 'Agri-Tech',
        icon: Lightbulb
    },
    {
        title: 'DRDO Excellence',
        description: 'Exclusive research opportunities and internships at defense labs.',
        image: 'https://defence.in/attachments/indian-humanoid-robot-webp.1215/',
        span: 'small', // 1x1
        category: 'Defense',
        icon: Target
    },
    {
        title: 'IIITH Fellowship',
        description: 'Engagement with Swecha Telangana for Telugu AI & language technology models.',
        image: 'https://mma.prnewswire.com/media/600789/IIIT_Hyderabad_Logo.jpg?p=publish',
        span: 'small', // 1x1
        category: 'Fellowship',
        icon: Globe
    },
    {
        title: 'IISc - NIAS Internships',
        description: 'Exposure to national-level science and technology projects through research internships.',
        image: 'https://icedge.iiita.ac.in/pictures/iisc-main-building-1.jpg',
        span: 'small', // 1x1
        category: 'Science',
        icon: FileText
    },
    {
        title: 'IIT Bombay FOSSEE',
        description: 'Open-source contributions and digital learning modules for technical mastery.',
        image: 'https://wallpaperbat.com/img/6904802-ieor-homepage-ieor-iit-bombay.jpg',
        span: 'small', // 1x1
        category: 'OpenSource',
        icon: Code
    }
];

// Research & Publications Data (11 IEEE Papers)
const researchPapers = [
    {
        title: "AuraCheck: An AI-Powered Platform for Real-Time Mental Health Insights and Support",
        authors: "Srinuvasarao Sanapala, M. Nikhil, P. Anusha, P. Rikwith Reddy, P. Akshay, L. Pallavi",
        link: "https://xplorestaging.ieee.org/document/11176774",
        FullPaper: "https://drive.google.com/file/d/1WePEx6iM7ezhhT9rudd9U2JBa-mmllMP/view?usp=sharing",
    },
    {
        title: "PARIJANA, an AI-based Humanoid agent for Enhancing Consumer Experience in Insurance Claims.",
        authors: "Ch. Madhu Babu, L. Pallavi, Mukundh Dubasi, Divyanshi Ontipuli, Kaki Vaishnavi, Kvvn Sai Bhargav",
        link: "https://ieeexplore.ieee.org/document/11176629",
        FullPaper: "https://drive.google.com/file/d/1tkR43Dm8Ifcj9xdY1n1CnAzX65YbBuuj/view?usp=drive_link",
    },
    {
        title: "YOLO-Powered Deep Learning Framework for Smart Drone Surveillance in Emergency Rescue Operation",
        authors: "R. Pitchai, T. Subba Reddy, Boddu Sanjana, Rishi Sri Dopathi, Dannaram Videeksha, Challagolla Sravya Chowdary",
        link: "https://ieeexplore.ieee.org/document/11089883",
        FullPaper: "https://drive.google.com/file/d/1Y4PXqVwY5FjHrtl18WOi190JTBtMzypt/view?usp=drivesdk",
    },
    {
        title: "CARE CONNECT: Revolutionizing Healthcare through AI",
        authors: "Ch. Madhu Babu, Nuthanakanti Bhaskar, Bondalakunta Bhavika, Amara Shivateja, Varun Annabeemoju, Swetha Chowdari",
        link: "https://ieeexplore.ieee.org/document/11176716",
        FullPaper: "https://drive.google.com/file/d/11PvgB_4AEnEnGXYpd5oHBT369_NPuCCV/view?usp=drivesdk",
    },
    {
        title: "A Text-Based AI Chatbot for Emotional Support in Student Mental Health",
        authors: "Satish Babu Thunuguntla, Poduri Sesha Sai Sathwik, Nannapaneni Lalitya, Penumatcha Jaya Surya, Kaluvala Sai Kiran, L. Pallavi",
        link: "https://ieeexplore.ieee.org/document/11089562",
        FullPaper: "https://drive.google.com/file/d/1fHmDJ3Te0B_Y2LvR2048itZwj4iF5oAq/view?usp=drivesdk",
    },
    {
        title: "BookXchange-An AI Driven Book Trade Hub",
        authors: "Jagadeesh Dandu, Gadila Sowmya, U. Eesha Priya, Gopireddy SreeMouna, Indukuri Tejasree",
        link: "https://xplorestaging.ieee.org/document/11176598",
        FullPaper: "https://drive.google.com/file/d/1ROPFfxXPLFvsEypEonDlUupyUSpelfNI/view?usp=drivesdk",
    },
    {
        title: "Enhanced ResNet Model for Classification of Liver Tumor in CT Scan",
        authors: "Md. Shabbeer, Somepalli Gopi Sai Mahesh, Tarapatla Sushanth, Vadagle Sunny Paul, Chevella Sreeja",
        link: "https://ieeexplore.ieee.org/document/11170777",
        FullPaper: "https://drive.google.com/file/d/1FIC8NWNw6p-6EIXEbSerTANA-vTO8NCC/view?usp=sharinga",
    },
    {
        title: "Personalized AI-Enhanced Alumni Association Platform",
        authors: "D. Jagadeesh, Beere Adbhutha, Buddineni Sai Sree, Beeti Yashwanth Raj, Bellamkonda Chandra Siddhartha, Pallavi Lanke",
        link: "https://ieeexplore.ieee.org/document/11176562",
        FullPaper: "https://drive.google.com/file/d/1njxEMAOLKt4UDEokQpg33fxTtLDRj0n_/view?usp=sharing",
    },
    {
        title: "A Novel Vision Transformer Approach with Adaptive Segmentation for Early Plant Disease Detection",
        authors: "D. Vivek, Vallepu Sai Soumya, Yadla Yogesh, Veruva Venkata Naga Vaishnavi, Madas Vivek",
        link: "https://ieeexplore.ieee.org/document/11140639",
        FullPaper: "https://drive.google.com/file/d/1HGMtJRqtTqa9fnUICqclXFxdnpmbRi0I/view?usp=drivesdk",
    },
    {
        title: "Building an Enhanced Task-Role Based Access Control (E-TRBAC) Model to Secure Cloud Services",
        authors: "Enukonda Siri Chandana, Ganguru Sandeep Kumar, Ediga Sai Murari Goud, Balaji K",
        link: "https://ieeexplore.ieee.org/document/11233364",
        FullPaper: "https://drive.google.com/file/d/1g6FgVBAqnFqSuQlh7ftyvK7sf0K68jA2/view?usp=drivesdk",
    },
    {
        title: "AI-Powered Promotional Content Generator : Banners for Targeted Campaigns",
        authors: "M. Manzoor Hussain, Boddupally Moksha, Gotte Kavyasri, Balakampet Sreeja, Vivekanand Aelgani",
        link: "https://ieeexplore.ieee.org/document/11176729",
        FullPaper: "https://drive.google.com/file/d/1s9I4UkwdsywaRaD2mm8YsauO1INbPcpT/view?usp=drive_link",
    },
    {
        title: "SoulEase : AI Enhanced Personal Journal - Text Based Emotion Detection",
        authors: "Naga Reshmi Bodepudi,Karthik Sabareesh Boddeti,Anshu Reddy Palle,Lavanya Bhukya,Sai Divya Tej Reddy Bolla,Ch. Sreedevi",
        link: "https://ieeexplore.ieee.org/document/10673121",
        FullPaper: "https://drive.google.com/file/d/1D3PYEZT6ORTm3jYpe9An82zGBVBCXMkI/view?usp=drive_link",
    },
];

// Certifications Data with Logos and Portal Links (10 Total)
const certifications = [
    {
        provider: 'Google Cloud & AI',
        description: 'Cloud, AI, Cybersecurity, and Data Analytics certifications',
        logo: '/images/companies/googlecloud.png',
        portalUrl: 'https://www.skills.google/'
    },
    {
        provider: 'IBM SkillsBuild',
        description: 'Cloud, AI, Cybersecurity, Analytics training with certificates',
        logo: '/images/companies/ibmskillbuild.webp',
        portalUrl: 'https://sb-auth.skillsbuild.org/login?ngo-id=0302'
    },
    {
        provider: 'Wipro FutureSkills',
        description: 'Digital skills and communication training for industry readiness',
        logo: '/images/companies/wipro.png',
        portalUrl: 'https://www.futureskillsprime.in/'
    },
    {
        provider: 'NASSCOM FutureSkills',
        description: 'Industry-aligned certifications in emerging technologies',
        logo: '/images/companies/nasscom.png',
        portalUrl: 'https://www.futureskillsprime.in/nasscom-certification/'
    },
    {
        provider: 'Infosys Springboard',
        description: 'Programming, digital skills, and life skills aligned with NEP',
        logo: '/images/companies/infosysspringboard.png',
        portalUrl: 'https://infyspringboard.onwingspan.com/web/en/login'
    },
    {
        provider: 'Oracle Academy',
        description: 'Database, cloud, and software engineering fundamentals',
        logo: '/images/companies/oracle.png',
        portalUrl: 'https://academy.oracle.com/en/resources-oracle-certifications.html'
    },
    {
        provider: 'Cisco Networking',
        description: 'Networking, Cybersecurity, IoT, and Programming certifications',
        logo: '/images/companies/Cisco_logo.png',
        portalUrl: 'https://www.netacad.com/'
    },
    {
        provider: 'EPAM Systems',
        description: 'Coding bootcamps and software engineering upskilling programs',
        logo: '/images/companies/Epam.jpg',
        portalUrl: 'https://certificates.epam.com/certificates/dc5d2c8c-b899-48e7-b9f5-a44a33aa5a6d'
    },
    {
        provider: 'Virtusa',
        description: 'Skill certifications through scholarship assessments',
        logo: '/images/companies/virtusa.png',
        portalUrl: 'https://www.virtusa.com/careers'
    },
    {
        provider: 'Tech Mahindra',
        description: 'SMART Academy vocational training and skill development',
        logo: '/images/companies/techmahindra.png',
        portalUrl: 'https://www.smart-academy.in/'
    }
];

//Mastery Areas Data
const masteryAreas = [
    { title: 'Idea / Open Source', description: 'Start with innovative ideas inspired by MLH Fellowship', icon: Lightbulb },
    { title: 'Web Development', description: 'Build complete websites using front-end and back-end tools', icon: Globe },
    { title: 'App Development', description: 'Create Android/iOS apps using Flutter and React Native', icon: Code },
    { title: 'YouTube Channel', description: 'Run educational channels and learn content creation', icon: FileText },
    { title: 'GitHub Contribution', description: 'Opensource collaboration and portfolio building', icon: Code },
    { title: 'Hackathons', description: 'Participate in SIH and AI competitions', icon: Award },
    { title: 'Research Papers', description: 'Publish in journals and conferences', icon: FileText },
    { title: 'LinkedIn Posting', description: 'Build professional profile and network', icon: Briefcase },
    { title: 'Patents', description: 'File patents for innovative ideas and prototypes', icon: Award },
    { title: 'Product Development', description: 'Turn ideas into tangible, deployable solutions', icon: Rocket },
    { title: 'Startup Formation', description: 'Launch startups with market impact and scalability', icon: TrendingUp },
    { title: 'Medium Writing', description: 'Write technical blogs for professional presence', icon: FileText }
];

// Custom Navigation Links for Grace Hopper Page
const graceHopperLinks = [
    { id: 'About', label: 'About' },
    { id: 'VisionMission', label: 'Vision & Mission' },
    { id: 'FacultyTeam', label: 'Faculty' },
    { id: 'IndustryProjects', label: 'Projects' },
    { id: 'StudentAchievements', label: 'Achievements' },
    { id: 'ResearchPublications', label: 'Research' },
    { id: 'Certifications', label: 'Certifications' },
    { id: 'MasteryAreas', label: 'Skill Portfolio' },
    { id: 'Patents', label: 'Patents' },
    { id: 'Startup', label: 'Startup' },
];

const GraceHopperCOEFull: React.FC = () => {
    // Scroll to top and mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    // Slider States
    const [researchIdx, setResearchIdx] = useState(0);
    const [projectIdx, setProjectIdx] = useState(0);

    // Refs for mobile sliders
    const researchScrollRef = useRef<HTMLDivElement>(null);
    const projectScrollRef = useRef<HTMLDivElement>(null);

    // Navigation Handlers
    const handleNextResearch = useCallback(() => {
        setResearchIdx(prev => (prev + 1) % researchPapers.length);
    }, [researchPapers.length]);

    const handlePrevResearch = useCallback(() => {
        setResearchIdx(prev => (prev - 1 + researchPapers.length) % researchPapers.length);
    }, [researchPapers.length]);

    const handleNextProject = useCallback(() => {
        setProjectIdx(prev => (prev + 1) % industryProjects.length);
    }, [industryProjects.length]);

    const handlePrevProject = useCallback(() => {
        setProjectIdx(prev => (prev - 1 + industryProjects.length) % industryProjects.length);
    }, [industryProjects.length]);

    // Auto-move for Research Slider on Mobile
    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            handleNextResearch();
        }, 5000);

        return () => clearInterval(interval);
    }, [isMobile, researchIdx, handleNextResearch]);


    return (
        <div className="min-h-screen flex flex-col">
            <Header customLinks={graceHopperLinks} />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-cyan-900/85 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-800/30 via-cyan-900/60 to-cyan-950/90"></div>
                    </div>

                    {/* Content */}
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <AnimatedElement animation="slide-down" duration={1000}>
                            <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl font-serif">
                                Grace Hopper <br />
                                <span className="text-cyan-200">Center of Excellence</span>
                            </h1>
                            <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                            <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                                Where Innovation Meets Opportunity
                            </p>
                        </AnimatedElement>
                    </div>

                    {/* Scroll Indicator */}
                    {/* <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-8 h-8 text-white/70" />
                    </motion.div> */}

                    {/* Bottom wave */}
                    <div className="absolute bottom-0 left-0 right-0 z-0">
                        <svg
                            viewBox="0 0 1440 120"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full"
                        >
                            <path
                                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                                fill="#ffffff"
                            />
                        </svg>
                    </div>
                </section>

                {/* About Section */}
                <section id="About" className="bg-white py-16 md:py-20 scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                                What is Grace Hopper COE?
                            </h2>
                        </AnimatedElement>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <AnimatedElement animation="slide-right" delay={200}>
                                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm h-full flex flex-col justify-center relative overflow-hidden group">
                                    {/* Subtle Background Portrait */}
                                    <div className="absolute right-0 bottom-0 w-64 h-64 -mr-8 -mb-8 opacity-[0.20] pointer-events-none transition-opacity duration-700 group-hover:opacity-[0.25]">
                                        <img
                                            src="https://cdn.pixabay.com/photo/2013/07/12/19/28/grace-hopper-154833_1280.png"
                                            alt="Grace Hopper Portrait"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="relative z-10">
                                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                            The <strong>Grace Hopper Center of Excellence (COE)</strong> is a dedicated institutional initiative
                                            that bridges the gap between academic learning and real-world industry requirements.
                                        </p>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            Named after <strong>Rear Admiral Grace Hopper</strong>, a pioneering computer scientist who revolutionized
                                            programming languages and computing, our center embodies her spirit of innovation and excellence.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement animation="slide-left" delay={300}>
                                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm h-full flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">Hub for Skill Development</h3>
                                            <p className="text-slate-600">Industry partnerships focused on hands-on learning and real-world projects</p>
                                        </div>
                                        <div className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">Industry-Ready Graduates</h3>
                                            <p className="text-slate-600">Build technical expertise and soft skills for career success</p>
                                        </div>
                                        <div className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">Strategic Partnerships</h3>
                                            <p className="text-slate-600">Leading tech companies providing real-world exposure</p>
                                        </div>
                                        <div className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                                            <h3 className="text-xl font-bold text-slate-900 mb-1">Innovation & Research</h3>
                                            <p className="text-slate-600">Platform for cutting-edge research and entrepreneurship</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </section >

                {/* Vision & Mission Section */}
                <section id="VisionMission" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20 scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Vision */}
                            <AnimatedElement animation="slide-right">
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 h-full">
                                    <div className="flex items-center mb-8 justify-center">
                                        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                            Our Vision
                                        </h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {['Empower students with industry-relevant skills and knowledge',
                                            'Create a bridge between academia and industry',
                                            'Foster innovation, research, and entrepreneurship',
                                            'Develop well-rounded graduates ready for global challenges'].map((item, idx) => (
                                                <li key={idx} className="flex items-start text-left">
                                                    <span className="text-blue-600 mr-3 text-lg font-bold">•</span>
                                                    <span className="text-gray-700 text-lg font-medium">{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </AnimatedElement>

                            {/* Mission */}
                            <AnimatedElement animation="slide-left" delay={200}>
                                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200 h-full">
                                    <div className="flex items-center mb-8 justify-center">
                                        <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                            Our Mission
                                        </h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {['Provide hands-on industry project experience',
                                            'Facilitate skill development through certifications and workshops',
                                            'Encourage research, publications, and patent filings',
                                            'Support startup incubation and entrepreneurial ventures'].map((item, idx) => (
                                                <li key={idx} className="flex items-start text-left">
                                                    <span className="text-teal-600 mr-3 text-lg font-bold">•</span>
                                                    <span className="text-gray-700 text-lg font-medium">{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </section >

                <section id="FacultyTeam" className="bg-white py-16 md:py-20 scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                                Grace Hopper COE - Faculty Team
                            </h2>
                        </AnimatedElement>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 max-w-7xl mx-auto">
                            {facultyTeam.map((faculty, index) => (
                                <AnimatedElement key={index} animation="slide-up" delay={index * 50}>
                                    <div className="group flex flex-col items-center">
                                        {/* Portrait Container - Circular Style */}
                                        <div className="relative w-full aspect-square max-w-[180px] rounded-full overflow-hidden mb-5 border-4 border-white shadow-xl shadow-gray-200 transition-all duration-500 group-hover:shadow-blue-100 group-hover:scale-105">
                                            <img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 ring-4 ring-blue-500/0 group-hover:ring-blue-500/10 transition-all duration-500 rounded-full"></div>
                                        </div>

                                        {/* Identity Block */}
                                        <div className="text-center px-1">
                                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 tracking-tight leading-tight mb-2 group-hover:text-blue-700 transition-colors">
                                                {faculty.name}
                                            </h4>
                                            <div className="w-5 h-0.5 bg-gray-200 mx-auto mb-2 group-hover:w-10 group-hover:bg-blue-500 transition-all duration-500"></div>
                                            <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.1em] leading-tight px-2">
                                                {faculty.designation}
                                            </p>
                                        </div>
                                    </div>
                                </AnimatedElement>
                            ))}
                        </div>
                    </div>
                </section >

                {/* Industry Project Engagements Section */}
                <section id="IndustryProjects" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24 overflow-hidden scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2
                                className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-4 tracking-tight"
                                style={{ fontFamily: 'Georgia, serif' }}
                            >
                                Industry Project Engagements
                            </h2>
                            <p className="text-center text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                                Real-world industry collaborations providing hands-on experience and cutting-edge technology exposure
                            </p>
                        </AnimatedElement>

                        {!isMobile ? (
                            /* Desktop: Auto-scrolling carousel */
                            <div className="relative">
                                <style>{`
                                    @keyframes scroll-projects {
                                        0% { transform: translateX(0); }
                                        100% { transform: translateX(-50%); }
                                    }
                                    .projects-slider {
                                        display: flex;
                                        animation: scroll-projects 40s linear infinite;
                                        width: fit-content;
                                    }
                                    .projects-slider:hover {
                                        animation-play-state: paused;
                                    }
                                    .project-card {
                                        flex: 0 0 auto;
                                        width: 350px;
                                        margin: 0 12px;
                                    }
                                `}</style>

                                <div className="projects-slider">
                                    {[...industryProjects, ...industryProjects].map((project, index) => (
                                        <div key={index} className="project-card">
                                            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-blue-100">
                                                <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center p-8">
                                                    <img
                                                        src={project.image}
                                                        alt={project.company}
                                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="flex items-center text-white font-semibold">
                                                            <Briefcase className="w-5 h-5 mr-2" />
                                                            {project.projects} {project.projects === 1 ? 'Project' : 'Projects'}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-6 bg-white relative z-10">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="text-xl font-bold text-gray-900">{project.company}</h3>
                                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-teal-100 text-blue-800'}`}>
                                                            {project.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 text-sm leading-relaxed h-12 overflow-hidden">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            /* Mobile: Interactive Slider */
                            <div className="relative max-w-sm mx-auto overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${projectIdx * 100}%)` }}
                                >
                                    {industryProjects.map((project, index) => (
                                        <div key={index} className="w-full flex-shrink-0 px-2">
                                            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
                                                <div className="h-40 bg-white flex items-center justify-center p-6 border-b border-gray-50">
                                                    <img
                                                        src={project.image}
                                                        alt={project.company}
                                                        className="h-full object-contain"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <h3 className="text-lg font-bold text-gray-900">{project.company}</h3>
                                                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                                            {project.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex items-center text-blue-600 font-bold text-sm">
                                                        <Activity className="w-4 h-4 mr-2" />
                                                        {project.projects} Active Industry Projects
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 flex justify-center gap-4">
                                    <button
                                        onClick={handlePrevProject}
                                        className="p-3 rounded-full bg-white border border-gray-200 shadow-lg text-gray-900 active:scale-95 transition-transform"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={handleNextProject}
                                        className="p-3 rounded-full bg-blue-600 text-white shadow-lg active:scale-95 transition-transform"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section >

                {/* Student Excellence Hub - Bento Grid Redesign */}
                <section id="StudentAchievements" className="bg-white py-16 md:py-24 scroll-mt-24 overflow-hidden">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2
                                className="text-4xl sm:text-6xl font-extrabold text-gray-900 text-center mb-4 tracking-tight"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                Student Excellence Hub
                            </h2>
                            <p className="text-center text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                                Showcasing prestigious awards, national-level collaborations, and research impact
                            </p>
                        </AnimatedElement>

                        <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-dense gap-x-6 gap-y-8 md:gap-y-6 auto-rows-auto md:auto-rows-[240px] max-w-7xl mx-auto">
                            {allAchievements.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <AnimatedElement
                                        key={index}
                                        animation="fade-in"
                                        delay={index * 100}
                                        className={`group relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${item.span === 'large' ? 'md:col-span-2 md:row-span-2 min-h-[500px]' :
                                            item.span === 'wide' ? 'md:col-span-2 md:row-span-1 min-h-[240px]' :
                                                'md:col-span-1 md:row-span-1 min-h-[240px]'
                                            }`}
                                    >
                                        {/* Background Image */}
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            {/* Gradient Overlays */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-3xl"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                                            <div className="flex items-center gap-2 mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="p-2 bg-blue-600/20 backdrop-blur-md rounded-lg text-blue-400 border border-blue-500/30">
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                                                    {item.category}
                                                </span>
                                            </div>

                                            <h3 className={`font-bold text-white mb-2 leading-tight transition-all duration-500 ${item.span === 'large' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                                                }`}>
                                                {item.title}
                                            </h3>

                                            <p className={`text-gray-300 line-clamp-2 leading-relaxed transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 ${item.span === 'large' ? 'text-sm md:text-base' : 'text-xs md:text-sm'
                                                }`}>
                                                {item.description}
                                            </p>

                                            {/* Decorative element for large card */}
                                            {item.span === 'large' && (
                                                <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                                    <Award className="w-16 h-16 text-white" strokeWidth={1} />
                                                </div>
                                            )}
                                        </div>
                                    </AnimatedElement>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Research Excellence & Publications Section */}
                <section id="ResearchPublications" className="bg-slate-50 py-16 md:py-24 scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2
                                className="text-4xl sm:text-6xl font-extrabold text-gray-900 text-center mb-4 tracking-tight"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                Research Excellence & Publications
                            </h2>
                            <p className="text-center text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
                                Showcasing scholarly impact and IEEE-published research contributions from students and faculty
                            </p>
                        </AnimatedElement>

                        {!isMobile ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                                {researchPapers.map((paper, index) => (
                                    <AnimatedElement
                                        key={index}
                                        animation="slide-up"
                                        delay={index * 50}
                                        className="h-full"
                                    >
                                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                                            {/* Abstract background icon */}
                                            <div className="absolute -right-6 -top-6 text-slate-50 group-hover:text-blue-50 transition-colors duration-500">
                                                <BookOpen className="w-32 h-32" strokeWidth={0.5} />
                                            </div>

                                            <div className="relative z-10 flex flex-col h-full">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                        <BookOpen className="w-6 h-6" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors duration-300">
                                                        {paper.title}
                                                    </h3>
                                                </div>

                                                <div className="mb-6">
                                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Authors</p>
                                                    <p className="text-slate-700 leading-relaxed italic">
                                                        {paper.authors}
                                                    </p>
                                                </div>

                                                <div className="mt-auto pt-6 flex flex-wrap gap-4 border-t border-slate-100">
                                                    <a
                                                        href={paper.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                                                    >
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        View on IEEE
                                                    </a>
                                                    <a
                                                        href={paper.FullPaper}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-5 py-2.5 bg-white border-2 border-slate-200 text-slate-700 rounded-full text-sm font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-300 shadow-sm"
                                                    >
                                                        <FileText className="w-4 h-4 mr-2" />
                                                        Full Paper PDF
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </AnimatedElement>
                                ))}
                            </div>
                        ) : (
                            /* MOBILE RESEARCH SLIDER */
                            <div className="overflow-hidden w-full px-2">
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${researchIdx * 100}%)` }}
                                >
                                    {researchPapers.map((paper, index) => (
                                        <div
                                            key={index}
                                            className="mobile-card w-full flex-shrink-0 px-2"
                                        >
                                            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left shadow-2xl relative overflow-hidden min-h-[480px] flex flex-col justify-between">
                                                {/* Decorative background circle */}
                                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50"></div>

                                                <div className="relative z-10">
                                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
                                                        <BookOpen className="w-5 h-5" />
                                                    </div>
                                                    <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                                                        {paper.title}
                                                    </h3>

                                                    <div className="space-y-2 mt-4">
                                                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Key Authors</p>
                                                        <p className="text-slate-600 text-sm italic leading-relaxed line-clamp-4">
                                                            {paper.authors}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="space-y-3 mt-8 relative z-10">
                                                    <a
                                                        href={paper.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center justify-center w-full py-4 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all"
                                                    >
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        View on IEEE Xplore
                                                    </a>

                                                    {paper.FullPaper && (
                                                        <a
                                                            href={paper.FullPaper}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="flex items-center justify-center w-full py-4 rounded-xl bg-slate-50 text-slate-700 text-sm font-bold border border-slate-200 active:scale-[0.98] transition-all"
                                                        >
                                                            <FileText className="w-4 h-4 mr-2" />
                                                            Full Paper PDF
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* MOBILE CONTROLS */}
                                <div className="mt-8 flex justify-center items-center gap-6">
                                    <button
                                        onClick={handlePrevResearch}
                                        className="w-12 h-12 rounded-full border border-blue-700 bg-blue-600 text-white flex items-center justify-center active:scale-95 transition-all shadow-xl"
                                        aria-label="Previous publication"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>

                                    <div className="flex gap-2">
                                        {researchPapers.map((_, i) => (
                                            <div
                                                key={i}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${i === researchIdx ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'}`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={handleNextResearch}
                                        className="w-12 h-12 rounded-full border border-blue-700 bg-blue-600 text-white flex items-center justify-center active:scale-95 transition-all shadow-xl shadow-blue-600/20"
                                        aria-label="Next publication"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>


                {/* Student Certifications Section - REDESIGNED */}
                <section id="Certifications" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20 scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2
                                className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-4"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                Student Certifications
                            </h2>
                            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                                Get certified by leading tech companies and boost your career opportunities
                            </p>
                        </AnimatedElement>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
                            {certifications.map((cert, index) => {
                                const highlightedProviders = [
                                    "IBM Skillbuild",
                                    "IBM SkillsBuild",
                                    "IBM",
                                    "Wipro",
                                    "NASSCOM",
                                    "Infosys Springboard",
                                    "Springboard",
                                    "Oracle Academy",
                                    "Virtusa",
                                    "Tech Mahindra",
                                    "TechMahindra",
                                ];

                                const isBigLogo = highlightedProviders.some((name) =>
                                    cert.provider.toLowerCase().includes(name.toLowerCase())
                                );

                                return (
                                    <AnimatedElement key={index} animation="slide-up" delay={index * 50}>
                                        <a
                                            href={cert.portalUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group block bg-white rounded-xl shadow-md overflow-hidden h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-400 cursor-pointer"
                                        >
                                            {/* Logo Container */}
                                            <div className="relative h-36 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-10 overflow-hidden">
                                                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <img
                                                    src={cert.logo}
                                                    alt={`${cert.provider} logo`}
                                                    className="relative w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter group-hover:brightness-110"
                                                    onError={(e) => {
                                                        // Fallback if logo fails to load
                                                        (e.target as HTMLImageElement).src =
                                                            "https://via.placeholder.com/200x80/4F46E5/FFFFFF?text=" +
                                                            encodeURIComponent(cert.provider.split(" ")[0]);
                                                    }}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="p-4 bg-white">
                                                <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                                    {cert.provider}
                                                </h3>
                                                <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                                                    {cert.description}
                                                </p>

                                                {/* Visit Portal Button */}
                                                <div className="flex items-center text-blue-600 text-xs font-semibold group-hover:text-blue-700">
                                                    <span>Visit Portal</span>
                                                    <svg
                                                        className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </AnimatedElement>
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/* Mastery Areas Section */}
                <section id="MasteryAreas" className="bg-white py-16 md:py-20 scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                                Mastery Areas & Skill Portfolio
                            </h2>
                        </AnimatedElement>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {masteryAreas.map((area, index) => (
                                <AnimatedElement key={index} animation="fade-in" delay={index * 50}>
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 h-full hover:bg-teal-50 hover:border-blue-200 transition-colors duration-300 text-center group">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-gray-600 mb-4 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                                            <area.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
                                        <p className="text-sm text-gray-600">{area.description}</p>
                                    </div>
                                </AnimatedElement>
                            ))}
                        </div>
                    </div>
                </section >

                {/* Patents & Awards Section */}
                <section id="Patents" className="bg-white py-16 md:py-20 scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Section Title */}
                        <AnimatedElement animation="slide-down">
                            <h2
                                className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                Patents & Awards
                            </h2>
                        </AnimatedElement>

                        {/* ===== 3 ITEMS IN A SINGLE ROW ===== */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                            {/* ================= PATENT 1 ================= */}
                            <AnimatedElement animation="slide-up">
                                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl p-6 border-2 border-blue-200 h-full">

                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Patent – 2024
                                        </h3>
                                    </div>

                                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                                        AI-Driven Multimodal Chatbot for Healthcare Accessibility
                                    </h4>

                                    <p className="text-xs text-gray-700 mb-1">
                                        <strong>Application No:</strong> 202441085902
                                    </p>
                                    <p className="text-xs text-gray-700 mb-1">
                                        <strong>Status:</strong> Published
                                    </p>
                                    <p className="text-xs text-gray-700 mb-1">
                                        <strong>Filed:</strong> 08/11/2024
                                    </p>
                                    <p className="text-xs text-gray-700 mb-1">
                                        <strong>Published:</strong> 22/11/2024
                                    </p>
                                    <p className="text-xs text-gray-700 mb-2">
                                        <strong>Applicant:</strong> B V Raju Institute of Technology
                                    </p>

                                    <p className="text-[11px] text-gray-500">
                                        <strong>Inventors:</strong> Lanke Pallavi, Bala Subramanyam Garimella,
                                        Hari Sharan Garlapati, Srivani Choul, Rajesh Chenkuri
                                    </p>
                                </div>
                            </AnimatedElement>

                            {/* ================= PATENT 2 ================= */}
                            <AnimatedElement animation="slide-up" delay={100}>
                                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl p-6 border-2 border-blue-200 h-full">

                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mr-3">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Patent – 2024
                                        </h3>
                                    </div>

                                    <h4 className="font-bold text-gray-900 mb-2 text-sm">
                                        SKILLIFY: Enhanced LMS Using Generative AI
                                    </h4>

                                    <p className="text-xs text-gray-700 mb-1">
                                        <strong>Application No:</strong> 202441087085
                                    </p>
                                    <p className="text-xs text-gray-700 mb-1">
                                        <strong>Status:</strong> Published
                                    </p>
                                    <p className="text-xs text-gray-700 mb-1">
                                        <strong>Filed:</strong> 12/11/2024
                                    </p>
                                    <p className="text-xs text-gray-700 mb-1">
                                        <strong>Published:</strong> 22/11/2024
                                    </p>
                                    <p className="text-xs text-gray-700 mb-2">
                                        <strong>Applicant:</strong> B V Raju Institute of Technology
                                    </p>

                                    <p className="text-[11px] text-gray-500">
                                        <strong>Inventors:</strong> Sreedevi Chikkudu, Dharya Jeera,
                                        Hrishikesh Gollapalli, Persis Soni, Dandla Vaishnavi
                                    </p>
                                </div>
                            </AnimatedElement>

                            {/* ================= AWARD ================= */}
                            <AnimatedElement animation="slide-up" delay={200}>
                                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-xl p-6 border-2 border-green-200 h-full">

                                    <div className="flex items-center mb-4">
                                        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white mr-3">
                                            <Award className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            IEEE YESIST12 – 2024
                                        </h3>
                                    </div>

                                    <div className="text-center mb-4">
                                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-sm mb-3">
                                            <Award className="w-4 h-4" /> BEST PROJECT
                                        </div>

                                        <h4 className="text-sm font-bold text-gray-900 mb-2">
                                            Medical Imaging Using GANs
                                        </h4>

                                        <p className="text-xs text-gray-600">
                                            RBI90 Quiz Competition – Winners
                                        </p>
                                    </div>

                                    <div className="text-xs text-gray-700">
                                        <p className="mb-1">
                                            <strong>Team:</strong> T. Ramya, S. Sai Charan,
                                            S. Amith, T. Akshay Kumar
                                        </p>
                                        <p className="mb-1">
                                            <strong>Guide:</strong> Lanke Pallavi
                                        </p>
                                        <p>
                                            <strong>Venue:</strong> NITTE Meenakshi Institute
                                            <br />
                                            <strong>Date:</strong> April 2024
                                        </p>
                                    </div>
                                </div>
                            </AnimatedElement>

                        </div>
                    </div>
                </section>

                {/* Startup Success Section */}
                <section id="Startup" className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-20 scroll-mt-24" >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                Startup Success Story
                            </h2>
                            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                                Real-world entrepreneurial impact from Grace Hopper COE students
                            </p>
                        </AnimatedElement>

                        <AnimatedElement animation="fade-in">
                            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-200">
                                <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Building2 className="w-8 h-8" />
                                        <h3 className="text-3xl font-bold">AGT Solutions</h3>
                                    </div>
                                    <p className="text-green-100">Akatsuki Growth Solution - Founded by Sai Bhargav, Grace Hopper COE Student</p>
                                </div>
                                <div className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-4">About the Startup</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                {[
                                                    'Specializes in digital solutions and software development',
                                                    'Innovative IT services for healthcare sector',
                                                    'Actively expanding professional network via LinkedIn'
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-4">Client Success</h4>
                                            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                                                <div className="mb-3">
                                                    <span className="text-sm text-gray-600">Client</span>
                                                    <p className="text-lg font-bold text-gray-900">Balaji Heart Center</p>
                                                </div>
                                                <div>
                                                    <span className="text-sm text-gray-600">Impact</span>
                                                    <p className="text-gray-700">Delivered comprehensive hospital management system</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>
                </section >

                {/* Call-to-Action Section */}
                <section id="Contact" className="bg-white py-16 md:py-20 scroll-mt-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                        <AnimatedElement animation="fade-in">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                                Join Grace Hopper Center of Excellence
                            </h2>

                            <p className="text-lg sm:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
                                Transform your academic journey into real-world success with industry partnerships,
                                cutting-edge research, and entrepreneurial opportunities.
                            </p>

                            <div className="flex flex-row gap-3 sm:gap-4 justify-center px-2">

                                {/* Contact Button */}
                                <a
                                    href="mailto:cbb@bvrit.ac.in"
                                    className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-full font-bold text-sm sm:text-lg flex-1 sm:flex-none
                     hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap"
                                >
                                    Contact Us
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </a>

                                {/* Back to Home Button */}
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 bg-gray-100 text-gray-800 rounded-full font-bold text-sm sm:text-lg flex-1 sm:flex-none
                     hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-300 whitespace-nowrap"
                                >
                                    Back to Home
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </a>

                            </div>
                        </AnimatedElement>

                    </div>
                </section>

            </main >

            <Footer />
        </div >
    );
};

export default GraceHopperCOEFull;
