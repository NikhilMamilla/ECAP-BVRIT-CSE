import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedElement } from './AnimatedElement';
import { ArrowRight, Microscope } from 'lucide-react';

const RAndDHomeSection: React.FC = () => {
    return (
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden group border-y border-slate-800">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,64,175,0.15),transparent_70%)]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0.5px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Glowing Accent Orbs */}
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="md:w-2/3 flex flex-col items-center md:items-start">
                        <AnimatedElement animation="slide-right">
                            <div className="flex flex-col md:flex-row items-center mb-6">
                                <div className="p-3 bg-blue-500/20 rounded-lg md:mr-4 mb-4 md:mb-0 backdrop-blur-sm border border-blue-400/30">
                                    <Microscope className="w-8 h-8 text-cyan-300" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold">Research & Development</h2>
                            </div>
                            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
                                Exploring new horizons through cutting-edge research and innovation.
                                Our R&D cell is committed to fostering a culture of scientific inquiry
                                and technological advancement among students and faculty.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
                                className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-cyan-500 text-white font-bold rounded-full shadow-lg hover:bg-cyan-600 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1 group"
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
