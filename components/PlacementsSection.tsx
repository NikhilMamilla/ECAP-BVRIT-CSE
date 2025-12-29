// src/components/PlacementsSection.tsx

import React, { useState, useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import { AnimatedElement } from './AnimatedElement';
import { useContext } from 'react';
import { StoreContext } from '../storeContext/StoreContext';
import CSEFaculty from './CSEFaculty';

// --- DATA ---
// const highlights = [
//   {
//     student: 'Vasu Surisetty',
//     company: 'Meesho',
//     package: '37 LPA',
//     image: '/images/02 copy.png',
//     companyLogo: '/images/meeshoLogo.svg'
//   },
//   {
//     student: 'Ankit Sharma',
//     company: 'LinkedIn',
//     package: '42 LPA',
//     image: '/images/07 copy.png',
//     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg'
//   },
//   {
//     student: 'Seshu',
//     company: 'Cisco',
//     package: '23 LPA',
//     image: '/images/04 copy.png',
//     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg'
//   },
//   {
//     student: 'Umakanth ',
//     company: 'Amazon',
//     package: '26 LPA',
//     image: '/images/03 copy.png',
//     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
//   },
//   {
//     student: 'Koushik',
//     company: 'SAP Labs',
//     package: '15 LPA',
//     image: '/images/06 copy.png',
//     companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg'
//   },
// ];

// --- SUB-COMPONENTS ---
const AnimatedStat: React.FC<{ value: number; decimals?: number; suffix: string; label: string }> = ({ value, decimals = 0, suffix, label }) => {
  // Counters now start immediately to make the site static/interactive on load as requested
  const count = useCounter(value, 2000, true, decimals);
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800">
        {count}<span className="text-blue-600">{suffix}</span>
      </p>
      <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-1 sm:mt-2">{label}</p>
    </div>
  );
};

