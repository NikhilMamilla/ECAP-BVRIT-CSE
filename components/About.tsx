import React from 'react';

const About: React.FC = () => {

  return (
    <>
      <section className="relative bg-white py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* LEFT Column: About BVRIT + YouTube Video */}
            <div className="lg:w-[40%] flex flex-col">
              <h2
                className="text-2xl font-bold text-gray-900 tracking-tight mb-6 flex-shrink-0"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                ABOUT BVRIT
              </h2>

              {/* YouTube Video Frame */}
              <div className="relative w-full mb-6 flex-shrink-0 rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/7P48c9-ID5I?autoplay=1&mute=1&loop=1&playlist=7P48c9-ID5I"
                    title="BVRIT Video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* About Text */}
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  <strong>B. V. Raju Institute of Technology (BVRIT)</strong>, established in 1997 in Narsapur, Telangana, is an autonomous engineering college affiliated with JNTUH, Hyderabad, and approved by AICTE. The institute offers undergraduate and postgraduate programs in engineering, technology, and management, with NBA accreditation. Known for its academic excellence, modern infrastructure, and industry-aligned curriculum, BVRIT emphasizes holistic student development through research, innovation, and strong industry collaboration.
                </p>
              </div>
            </div>

            {/* RIGHT Column: CSE Department Highlights */}
            <div className="lg:w-[60%] flex flex-col">
              <h2
                className="text-2xl font-bold text-gray-900 tracking-tight mb-6 flex-shrink-0"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                CSE DEPARTMENT HIGHLIGHTS
              </h2>

              {/* CSE Department Introduction */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                The Department of Computer Science & Engineering at BVRIT is a hub of innovation and excellence, offering cutting-edge programs in AI & ML, Data Science, and Cyber Security. With state-of-the-art labs, expert faculty, and strong industry partnerships, we prepare students for leadership roles in the rapidly evolving tech landscape through hands-on learning, research opportunities, and comprehensive skill development.
              </p>

              {/* CSE Highlights Grid - All White with Colored Borders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img src="/Highlights/NBA.png" alt="NBA Accredited" className="h-12 w-auto mb-3 object-contain" />
                  <h3 className="font-bold text-gray-900 mb-2">NBA Accredited</h3>
                  <p className="text-sm text-gray-700">All CSE programs accredited by National Board of Accreditation</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img src="/Highlights/industry.jpg" alt="Industry Partnerships" className="h-12 w-auto mb-3 object-contain" />
                  <h3 className="font-bold text-gray-900 mb-2">Industry Partnerships</h3>
                  <p className="text-sm text-gray-700">MoUs with Microsoft, AWS, Google, and leading tech companies</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="font-bold text-gray-900 mb-2">Cutting-Edge Labs</h3>
                  <p className="text-sm text-gray-700">AI/ML, Data Science, Cyber Security, Cloud Computing labs</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="font-bold text-gray-900 mb-2">Research Excellence</h3>
                  <p className="text-sm text-gray-700">50+ publications in AI, ML, Security, IoT, and emerging tech</p>
                </div>
              </div>

              {/* View More Link - Blue accent with Smooth Scroll */}
              <div className="mt-6">
                <a
                  href="#CSEPrograms"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('CSEPrograms')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center font-bold text-blue-600 hover:text-blue-700 transition-colors text-sm"
                >
                  Explore CSE Programs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;