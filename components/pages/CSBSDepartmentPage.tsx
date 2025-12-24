import React, { useEffect } from 'react';
import { AnimatedElement } from '../AnimatedElement';
import Header from '../Header';
import Footer from '../Footer';
import {
    GraduationCap,
    Users,
    BookOpen,
    FileText,
    Target,
    Lightbulb,
    TrendingUp,
    Briefcase
} from 'lucide-react';

const CSBSDepartmentPage: React.FC = () => {
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
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-cyan-900/85 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-800/30 via-cyan-900/60 to-cyan-950/90"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <AnimatedElement animation="slide-down" duration={1000}>
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl font-serif">
                            Department of <br />
                            <span className="text-cyan-200">Computer Science & Business Systems</span>
                        </h1>
                        <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                            Bridging Technology and Business for the Future
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
                            { count: '12', label: 'Faculty Members', icon: <Users className="w-8 h-8" /> },
                            { count: '100+', label: 'Research Papers', icon: <FileText className="w-8 h-8" /> },
                        ].map((stat, index) => (
                            <AnimatedElement key={index} animation="slide-up" delay={index * 100}>
                                <div className="bg-white p-4 md:p-8 rounded-xl shadow-xl border-2 border-blue-300 text-center hover:-translate-y-2 transition-transform duration-300 group">
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
            <section className="py-10 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-2/3">
                            <AnimatedElement animation="fade-in">
                                <div className="flex items-center mb-8">
                                    <div className="w-2 h-10 bg-blue-600 mr-4 rounded-full"></div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About the Department</h2>
                                </div>
                                <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-left">
                                    <p>
                                        The Department of Computer Science and Business System at BVRIT started in the year 2020 with an intake of 60 in B.Tech. The department has state-of-the-art infrastructure and computing equipment supported by high-speed internet and wireless networks.
                                    </p>
                                    <p>
                                        Computer Science and Business System comes under the wing of Computer Science and Engineering. Our faculty with rich teaching and research experience aims in delivering top-class education. It also promotes active industry-institute collaboration by identifying areas of interest and taking part in sponsoring research projects and consultancy services.
                                    </p>
                                    <p>
                                        The major attraction of Computer Science and Business System is its collaboration with Tata Consultancy Services multinational company. For generating syllabus lab experiments everywhere regarding academics TCS industrial peoples are involved and added their required skills to recruit people, especially from this department.
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
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">B.Tech in CSBS</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-gray-600 text-sm font-medium">Annual Intake</span>
                                                <span className="text-2xl font-bold text-blue-600">60</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </section>

            {/* Prospects & Future */}
            <section className="py-10 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Prospects and Future of CSBS</h2>
                    </AnimatedElement>

                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedElement animation="slide-right">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 h-full">
                                <h3 className="text-xl font-bold text-blue-900 mb-4">Creative & Competitive</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    CSBS has been one of the most creative and competitive courses to study since its inception in engineering colleges/institutes and universities.
                                </p>
                                <h3 className="text-xl font-bold text-blue-900 mb-4">Hybrid Curriculum</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Computer Science and Business System students will learn about basic engineering techniques like C++, Java, Computer Networks, DBMS, etc., as well as business-related subjects like Business Communication, Value Sciences, Fundamentals of Management, Statistical Methods, Economics, Financial Management, Operations Research, and Financial & Cost Accounting.
                                </p>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement animation="slide-left" delay={200}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 h-full">
                                <ul className="space-y-6">
                                    {[
                                        { title: "Industry-Relevant Curriculum", desc: "TCS collaborated with AICTE to design a curriculum that blends CS fundamentals with Business Systems knowledge." },
                                        { title: "Create Tech-Savvy Business Professionals", desc: "CSBS aims to develop professionals who can analyze business problems and build technology solutions that align with business goals." },
                                        { title: "Future-Ready Talent Pipeline", desc: "With rapid evolution of AI, Data Science, Cloud, and IoT, there's a growing demand for tech strategists." },
                                        { title: "Reduce Training Burden", desc: "CSBS graduates come with pre-aligned skills, reducing onboarding and training costs for companies like TCS." },
                                        { title: "Promote Innovation", desc: "Encourages students to innovate and even launch startups, not just seek jobs." }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <div className="mt-1 min-w-[20px] text-blue-600">
                                                <TrendingUp className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <AnimatedElement animation="slide-right" className="h-full">
                            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-blue-600 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Target className="w-32 h-32" />
                                </div>
                                <div className="flex items-center mb-8 relative z-10">
                                    <div className="p-3 bg-teal-100 rounded-lg mr-4 text-blue-600">
                                        <Target className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-lg italic relative z-10">
                                    "To develop the greatest engineers, managers, and entrepreneurs with computer technology based on the necessary industrial skills with morals and societal responsibilities."
                                </p>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement animation="slide-left" delay={200} className="h-full">
                            <div className="bg-white p-10 rounded-2xl shadow-xl border-t-4 border-green-600 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Lightbulb className="w-32 h-32" />
                                </div>
                                <div className="flex items-center mb-8 relative z-10">
                                    <div className="p-3 bg-green-100 rounded-lg mr-4 text-green-600">
                                        <Lightbulb className="w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
                                </div>
                                <ul className="space-y-6 text-gray-700 relative z-10">
                                    <li className="flex gap-4">
                                        <span className="font-bold text-green-600 min-w-[30px] text-lg">M1.</span>
                                        <span className="leading-relaxed">To produce graduates in computer technology and business capabilities for TCS and other companies.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-green-600 min-w-[30px] text-lg">M2.</span>
                                        <span className="leading-relaxed">To inspire them to create hybrid notions on the research side.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-green-600 min-w-[30px] text-lg">M3.</span>
                                        <span className="leading-relaxed">To increase confidence and the capacity to learn and contribute to society in a variety of ways.</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* Collaborations & Training */}
            <section className="py-10 md:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedElement animation="slide-right">
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-blue-400 pl-6">Collaborations</h2>
                            <p className="mb-8 text-blue-100 leading-relaxed">
                                The Department of CSBS has collaborations and MOUs with various organizations for empowering technology, learning and placements.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['TCS', 'Microsoft', 'IBM', 'PEGA', 'NASSCOM', 'Virtusa', 'ElevenO1', 'Bennett University', 'Mission R&D'].map((company, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors cursor-default shadow-sm">
                                        {company}
                                    </span>
                                ))}
                            </div>
                        </AnimatedElement>

                        <AnimatedElement animation="slide-left" delay={200}>
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                                    <Briefcase className="w-6 h-6 mr-3 text-blue-300" />
                                    Training
                                </h3>
                                <p className="text-blue-100 leading-relaxed">
                                    The department organizes conferences, workshops and short-term courses arranged by TCS to make students learn the required skills.
                                </p>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* PEOs, POs, PSOs */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="space-y-16">

                        {/* PEOs */}
                        <AnimatedElement animation="fade-in">
                            <div className="flex items-center mb-8">
                                <div className="w-1 h-8 bg-blue-600 mr-3"></div>
                                <h3 className="text-2xl font-bold text-gray-900">Programme Educational Objectives (PEOs)</h3>
                            </div>
                            <div className="grid gap-6">
                                {[
                                    "To produce highly qualified graduates who possess both computer technology and business knowledge in order for them to excel into professional careers and pursue higher education with the necessary requirements.",
                                    "To assess the application of emerging technologies, financial accounting computer abilities to practical issues in technological, economic, and social contexts.",
                                    "To understand the current scenario and respond according to how they learn while good communication teamwork and other skills."
                                ].map((peo, idx) => (
                                    <div key={idx} className="flex gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                                        <div className="flex-shrink-0">
                                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-blue-600 font-bold border border-blue-100">
                                                PEO{idx + 1}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed pt-2">{peo}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedElement>

                        {/* PSOs */}
                        <AnimatedElement animation="fade-in">
                            <div className="flex items-center mb-8">
                                <div className="w-1 h-8 bg-blue-600 mr-3"></div>
                                <h3 className="text-2xl font-bold text-gray-900">Program Specific Outcomes (PSOs)</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-blue-900 mb-3 text-lg">PSO1. Corporate-based Technologies</h4>
                                    <p className="text-gray-700 leading-relaxed">With the help of their designated domains, he or she can explore knowledge on corporate-based technologies.</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-blue-900 mb-3 text-lg">PSO2. Practical Experience</h4>
                                    <p className="text-gray-700 leading-relaxed">Get practical experience with technologies in situations that actually occur.</p>
                                </div>
                            </div>
                        </AnimatedElement>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CSBSDepartmentPage;
