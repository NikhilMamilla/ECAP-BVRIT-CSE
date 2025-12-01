import React, { useState } from 'react';
import { Code, Heart, Microscope, Award, ChevronRight, ExternalLink, Users, X } from 'lucide-react';
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
}

const clubs: Club[] = [
    {
        id: 'cbb',
        name: 'CBB',
        fullName: 'Coding Brigade BVRIT',
        icon: Code,
        color: 'blue',
        description:
            'The official coding club of the CSE department. Organizes hackathons, coding competitions, technical workshops, and skill-development events. Leads sessions for juniors, helping them with programming, projects, and career building in tech.',
        partners: ['Infosys Springboard', 'Google GDSC', 'Cisco Academy', 'TwinNetworking'],
        highlights: [
            'Hackathons & coding competitions',
            'Technical workshops',
            'Junior mentorship programs',
            'Career building sessions',
        ],
        logo: 'https://cbb.bvrit.ac.in/logo.png',
        website: 'https://cbb.bvrit.ac.in/',
    },
    {
        id: 'gdgoc',
        name: 'GDGoC',
        fullName: 'Google Developer Groups on Campus',
        icon: Users,
        color: 'purple',
        description:
            'Google Developer Groups on Campus is a university-based community group for students interested in Google developer technologies. Students from all undergraduate and graduate programs are welcome to join and learn about various Google technologies, build solutions for local businesses and communities, and connect with other developers.',
        partners: ['Google Developers', 'Google Cloud', 'Android', 'Firebase'],
        highlights: [
            'Google technology workshops',
            'Cloud computing sessions',
            'Mobile app development',
            'Community building events',
        ],
        logo: '/gdgoc-logo.png',
    },
    {
        id: 'fit',
        name: 'FIT',
        fullName: 'Female in Technology',
        icon: Heart,
        color: 'teal',
        description:
            'A club dedicated to empowering female students through scholarships, mentorship, and exclusive opportunities. Members benefit from programs focused on leadership, skill-building, and industry exposure for women in tech.',
        partners: ['Grace Hopper Virtuosa', 'Amazon WoW', 'Deloitte', 'Walmart', 'Flipkart Girls'],
        highlights: [
            'Scholarships for women in tech',
            'Leadership programs',
            'Mentorship opportunities',
            'Industry exposure events',
        ],
        logo: '/fit-logo.png',
    },
    {
        id: 'src',
        name: 'SRC',
        fullName: 'Student Research Cell',
        icon: Microscope,
        color: 'indigo',
        description:
            'A hub for student-driven research, innovation, and academic excellence. Highlights include patent achievements, research paper publications, and guidance for participating in national/international conferences.',
        partners: ['ICRISAT', 'NIAS', 'TIHAN IIT Hyderabad'],
        highlights: [
            'Patent achievements',
            'Research paper publications',
            'Conference participation guidance',
            'Innovation support',
        ],
        logo: '/src-logo.png',
    },
];

