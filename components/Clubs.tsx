import React, { useState, useRef, useEffect } from 'react';
import {
    Code,
    Heart,
    Microscope,
    Award,
    ChevronRight,
    ChevronLeft,
    ExternalLink,
    Users,
    X,
    Rocket
} from 'lucide-react';
import { AnimatedElement } from './AnimatedElement';

interface Club {
    id: string;
    name: string;
    fullName: string;
    icon: typeof Code;
    color: string;
    description: string;
    mission: string;
    stats: { label: string; value: string }[];
    partners: string[];
    highlights: string[];
    upcomingEvents: { title: string; date: string }[];
    logo?: string;
    website?: string;
    email: string;
}

const clubs: Club[] = [
    {
        id: 'cbb',
        name: 'CBB',
        fullName: 'CODING BRIGADE BVRIT',
        icon: Code,
        color: 'blue',
        description:
            'Coding Brigade BVRIT is the official technical and coding club of the CSE department. It focuses on strengthening students’ fundamentals in programming, problem-solving, and software development through continuous practice and peer learning.',
        mission:
            'To build a strong technical foundation among students by promoting coding discipline, practical learning, and collaborative growth.',
        stats: [
            { label: 'Student Members', value: '600+' },
            { label: 'Technical Events', value: 'Regular' },
            { label: 'Training Focus', value: 'DSA & Dev' }
        ],
        partners: ['Infosys', 'Cisco', 'Google GDSC', 'SmartBridge'],
        highlights: [
            'Regular coding practice sessions',
            'Data Structures & Algorithms training',
            'Hands-on development workshops',
            'Peer-to-peer technical mentoring'
        ],
        upcomingEvents: [
            { title: 'Weekly Coding Sessions', date: 'Ongoing' },
            { title: 'Technical Workshops', date: 'Periodic' }
        ],
        logo: 'https://cbb.bvrit.ac.in/logo.png',
        website: 'https://cbb.bvrit.ac.in/',
        email: 'cbb@bvrit.ac.in'
    },
    {
        id: 'gdgoc',
        name: 'GDGoC',
        fullName: 'GOOGLE DEVELOPER GROUPS ON CAMPUS',
        icon: Users,
        color: 'purple',
        description:
            'GDGoC BVRIT is a student-led developer community that enables learning and application of Google technologies through workshops, guided sessions, and collaborative projects.',
        mission:
            'To create an open learning environment where students explore modern development tools and build solutions through community-driven initiatives.',
        stats: [
            { label: 'Learning Programs', value: 'Ongoing' },
            { label: 'Hands-on Projects', value: 'Multiple' },
            { label: 'Community Reach', value: 'Campus-wide' }
        ],
        partners: ['Google Developers', 'Google Cloud', 'Firebase', 'TensorFlow'],
        highlights: [
            'Google Cloud & developer tool workshops',
            'Collaborative project development',
            'Solution-based learning programs',
            'Technical community events'
        ],
        upcomingEvents: [
            { title: 'Developer Workshops', date: 'Scheduled' },
            { title: 'Community Learning Sessions', date: 'Monthly' }
        ],
        logo: '/gdgoc.png',
        website: 'https://gdgoc.bvrit.ac.in/',
        email: 'gdgoc@bvrit.ac.in'
    },
    {
        id: 'fit',
        name: 'FIT',
        fullName: 'FEMALE IN TECHNOLOGY',
        icon: Heart,
        color: 'teal',
        description:
            'Female in Technology (FIT) is an initiative aimed at encouraging and supporting women students in building strong technical and professional skills in the field of engineering.',
        mission:
            'To support women students through mentorship, skill development, and career guidance, enabling equal participation and growth in technology.',
        stats: [
            { label: 'Mentorship Support', value: 'Available' },
            { label: 'Skill Programs', value: 'Regular' },
            { label: 'Student Participation', value: 'Active' }
        ],
        partners: ['Amazon WoW', 'Adobe Women-in-Tech', 'Grace Hopper', 'Wipro'],
        highlights: [
            'Mentorship and career guidance programs',
            'Technical and professional skill training',
            'Awareness on opportunities for women in tech',
            'Peer support and leadership development'
        ],
        upcomingEvents: [
            { title: 'Mentorship Sessions', date: 'Ongoing' },
            { title: 'Skill Development Programs', date: 'Periodic' }
        ],
        logo: '/FIT.png',
        website: 'https://fit.bvrit.ac.in/',
        email: 'fit@bvrit.ac.in'
    },
    {
        id: 'src',
        name: 'SRC',
        fullName: 'STUDENT RESEARCH CELL',
        icon: Microscope,
        color: 'indigo',
        description:
            'The Student Research Cell (SRC) promotes research-oriented learning by encouraging students to explore problem statements, conduct studies, and contribute to academic research.',
        mission:
            'To nurture a research culture by guiding students in research methodology, publications, and innovation-driven projects.',
        stats: [
            { label: 'Research Papers', value: 'Published' },
            { label: 'Research Projects', value: 'Ongoing' },
            { label: 'Student Researchers', value: 'Active' }
        ],
        partners: ['IEEE', 'Springer', 'DRDO', 'ICRISAT'],
        highlights: [
            'Research methodology training',
            'Guidance for paper publication',
            'Support for patent and innovation activities',
            'Faculty-mentored research projects'
        ],
        upcomingEvents: [
            { title: 'Research Workshops', date: 'Scheduled' },
            { title: 'Paper Writing Sessions', date: 'Periodic' }
        ],
        logo: '/SRC2.png',
        website: 'https://src.bvrit.ac.in/',
        email: 'src@bvrit.ac.in'
    }
];

