import React from 'react';
import { AnimatedElement } from '../AnimatedElement';
import Header from '../Header';
import Footer from '../Footer';
import {
    GraduationCap,
    Users,
    BookOpen,
    FileText,
    Award,
    Briefcase,
    Target,
    Lightbulb
} from 'lucide-react';

const CSEDepartmentPage: React.FC = () => {

    const cseLinks = [
        { id: 'Stats', label: 'Overview' },
        { id: 'About', label: 'About' },
        { id: 'VisionMission', label: 'Vision' },
        { id: 'Prospects', label: 'Prospects' },
        { id: 'WhyCSE', label: 'Why BVRIT?' },
        { id: 'Collaborations', label: 'Collaborations' },
        { id: 'PEOs', label: 'Outcomes' },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header customLinks={cseLinks} />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&h=900&fit=crop"
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
                            <span className="text-cyan-200">Computer Science & Engineering</span>
                        </h1>
                        <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                            Innovating the Future through Excellence in Education and Research
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
            <section id="Stats" className="py-12 -mt-20 relative z-20 scroll-mt-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { count: '1', label: 'Program Offered', icon: <GraduationCap className="w-8 h-8" /> },
                            { count: '65', label: 'Faculty Members', icon: <Users className="w-8 h-8" /> },
                            { count: '3500+', label: 'Students Graduated', icon: <Award className="w-8 h-8" /> },
                            { count: '1000+', label: 'Research Papers', icon: <FileText className="w-8 h-8" /> },
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
            <section id="About" className="py-10 md:py-20 scroll-mt-24">
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
                                        The Department of Computer Science and Engineering at BVRIT was started in 1997 with an intake of 40 B.Tech students. Subsequently, the intake was enhanced from 40 to 60 in the academic year 1999-2000, 90 in the academic year 2000-2001, 120 in the academic year 2007-2008, 180 in the academic year 2014-2015, 300 in the academic year 2015-2016, and 540 in the academic year 2024-25. The Department has state-of-the-art infrastructure and computing equipment supported by high-speed internet and wireless networks.
                                    </p>
                                    <p>
                                        B. Tech (CSE) was accredited by the NBA in 2009, and it was re-accredited in 2013, 2017 (under Tier-II), and 2022 (under Tier-I) for 3 years. M.Tech (CSE) was accredited by the NBA in 2024 for 3 years.
                                    </p>
                                    <p>
                                        The Department of Computer Science and Engineering is renowned for cutting-edge research and for imparting state-of-the-art education. The Department provides an outstanding research environment complemented by excellence in teaching. Our faculty with rich teaching and research experience aims at delivering top-class education. It also promotes active industry-institute collaboration by identifying areas of interest and participating in sponsored research projects and consultancy services.
                                    </p>
                                </div>
                            </AnimatedElement>
                        </div>
                        <div className="lg:w-1/3">
                            <AnimatedElement animation="slide-left" delay={200}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                        Courses Offered
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="group p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors border border-blue-200">
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">B.Tech in CSE</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-gray-600 text-sm font-medium">Annual Intake</span>
                                                <span className="text-2xl font-bold text-blue-600">540</span>
                                            </div>
                                        </div>
                                        <div className="group p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors border border-blue-200">
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">M.Tech in CSE</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-gray-600 text-sm font-medium">Annual Intake</span>
                                                <span className="text-2xl font-bold text-blue-600">12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section id="VisionMission" className="py-10 md:py-20 scroll-mt-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <AnimatedElement animation="slide-right" className="h-full">
                            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border-t-4 border-blue-600 h-full relative overflow-hidden group">
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
                                    "To become a regional leader in providing the high quality education in the field of Computer Science and Engineering and nurturing the students to compete globally, with the curricula that imparts theoretical foundations and hands on experience of Computer Science and Engineering and also the foundations of social, ethical, and liberal education needed to make significant contributions to society."
                                </p>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement animation="slide-left" delay={200} className="h-full">
                            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border-t-4 border-green-600 h-full relative overflow-hidden group">
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
                                        <span className="leading-relaxed">The department seeks to produce global competent graduates and post graduates who will shape the future of the society, by understanding the societal problems and can provide the optimal solution.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-green-600 min-w-[30px] text-lg">M2.</span>
                                        <span className="leading-relaxed">The department strives to impart the education to a new generation of interdisciplinary students who build bridges, and innovate at the intersection of multiple scientific fields.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-green-600 min-w-[30px] text-lg">M3.</span>
                                        <span className="leading-relaxed">The department would like to enable other academic disciplines through core Computer Science and Engineering, and to expand the horizons of the Computer Science and Engineering discipline by considering the research challenges of other fields.</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* Prospects & Future */}
            <section id="Prospects" className="py-10 md:py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedElement animation="slide-right">
                            <h2 className="text-3xl font-bold mb-8 border-l-4 border-blue-400 pl-6">Prospects and Future of CSE</h2>
                            <div className="space-y-6 text-blue-50 leading-relaxed text-lg text-left">
                                <p>
                                    This has been one of the most lucrative and competitive courses to study since its inception. When India’s computer industry created a mark in the world of business and gained super trust and revenue for the nation it also created a large amount of well paid jobs for Computer Engineering students.
                                </p>
                                <p>
                                    Computer Science and Engineering students will learn about basic engineering techniques during the first year. From second year they will be exposed to core computer science subjects including Programming, Advanced Data Structures, Digital Logic Design, Algorithms, Computer Networks, Operating Systems, Web Technologies, Databases and Computer Architecture apart from trending subjects like Cloud Computing, AI, ML, Data Science, IoT, Cyber Security, Deep Learning, Image Processing, and Blockchain Technology.
                                </p>
                            </div>
                        </AnimatedElement>
                        <AnimatedElement animation="slide-left" delay={200}>
                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                                    <Briefcase className="w-6 h-6 mr-3 text-blue-300" />
                                    Core Companies & Recruiters
                                </h3>
                                <p className="mb-8 text-blue-100 leading-relaxed">
                                    Government organizations like DRDO, ISRO, ECIL and BHEL etc. Also, there are a huge number of multinational and national software companies which offer jobs.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {['Microsoft', 'Google', 'Amazon', 'IBM', 'TCS', 'Capgemini', 'Oracle', 'Cisco', 'Infosys'].map((company, idx) => (
                                        <span key={idx} className="px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold text-sm hover:bg-teal-50 transition-colors cursor-default shadow-sm">
                                            {company}
                                        </span>
                                    ))}
                                    <span className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm border border-white/30">
                                        + Many More
                                    </span>
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* CSE in BVRIT */}
            <section id="WhyCSE" className="py-10 md:py-20 bg-white scroll-mt-24">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">Why CSE in BVRIT?</h2>
                    </AnimatedElement>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Advanced Labs', desc: 'AI&ML, Data Science, Cyber Security, Cloud Computing, IoT, Networks, Programming Labs' },
                            { title: 'Specialized Centers', desc: 'Virtusa PEGA University Connect Lab, Emerging Technology Center, PEGA Lab' },
                            { title: 'Placements', desc: 'Consistent record in student placements with well-paid internships' },
                            { title: 'Academic Excellence', desc: 'Outstanding academic results and ratified faculty members' },
                            { title: 'Recognition', desc: 'National level awards in coding competitions and project exhibitions' },
                            { title: 'Research', desc: 'Funded projects, quality student projects, and industry 4.0 ready curriculum' }
                        ].map((item, index) => (
                            <AnimatedElement key={index} animation="slide-up" delay={index * 100}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 h-full group">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* Collaborations */}
            <section id="Collaborations" className="py-10 md:py-20 bg-slate-50 scroll-mt-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">Collaborations & MoUs</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                        {['Microsoft', 'IBM', 'TCS', 'PEGA', 'NASSCOM', 'Virtusa', 'ElevenO1', 'Bennett University', 'Mission R&D'].map((partner, idx) => (
                            <div key={idx} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-default">
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PEOs, POs, PSOs */}
            <section id="PEOs" className="py-10 md:py-20 scroll-mt-24">
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
                                    "The Graduates will have sufficient technical knowledge to enter in high technology workforce, and make significant contributions to Computer Science and Engineering.",
                                    "Prepare graduates for professional career in computer science and multidisciplinary environments, through the research, design and development of a wide range of applications, which helps further the state’s economic growth by developing innovative ideas, and translating them into commercial products that benefit society.",
                                    "To pursue lifelong learning through, professional training and membership in professional societies and to be a effective communicator with non-technical stakeholders in computer and software systems development, maintenance and administration."
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
                                    <h4 className="font-bold text-blue-900 mb-3 text-lg">PSO1. Foundations of Computer Science</h4>
                                    <p className="text-gray-700 leading-relaxed">Ability to understand the principles of computer science. Student can possess professional skills and knowledge of software design process.</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-blue-900 mb-3 text-lg">PSO2. Applications of Computing and Innovation</h4>
                                    <p className="text-gray-700 leading-relaxed">Ability to use theoretical and practical concepts in interdisciplinary domains to provide solution to new ideas and innovations.</p>
                                </div>
                            </div>
                        </AnimatedElement>

                        {/* POs */}
                        <AnimatedElement animation="fade-in">
                            <div className="flex items-center mb-8">
                                <div className="w-1 h-8 bg-blue-600 mr-3"></div>
                                <h3 className="text-2xl font-bold text-gray-900">Program Outcomes (POs)</h3>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Engineering Knowledge", desc: "Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems." },
                                    { title: "Problem Analysis", desc: "Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
                                    { title: "Design/Development of Solutions", desc: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
                                    { title: "Conduct Investigations", desc: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
                                    { title: "Modern Tool Usage", desc: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
                                    { title: "The Engineer and Society", desc: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
                                    { title: "Environment and Sustainability", desc: "Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development." },
                                    { title: "Ethics", desc: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
                                    { title: "Individual and Team Work", desc: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings." },
                                    { title: "Communication", desc: "Communicate effectively on complex engineering activities with the engineering community and with society at large." },
                                    { title: "Project Management and Finance", desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects." },
                                    { title: "Life-long Learning", desc: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
                                ].map((po, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-teal-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-md border border-blue-200">PO{idx + 1}</span>
                                            <h4 className="font-bold text-gray-900 text-sm">{po.title}</h4>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">{po.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedElement>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CSEDepartmentPage;
