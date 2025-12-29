import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedElement } from './AnimatedElement';
import FacultyData from './data/facultyData';

const hod = FacultyData.find(f => f.category === 'HOD');

const CSEFaculty: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <AnimatedElement animation="slide-down" className="block">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Our Distinguished Faculty
            </h2>
          </AnimatedElement>
        </div>

        {/* HOD Profile - Compact Premium Card */}
        {hod && (
          <AnimatedElement animation="fade-in" className="block mb-10 md:mb-12">
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

        {/* Professional Call to Action */}
        <div className="text-center">
          <AnimatedElement animation="fade-in" delay={200} className="inline-block">
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
