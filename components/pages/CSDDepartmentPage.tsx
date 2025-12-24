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
    Globe
} from 'lucide-react';

const CSDDepartmentPage: React.FC = () => {
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
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop"
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
                            <span className="text-cyan-200">CSE (Data Science)</span>
                        </h1>
                        <div className="w-32 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-3xl text-cyan-100 font-light tracking-wide max-w-4xl mx-auto">
                            Unlocking Insights, Empowering Decisions with Data Science
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
                            { count: '17', label: 'Faculty Members', icon: <Users className="w-8 h-8" /> },
                            { count: '20+', label: 'Research Papers', icon: <FileText className="w-8 h-8" /> },
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
                        {/* Left (text) */}
                        <div className="lg:w-2/3">
                            <AnimatedElement animation="fade-in">
                                <div className="flex items-center mb-8">
                                    <div className="w-2 h-10 bg-blue-600 mr-4 rounded-full"></div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About the Department</h2>
                                </div>
                                <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-left">
                                    <p>
                                        B.Tech Computer Science and Engineering (Data Science) or Bachelor of Technology in Computer Science and Engineering with a specialization in Data Science is a four-year undergraduate degree programme with 8 semesters. The Department of B.Tech CSE(Data Science) has started in the year 2020 with an intake of 60 students. Now, the intake is increased to 120 Students. This programme provides the students to understand the fundamental concepts of Computer Science & Engineering with specialized engineering knowledge in the areas of Data Science. Through this Data Science course, students will learn how to combine various techniques and tools to extract insights from their raw data.
                                    </p>
                                    <p>
                                        It is a relatively new field of study that investigates how to extract knowledge from both structured and unstructured data using scientific methods, procedures, and techniques drawn from a variety of disciplines. The skillset required for every graduate is in Statistics, Data Analysis, Programming Knowledge, Machine Learning and Business Vision.
                                    </p>
                                    <p>
                                        The Department provides an excellent environment for research, which is supplemented by excellent Instructors with their extensive teaching and research backgrounds. The department is collaborated with Industry-Institute Engagement by identifying emerging areas, participating in sponsored research initiatives and consulting services.
                                    </p>
                                </div>
                            </AnimatedElement>
                        </div>
                        {/* Right (Program + Image) */}
                        <div className="lg:w-1/3 flex flex-col gap-8">
                            <AnimatedElement animation="slide-left" delay={200}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 sticky top-24">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                                        Programs Offered
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="group p-4 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors border border-blue-200">
                                            <h4 className="font-bold text-lg text-gray-900 mb-1">B.Tech in CSE (Data Science)</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-gray-600 text-sm font-medium">Annual Intake</span>
                                                <span className="text-2xl font-bold text-blue-600">120</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedElement>
                            {/* ADD IMAGE BELOW PROGRAMS OFFERED, larger and responsive */}
                            <img
                                src="/Highlights/datascience1.png"
                                alt="Data Science Department"
                                className="rounded-xl w-full max-w-[600px] md:max-w-[700px] object-cover mx-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Science Significance */}
            <section className="py-10 md:py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <AnimatedElement animation="slide-right">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Data Science Significance</h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-left">
                                <p>
                                    Over the last ten years, data science has emerged as one of the most dynamic, high-growth, and rewarding careers in Industries. In addition to introducing fundamental technologies such as AI, data mining, and data modelling, this course enables a strong emphasis on Data Analytics, Machine Learning, and Big Data Analytics.
                                </p>
                                <p>
                                    Students graduate with these advanced cross-disciplinary skills will be qualified to work as Data Analysts, Data Engineers and Data Scientists as their career opportunities in the fields such as Healthcare, Business, E-Commerce, Social Networking, Transport, Manufacturing and Banking sectors.
                                </p>
                                <p>
                                    This program’s main goal is to teach students how to think mathematically and statistically, as well as how to learn about and comprehend knowledge.
                                </p>
                            </div>
                        </AnimatedElement>

                        {/* Industry Specific Roles - smaller, responsive images */}
                        <div className="flex flex-col gap-8">
                            {/* <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                                <TrendingUp className="w-6 h-6 mr-3 text-blue-500" />
                                Industry Specific Roles
                            </h3> */}
                            <img
                                src="/Highlights/datascience4.png"
                                alt="Industry Specific Roles 1"
                                className="rounded-xl w-full max-w-[400px] md:max-w-[480px] object-cover mx-auto"
                                loading="lazy"
                            />
                            <img
                                src="/Highlights/datascience3.png"
                                alt="Industry Specific Roles 2"
                                className="rounded-xl w-full max-w-[400px] md:max-w-[480px] object-cover mx-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="py-10 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">Program Highlights</h2>
                    </AnimatedElement>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            "CSE (Data Science) program provides a student with core concepts of computer science as well as data analytics.",
                            "This course also provides engineering and problem-solving skills using computational methods.",
                            "Candidates will have an opportunity to learn principles, tools, and techniques to model various real-world problems, analyze them, and discover useful information.",
                            "Candidates are encouraged to suggest solutions that support decision-making using suitable data visualization techniques.",
                            "Design assignments, Projects for every semester.",
                            "Bright Career Prospects, Placements, And Internships."
                        ].map((highlight, index) => (
                            <AnimatedElement key={index} animation="fade-in" delay={index * 100}>
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0 text-blue-500">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed">{highlight}</p>
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Prospects */}
            <section className="py-10 md:py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1600&h=900&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <AnimatedElement animation="slide-up">
                        <h2 className="text-3xl font-bold mb-12 text-center">Career and Future Prospects</h2>
                        <div className="max-w-5xl mx-auto space-y-8 text-blue-100 leading-relaxed text-lg text-left">
                            <p>
                                Data science and artificial intelligence are revolutionizing the business world, ranging from small businesses or start-ups to large multinational companies, and even public administrations. Internships and placement as data scientists, data analysts, and data engineers will be made easier by the institution’s placement cell, industry partners, and alumni network.
                            </p>
                            <p>
                                The programme is designed to prepare students for jobs and internships in prestigious data science firms like Capgemini, IBM, Oracle, Publicis Sapient, and Wipro Ltd., as well as in industries like finance, business, economics, and healthcare.
                            </p>
                            <p>
                                The institution also offers study abroad programmes through partnerships with overseas colleges. Students who have successfully completed three years of the B.Tech. programme may choose to enroll in an integrated Master’s programme at a partner university.
                            </p>

                            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 mt-8">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                    <Globe className="w-6 h-6 mr-3 text-blue-300" />
                                    Global Opportunities & Top Recruiters
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {['Capgemini', 'IBM', 'Oracle', 'Publicis Sapient', 'Wipro Ltd.', 'Finance Sector', 'Healthcare', 'E-Commerce'].map((company, idx) => (
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

export default CSDDepartmentPage;
