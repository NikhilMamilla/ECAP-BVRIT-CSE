import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedElement } from './AnimatedElement';
import FacultyData from './data/facultyData';

const hod = FacultyData.find(f => f.category === 'HOD');
const landingFaculty = FacultyData.filter(f => f.category !== 'HOD').slice(0, 10);

const CSEFaculty: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <AnimatedElement animation="slide-down" className="block">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Our Distinguished Faculty
            </h2>
          </AnimatedElement>
        </div>

        {/* HOD Profile - Compact Premium Card */}
        {hod && (
          <AnimatedElement animation="fade-in" className="block mb-16 md:mb-20">
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row items-center">
                {/* HOD Portrait */}
                <div className="w-full md:w-1/3 h-64 md:h-80 relative overflow-hidden">
                  <img
                    src={hod.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop'}
                    alt={hod.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* HOD Info Content */}
                <div className="w-full md:w-2/3 p-6 md:p-10 text-left">
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-2 block">Head of Department</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {hod.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    {hod.designation}
                  </p>
                  <p className="text-base text-gray-700 italic leading-relaxed border-l-4 border-blue-600 pl-4">
                    "Dedicated to fostering a culture of technical excellence and research-driven innovation."
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        )}

        {/* Faculty Grid - 5 columns, compact aligned images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {landingFaculty.map((faculty, index) => (
            <AnimatedElement
              key={index}
              animation="slide-up"
              delay={index * 100}
              className="h-full"
            >
              <div className="group h-full flex flex-col items-center text-center">
                {/* Compact Portrait Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 shadow-md border-4 border-white group-hover:border-blue-50 transition-all duration-300">
                  <img
                    src={faculty.image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop'}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Aligned Text Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 leading-snug">
                    {faculty.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-tighter">
                    {faculty.designation}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Professional Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <AnimatedElement animation="fade-in" delay={400} className="inline-block">
            <button
              onClick={() => navigate('/cse/faculty')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Faculty
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </AnimatedElement>
        </div>

      </div>
    </section>
  );
};

export default CSEFaculty;