// --- MAIN COMPONENT ---
const PlacementsSection: React.FC = () => {
  const { placementList } = useContext(StoreContext);
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const highlights = placementList;
  const totalHighlights = highlights.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const resetTimeout = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    resetTimeout();
    timeoutRef.current = setTimeout(() => setCurrentIndex(prev => prev + 1), 4000);
    return () => resetTimeout();
  }, [currentIndex]);

  const goToPrev = () => setCurrentIndex(prev => prev - 1);
  const goToNext = () => setCurrentIndex(prev => prev + 1);

  return (
    <section ref={ref} className="relative py-6 md:py-8 lg:py-10 overflow-hidden bg-gray-50">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-20">
          <AnimatedElement animation="slide-down" className="block">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'Georgia, serif' }}>
              A Legacy of Placement Excellence
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={200} className="block">
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Our students are shaping the future at the world's leading technology companies.
            </p>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={400} className="block mt-6">
            <a
              href="/placements"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              View Complete Placements
            </a>
          </AnimatedElement>
        </div>

        {/* --- STATS DASHBOARD --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
          <AnimatedElement animation="slide-up" delay={100} className="h-full">
            <AnimatedStat value={37} suffix=" LPA" label="Highest Package" />
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={200} className="h-full">
            <AnimatedStat value={4.2} decimals={1} suffix=" LPA" label="Average Package" />
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={300} className="h-full">
            <AnimatedStat value={258} suffix="+" label="Total Offers (Batch 2022-26)" />
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400} className="h-full">
            <AnimatedStat value={163} suffix="+" label="Companies Visited" />
          </AnimatedElement>
        </div>
      </div>

      {/* --- PLACEMENT ACHIEVEMENTS (R&D THEMED SECTION) --- */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 py-10 md:py-14 px-4 sm:px-6 lg:px-28 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
            <h2 className="text-xl md:text-3xl font-black tracking-tight text-white uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>Placement Achievements</h2>

            <div className="flex flex-col items-start md:items-end text-right">
              <p className="text-[9px] md:text-[10px] font-bold opacity-80 mb-1 tracking-widest text-white">
                93% placement already achieved
              </p>
              <a
                href="/placements"
                className="group flex items-center gap-2 text-xs md:text-[11px] font-bold text-white hover:text-cyan-400 transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center group-hover:bg-cyan-600 group-hover:border-cyan-600 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                Learn more
              </a>
            </div>
          </div>

          {/* Simple White Divider Line */}
          <div className="w-full h-[0.5px] bg-white/20 mb-8 md:mb-10"></div>

          {/* Cards Grid with Decent Gap */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center mb-2 px-2 md:px-0">
            {/* Left Card with Blue Frame */}
            <AnimatedElement animation="slide-right" delay={100} className="relative">
              <div className="absolute -inset-2 border-2 border-cyan-400/60 z-0 pointer-events-none hidden md:block"></div>
              <div className="relative z-10 bg-white p-5 flex flex-col items-center text-center shadow-2xl border border-slate-200 min-h-[300px] md:min-h-[320px]">
                <div className="text-cyan-600 font-bold text-[9px] tracking-widest mb-1">2024</div>
                <div className="text-slate-400 text-[8px] font-bold mb-3 uppercase tracking-tighter">Placement Achievements</div>
                <div className="w-10 h-[1px] bg-slate-200 mb-4"></div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-black text-[#ff8000] leading-none">02</span>
                  <div className="text-left text-slate-800 font-bold leading-tight">
                    <p className="text-sm md:text-base font-black tracking-tighter">BVRITIans</p>
                    <p className="text-[9px] opacity-60">selected at</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 mb-5"></div>

                <div className="mb-5">
                  <p className="text-slate-400 text-[8px] font-bold uppercase mb-1">PACKAGE OF</p>
                  <div className="flex items-center justify-center gap-1 text-[#0066cc]">
                    <span className="text-lg font-black">₹</span>
                    <span className="text-3xl md:text-4xl font-black tabular-nums">36.00</span>
                  </div>
                  <p className="text-[#0066cc] font-bold text-[8px] uppercase mt-1 tracking-widest">LAKHS PER ANNUM</p>
                </div>

                <div className="mt-auto w-full flex justify-center pt-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Autodesk_Logo.svg" alt="Autodesk" className="h-7 object-contain" />
                </div>
              </div>
            </AnimatedElement>

            {/* Center Card (Elevated & Exact) */}
            <AnimatedElement animation="slide-up" delay={300} className="relative z-20">
              <div className="bg-white p-7 flex flex-col items-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-slate-200 min-h-[340px] md:min-h-[360px]">
                <div className="text-cyan-600 font-bold text-[10px] tracking-widest mb-1">2024</div>
                <div className="text-slate-400 text-[9px] font-bold mb-4 uppercase tracking-tighter">Placement Achievements</div>
                <div className="w-14 h-[1px] bg-slate-200 mb-5"></div>

                <div className="flex items-center gap-3 mb-5">
                  <span className="text-6xl md:text-7xl font-black text-[#ff8000] leading-none">02</span>
                  <div className="text-left text-slate-900 font-bold leading-none py-0.5">
                    <p className="text-lg md:text-xl font-black tracking-tighter">BVRITIans</p>
                    <p className="text-[10px] opacity-60">selected at</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 mb-6"></div>

                <div className="mb-6">
                  <p className="text-slate-400 text-[9px] font-bold uppercase mb-2">PACKAGE OF</p>
                  <div className="flex items-center justify-center gap-1 text-[#0066cc]">
                    <span className="text-xl md:text-2xl font-black">₹</span>
                    <span className="text-5xl md:text-6xl font-black tracking-tighter tabular-nums">49.12</span>
                  </div>
                  <p className="text-[#0066cc] font-bold text-[10px] uppercase mt-2 tracking-widest">LAKHS PER ANNUM</p>
                </div>

                <div className="mt-auto w-full flex flex-col items-center gap-1.5 pt-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 object-contain" />
                  <span className="text-base font-bold text-slate-700 tracking-tight">Microsoft</span>
                </div>
              </div>
            </AnimatedElement>

            {/* Right Card with Blue Frame */}
            <AnimatedElement animation="slide-left" delay={500} className="relative">
              <div className="absolute -inset-2 border-2 border-cyan-400/60 z-0 pointer-events-none hidden md:block"></div>
              <div className="relative z-10 bg-white p-5 flex flex-col items-center text-center shadow-2xl border border-slate-200 min-h-[300px] md:min-h-[320px]">
                <div className="text-cyan-600 font-bold text-[9px] tracking-widest mb-1">2024</div>
                <div className="text-slate-400 text-[8px] font-bold mb-3 uppercase tracking-tighter">Placement Achievements</div>
                <div className="w-10 h-[1px] bg-slate-200 mb-4"></div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-4xl md:text-5xl font-black text-[#ff8000] leading-none">05</span>
                  <div className="text-left text-slate-800 font-bold leading-tight">
                    <p className="text-sm md:text-base font-black tracking-tighter">BVRITIans</p>
                    <p className="text-[9px] opacity-60">selected at</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 mb-5"></div>

                <div className="mb-5">
                  <p className="text-slate-400 text-[8px] font-bold uppercase mb-1">PACKAGE OF</p>
                  <div className="flex items-center justify-center gap-1 text-[#0066cc]">
                    <span className="text-lg font-black">₹</span>
                    <span className="text-3xl md:text-4xl font-black tabular-nums">18.00</span>
                  </div>
                  <p className="text-[#0066cc] font-bold text-[8px] uppercase mt-1 tracking-widest">LAKHS PER ANNUM</p>
                </div>

                <div className="mt-auto w-full flex flex-col items-center gap-1 pt-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" alt="Cisco" className="h-7 object-contain" />
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Cisco</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* --- TOP RECRUITERS (LIGHT BACKGROUND) --- */}
      <div className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-28">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-black mb-12 text-slate-800 tracking-tight">Top Recruiters</h3>
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .logos {
              overflow: hidden;
              padding: 24px 0;
              background: rgba(226, 232, 240, 0.3);
              white-space: nowrap;
              position: relative;
              border-radius: 16px;
              border: 1px solid rgba(226, 232, 240, 0.6);
            }
            .logos:before, .logos:after {
              position: absolute;
              top: 0;
              width: 100px;
              height: 100%;
              content: "";
              z-index: 2;
            }
            .logos:before {
              left: 0;
              background: linear-gradient(to right, white, transparent);
            }
            .logos:after {
              right: 0;
              background: linear-gradient(to left, white, transparent);
            }
            .logos-slide {
              display: inline-flex;
              align-items: center;
              animation: scroll 35s linear infinite;
            }
            .logos:hover .logos-slide {
              animation-play-state: paused;
            }
            .logo {
              flex-shrink: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 75px;
              width: 150px;
              margin: 0 15px;
              background: white;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              padding: 15px;
              transition: all 0.3s ease;
              vertical-align: middle;
            }
            .logo:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px rgba(66, 153, 225, 0.4);
            }
            .logo img {
              max-height: 45px;
              max-width: 120px;
              object-fit: contain;
            }
          `}</style>
          <div className="logos">
            <div className="logos-slide">
              {(() => {
                const companies = [
                  { name: 'Accenture', logo: '/images/companies/Accenture_logo.png' },
                  { name: 'Amazon', logo: '/images/companies/Amazon_logo.webp' },
                  { name: 'Bank of America', logo: '/images/companies/bankofamerica.png' },
                  { name: 'BEL', logo: '/images/companies/bel.svg' },
                  { name: 'Capgemini', logo: '/images/companies/capgemini.png' },
                  { name: 'Cisco', logo: '/images/companies/Cisco_logo.png' },
                  { name: 'Cognizant', logo: '/images/companies/Cognizant_logo.png' },
                  { name: 'Darwinbox', logo: '/images/companies/darwin.webp' },
                  { name: 'Deloitte', logo: '/images/companies/Deloitte_logo.png' },
                  { name: 'EPAM', logo: '/images/companies/Epam.jpg' },
                  { name: 'Evergent', logo: '/images/companies/evergent.png' },
                  { name: 'Forage – AI', logo: '/images/companies/forage.png' },
                  { name: 'Infosys', logo: '/images/companies/Infosys_logo.png' },
                  { name: 'Intellipaat', logo: '/images/companies/intellipaat.png' },
                  { name: 'KPIT', logo: '/images/companies/Kpit.png' },
                  { name: 'LTI Mindtree', logo: '/images/companies/Lti-mindtree.png' },
                  { name: 'Microsoft', logo: '/images/companies/microsoft.webp' },
                  { name: 'Mivada', logo: '/images/companies/mivada.jpeg' },
                  { name: 'Movidu', logo: '/images/companies/movidu.webp' },
                  { name: 'Optum', logo: '/images/companies/optum.png' },
                  { name: 'Porter', logo: '/images/companies/porter.png' },
                  { name: 'Qualizeal', logo: '/images/companies/qualizeal.png' },
                  { name: 'RealPage', logo: '/images/companies/realpage.png' },
                  { name: 'Renault Nissan', logo: '/images/companies/renault.jpg' },
                  { name: 'Risamsoft', logo: '/images/companies/risamsoft.png' },
                  { name: 'Sagarsoft', logo: '/images/companies/sagarsoft.png' },
                  { name: 'Sechay', logo: '/images/companies/sechay.png' },
                  { name: 'Sids Farm', logo: '/images/companies/sidsfarm.png' },
                  { name: 'Sify', logo: '/images/companies/sify.png' },
                  { name: 'Skill Duniya', logo: '/images/companies/skilldunia.png' },
                  { name: 'State Street', logo: '/images/companies/statestreet.png' },
                  { name: 'Synopsys', logo: '/images/companies/synopsys.png' },
                  { name: 'TCS', logo: '/images/companies/TCS_logo.png' },
                  { name: 'TAS', logo: '/images/companies/TAS_logo.jpg' },
                  { name: 'Tech Mahindra', logo: '/images/companies/techmahindra.png' },
                  { name: 'Tejas Networks', logo: '/images/companies/tejasnetwork.jpeg' },
                  { name: 'UST Global', logo: '/images/companies/ustglobal.png' },
                  { name: 'Verizon', logo: '/images/companies/verizon.png' },
                  { name: 'Verisk', logo: '/images/companies/verisk.png' },
                  { name: 'Wipro', logo: '/images/companies/Wipro_logo.jpg' },
                ];

                return [...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {companies.map((company, index) => (
                      <div key={`${i}-${index}`} className="logo">
                        <img
                          src={company.logo}
                          alt={company.name}
                          title={company.name}
                        />
                      </div>
                    ))}
                  </React.Fragment>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* --- FACULTY SECTION --- */}
      <CSEFaculty />
    </section>
  );
};

export default PlacementsSection;