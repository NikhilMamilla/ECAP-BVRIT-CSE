import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Handshake, Rocket, GraduationCap, FileText, CheckCircle2, Award } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const GraceHopperCOE: React.FC = () => {
    const navigate = useNavigate();

    const highlights = [
        {
            icon: Handshake,
            count: '8+',
            title: 'Industry Partners',
            description: 'Leading tech companies'
        },
        {
            icon: Rocket,
            count: '20+',
            title: 'Projects Completed',
            description: 'Real-time collaborations'
        },
        {
            icon: GraduationCap,
            count: '60+',
            title: 'Students Placed',
            description: 'Outstanding placements'
        },
        {
            icon: FileText,
            count: '15+',
            title: 'Publications published',
            description: 'IEEE conferences & journals'
        }
    ];

    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <AnimatedElement animation="slide-down" className="block">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                            Grace Hopper Center of Excellence
                        </h2>
                    </AnimatedElement>
                    <AnimatedElement animation="fade-in" delay={200} className="block">
                        <p className="mt-4 text-xl text-blue-600 font-semibold">
                            Where Innovation meets opportunity
                        </p>
                    </AnimatedElement>
                    <AnimatedElement animation="fade-in" delay={300} className="block">
                        <p className="mt-4 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            A dedicated institutional initiative bridging academic learning and real-world industry requirements.
                            Named after Grace Hopper, pioneering computer scientist and innovator, our center empowers students
                            with cutting-edge skills, industry partnerships, and research opportunities.
                        </p>
                    </AnimatedElement>
                </div>

                {/* Highlight Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {highlights.map((highlight, index) => {
                        const IconComponent = highlight.icon;
                        return (
                            <AnimatedElement key={index} animation="slide-up" delay={index * 100} className="h-full">
                                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100">
                                    <div className="flex justify-center mb-3">
                                        <IconComponent className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
                                    </div>
                                    <div className="text-4xl font-bold text-blue-600 mb-1">{highlight.count}</div>
                                    <div className="text-sm font-semibold text-gray-900 mb-1">{highlight.title}</div>
                                    <div className="text-xs text-gray-600">{highlight.description}</div>
                                </div>
                            </AnimatedElement>
                        );
                    })}
                </div>

                {/* Featured Content Preview */}
                <AnimatedElement animation="fade-in" delay={400} className="block mb-12">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-100">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Special?</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Industry partnerships with Hexagon, One Convergence, Qualizeal, ForageAI, and more</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Research collaborations with IIT Hyderabad, ICRISAT, IISc-NIAS, and IIIT Hyderabad</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Industry certifications from Google, IBM, Cisco, Oracle, Tech Mahindra, and more</span>
                                    </li>
                                    {/* <li className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Dedicated faculty team and comprehensive skill development programs</span>
                                    </li> */}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Success Stories</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <Award className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">2 patents published in 2024, multiple IEEE publications with citations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Award className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">IEEE YESIST12 2024 Best Project Award for Medical Imaging GAN</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Award className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Startup success: AGT Solutions earning 3 Lakhs from real client projects</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Award className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Outstanding placements with packages up to 19.56 LPA and international offers</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>

                {/* Explore Button */}
                <div className="text-center">
                    <AnimatedElement animation="fade-in" delay={500} className="inline-block">
                        <button
                            onClick={() => navigate('/cse/grace-hopper')}
                            className="inline-flex items-center px-6 py-3 sm:px-10 sm:py-4 bg-blue-600 text-white rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                        >
                            Explore Grace Hopper COE
                            <svg
                                className="w-6 h-6 ml-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </AnimatedElement>
                </div>
            </div>
        </section>
    );
};

export default GraceHopperCOE;
