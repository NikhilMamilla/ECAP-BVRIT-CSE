import React, { useState, useRef, useEffect } from 'react';
import { Code, Heart, Microscope, Award, ChevronRight, ChevronLeft, ExternalLink, Users, X } from 'lucide-react';
import { AnimatedElement } from './AnimatedElement';

interface Club {
    id: string;
    name: string;
    fullName: string;
    icon: typeof Code;
    color: string;
    description: string;
    partners: string[];
    highlights: string[];
    logo?: string;
    website?: string;
    email: string;
}

const clubs: Club[] = [
    {
        id: 'cbb',
        name: 'CBB',
        fullName: 'Coding Brigade BVRIT',
        icon: Code,
        color: 'blue',
        description:
            'The official coding club of the CSE department, focused on hackathons, coding contests, workshops, and technical skill development.',
        partners: ['Infosys Springboard', 'Google GDSC', 'Cisco Academy', 'TwinNetworking'],
        highlights: [
            'Hackathons & coding competitions',
            'Technical workshops',
            'Junior mentorship programs',
            'Career building sessions',
        ],
        logo: 'https://cbb.bvrit.ac.in/logo.png',
        website: 'https://cbb.bvrit.ac.in/',
        email: 'cbb@bvrit.ac.in'
    },
    {
        id: 'gdgoc',
        name: 'GDGoC',
        fullName: 'Google Developer Groups on Campus',
        icon: Users,
        color: 'purple',
        description:
            'A campus-based Google developer community where students learn, build projects, and explore modern Google technologies.',
        partners: ['Google Developers', 'Google Cloud', 'Android', 'Firebase'],
        highlights: [
            'Google technology workshops',
            'Cloud computing sessions',
            'Mobile app development',
            'Community building events',
        ],
        logo: '/gdgoc.png',
        website: 'https://gdgoc.bvrit.ac.in/',
        email: 'gdgoc@bvrit.ac.in'
    },
    {
        id: 'fit',
        name: 'FIT',
        fullName: 'Female in Technology',
        icon: Heart,
        color: 'teal',
        description:
            'An initiative empowering women in tech through mentorship, leadership programs, scholarships, and industry exposure.',
        partners: ['Grace Hopper Virtuosa', 'Amazon WoW', 'Deloitte', 'Walmart', 'Flipkart Girls'],
        highlights: [
            'Scholarships for women in tech',
            'Leadership programs',
            'Mentorship opportunities',
            'Industry exposure events',
        ],
        logo: '/FIT.png',
        website: 'https://fit.bvrit.ac.in/',
        email: 'fit@bvrit.ac.in'
    },
    {
        id: 'src',
        name: 'SRC',
        fullName: 'Student Research Cell',
        icon: Microscope,
        color: 'indigo',
        description:
            'A research-focused community supporting innovation, patents, publications, and participation in academic conferences.',
        partners: ['ICRISAT', 'NIAS', 'TIHAN IIT Hyderabad'],
        highlights: [
            'Patent achievements',
            'Research paper publications',
            'Conference participation guidance',
            'Innovation support',
        ],
        logo: '/SRC2.png',
        website: 'https://src.bvrit.ac.in/',
        email: 'src@bvrit.ac.in'
    },
];


