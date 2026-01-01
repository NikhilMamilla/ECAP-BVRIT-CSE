import React from 'react';
import { AnimatedElement } from '../AnimatedElement';
import Header from '../Header';
import Footer from '../Footer';
import {
    GraduationCap,
    Users,
    BookOpen,
    FileText,
    BrainCircuit,
    CheckCircle,
    Cpu,
    Database,
    Network,
    BarChart,
    Cloud
} from 'lucide-react';

const AIDSDepartmentPage: React.FC = () => {

    const aidsLinks = [
        { id: 'Stats', label: 'Overview' },
        { id: 'About', label: 'About' },
        { id: 'Highlights', label: 'Highlights' },
        { id: 'Benefits', label: 'Benefits' },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header customLinks={aidsLinks} />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&h=900&fit=crop"
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
                            <span className="text-cyan-200">Artificial Intelligence & Data Science</span>
                        </h1>
                        <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                            Shaping the Future with Intelligent Systems and Data-Driven Insights
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { count: '1', label: 'Program Offered', icon: <GraduationCap className="w-8 h-8" /> },
                            { count: '12', label: 'Faculty Members', icon: <Users className="w-8 h-8" /> },
                            { count: '35', label: 'Research Papers', icon: <FileText className="w-8 h-8" /> },
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
                                        At BVRIT, Narsapur, the Department of Artificial Intelligence and Data Science began in 2021 with a B.Tech. intake of 60 students. Nowadays, B.Tech in Artificial Intelligence and Data Science is one of the main branches of science, engineering, and technology.
                                    </p>
                                    <p>
                                        Engineering in Artificial Intelligence and Data Science is a four years undergraduate course that deals with core Advance Subjects like Programming for Problem Solving using Python & R, Data Structures and Algorithms using Python Programming, Advanced Artificial Intelligence, Data Science using Python Programming, Machine Learning, Deep Learning, Data Visualization, IoT, Cloud Computing, Bioinformatics, Software Engineering and Design, Object Oriented Programming, Web Technology, Computer Communication Networks, Cryptography and Network Security, Database Management Systems Mathematical modeling.
                                    </p>
                                    <p>
                                        AI significantly influences how robots and people interact. The fields of computer science, computational mathematics, statistics, and management come together in a unique way to form data science. It is a recent field of study that examines how to extract knowledge from both structured and unstructured data using scientific methods, procedures, and techniques that are drawn from a variety of fields, including statistics, cognitive science, computing, and information science.
                                    </p>
                                    <p>
                                        The Department offers a superb atmosphere for research that is supplemented by top-notch instruction. Our faculty’s goal is to provide the best education because of their extensive teaching and research backgrounds. By identifying areas of interest and taking part in sponsored research initiatives and consulting services, it also encourages active industry-institute engagement.
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
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">B.Tech in AI & DS</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-gray-600 text-sm font-medium">Annual Intake</span>
                                                <span className="text-2xl font-bold text-blue-600">120</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section id="Highlights" className="py-10 md:py-20 bg-slate-50 scroll-mt-24">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Highlights</h2>
                    </AnimatedElement>

                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <AnimatedElement animation="slide-right">
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-left">
                                <p>
                                    As a student of data science and artificial intelligence, you’ll learn how to approach current problems in these important subjects. The Artificial Intelligence and Data Science Programme will help students with the knowledge and abilities to perform intelligent data analysis, which is essential to many real-world applications.
                                </p>
                                <p>
                                    Data science has become one of the most dynamic, high-growth, and rewarding careers in technology during the past ten years. In addition to introducing fundamental technologies like artificial intelligence, data mining, and data modeling, this course focuses heavily on machine learning and big data analytics.
                                </p>
                                <p>
                                    By the end of the course, the students will have advanced cross-disciplinary skills in areas like statistics, computer science, machine learning, and logic. They will also be qualified to work as data scientists and have career opportunities in important fields like healthcare, business, eCommerce, social networking, climatology, biotechnology, and genetics.
                                </p>
                            </div>
                        </AnimatedElement>

                        <AnimatedElement animation="slide-left" delay={200}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: 'Machine Learning', icon: <BrainCircuit className="w-8 h-8" /> },
                                    { name: 'Big Data Analytics', icon: <Database className="w-8 h-8" /> },
                                    { name: 'Deep Learning', icon: <Network className="w-8 h-8" /> },
                                    { name: 'Data Visualization', icon: <BarChart className="w-8 h-8" /> },
                                    { name: 'Cloud Computing', icon: <Cloud className="w-8 h-8" /> },
                                    { name: 'IoT', icon: <Cpu className="w-8 h-8" /> },
                                ].map((tech, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-blue-100 flex flex-col items-center text-center hover:border-blue-300 transition-colors">
                                        <div className="text-blue-600 mb-3">{tech.icon}</div>
                                        <span className="font-semibold text-gray-800">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="Benefits" className="py-10 md:py-20 bg-white scroll-mt-24">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">Benefits of AI & DS</h2>
                    </AnimatedElement>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Development of both skills and personality.",
                            "You’ll master the newest technologies.",
                            "Bright career prospects, placements, and internships.",
                            "Design assignments, Projects for every semester.",
                            "Delivery of education using real world examples.",
                            "Technical knowledge is not required to enroll in this course.",
                            "You’ll ensure your employment in the future.",
                            "You’ll gain useful skills and experience"
                        ].map((benefit, index) => (
                            <AnimatedElement key={index} animation="fade-in" delay={index * 100}>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 text-green-500">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed">{benefit}</p>
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AIDSDepartmentPage;
