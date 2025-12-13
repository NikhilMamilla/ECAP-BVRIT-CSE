import React, { useEffect } from 'react';
import { AnimatedElement } from '../AnimatedElement';
import Header from '../Header';
import Footer from '../Footer';
import {
    GraduationCap,
    Users,
    BookOpen,
    FileText,
    Award,
    Target,
    Lightbulb,
    Cpu,
    Shield,
    Cloud,
    Database,
    Wifi
} from 'lucide-react';

const ITDepartmentPage: React.FC = () => {
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
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=900&fit=crop"
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
                            <span className="text-cyan-200">Information Technology</span>
                        </h1>
                        <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-xl md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                            Empowering the Future through Innovation and Excellence in IT
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { count: '1', label: 'Program Offered', icon: <GraduationCap className="w-8 h-8" /> },
                            { count: '20', label: 'Faculty Members', icon: <Users className="w-8 h-8" /> },
                            { count: '1000+', label: 'Students Graduated', icon: <Award className="w-8 h-8" /> },
                            { count: '1000+', label: 'Research Papers', icon: <FileText className="w-8 h-8" /> },
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
                                        The Department of Information Technology was established in the year 2000 and is now recognized as one of the leading departments with infrastructure and facilities to match the very best in the country. The department remains committed towards its mission, which is twofold. One is to provide students with the fundamental knowledge and problem solving skills in IT field required for a fulfilling career. The other goal is to create and disseminate knowledge to improve Research, education and practice in IT.
                                    </p>
                                    <p>
                                        With a team of dedicated, experienced and qualified faculty members, the department has witnessed tremendous growth in academics and research. The department is having combination of both experienced and young faculty; among them five are having Ph.D degrees, who are expertise in research fields of Cloud Computing, AI, Machine Learning, Cyber Security, Data Analytics.
                                    </p>
                                    <p>
                                        The department is progressing towards setting up of research laboratories and R & D centers. Major research areas include AI, Data Analytics, Cloud Computing, Network Security and Wireless Networks. Regular interaction with software companies has helped the department in maintaining its syllabus abreast with technology and industrial standards. The rigorous learning environment has helped make students job-ready. To further enhance the quality of the programs, the department has academic collaborations with international professors from universities like Binghamton University – State University of New York, Bennet University- Noida etc.
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
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">B.Tech in Information Technology</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-gray-600 text-sm font-medium">Annual Intake</span>
                                                <span className="text-2xl font-bold text-blue-600">180</span>
                                            </div>
                                        </div>
                                        <div className="group p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors border border-blue-200">
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">M.Tech in Data Sciences</h4>
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

            {/* Research Areas */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Major Research Areas</h2>
                    </AnimatedElement>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                        {[
                            { name: 'Artificial Intelligence', icon: <Cpu className="w-5 h-5" /> },
                            { name: 'Data Analytics', icon: <Database className="w-5 h-5" /> },
                            { name: 'Cloud Computing', icon: <Cloud className="w-5 h-5" /> },
                            { name: 'Network Security', icon: <Shield className="w-5 h-5" /> },
                            { name: 'Wireless Networks', icon: <Wifi className="w-5 h-5" /> },
                        ].map((area, idx) => (
                            <AnimatedElement key={idx} animation="fade-in" delay={idx * 50}>
                                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-default">
                                    <div className="text-blue-500 mr-3 group-hover:scale-110 transition-transform">{area.icon}</div>
                                    <span className="font-medium text-gray-700 group-hover:text-blue-700 transition-colors">{area.name}</span>
                                </div>
                            </AnimatedElement>
                        ))}
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
                                    "To produce employable graduates, world class entrepreneurs with ethics and social responsibilities in Information Technology solutions and Information Technology Enabled Services (ITES)."
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
                                        <span className="leading-relaxed">To offer high quality graduate and post graduate programs in Information Technology education and to prepare students for professional career and higher studies globally.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-green-600 min-w-[30px] text-lg">M2.</span>
                                        <span className="leading-relaxed">To promote excellence in research & consultancy in IT solution and ITES with use of state of the art technology.</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="font-bold text-green-600 min-w-[30px] text-lg">M3.</span>
                                        <span className="leading-relaxed">To develop self learning abilities and professional ethics to serve the society.</span>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* Why IT in BVRIT */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why Information Technology is a Good Career?</h2>
                    </AnimatedElement>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'FASTEST GROWING INDUSTRY',
                                desc: 'The Information Technology industry operates at a speed much faster than any other industry. With innovations in AI, Cloud computing, Big data, and Cyber security, an aspiring I.T. professional has many avenues to pursue and grow from.'
                            },
                            {
                                title: 'BETTER INCOME',
                                desc: 'Information Technology professionals are paid well compared to other professionals. An I.T. professional with the right mix of certifications and experience can find a permanent position in either the public or private sector.'
                            },
                            {
                                title: 'PLACEMENTS',
                                desc: 'Impressive placement record in MNCs and product-based companies like TCS, Capgemini, Tech Mahindra, IBM, Deloitte, Thoughtworks, NTT Data, ADP, Johndeere, Soctronics, CYIENT, Adept Chips etc.'
                            },
                            {
                                title: 'INNOVATION LABS',
                                desc: 'Specialized laboratories and centers of excellence: Avianco UAV Research Center, Smaragdine Cyber Security Center for Trusted IIoTD, NCDRC Research Center, Assistive Technology Lab Center for IoT and Embedded Systems.'
                            },
                            {
                                title: 'FINAL WORDS',
                                desc: 'Information technology is the field of millennial. Aspiring I.T. professionals must be committed to learning and adapting to new technological advancements to stay competitive and succeed in the field.'
                            }
                        ].map((item, index) => (
                            <AnimatedElement key={index} animation="slide-up" delay={index * 100}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 h-full group">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* PEOs, POs, PSOs */}
            <section className="py-20 bg-slate-50">
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
                                    "Excel in professional career and in higher education by acquiring knowledge in mathematical, computing and engineering principles",
                                    "Analyze real life problems, work in multi-disciplinary teams, design Software Systems appropriate to its solutions that are technically sound, economically feasible and socially acceptable.",
                                    "Exhibit professionalism, ethical attitude, communication skills, team work in their profession and adapt to current trends by engaging in lifelong learning"
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
                                    <h4 className="font-bold text-blue-900 mb-3 text-lg">PSO1. Adaptability of Cutting Edge Technologies</h4>
                                    <p className="text-gray-700 leading-relaxed">Ability to understand of best development and administrations practices for Social, Cloud, Data Analytics and Mobility applications.</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-blue-900 mb-3 text-lg">PSO2. Scope of Entrepreneurship</h4>
                                    <p className="text-gray-700 leading-relaxed">Ability to identify of problems and development of solutions in order to make innovative products.</p>
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
                                    { title: "Problem Analysis", desc: "Identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences." },
                                    { title: "Design/Development of Solutions", desc: "Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations." },
                                    { title: "Conduct Investigations of Complex Problems", desc: "Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions." },
                                    { title: "Modern Tool Usage", desc: "Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations." },
                                    { title: "The engineer and society", desc: "Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice." },
                                    { title: "Environment and sustainability", desc: "Understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of, and need for sustainable development." },
                                    { title: "Ethics", desc: "Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice." },
                                    { title: "Individual and Team Work", desc: "Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary setting." },
                                    { title: "Communication", desc: "Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions." },
                                    { title: "Project Management and Finance", desc: "Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments." },
                                    { title: "Life-long learning", desc: "Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change." }
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

export default ITDepartmentPage;