const Clubs: React.FC = () => {
    const [selectedClub, setSelectedClub] = useState<string | null>(null);
    const [clubIdx, setClubIdx] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const detailsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNext = () => setClubIdx((prev) => (prev + 1) % clubs.length);
    const handlePrev = () => setClubIdx((prev) => (prev - 1 + clubs.length) % clubs.length);

    const colorMap: Record<
        string,
        { bg: string; text: string; border: string }
    > = {
        blue: {
            bg: 'bg-blue-600',
            text: 'text-blue-600',
            border: 'border-blue-600'
        },
        teal: {
            bg: 'bg-teal-600',
            text: 'text-teal-600',
            border: 'border-teal-600'
        },
        indigo: {
            bg: 'bg-indigo-600',
            text: 'text-indigo-600',
            border: 'border-indigo-600'
        },
        purple: {
            bg: 'bg-purple-600',
            text: 'text-purple-600',
            border: 'border-purple-600'
        }
    };

    const currentClub = clubs.find((c) => c.id === selectedClub);

    useEffect(() => {
        if (selectedClub && detailsRef.current) {
            const yOffset = -60;
            const y =
                detailsRef.current.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [selectedClub]);

    return (
        <section id="clubs" className="bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <AnimatedElement animation="slide-down" className="block">
                        <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-2 block">
                            Our Ecosystem
                        </span>
                        <h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            Student <span className="text-blue-600">Clubs</span>
                        </h2>
                    </AnimatedElement>
                    <AnimatedElement animation="fade-in" delay={200} className="block">
                        <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
                            A thriving network of specialized communities where passion meets opportunity and
                            leadership begins.
                        </p>
                    </AnimatedElement>
                </div>

                {/* Cards */}
                {isMobile ? (
                    <div className="relative mb-8">
                        <div className="overflow-hidden p-4 -m-4">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${clubIdx * 100}%)` }}
                            >
                                {clubs.map((club) => (
                                    <div key={club.id} className="w-full flex-shrink-0 px-2">
                                        <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100 shadow-md">
                                            <div className="h-40 w-full bg-slate-50 flex items-center justify-center p-6">
                                                {club.logo ? (
                                                    <img
                                                        src={club.logo}
                                                        alt={club.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <club.icon className={`w-16 h-16 ${colorMap[club.color].text}`} />
                                                )}
                                            </div>

                                            <div className="p-4 text-center">
                                                <h3 className={`text-xl font-bold mb-0.5 ${colorMap[club.color].text}`}>
                                                    {club.name}
                                                </h3>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">
                                                    {club.fullName}
                                                </p>

                                                <button
                                                    onClick={() => setSelectedClub(club.id)}
                                                    className="w-full py-2.5 px-6 rounded-xl text-xs font-bold uppercase tracking-widest bg-white text-black border border-slate-200 hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                                                >
                                                    Explore Now
                                                    <ChevronRight className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider dots */}
                        <div className="flex justify-center gap-4 mt-4 items-center">
                            <button
                                onClick={handlePrev}
                                className="p-1 rounded-full border border-gray-200 text-gray-400"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <div className="flex gap-1.5">
                                {clubs.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1 rounded-full transition-all duration-300 ${i === clubIdx ? 'w-5 bg-blue-600' : 'w-1 bg-slate-200'
                                            }`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handleNext}
                                className="p-1 rounded-full border border-gray-200 text-gray-400"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                        {clubs.map((club, index) => (
                            <AnimatedElement
                                key={club.id}
                                animation="slide-up"
                                delay={index * 100}
                                className="block h-full"
                            >
                                <div className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col">
                                    <div className="h-40 w-full bg-slate-50/50 flex items-center justify-center p-6">
                                        {club.logo ? (
                                            <img
                                                src={club.logo}
                                                alt={club.name}
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <club.icon
                                                className={`w-14 h-14 ${colorMap[club.color].text}`}
                                            />
                                        )}
                                    </div>

                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="text-center mb-4">
                                            <h3 className={`text-xl font-bold mb-0 ${colorMap[club.color].text}`}>
                                                {club.name}
                                            </h3>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                                {club.fullName}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() => setSelectedClub(club.id)}
                                            className="mt-auto w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-white text-black border border-slate-200 hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
                                        >
                                            Explore Now
                                            <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                )}

                {/* Expanded details */}
                {currentClub && (
                    <AnimatedElement animation="slide-up" className="block mt-6 md:mt-10 scroll-mt-20">
                        <div
                            ref={detailsRef}
                            className="relative rounded-[1.5rem] md:rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl overflow-hidden mx-auto max-w-7xl"
                        >
                            {/* subtle centered logo */}
                            {currentClub.logo && (
                                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
                                    <img
                                        src={currentClub.logo}
                                        alt={`${currentClub.name} logo`}
                                        className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain"
                                    />
                                </div>
                            )}

                            <div className="p-6 md:p-8 lg:p-10 relative z-10">
                                {/* Close button (simpler) */}
                                <button
                                    onClick={() => setSelectedClub(null)}
                                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-all"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Header: logo + short + full name underneath */}
                                <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 border-b border-slate-100 pb-6 md:pb-8">
                                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center">
                                        {currentClub.logo ? (
                                            <img
                                                src={currentClub.logo}
                                                alt={currentClub.name}
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <currentClub.icon
                                                className={`w-14 h-14 ${colorMap[currentClub.color].text}`}
                                            />
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-3 text-center md:text-left flex-1">
                                        <div>
                                            <div
                                                className="text-4xl md:text-5xl font-black text-slate-900 leading-none"
                                                style={{ fontFamily: 'Georgia, serif' }}
                                            >
                                                {currentClub.name}
                                            </div>
                                            <div className="mt-1 text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-[0.25em]">
                                                {currentClub.fullName}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-2">
                                            {currentClub.website && (
                                                <a
                                                    href={currentClub.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all uppercase tracking-wide"
                                                >
                                                    Official Portal
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                            <a
                                                href={`mailto:${currentClub.email}`}
                                                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold border border-blue-600 text-blue-600 hover:border-blue-700 hover:text-blue-700 transition-all uppercase tracking-wide"
                                            >
                                                Contact Lead
                                                <Heart className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom: three columns */}
                                <div className="grid lg:grid-cols-3 gap-8 md:gap-10 pt-6 md:pt-8">
                                    {/* Mission & Vision */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-2 flex items-center gap-3">
                                            <span
                                                className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs text-white ${colorMap[currentClub.color].bg}`}
                                            >
                                                01
                                            </span>
                                            Mission & Vision
                                        </h4>
                                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                            {currentClub.description}
                                        </p>
                                        <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-slate-200 italic">
                                            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                                                "{currentClub.mission}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Core pillars */}
                                    <div className="space-y-4">
                                        <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-2 flex items-center gap-3">
                                            <Award className={`w-4 h-4 md:w-5 md:h-5 ${colorMap[currentClub.color].text}`} />
                                            Core Pillars
                                        </h4>
                                        <ul className="space-y-2">
                                            {currentClub.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span
                                                        className={`mt-1 w-1.5 h-1.5 rounded-full ${colorMap[currentClub.color].bg}`}
                                                    />
                                                    <span className="text-sm md:text-base text-slate-600">{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Events & Partners */}
                                    <div className="space-y-5">
                                        <div className="space-y-3">
                                            <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-[0.2em] mb-1 flex items-center gap-3">
                                                <Rocket className={`w-4 h-4 md:w-5 md:h-5 ${colorMap[currentClub.color].text}`} />
                                                Upcoming Milestones
                                            </h4>
                                            <div className="space-y-2">
                                                {currentClub.upcomingEvents.map((e, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex justify-between items-center px-4 py-3 rounded-xl bg-slate-50 border border-slate-100"
                                                    >
                                                        <span className="text-sm font-semibold text-slate-800">{e.title}</span>
                                                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">
                                                            {e.date}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] mb-2">
                                                Strategic Partners
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {currentClub.partners.map((p, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1.5 bg-white border border-slate-100 rounded-lg text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-tight"
                                                    >
                                                        {p}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedElement>
                )}
            </div>
        </section>
    );
};

export default Clubs;