const Clubs: React.FC = () => {
    const [selectedClub, setSelectedClub] = useState<string | null>(null);
    const [clubIdx, setClubIdx] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const detailsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNext = () => {
        setClubIdx((prev) => (prev + 1) % clubs.length);
    };

    const handlePrev = () => {
        setClubIdx((prev) => (prev - 1 + clubs.length) % clubs.length);
    };

    const colorMap: Record<string, { bg: string; text: string; lightBg: string; border: string; gradient: string }> = {
        blue: {
            bg: 'bg-blue-600',
            text: 'text-blue-600',
            lightBg: 'bg-blue-50',
            border: 'border-blue-600',
            gradient: 'from-blue-900/90 via-blue-900/50 to-transparent'
        },
        teal: {
            bg: 'bg-teal-600',
            text: 'text-teal-600',
            lightBg: 'bg-teal-50',
            border: 'border-teal-600',
            gradient: 'from-teal-900/90 via-teal-900/50 to-transparent'
        },
        indigo: {
            bg: 'bg-indigo-600',
            text: 'text-indigo-600',
            lightBg: 'bg-indigo-50',
            border: 'border-indigo-600',
            gradient: 'from-indigo-900/90 via-indigo-900/50 to-transparent'
        },
        purple: {
            bg: 'bg-purple-600',
            text: 'text-purple-600',
            lightBg: 'bg-purple-50',
            border: 'border-purple-600',
            gradient: 'from-purple-900/90 via-purple-900/50 to-transparent'
        },
    };

    const currentClub = clubs.find((c) => c.id === selectedClub);
    useEffect(() => {
        if (selectedClub && detailsRef.current) {
            const yOffset = -100;
            const y =
                detailsRef.current.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth',
            });
        }
    }, [selectedClub]);

    return (
        <section id="clubs" className="bg-white py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <AnimatedElement animation="slide-down" className="block">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                            Student <span className="text-blue-600">Clubs</span>
                        </h2>
                    </AnimatedElement>
                    <AnimatedElement animation="fade-in" delay={200} className="block">
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Join vibrant communities dedicated to innovation, leadership, and collaboration
                        </p>
                    </AnimatedElement>
                </div>

                {/* Club Cards - Desktop Grid / Mobile Slider */}
                {isMobile ? (
                    <div className="relative mb-12">
                        <div className="overflow-hidden p-4 -m-4">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${clubIdx * 100}%)` }}
                            >
                                {clubs.map((club) => (
                                    <div key={club.id} className="w-full flex-shrink-0 px-2">
                                        <div
                                            onClick={() => setSelectedClub(selectedClub === club.id ? null : club.id)}
                                            className={`group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 border-2 ${selectedClub === club.id ? `border-${club.color}-500 shadow-xl` : 'border-gray-200 shadow-lg'}`}
                                        >
                                            <div className="h-48 w-full bg-white flex items-center justify-center p-4 border-b border-gray-100 relative group-hover:bg-gray-50 transition-colors duration-500">
                                                {club.logo ? (
                                                    <img
                                                        src={club.logo}
                                                        alt={club.name}
                                                        className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                ) : (
                                                    <club.icon className={`w-24 h-24 ${colorMap[club.color].text}`} />
                                                )}
                                            </div>

                                            <div className="p-5 text-center">
                                                <h3 className={`text-xl font-bold mb-1 ${colorMap[club.color].text}`}>{club.name}</h3>
                                                <p className="text-xs font-bold text-gray-800 uppercase tracking-wide mb-3 line-clamp-1">{club.fullName}</p>

                                                <button className={`w-full py-2.5 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wide ${selectedClub === club.id ? `${colorMap[club.color].bg} text-white shadow-lg` : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
                                                    {selectedClub === club.id ? 'Hide Details' : 'View Details'}
                                                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${selectedClub === club.id ? 'rotate-90' : ''}`} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Nav */}
                        <div className="flex justify-center gap-4 mt-6 items-center">
                            <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex gap-3">
                                {clubs.map((_, i) => (
                                    <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === clubIdx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300'}`} />
                                ))}
                            </div>
                            <button onClick={handleNext} className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {clubs.map((club, index) => (
                            <AnimatedElement key={club.id} animation="slide-up" delay={index * 100} className="block h-full">
                                <div
                                    onClick={() => {
                                        setSelectedClub(selectedClub === club.id ? null : club.id);
                                    }}
                                    className={`group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 border-2 h-full flex flex-col ${selectedClub === club.id ? `border-${club.color}-500 shadow-xl ring-2 ring-${club.color}-200` : 'border-gray-200 shadow-hover hover:border-gray-300'}`}
                                >
                                    <div className="h-44 w-full bg-white flex items-center justify-center p-6 border-b border-gray-100 relative overflow-hidden">
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${colorMap[club.color].bg}`} />

                                        {club.logo ? (
                                            <img
                                                src={club.logo}
                                                alt={club.name}
                                                className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110 filter drop-shadow-sm"
                                            />
                                        ) : (
                                            <club.icon className={`w-24 h-24 ${colorMap[club.color].text} transition-transform duration-500 group-hover:scale-110`} />
                                        )}
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow bg-white">
                                        <div className="text-center mb-3">
                                            <h3 className={`text-2xl font-bold mb-0.5 transition-colors ${colorMap[club.color].text}`}>{club.name}</h3>
                                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">{club.fullName}</p>
                                        </div>

                                        <div className="flex-grow"></div>

                                        <button
                                            className={`mt-auto w-full py-2.5 px-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wide ${selectedClub === club.id ? `${colorMap[club.color].bg} text-white shadow-lg` : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}
                                        >
                                            {selectedClub === club.id ? 'Hide Details' : 'View Details'}
                                            <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${selectedClub === club.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                                        </button>
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                )}

                {/* Expanded Details Section */}
                {currentClub && (
                    <AnimatedElement animation="slide-up" className="block mt-8 scroll-mt-24">
                        <div ref={detailsRef} className="relative rounded-3xl bg-white border border-gray-100 shadow-2xl overflow-hidden" id="club-details">
                            {/* Decorative Top Line */}
                            <div className={`h-1.5 w-full ${colorMap[currentClub.color].bg}`} />

                            <div className="p-6 md:p-10 relative">
                                {/* Background Large Logo Faded */}
                                <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4 overflow-hidden">
                                    {currentClub.logo && <img src={currentClub.logo} alt="" className="w-[500px] h-[500px] object-contain grayscale" />}
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedClub(null);
                                    }}
                                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors z-20 border border-gray-200"
                                    aria-label="Close details"
                                >
                                    <X className="w-5 h-5" strokeWidth={2.5} />
                                </button>

                                <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                                    {/* Main Content (2 cols) */}
                                    <div className="md:col-span-2 space-y-8">
                                        {/* Header */}
                                        <div className="flex flex-col md:flex-row gap-6 items-start">
                                            <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm flex items-center justify-center">
                                                {currentClub.logo ? (
                                                    <img src={currentClub.logo} alt={currentClub.name} className="w-full h-full object-contain" />
                                                ) : (
                                                    <currentClub.icon className={`w-12 h-12 ${colorMap[currentClub.color].text}`} />
                                                )}
                                            </div>
                                            <div className="flex-grow pt-1">
                                                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 leading-tight">{currentClub.name}</h3>
                                                <h4 className="text-lg md:text-xl font-medium text-gray-500 mb-4 leading-snug">{currentClub.fullName}</h4>
                                                {currentClub.website && (
                                                    <a
                                                        href={currentClub.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold ${colorMap[currentClub.color].bg} text-white hover:opacity-90 transition-all shadow-sm transform hover:-translate-y-0.5`}
                                                    >
                                                        Visit Official Website <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 pt-8">
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                About the Club
                                            </h4>
                                            <p className="text-gray-600 leading-relaxed text-lg">{currentClub.description}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                Key Highlights
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {currentClub.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                                                        <div className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${colorMap[currentClub.color].bg}`} />
                                                        <span className="text-gray-700 font-medium text-sm leading-relaxed">{highlight}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar (1 col) */}
                                    <div className="space-y-6">
                                        {/* Partners */}
                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                            <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                <Award className="w-4 h-4" />
                                                Our Partners
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {currentClub.partners.map((partner, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-700 shadow-sm"
                                                    >
                                                        {partner}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Join Card */}
                                        <div className={`rounded-3xl p-8 text-white shadow-xl relative overflow-hidden ${colorMap[currentClub.color].bg}`}>
                                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                                <currentClub.icon className="w-32 h-32 transform translate-x-10 -translate-y-10" />
                                            </div>
                                            <h4 className="text-2xl font-bold mb-3 relative z-10">Join {currentClub.name}</h4>
                                            <p className="text-white/90 text-sm mb-6 leading-relaxed relative z-10">
                                                Be part of a thriving community. innovative? Connect with us to start your journey in {currentClub.fullName}.
                                            </p>
                                            <a
                                                href={`mailto:${currentClub.email}`}
                                                className="w-full py-3.5 rounded-xl bg-white text-gray-900 font-bold text-sm shadow-sm hover:bg-gray-50 transition-colors relative z-10 uppercase tracking-wide flex justify-center items-center"
                                            >
                                                Contact Coordinator
                                            </a>
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
