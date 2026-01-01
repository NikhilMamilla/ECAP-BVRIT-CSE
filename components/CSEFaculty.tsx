import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedElement } from './AnimatedElement';
import FacultyData from './data/facultyData';

const hod = FacultyData.find(f => f.category === 'HOD');

const CSEFaculty: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="Faculty" className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <AnimatedElement animation="slide-down" className="block">
            <span className="text-blue-600 font-bold tracking-[0.25em] uppercase text-xs block mb-3">Academic Leadership</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Our Distinguished <span className="text-blue-600">Faculty</span>
            </h2>
            {/* <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full opacity-20" /> */}
          </AnimatedElement>
        </div>

        {/* HOD Profile - Premium Compact Card */}
        {hod && (
          <AnimatedElement animation="fade-in" className="block mb-12 md:mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center relative group">
                {/* Accent Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] opacity-40 -z-0 transition-transform group-hover:scale-110 duration-700" />

                {/* HOD Image Container - Framed on Mobile, Side-by-side on Desktop */}
                <div className="w-full md:w-[40%] p-8 md:p-10 flex justify-center items-center z-10">
                  <div className="relative">
                    {/* Image Frame */}
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl ring-1 ring-slate-100 transform transition-transform duration-500 group-hover:scale-105">
                      <img
                        src={hod.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop'}
                        alt={hod.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    {/* Subtle Badge */}
                    {/* <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-xl shadow-lg">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </div> */}
                  </div>
                </div>

                {/* Info Content - Centered on Mobile */}
                <div className="w-full md:w-[60%] p-8 md:p-12 md:pl-0 text-center md:text-left z-10">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] rounded-full mb-4">
                    Head of Department
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight">
                    {hod.name}
                  </h3>
                  <p className="text-base md:text-lg text-slate-500 font-medium mb-6">
                    {hod.designation}
                  </p>

                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-blue-600 rounded-full opacity-40 hidden md:block" />
                    <p className="text-sm md:text-base text-slate-600 italic leading-relaxed md:pl-4">
                      "Dedicated to fostering a culture of technical excellence and research-driven innovation in Computer Science."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        )}

        {/* View All Button */}
        <div className="text-center">
          <AnimatedElement animation="fade-in" delay={200} className="inline-block">
            <button
              onClick={() => navigate('/cse/faculty')}
              className="group relative px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-xl hover:bg-blue-600 transition-all duration-500 flex items-center gap-3 mx-auto uppercase tracking-widest text-xs"
            >
              Faculty Directory
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <svg className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </AnimatedElement>
        </div>

      </div>
    </section>
  );
};

export default CSEFaculty;
