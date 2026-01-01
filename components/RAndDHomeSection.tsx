import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedElement } from './AnimatedElement';
import { ArrowRight, Microscope, Target, Lightbulb, TrendingUp } from 'lucide-react';

const RAndDHomeSection: React.FC = () => {
    return (
        <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(30,64,175,0.2),transparent_70%)]" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Glowing Accent Orbs */}
            <div className="absolute -left-20 top-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute -right-20 bottom-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-20">
                    <div className="lg:w-3/5">
                        <AnimatedElement animation="slide-right">
                            {/* Section Label */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <Microscope className="w-3.5 h-3.5" />
                                R&D Cell
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 transition-all duration-300 tracking-tight leading-[1.1]">
                                Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Development</span>
                            </h2>

                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
                                Exploring new horizons through cutting-edge research and innovation.
                                Our R&D cell is committed to fostering a culture of scientific inquiry
                                and technological advancement among students and faculty.
                            </p>

                            {/* Structured Tags/Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 group/item hover:bg-white/10 transition-all duration-300">
                                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-all">
                                        <Target className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-200">Sponsored Projects</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 group/item hover:bg-white/10 transition-all duration-300">
                                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white transition-all">
                                        <Lightbulb className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-200">Innovation Patents</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 group/item hover:bg-white/10 transition-all duration-300">
                                    <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 group-hover/item:bg-cyan-500 group-hover/item:text-white transition-all">
                                        <TrendingUp className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-200">Global Publications</span>
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>

                    <div className="lg:w-1/3">
                        <AnimatedElement animation="zoom-in" delay={200}>
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                                <Link
                                    to="/r-and-d"
                                    className="relative flex items-center justify-center w-full px-8 py-5 bg-slate-900 border border-slate-700/50 text-white font-bold rounded-full shadow-2xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-3 text-lg">
                                        Explore R&D Cell
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RAndDHomeSection;
