import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import AnimatedElement from '../AnimatedElement';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
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
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const GraceHopperCOEFull: React.FC = () => {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Carousel State
    const [currentSlide, setCurrentSlide] = useState(0);

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
        { company: 'Hexagon R&D', projects: 2, status: 'Completed', description: 'Real-time projects on cutting-edge technologies', image: 'https://logo.clearbit.com/hexagon.com' },
        { company: 'One Convergence', projects: 2, status: 'Completed', description: 'Cloud and networking solutions', image: 'https://logo.clearbit.com/oneconvergence.com' },
        { company: 'Qualizeal', projects: 2, status: 'Completed', description: 'Software testing and quality assurance', image: 'https://logo.clearbit.com/qualizeal.com' },
        { company: 'ForageAI', projects: 2, status: 'Completed', description: 'AI-driven solutions and analytics', image: 'https://logo.clearbit.com/forage.ai' },
        { company: 'BHEA-Simple Skills', projects: 1, status: 'Completed', description: 'CRM Implementation using SugarCRM', image: 'https://logo.clearbit.com/bhea.com' },
        { company: 'Smart Falcon LLP', projects: 1, status: 'Ongoing', description: 'SmartCard Operating System Development', image: 'https://logo.clearbit.com/smartfalcon.io' },
        { company: 'WeinfinityPlus', projects: 1, status: 'Ongoing', description: 'Full-Stack Development with Cloud', image: 'https://ui-avatars.com/api/?name=Weinfinity+Plus&background=0D8ABC&color=fff&size=200' },
        { company: 'Kokku Prophlet', projects: 1, status: 'Completed', description: 'Design thinking and innovation', image: 'https://ui-avatars.com/api/?name=Kokku+Prophlet&background=6366f1&color=fff&size=200' }
    ];

    // Featured Achievements for Carousel
    const featuredAchievements = [
        {
            title: 'Project Drona - Infosys Springboard',
            description: 'Faculty and students recognized at Project Drona, a collaborative initiative by HYSEA, TASK, and Infosys Springboard to empower the next generation of tech talent.',
            image: '/assets/grace-hopper/achievements/project-drona-ceremony.jpg'
        },
        {
            title: 'IEEE YESIST12 Best Project',
            description: 'Students won the "Best Project" award at the IEEE YESIST12 2024 Prelims for their innovative project "Medical Imaging in Generative Adversarial Networks (GANs)".',
            image: '/assets/grace-hopper/achievements/ieee-yesist12-winner.jpg'
        },
        {
            title: 'RBI90 Quiz State Finalists',
            description: 'BVRIT students reached the State Level Round of the prestigious RBI90 Quiz competition, showcasing their knowledge and competitive spirit.',
            image: '/assets/grace-hopper/achievements/rbi-quiz-team.jpg'
        },
        {
            title: 'Project Drona Kickoff',
            description: 'Prof. (Dr.) V. Balakista Reddy, Chairman TGCHE, and Pallavi, Project Drona 2021 alumna, at the kickoff meeting, highlighting the long-standing success of the program.',
            image: '/assets/grace-hopper/achievements/project-drona-kickoff.jpg'
        }
    ];

    // Auto-play effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredAchievements.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [featuredAchievements.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % featuredAchievements.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + featuredAchievements.length) % featuredAchievements.length);
    };

    // Student Achievements Data (Remaining items for Sticky Scroll)
    const studentAchievementsContent = [
        {
            title: 'Campus Collaborations',
            description: 'Students from CSE, ECE, BME, and CHE work together on interdisciplinary projects. Hands-on work in AI, robotics, and health builds essential teamwork and multi-disciplinary learning skills.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="Campus Collaborations"
                    />
                </div>
            ),
        },
        {
            title: 'TIHAN – IIT Hyderabad',
            description: 'Projects on drones, autonomous vehicles, and smart mobility. Students gain exposure to India\'s major Autonomous Navigation research hub.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="TIHAN IIT Hyderabad"
                    />
                </div>
            ),
        },
        {
            title: 'ICRISAT',
            description: 'Work in agriculture technology and climate research. Students build AI models for crop prediction and sustainability.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="ICRISAT"
                    />
                </div>
            ),
        },
        {
            title: 'IISc - NIAS Collaboration',
            description: 'Short-term research internships for students providing exposure to national-level science and technology projects. Learn advanced research skills and methods from leading researchers.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="IISc NIAS"
                    />
                </div>
            ),
        },
        {
            title: 'VNR VJIET Joint Projects',
            description: 'Students work together on technical projects and hackathons, encouraging teamwork and creative problem-solving. Builds confidence through inter-college collaboration.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="VNR VJIET"
                    />
                </div>
            ),
        },
        {
            title: 'IIITH Fellowship & Swecha Telangana',
            description: 'Opportunities to work with top researchers at IIITH. Students contribute to Telugu AI and language technology, developing strong AI/ML skills with cultural impact.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="IIITH Fellowship"
                    />
                </div>
            ),
        },
        {
            title: 'NIT Internships',
            description: 'Students selected for national-level internships at top NITs (Arunachal Pradesh & Suratkal). Work on advanced engineering and research projects. Internship results awaited – reflects strong student performance.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="NIT Internships"
                    />
                </div>
            ),
        },
        {
            title: 'DRDO Achievement',
            description: 'A student secured an exclusive DRDO internship/research opportunity. Exposure to defense technology and innovation labs – a prestigious national-level recognition for technical excellence.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="DRDO Achievement"
                    />
                </div>
            ),
        },
        {
            title: 'IIT Bombay - Bodhi Tree & FOSSEE',
            description: 'Easy digital learning modules to strengthen technical skills. Hands-on open-source projects that help students practice real coding and contribute to the open-source community.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="IIT Bombay"
                    />
                </div>
            ),
        },

        {
            title: 'TIHAN – IIT Hyderabad',
            description: 'Projects on drones, autonomous vehicles, and smart mobility. Students gain exposure to India\'s major Autonomous Navigation research hub.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="TIHAN IIT Hyderabad"
                    />
                </div>
            ),
        },
        {
            title: 'ICRISAT',
            description: 'Work in agriculture technology and climate research. Students build AI models for crop prediction and sustainability.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="ICRISAT"
                    />
                </div>
            ),
        },
        {
            title: 'IISc - NIAS Collaboration',
            description: 'Short-term research internships for students providing exposure to national-level science and technology projects. Learn advanced research skills and methods from leading researchers.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="IISc NIAS"
                    />
                </div>
            ),
        },
        {
            title: 'VNR VJIET Joint Projects',
            description: 'Students work together on technical projects and hackathons, encouraging teamwork and creative problem-solving. Builds confidence through inter-college collaboration.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="VNR VJIET"
                    />
                </div>
            ),
        },
        {
            title: 'IIITH Fellowship & Swecha Telangana',
            description: 'Opportunities to work with top researchers at IIITH. Students contribute to Telugu AI and language technology, developing strong AI/ML skills with cultural impact.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="IIITH Fellowship"
                    />
                </div>
            ),
        },
        {
            title: 'NIT Internships',
            description: 'Students selected for national-level internships at top NITs (Arunachal Pradesh & Suratkal). Work on advanced engineering and research projects. Internship results awaited – reflects strong student performance.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="NIT Internships"
                    />
                </div>
            ),
        },
        {
            title: 'DRDO Achievement',
            description: 'A student secured an exclusive DRDO internship/research opportunity. Exposure to defense technology and innovation labs – a prestigious national-level recognition for technical excellence.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="DRDO Achievement"
                    />
                </div>
            ),
        },
        {
            title: 'IIT Bombay - Bodhi Tree & FOSSEE',
            description: 'Easy digital learning modules to strengthen technical skills. Hands-on open-source projects that help students practice real coding and contribute to the open-source community.',
            content: (
                <div className="h-full w-full flex items-center justify-center text-white">
                    <img
                        src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80"
                        className="h-full w-full object-cover"
                        alt="IIT Bombay"
                    />
                </div>
            ),
        },
    ];

    // Certifications Data with Logos and Portal Links (10 Total)
    const certifications = [
        {
            provider: 'Google Cloud & AI',
            description: 'Cloud, AI, Cybersecurity, and Data Analytics certifications',
            logo: 'https://logo.clearbit.com/google.com',
            portalUrl: 'https://www.skills.google/'
        },
        {
            provider: 'IBM SkillsBuild',
            description: 'Cloud, AI, Cybersecurity, Analytics training with certificates',
            logo: 'https://siic.iscte-iul.pt/wp-content/uploads/2024/06/logo_IBM-SkillsBuild.jpg',
            portalUrl: 'https://sb-auth.skillsbuild.org/login?ngo-id=0302'
        },
        {
            provider: 'Wipro FutureSkills',
            description: 'Digital skills and communication training for industry readiness',
            logo: 'https://mms.businesswire.com/media/20190909005992/es/594194/23/Wiprologo1.jpg',
            portalUrl: 'https://www.futureskillsprime.in/'
        },
        {
            provider: 'NASSCOM FutureSkills',
            description: 'Industry-aligned certifications in emerging technologies',
            logo: 'https://www.onactuate.com/wp-content/uploads/nasscom-new-white.jpg',
            portalUrl: 'https://www.futureskillsprime.in/nasscom-certification/'
        },
        {
            provider: 'Infosys Springboard',
            description: 'Programming, digital skills, and life skills aligned with NEP',
            logo: 'https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/springboard-logo.png',
            portalUrl: 'https://infyspringboard.onwingspan.com/web/en/login'
        },
        {
            provider: 'Oracle Academy',
            description: 'Database, cloud, and software engineering fundamentals',
            logo: 'https://studij-racunarstva.com/wp-content/uploads/2020/06/oracle-academy_web-768x390.jpg',
            portalUrl: 'https://academy.oracle.com/en/resources-oracle-certifications.html'
        },
        {
            provider: 'Cisco Networking',
            description: 'Networking, Cybersecurity, IoT, and Programming certifications',
            logo: 'https://logo.clearbit.com/cisco.com',
            portalUrl: 'https://www.netacad.com/'
        },
        {
            provider: 'EPAM Systems',
            description: 'Coding bootcamps and software engineering upskilling programs',
            logo: 'https://d1.awsstatic.com/customer-references-case-studies-logos/EPAM_Logo%402x.33074e5d0ac218d7cd3e1d6f3720e0d8fe1909d2.png',
            portalUrl: 'https://certificates.epam.com/certificates/dc5d2c8c-b899-48e7-b9f5-a44a33aa5a6d'
        },
        {
            provider: 'Virtusa',
            description: 'Skill certifications through scholarship assessments',
            logo: 'https://mma.prnewswire.com/media/1956449/virtusa_logo_Logo.jpg',
            portalUrl: 'https://www.virtusa.com/careers'
        },
        {
            provider: 'Tech Mahindra',
            description: 'SMART Academy vocational training and skill development',
            logo: 'https://www.theclimatepledge.com/content/dam/amazonclimatepledge/signatory-logo/2022/Tech_Mahindra.png',
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

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

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
                    <motion.div
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ArrowDown className="w-8 h-8 text-white/70" />
                    </motion.div>

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
                <section className="bg-white py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                                What is Grace Hopper COE?
                            </h2>
                        </AnimatedElement>
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            <AnimatedElement animation="slide-right" delay={200}>
                                <div className="bg-teal-50 rounded-xl p-8 border-2 border-blue-100">
                                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                        The <strong>Grace Hopper Center of Excellence (COE)</strong> is a dedicated institutional initiative
                                        that bridges the gap between academic learning and real-world industry requirements.
                                    </p>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Named after <strong>Rear Admiral Grace Hopper</strong>, a pioneering computer scientist who revolutionized
                                        programming languages and computing, our center embodies her spirit of innovation and excellence.
                                    </p>
                                </div>
                            </AnimatedElement>
                            <AnimatedElement animation="slide-left" delay={300}>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Hub for Skill Development</h3>
                                            <p className="text-gray-700">Industry partnerships focused on hands-on learning and real-world projects</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                                            <Rocket className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Industry-Ready Graduates</h3>
                                            <p className="text-gray-700">Build technical expertise and soft skills for career success</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                                            <Handshake className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Partnerships</h3>
                                            <p className="text-gray-700">Leading tech companies providing real-world exposure</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                                            <Lightbulb className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation & Research</h3>
                                            <p className="text-gray-700">Platform for cutting-edge research and entrepreneurship</p>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </section >

                {/* Vision & Mission Section */}
                < section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20" >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Vision */}
                            <AnimatedElement animation="slide-right">
                                <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600 h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white mr-4">
                                            <Target className="w-7 h-7" />
                                        </div>
                                        <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                                            Our Vision
                                        </h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {['Empower students with industry-relevant skills and knowledge',
                                            'Create a bridge between academia and industry',
                                            'Foster innovation, research, and entrepreneurship',
                                            'Develop well-rounded graduates ready for global challenges'].map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </AnimatedElement>

                            {/* Mission */}
                            <AnimatedElement animation="slide-left" delay={200}>
                                <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600 h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white mr-4">
                                            <Lightbulb className="w-7 h-7" />
                                        </div>
                                        <h2 className="text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                                            Our Mission
                                        </h2>
                                    </div>
                                    <ul className="space-y-4">
                                        {['Provide hands-on industry project experience',
                                            'Facilitate skill development through certifications and workshops',
                                            'Encourage research, publications, and patent filings',
                                            'Support startup incubation and entrepreneurial ventures'].map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </section >

                {/* Faculty Team Section */}
                < section className="bg-white py-16 md:py-20" >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                                Grace Hopper COE - Faculty Team
                            </h2>
                        </AnimatedElement>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {facultyTeam.map((faculty, index) => (
                                <AnimatedElement key={index} animation="slide-up" delay={index * 50}>
                                    <div className="group bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 p-6 text-center h-full flex flex-col items-center justify-center">
                                        <div className="relative mb-4">
                                            <div className="absolute inset-0 bg-teal-100 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300 opacity-50"></div>
                                            <img
                                                src={faculty.image}
                                                alt={faculty.name}
                                                className="relative w-24 h-24 object-cover rounded-full border-4 border-white shadow-sm group-hover:border-blue-50 transition-colors duration-300"
                                            />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{faculty.name}</h3>
                                        <p className="text-blue-600 font-semibold mb-2 text-sm">{faculty.designation}</p>
                                    </div>
                                </AnimatedElement>
                            ))}
                        </div>
                    </div>
                </section >

                {/* Industry Project Engagements Section */}
                < section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20 overflow-hidden" >
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2
                                className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-4"
                                style={{ fontFamily: 'Georgia, serif' }}
                            >
                                Industry Project Engagements
                            </h2>
                            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                                Real-world industry collaborations providing hands-on experience and cutting-edge technology exposure
                            </p>
                        </AnimatedElement>

                        {/* Sliding Projects Carousel */}
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
        @media (max-width: 768px) {
          .project-card {
            width: 280px;
          }
        }
      `}</style>

                            <div className="projects-slider">
                                {/* Duplicate the array for seamless loop */}
                                {[...industryProjects, ...industryProjects].map((project, index) => (
                                    <div key={index} className="project-card">
                                        <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-blue-100">
                                            {/* Project Image/Logo with Overlay */}
                                            <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center p-4">
                                                <img
                                                    src={project.image}
                                                    alt={project.company}
                                                    className={`w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 ${project.company === 'SmartFalcon LLP' ? 'scale-125' : ''
                                                        }`}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                                {/* Overlay Content on Hover */}
                                                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="flex items-center text-white font-semibold">
                                                        <Briefcase className="w-5 h-5 mr-2" />
                                                        {project.projects} {project.projects === 1 ? 'Project' : 'Projects'}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Project Details */}
                                            <div className="p-6 bg-white relative z-10">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold text-gray-900">{project.company}</h3>
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'Completed'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-teal-100 text-blue-800'
                                                            }`}
                                                    >
                                                        {project.status}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed h-10 overflow-hidden">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section >

                {/* Student Achievements Section - Sticky Scroll Reveal */}
                <section className="bg-white py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimatedElement animation="slide-down">
                            <h2
                                className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-4"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                Student Achievements
                            </h2>
                            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                                Celebrating excellence in collaborations, internships, and research impact
                            </p>
                        </AnimatedElement>

                        {/* Featured Achievements Carousel */}
                        <div className="relative max-w-5xl mx-auto mb-16">
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                                {featuredAchievements.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${currentSlide === index
                                            ? 'opacity-100 translate-x-0'
                                            : currentSlide > index
                                                ? 'opacity-0 -translate-x-full'
                                                : 'opacity-0 translate-x-full'
                                            }`}
                                    >
                                        {/* Image Container */}
                                        <div className="relative h-full w-full">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                            {/* Content Overlay */}
                                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                                                <div className="max-w-3xl">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <Award className="w-5 h-5" />
                                                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                                                            Featured Achievement
                                                        </span>
                                                    </div>
                                                    <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20 border border-white/30"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20 border border-white/30"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>

                                {/* Indicators */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                                    {featuredAchievements.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`transition-all duration-300 rounded-full ${currentSlide === index
                                                ? 'bg-white w-10 h-3'
                                                : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>


                        <StickyScroll content={studentAchievementsContent} contentClassName="h-80 w-full md:w-[32rem]" />
                    </div>
                </section>

                {/* Student Certifications Section - REDESIGNED */}
                <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20">
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

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
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
                                            <div className="relative h-32 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6 overflow-hidden">
                                                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <img
                                                    src={cert.logo}
                                                    alt={`${cert.provider} logo`}
                                                    className={
                                                        "relative w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter group-hover:brightness-110" +
                                                        (isBigLogo ? " scale-110 md:scale-125" : "")
                                                    }
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
                < section className="bg-white py-16 md:py-20" >
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

                {/* Placement Performance Section */}
                < section className="bg-blue-900 text-white py-16 md:py-20 relative overflow-hidden" >
                    {/* Background Elements */}
                    < div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none" >
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-3xl"></div>
                    </div >

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <AnimatedElement animation="slide-down">
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                                Placement Performance
                            </h2>
                            <p className="text-center text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
                                Consistent track record of excellence in placements and career progression
                            </p>
                        </AnimatedElement>

                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* 2015-2019 Batch */}
                                <AnimatedElement animation="slide-right" className="h-full">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-full flex flex-col hover:bg-white/15 transition-all duration-300 shadow-xl">
                                        <div className="flex items-center gap-4 mb-8 border-b border-white/20 pb-6">
                                            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center text-blue-300">
                                                <GraduationCap className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">2015-2019 Batch</h3>
                                                <p className="text-blue-200 text-sm">CSE-D Section</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-8">
                                            <div>
                                                <div className="flex items-center gap-2 text-blue-200 mb-1 text-sm font-medium">
                                                    <Users className="w-4 h-4" /> Class Strength
                                                </div>
                                                <div className="text-3xl font-bold text-white">71</div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 text-green-300 mb-1 text-sm font-medium">
                                                    <CheckCircle2 className="w-4 h-4" /> Placed
                                                </div>
                                                <div className="text-3xl font-bold text-green-400">55</div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 text-yellow-300 mb-1 text-sm font-medium">
                                                    <Briefcase className="w-4 h-4" /> Job Offers
                                                </div>
                                                <div className="text-3xl font-bold text-yellow-400">57</div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 text-blue-200 mb-1 text-sm font-medium">
                                                    <TrendingUp className="w-4 h-4" /> Package (LPA)
                                                </div>
                                                <div className="text-2xl font-bold text-white">3.15 - 6.6</div>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-white/20">
                                            <p className="text-sm text-blue-200 mb-3 font-semibold uppercase tracking-wider">Top Recruiters</p>
                                            <div className="flex flex-wrap gap-2">
                                                {['OpenText', 'TCS-Ninja', 'Capgemini', 'IBM', 'Virtusa', 'Persistent'].map((company, idx) => (
                                                    <span key={idx} className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-xs font-medium transition-colors">
                                                        {company}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedElement>

                                {/* 2020-2024 Batch */}
                                <AnimatedElement animation="slide-left" delay={200} className="h-full">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-full flex flex-col hover:bg-white/15 transition-all duration-300 shadow-xl">
                                        <div className="flex items-center gap-4 mb-8 border-b border-white/20 pb-6">
                                            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-300">
                                                <Rocket className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white">2020-2024 Batch</h3>
                                                <p className="text-blue-200 text-sm">CSE-C Section</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-8">
                                            <div>
                                                <div className="flex items-center gap-2 text-blue-200 mb-1 text-sm font-medium">
                                                    <Users className="w-4 h-4" /> Class Strength
                                                </div>
                                                <div className="text-3xl font-bold text-white">67</div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 text-green-300 mb-1 text-sm font-medium">
                                                    <CheckCircle2 className="w-4 h-4" /> Placed
                                                </div>
                                                <div className="text-3xl font-bold text-green-400">59</div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 text-yellow-300 mb-1 text-sm font-medium">
                                                    <Briefcase className="w-4 h-4" /> Job Offers
                                                </div>
                                                <div className="text-3xl font-bold text-yellow-400">60</div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 text-blue-200 mb-1 text-sm font-medium">
                                                    <TrendingUp className="w-4 h-4" /> Package (LPA)
                                                </div>
                                                <div className="text-2xl font-bold text-white">2.5 - 19.56</div>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-white/20">
                                            <p className="text-sm text-blue-200 mb-3 font-semibold uppercase tracking-wider">Key Highlights</p>
                                            <ul className="space-y-2">
                                                {[
                                                    'International Placements (USA, Australia)',
                                                    'Higher Studies at IIT Tirupathi & BVRITN',
                                                    'Placements in TCS-Digital, Cognizant-GENC'
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-white/90">
                                                        <Award className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </AnimatedElement>
                            </div>
                        </div>
                    </div>
                </section >

                {/* Research & Publications Section */}
                <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Header */}
                        <AnimatedElement animation="slide-down">
                            <h2
                                className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-4"
                                style={{ fontFamily: "Georgia, serif" }}
                            >
                                Research & Publications
                            </h2>
                            <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                                Cutting-edge research projects and IEEE conference publications with significant citations
                            </p>
                        </AnimatedElement>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">

                            {/* ================= GOOGLE EARTH ENGINE ================= */}
                            <AnimatedElement animation="slide-right">
                                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full">

                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Globe className="w-8 h-8 text-blue-600" />
                                        Google Earth Engine & ML
                                    </h3>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {[
                                            {
                                                title: "Soil Carbon Assessment",
                                                subtitle: "Central India",
                                                team: "S. Sai Charan, T. Akshay Kumar",
                                                image:
                                                    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
                                            },
                                            {
                                                title: "Rubber Plantation Characterization",
                                                subtitle: "Kerala",
                                                team: "S. Sai Charan, T. Ramya",
                                                image:
                                                    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&q=80",
                                            },
                                            {
                                                title: "Rubber Characterization",
                                                subtitle: "North-East India",
                                                team: "Hari Sharan, Balasubramanyam",
                                                image:
                                                    "https://images.unsplash.com/photo-1596329636286-904c6c97a61e?w=800&q=80",
                                            },
                                            {
                                                title: "Mangrove Forest Dynamics",
                                                subtitle: "Gujarat",
                                                team: "T. Sruthi, Suhana Shaik",
                                                image:
                                                    "https://images.unsplash.com/photo-1519810755548-392116d9a642?w=800&q=80",
                                            },
                                        ].map((project, idx) => (
                                            <div
                                                key={idx}
                                                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />

                                                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                                                    <h4 className="font-bold text-sm mb-1">{project.title}</h4>
                                                    <p className="text-xs text-blue-200 mb-2">
                                                        {project.subtitle}
                                                    </p>
                                                    <p className="text-[11px] opacity-80">
                                                        Team: {project.team}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedElement>

                            {/* ================= ML HEALTHCARE ================= */}
                            <AnimatedElement animation="slide-left" delay={200}>
                                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 h-full">

                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Activity className="w-8 h-8 text-green-600" />
                                        ML Healthcare Projects
                                    </h3>

                                    <div className="space-y-4">
                                        {[
                                            {
                                                title: "Recti Cure – Cataract Detection",
                                                team: "Dr. L. Pallavi, A. Sai Charan & Team",
                                            },
                                            {
                                                title: "SoulEase – AI Emotion Detection",
                                                team: "Mrs. Ch. Sreedevi, B. Naga Reshmi & Team",
                                            },
                                            {
                                                title: "Brain Tumor Detection using GANs",
                                                team: "Dr. L. Pallavi, T. Ramya & Team",
                                            },
                                            {
                                                title: "FeminaInsight – PCOS Detection",
                                                team: "Mr. Jagadeesh Dandu, Kalamatha Eshwari & Team",
                                            },
                                            {
                                                title: "Mental Health Prediction using ML",
                                                team: "Dr. Ch. Madhu Babu, M. Nikhil & Team",
                                            },
                                        ].map((project, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-green-50 hover:border-green-300 transition-all"
                                            >
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                                                        {project.title}
                                                    </h4>
                                                    <p className="text-xs text-gray-600">{project.team}</p>
                                                </div>

                                                <span className="text-xs px-3 py-1.5 rounded-full bg-green-100 text-green-700 font-medium">
                                                    View Paper (Soon)
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </section>


                {/* Patents & Awards Section */}
                <section className="bg-white py-16 md:py-20">
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
                < section className="bg-gradient-to-br from-green-50 to-blue-50 py-16 md:py-20" >
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
                <section className="bg-white py-16 md:py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

                        <AnimatedElement animation="fade-in">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                                Join Grace Hopper Center of Excellence
                            </h2>

                            <p className="text-lg sm:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
                                Transform your academic journey into real-world success with industry partnerships,
                                cutting-edge research, and entrepreneurial opportunities.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">

                                {/* Contact Button */}
                                <a
                                    href="mailto:cse@bvrit.ac.in"
                                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg 
                     hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                >
                                    Contact Us
                                    <svg
                                        className="w-5 h-5 ml-2"
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
                                    className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-800 rounded-full font-semibold text-lg 
                     hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-300"
                                >
                                    Back to Home
                                    <svg
                                        className="w-5 h-5 ml-2"
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
