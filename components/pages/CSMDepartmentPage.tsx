import React, { useEffect } from 'react';
import { AnimatedElement } from '../AnimatedElement';
import Header from '../Header';
import Footer from '../Footer';
import {
    GraduationCap,
    Users,
    BookOpen,
    FileText,
    CheckCircle,
    Briefcase,
    Target
} from 'lucide-react';

const CSMDepartmentPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&h=900&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-cyan-900/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-800/30 via-cyan-900/60 to-cyan-950/90"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <AnimatedElement animation="slide-down" duration={1000}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl font-serif">
                            Department of <br />
                            <span className="text-cyan-200">CSE (AI & ML)</span>
                        </h1>
                        <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                            Empowering Intelligent Systems for a Smarter Tomorrow
                        </p>
                    </AnimatedElement>
                </div>

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

            {/* Stats Section */}
            <section className="py-12 -mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { count: '1', label: 'Program Offered', icon: <GraduationCap className="w-8 h-8" /> },
                            { count: '10', label: 'Faculty Members', icon: <Users className="w-8 h-8" /> },
                            { count: '20+', label: 'Research Papers', icon: <FileText className="w-8 h-8" /> },
                        ].map((stat, index) => (
                            <AnimatedElement key={index} animation="slide-up" delay={index * 100}>
                                <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-300 text-center hover:-translate-y-2 transition-transform duration-300 group">
                                    <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.count}</div>
                                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Department */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-2/3">
                            <AnimatedElement animation="fade-in">
                                <div className="flex items-center mb-8">
                                    <div className="w-2 h-10 bg-blue-600 mr-4 rounded-full"></div>
                                    <h2 className="text-3xl font-bold text-gray-900">About the Department</h2>
                                </div>
                                <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
                                    <p>
                                        At B V Raju Institute of Technology, Narsapur, the New Age Programs have been started in Academic Year 2020-21, and B.Tech in CSE (Artificial Intelligence and Machine Learning) was launched with an Intake of 60, and subsequently, the intake is enhanced from 60 to 120 from Academic Year 2022-23 Onwards. The Department has State-of-the-Art Infrastructure and Computing Equipment Supported by High-Speed Internet and Wireless Networks.
                                    </p>
                                    <p>
                                        In B.Tech CSE (Artificial Intelligence and Machine Learning), Students Learn About Essential Concepts Such as Computational Thinking, Programming for Problem Solving using Python, Data Structures, Algorithms, Databases, Artificial Intelligence – Search Techniques and Knowledge Representation, Machine Learning, Deep Learning, and Natural Language Processing.
                                    </p>
                                    <p>
                                        Students will also obtain an In-Depth Knowledge of Artificial Intelligence and Machine Learning by Implementing Real-World Problems in a Wide Variety of Application Domains such as Cognitive Sciences, Computer Vision, Speech and Natural Language Processing, etc. Students will be experienced in Machine Learning, Computer Vision, Speech and Natural Language Processing, Data Analytics, and Generic AI Domain Verticals Under Which Various Professional Electives are Offered.
                                    </p>
                                </div>
                            </AnimatedElement>
                        </div>
                        <div className="lg:w-1/3">
                            <AnimatedElement animation="slide-left" delay={200}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                        Programs Offered
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="group p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors border border-blue-200">
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">B.Tech in CSE (AI & ML)</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-gray-600 text-sm font-medium">Annual Intake</span>
                                                <span className="text-2xl font-bold text-blue-600">180</span>
                                            </div>
                                        </div>
                                        <div className="group p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors border border-blue-200">
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">Minors in CSE (AI & ML)</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-gray-600 text-sm font-medium">Enrolled</span>
                                                <span className="text-2xl font-bold text-blue-600">33</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>

                {/* Domain Verticals Section - Centered Below About */}
                <div className="flex flex-col items-center mt-20">
                    <AnimatedElement animation="fade-in">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Domain Verticals</h2>
                        <img
                            src="/Highlights/domain.jpg"
                            alt="Domain Verticals for CSE AI ML"
                            className="rounded-xl shadow-lg border border-blue-100 max-w-full w-[600px] object-cover"
                            loading="lazy"
                        />
                    </AnimatedElement>
                </div>
            </section>

            {/* Why Study & Focus */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left: Why Study */}
                        <AnimatedElement animation="slide-right">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Study B.Tech in CSE (AI & ML)?</h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-justify">
                                <p>
                                    B.Tech in CSE (AI&ML) offered by the Computer Science and Engineering Department provides budding engineers with a spectacular array of courses dedicated to frontiers in the field of Artificial Intelligence and Machine Learning (AI&ML) with a foundation in Computer Science and Engineering.
                                </p>
                                <p>
                                    B.Tech in CSE (AI & ML) is an Engineering Degree that primarily focuses on the development of smart technology that can mimic cognitive processes to understand, predict, analyze and perform the given tasks with precision. Artificial Intelligence and Machine Learning are two intertwined subjects wherein the former grants machine the ability to simulate human behavior while the latter assists in learning the patterns with the help of previous data.
                                </p>
                                <p>
                                    This branch of engineering has already made strides across industries and platforms and is being largely employed for fast and efficient task completion. The 4-year full-time program presents exposure to hands-on technologies to create applications and solutions for the world that we live in.
                                </p>
                            </div>
                        </AnimatedElement>

                        {/* Right: Focus and Image */}
                        <div className="flex flex-col gap-8">
                            <AnimatedElement animation="slide-left" delay={200}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 w-full">
                                    <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                                        <Target className="w-6 h-6 mr-3 text-blue-500" />
                                        Focus
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        The curriculum focuses on the foundations of computational mathematics, core areas of computer science, and the latest advancements in artificial intelligence and machine learning. Core courses in computer science drive students through the ever-changing IT and Industry 4.0 requirements.
                                    </p>
                                </div>
                            </AnimatedElement>
                            {/* Simple image below Focus, no box */}
                            <img
                                src="/Highlights/csm2.jpg"
                                alt="CSE AI ML Focus"
                                className="rounded-xl max-w-full w-[500px] object-cover mx-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Advantages</h2>
                    </AnimatedElement>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-center text-gray-600 mb-12 text-lg">
                            Among the Top 10 Private Engineering Colleges in Telangana, BVRIT Offers B.Tech in CSE (Artificial Intelligence and Machine Learning) with the Following Global Standard Learning Experience:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "State-of-the-Art Infrastructure with Laboratories for Student and Faculty Research",
                                "Choice-Based Credit System Driven Curriculum",
                                "Experienced Faculty",
                                "360-Degree Placement and Training Assistance"
                            ].map((adv, index) => (
                                <AnimatedElement key={index} animation="fade-in" delay={index * 100}>
                                    <div className="bg-teal-50 p-6 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-center gap-4">
                                        <div className="flex-shrink-0 text-blue-600">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <span className="font-semibold text-gray-800">{adv}</span>
                                    </div>
                                </AnimatedElement>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Prospects */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedElement animation="slide-up">
                        <h2 className="text-3xl font-bold mb-12 text-center">Career and Future Prospects</h2>
                        <div className="max-w-5xl mx-auto space-y-8 text-blue-100 leading-relaxed text-lg text-justify">
                            <p>
                                A recent report of IT firm Accenture stated that AI has the potential to add nearly $957 Billion to the Indian economy by changing the nature of work and creating better outcomes for businesses. The report called ‘Rewire for Growth’ predicts that AI intervention could increase India’s annual growth rate of gross value added (GVA) by 1.3 % points, thus lifting the country’s income by 15% in 2035.
                            </p>
                            <p>
                                With a huge explosion in data and its applications, a career in the field of AI&ML can be very promising as Big Data Engineer, Business Intelligence Developer, Data Scientist, Machine Learning Engineer, Research Scientist, AI Data Analyst, AI Engineer, Robotics Scientist, etc.
                            </p>
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 mt-8">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <Briefcase className="w-6 h-6 mr-3 text-blue-300" />
                                    Top Recruiters
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {['Microsoft', 'Amazon', 'Goldman Sachs', 'Oracle GBU', 'Cisco', 'Dell Technologies', 'Accenture'].map((company, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors cursor-default shadow-sm">
                                            {company}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CSMDepartmentPage;
