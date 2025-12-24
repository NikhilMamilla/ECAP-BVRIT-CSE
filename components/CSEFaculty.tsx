import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedElement } from './AnimatedElement';
import FacultyData from './data/facultyData';

const hod = FacultyData.find(f => f.category === 'HOD');
const landingFaculty = FacultyData.filter(f => f.category !== 'HOD').slice(0, 10);

const CSEFaculty: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <AnimatedElement animation="slide-down" className="block">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Our Distinguished Faculty
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={200} className="block">
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Learn from the best minds in computer science and engineering
            </p>
          </AnimatedElement>
        </div>

        {/* HOD Card */}
        {hod && (
          <AnimatedElement animation="fade-in" className="block mb-12">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 max-w-xl mx-auto text-center">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-teal-100 rounded-full transform scale-105 opacity-50"></div>
                <img
                  src={hod.image || 'https://randomuser.me/api/portraits/men/32.jpg'}
                  alt={hod.name}
                  className="relative w-32 h-32 object-cover object-top rounded-full border-4 border-white shadow-md mx-auto"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">{hod.name}</h3>
              <p className="text-blue-600 font-semibold mb-4">{hod.designation}</p>
              <p className="text-gray-700 leading-relaxed italic">"Committed to excellence and innovation."</p>
            </div>
          </AnimatedElement>
        )}

        {/* Faculty Grid: 5 columns per row, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-full mx-auto max-w-screen-xl">
          {landingFaculty.map((faculty, index) => (
            <AnimatedElement
              key={index}
              animation="slide-up"
              delay={index * 100}
              className="h-full"
            >
              <div className="group bg-white rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 p-6 text-center h-full flex flex-col items-center">
                <div className="relative mb-4 mt-2">
                  <div className="absolute inset-0 bg-teal-100 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300 opacity-50"></div>
                  <img
                    src={faculty.image || 'https://randomuser.me/api/portraits/lego/1.jpg'}
                    alt={faculty.name}
                    className="relative w-24 h-24 object-cover object-top rounded-full border-4 border-white shadow-sm group-hover:border-blue-50 transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 min-h-[3.5rem] flex items-center justify-center">{faculty.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{faculty.designation}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* View All Faculty Button */}
        <div className="text-center mt-12">
          <AnimatedElement animation="fade-in" delay={400} className="inline-block">
            <button
              onClick={() => navigate('/cse/faculty')}
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-semibold text-base hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Faculty
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </AnimatedElement>
        </div>

      </div>
    </section>
  );
};

export default CSEFaculty;