const Clubs: React.FC = () => {
    const [selectedClub, setSelectedClub] = useState<string | null>(null);

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

                {/* Club Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {clubs.map((club, index) => (
                        <AnimatedElement key={club.id} animation="slide-up" delay={index * 100} className="block h-full">
                            <div
                                onClick={() => setSelectedClub(selectedClub === club.id ? null : club.id)}
                                className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-blue-100 cursor-pointer ${selectedClub === club.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                            >
                                {/* Top Section - Image/Gradient Area */}
                                <div className={`relative h-48 overflow-hidden ${colorMap[club.color].lightBg}`}>
                                    {/* Centered Logo */}
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        {club.logo ? (
                                            <img
                                                src={club.logo}
                                                alt={club.name}
                                                className="w-32 h-32 object-contain drop-shadow-lg transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        ) : (
                                            <club.icon className={`w-24 h-24 ${colorMap[club.color].text} opacity-80 transform group-hover:scale-110 transition-transform duration-500`} />
                                        )}
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${colorMap[club.color].gradient}`}></div>

                                    {/* Club Name Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-2xl font-bold text-white mb-1">{club.name}</h3>
                                        <p className="text-sm text-white/90 font-semibold line-clamp-1">{club.fullName}</p>
                                    </div>
                                </div>

                                {/* Bottom Section - Details */}
                                <div className="p-6 bg-white flex flex-col h-[calc(100%-12rem)]">
                                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                                        {club.description}
                                    </p>

                                    <button
                                        className={`mt-auto w-full ${colorMap[club.color].bg} text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center text-sm`}
                                    >
                                        {selectedClub === club.id ? 'Hide Details' : 'Explore'}
                                        <svg className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${selectedClub === club.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>

                {/* Expanded Details Section */}
                {currentClub && (
                    <AnimatedElement animation="slide-up" className="block">
                        <div className={`relative rounded-3xl ${colorMap[currentClub.color].lightBg} border-2 ${colorMap[currentClub.color].border} p-8 md:p-12 shadow-2xl overflow-hidden scroll-mt-24`} id="club-details">
                            {/* Background Logo */}
                            {currentClub.logo && (
                                <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                                    <img src={currentClub.logo} alt="" className="max-w-md max-h-md object-contain" />
                                </div>
                            )}

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedClub(null)}
                                className={`absolute top-4 right-4 p-2 rounded-full ${colorMap[currentClub.color].bg} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 z-10`}
                            >
                                <X className={`w-5 h-5 ${colorMap[currentClub.color].text}`} />
                            </button>

                            <div className="relative z-10 grid md:grid-cols-2 gap-8">
                                {/* Left Column - Description & Activities */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            {currentClub.logo ? (
                                                <div className={`w-16 h-16 rounded-2xl ${colorMap[currentClub.color].bg} bg-opacity-10 flex items-center justify-center p-3`}>
                                                    <img src={currentClub.logo} alt={currentClub.name} className="w-full h-full object-contain" />
                                                </div>
                                            ) : (
                                                <div className={`w-16 h-16 rounded-2xl ${colorMap[currentClub.color].bg} bg-opacity-10 flex items-center justify-center`}>
                                                    <currentClub.icon className={`w-8 h-8 ${colorMap[currentClub.color].text}`} />
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{currentClub.fullName}</h3>
                                                {currentClub.website && (
                                                    <a
                                                        href={currentClub.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-1 mt-1 text-sm font-medium ${colorMap[currentClub.color].text} hover:underline`}
                                                    >
                                                        Visit Website <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-lg">{currentClub.description}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                            <div className={`w-1 h-6 ${colorMap[currentClub.color].bg} rounded-full`}></div>
                                            Key Activities
                                        </h4>
                                        <ul className="space-y-3">
                                            {currentClub.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                                    <ChevronRight className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colorMap[currentClub.color].text}`} />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Column - Partners & CTA */}
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                                            <Award className={`w-5 h-5 ${colorMap[currentClub.color].text}`} />
                                            Partners & Programs
                                        </h4>
                                        <div className="flex flex-wrap gap-3">
                                            {currentClub.partners.map((partner, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-4 py-2 bg-white rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md text-gray-800 font-medium"
                                                >
                                                    {partner}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={`p-6 rounded-2xl bg-white border-2 ${colorMap[currentClub.color].border} shadow-lg`}>
                                        <h5 className="font-semibold text-lg mb-3 text-gray-900 flex items-center gap-2">
                                            <div className={`w-2 h-2 ${colorMap[currentClub.color].bg} rounded-full`}></div>
                                            Join Us
                                        </h5>
                                        <p className="text-gray-700 leading-relaxed">
                                            Students interested in {currentClub.name} can connect with faculty coordinators to
                                            explore opportunities for skill development, mentorship, and industry exposure.
                                        </p>
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
