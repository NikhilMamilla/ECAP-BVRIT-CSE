import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <section className="relative bg-white py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* LEFT COLUMN: ABOUT BVRIT + VIDEO */}
            <div className="flex flex-col lg:w-[40%]">
              <h2
                className="mb-6 flex-shrink-0 text-2xl font-bold tracking-tight text-gray-900"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                ABOUT BVRIT
              </h2>

              {/* YouTube Video */}
              <div className="relative mb-6 w-full flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: '56.25%' }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/7P48c9-ID5I?autoplay=1&mute=1&loop=1&playlist=7P48c9-ID5I"
                    title="BVRIT Campus Video"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* About Text */}
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  <strong>B. V. Raju Institute of Technology (BVRIT)</strong>,
                  established in 1997 in Narsapur, Telangana, is an autonomous
                  engineering college affiliated with JNTUH, Hyderabad, and
                  approved by AICTE. The institute offers undergraduate and
                  postgraduate programs in engineering, technology, and
                  management, with NBA accreditation. Known for its academic
                  excellence, modern infrastructure, and industry-aligned
                  curriculum, BVRIT emphasizes holistic student development
                  through research, innovation, and strong industry
                  collaboration.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: CSE DEPARTMENT */}
            <div className="flex flex-col lg:w-[60%]">
              <h2
                className="mb-6 flex-shrink-0 text-2xl font-bold tracking-tight text-gray-900"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                CSE DEPARTMENT HIGHLIGHTS
              </h2>

              {/* Department Intro */}
              <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                The Department of Computer Science & Engineering at BVRIT is a
                hub of innovation and excellence, offering cutting-edge programs
                in AI & ML, Data Science, and Cyber Security. With state-of-the-art
                labs, expert faculty, and strong industry partnerships, we
                prepare students for leadership roles in the rapidly evolving
                tech landscape through hands-on learning, research
                opportunities, and comprehensive skill development.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="transform rounded-xl border border-blue-300 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <img
                    src="/Highlights/NBA.png"
                    alt="NBA Accredited"
                    className="mb-3 h-12 w-auto object-contain"
                  />
                  <h3 className="mb-2 font-bold text-gray-900">
                    NBA Accredited
                  </h3>
                  <p className="text-sm text-gray-700">
                    All CSE programs accredited by the National Board of
                    Accreditation
                  </p>
                </div>

                <div className="transform rounded-xl border border-blue-300 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <img
                    src="/Highlights/industry.jpg"
                    alt="Industry Partnerships"
                    className="mb-3 h-12 w-auto object-contain"
                  />
                  <h3 className="mb-2 font-bold text-gray-900">
                    Industry Partnerships
                  </h3>
                  <p className="text-sm text-gray-700">
                    MoUs with leading tech companies like Capgemini, TCS, and
                    Wipro
                  </p>
                </div>

                <div className="transform rounded-xl border border-blue-300 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="mb-2 font-bold text-gray-900">
                    Cutting-Edge Labs
                  </h3>
                  <p className="text-sm text-gray-700">
                    AI/ML, Data Science, Cyber Security, and Cloud Computing labs
                  </p>
                </div>

                <div className="transform rounded-xl border border-blue-300 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <h3 className="mb-2 font-bold text-gray-900">
                    Research Excellence
                  </h3>
                  <p className="text-sm text-gray-700">
                    50+ publications in AI, ML, Security, IoT, and emerging
                    technologies
                  </p>
                </div>
              </div>

              {/* Explore Link */}
              <div className="mt-6">
                <a
                  href="#csePrograms"
                  onClick={(event) => {
                    event.preventDefault();
                    document
                      .getElementById('csePrograms')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
                >
                  Explore CSE Programs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
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
