import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedElement } from './AnimatedElement';
import { ArrowRight, Microscope } from 'lucide-react';

const RAndDHomeSection: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-2/3">
                        <AnimatedElement animation="slide-right">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg mr-4 backdrop-blur-sm border border-blue-400/30">
                                    <Microscope className="w-8 h-8 text-cyan-300" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold">Research & Development</h2>
                            </div>
                            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl">
                                Exploring new horizons through cutting-edge research and innovation.
                                Our R&D cell is committed to fostering a culture of scientific inquiry
                                and technological advancement among students and faculty.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-medium">
                                    Sponsored Projects
                                </div>
                                <div className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-medium">
                                    Patents
                                </div>
                                <div className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-medium">
                                    Publications
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>

                    <div className="md:w-1/3 text-center md:text-right">
                        <AnimatedElement animation="zoom-in" delay={200}>
                            <Link
                                to="/r-and-d"
                                className="inline-flex items-center px-8 py-4 bg-cyan-500 text-white font-bold rounded-full shadow-lg hover:bg-cyan-600 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
                            >
                                <span>Explore R&D</span>
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </AnimatedElement>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RAndDHomeSection;
