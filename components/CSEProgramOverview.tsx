import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedElement } from './AnimatedElement';

const programs = [
    {
        code: 'CSE',
        fullName: 'Computer Science & Engineering',
        description: 'Core computer science fundamentals combined with cutting-edge technologies and industry-aligned curriculum',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    },
    {
        code: 'IT',
        fullName: 'Information Technology',
        description: 'Focus on IT infrastructure, software solutions, and emerging technologies for digital transformation',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop'
    },
    {
        code: 'AI & DS',
        fullName: 'Artificial Intelligence & Data Science',
        description: 'Advanced specialization in AI, machine learning, data analytics, and intelligent systems development',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
    },
    {
        code: 'CSM',
        fullName: 'Computer Science & Engineering (AI & ML)',
        description: 'Specialized track focusing on artificial intelligence and machine learning with hands-on projects',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop'
    },
    {
        code: 'CSD',
        fullName: 'Computer Science (Data Science)',
        description: 'Big data analytics, business intelligence, and data-driven decision making with real-world applications',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
    },
    {
        code: 'CSBS',
        fullName: 'Computer Science & Business Systems',
        description: 'Unique integration of computer science with business management and entrepreneurial skills',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
    }
];

const CSEProgramOverview: React.FC = () => {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <AnimatedElement animation="slide-down" className="block">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                            CSE Programs & Specializations
                        </h2>
                    </AnimatedElement>
                    <AnimatedElement animation="fade-in" delay={200} className="block">
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Explore our NBA-accredited programs tailored for tomorrow's tech leaders
                        </p>
                    </AnimatedElement>
                </div>

                {/* Static Programs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full border border-blue-300">
                            {/* Program Image with Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.code}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>

                                {/* Program Code & Name */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{program.code}</h3>
                                    <p className="text-sm text-blue-200 font-semibold">{program.fullName}</p>
                                </div>
                            </div>

                            {/* Program Details - White background */}
                            <div className="p-6 bg-white">
                                <p className="text-gray-700 text-sm leading-relaxed h-12 overflow-hidden">{program.description}</p>

                                <Link
                                    to={
                                        program.code === 'IT' ? "/it-department" :
                                            program.code === 'CSBS' ? "/csbs-department" :
                                                program.code === 'AI & DS' ? "/ai-ds-department" :
                                                    program.code === 'CSM' ? "/csm-department" :
                                                        program.code === 'CSD' ? "/csd-department" :
                                                            "/cse-department"
                                    }
                                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center text-sm"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <AnimatedElement animation="fade-in" delay={400} className="inline-block">
                        <a
                            href="#"
                            className="inline-flex items-center px-6 py-2.5 sm:px-8 sm:py-3 bg-blue-600 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Download CSE Brochure
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </AnimatedElement>
                </div>

            </div >
        </section >
    );
};

export default CSEProgramOverview;
