import React, { useEffect } from 'react';
import { AnimatedElement } from '../AnimatedElement';
import Header from '../Header';
import Footer from '../Footer';
import {
    FileText,
    Users,
    Award,
    Lightbulb,
    Target,
    Microscope,
    BookOpen,
    ExternalLink
} from 'lucide-react';

const RAndDPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pdfLinks = [
        {
            title: "Research Advisory Committee",
            file: "/R&D/RAC.pdf.pdf",
            icon: <Users className="w-6 h-6" />,
            description: "View the members and structure of the Research Advisory Committee."
        },
        {
            title: "Institutional Ethics Committee",
            file: "/R&D/Institution Ethics Committee 2023-24.pdf",
            icon: <ShieldCheck className="w-6 h-6" />,
            description: "Details about the ethical guidelines and committee members."
        },
        {
            title: "Research Committee",
            file: "/R&D/R & D Committee 2023-24.pdf",
            icon: <Users className="w-6 h-6" />,
            description: "Information regarding the Research Committee."
        },
        {
            title: "Sponsored Research Projects",
            file: "/R&D/Sponsored Projects.pdf",
            icon: <Award className="w-6 h-6" />,
            description: "List of ongoing and completed sponsored research projects."
        },
        {
            title: "Research Papers Published",
            file: "/R&D/Scopus - WoS Publications.pdf",
            icon: <FileText className="w-6 h-6" />,
            description: "Publications in Scopus and Web of Science indexed journals."
        },
        {
            title: "Patents",
            file: "/R&D/Patents.pdf",
            icon: <Lightbulb className="w-6 h-6" />,
            description: "Patents filed and granted to faculty and students."
        }
    ];

    const thrustAreas = [
        "Deep Learning & AI", "Assistive Technology",
        "Data Sciences", "Medical diagnostics",
        "Network Security", "Advanced Machining Process-EDM",
        "Grid Computing", "Nanotechnology",
        "Image Processing", "Mathematical Modeling & Simulation",
        "Cognitive Science", "Optimization & Control",
        "Antenna Design & Communications", "High Voltage Engineering",
        "Radar Signal Processing", "Water Resources Engineering & GIS",
        "VLSI & Robotics", "IOT"
    ];

    const researchCenters = [
        "Department of Computer Science and Engineering",
        "Department of Electronics and Communication Engineering",
        "Department of Electrical and Electronics Engineering",
        "Department of Mechanical Engineering",
        "Department of Chemical Engineering"
    ];

    const specialLabs = [
        "AICTE Idea Lab", "Analog Discovery Lab", "Assistive Technologies Lab",
        "Center for Automotive Technologies", "Center for Cognitive Science", "Center for Nanotechnology",
        "Center for VLSI Design", "Cloud Computing Center", "Cyent Incubation Center",
        "IBM Center of Excellence", "Mission R&D initiative", "National Instruments Lab",
        "Particle Technology Lab", "Process Modeling & Simulation Center", "Randy Pausch Robotics Engineering Center",
        "Research Center for Process Intensification", "Texas Instruments Lab", "TVS-HaritaTechserv Centre of Excellence",
        "Virtusa-Pega University Lab"
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <Header />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1600&h=900&fit=crop"
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
                            Research & <br />
                            <span className="text-cyan-200">Development</span>
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

            {/* About R&D */}
            <section className="py-10 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <AnimatedElement animation="fade-in">
                            <div className="flex items-center mb-8 justify-center">
                                <div className="w-2 h-10 bg-blue-600 mr-4 rounded-full"></div>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About R&D</h2>
                            </div>
                            <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-left bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm">
                                <p>
                                    BVRIT is a premier institute having highly committed faculty with admirable academic and research background and strong inclination towards research and development of innovative technologies. The faculty of the institute offer quality research training to the students through various in-house and industry collaborative projects. The execution of various sponsored projects granted by DST, UGC and AICTE, and a number of research papers published in SCI/SCOPUS indexed journals indicate the institute’s strength in R&D.
                                </p>
                                <p>
                                    The R&D programs of the institute are lead by highly experienced persons with industry and academic background. The department level faculty and student research projects are monitored by lead coordinators of the respective departments. The institute has identified a number of thrust areas enabling the faculty and students to choose research problems. The institute has setup various research centers and special labs facilitating the students and faculty to participate in exciting research projects with innovative ideas.
                                </p>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </section>

            {/* PDF Links Grid */}
            <section className="py-10 md:py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pdfLinks.map((item, index) => (
                            <AnimatedElement key={index} animation="slide-up" delay={index * 100}>
                                <a
                                    href={item.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-white p-8 rounded-xl shadow-md hover:shadow-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 group h-full"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </a>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* Thrust Areas */}
            <section className="py-10 md:py-20">
                <div className="container mx-auto px-4">
                    <AnimatedElement animation="slide-down">
                        <div className="flex items-center mb-12 justify-center">
                            <Target className="w-8 h-8 text-cyan-600 mr-3" />
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Thrust Areas of R&D</h2>
                        </div>
                    </AnimatedElement>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {thrustAreas.map((area, index) => (
                            <AnimatedElement key={index} animation="fade-in" delay={index * 50}>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-cyan-300 hover:shadow-md transition-all duration-300 flex items-center group">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 group-hover:scale-150 transition-transform"></div>
                                    <span className="text-gray-800 font-medium group-hover:text-cyan-700 transition-colors">{area}</span>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>

            {/* Research Centers & Special Labs */}
            <section className="py-10 md:py-20 bg-white text-gray-800 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Research Centers */}
                        <AnimatedElement animation="slide-right">
                            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-lg h-full">
                                <div className="flex items-center mb-8">
                                    <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                                    <h2 className="text-2xl font-bold text-gray-900">JNTUH Recognized Research Centers</h2>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {researchCenters.map((center, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <div className="mt-1.5 mr-3 min-w-[6px] h-1.5 bg-blue-600 rounded-full"></div>
                                            <span className="text-gray-700 text-lg">{center}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="/R&D/JNTUH Recognized Supervisors.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold shadow-md group"
                                >
                                    <Users className="w-5 h-5 mr-2" />
                                    List of JNTUH Recognised Supervisors
                                    <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover:opacity-100" />
                                </a>
                            </div>
                        </AnimatedElement>

                        {/* Special Labs */}
                        <AnimatedElement animation="slide-left" delay={200}>
                            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-purple-100 shadow-lg h-full">
                                <div className="flex items-center mb-8">
                                    <Microscope className="w-8 h-8 text-purple-600 mr-3" />
                                    <h2 className="text-2xl font-bold text-gray-900">Special Laboratories</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {specialLabs.map((lab, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className="mt-2 mr-3 min-w-[6px] h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                                            <span className="text-gray-700 hover:text-purple-700 transition-colors cursor-default text-base leading-tight">{lab}</span>
                                        </div>
                                    ))}
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

// Helper component for ShieldCheck
const ShieldCheck = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

export default RAndDPage;
