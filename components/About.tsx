import React from 'react';

const About: React.FC = () => {
  return (
    <>
      <section className="relative bg-white py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* LEFT COLUMN: ABOUT CSE DEPARTMENT + VIDEO */}
            <div className="flex flex-col lg:w-[40%]">
              <h2
                className="mb-6 flex-shrink-0 text-2xl font-bold tracking-tight text-gray-900"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                ABOUT CSE DEPARTMENT
              </h2>

              {/* YouTube Video */}
              <div className="relative mb-6 w-full flex-shrink-0 overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                <div
                  className="relative w-full"
                  style={{ paddingBottom: '56.25%' }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/7P48c9-ID5I?autoplay=1&mute=1&loop=1&playlist=7P48c9-ID5I"
                    title="CSE Department Overview Video"
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* About Text */}
              <div className="flex-1">
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  The <strong>Department of Computer Science & Engineering (CSE)</strong> at
                  BVRIT Narsapur is committed to delivering high-quality technical
                  education with a strong focus on innovation, research, and
                  industry readiness. The department offers a robust curriculum
                  aligned with emerging technologies and equips students with
                  strong foundations in computing, problem-solving, and
                  professional skills required to excel in the global technology
                  landscape.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: CSE DEPARTMENT HIGHLIGHTS */}
            <div className="flex flex-col lg:w-[60%]">
              <h2
                className="mb-6 flex-shrink-0 text-2xl font-bold tracking-tight text-gray-900"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                CSE DEPARTMENT HIGHLIGHTS
              </h2>

              {/* Department Intro */}
              <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                The CSE Department at BVRIT Narsapur emphasizes academic excellence, hands-on learning, and industry-aligned skill development to prepare students for modern technology careers.
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
                    NBA Accredited Programs
                  </h3>
                  <p className="text-sm text-gray-700">
                    CSE programs accredited by the National Board of Accreditation,
                    ensuring quality education and academic standards.
                  </p>
                </div>

                <div className="transform rounded-xl border border-blue-300 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <img
                    src="/Highlights/industry.jpg"
                    alt="Industry Partnerships"
                    className="mb-3 h-12 w-auto object-contain"
                  />
                  <h3 className="mb-2 font-bold text-gray-900">
                    Industry Collaboration
                  </h3>
                  <p className="text-sm text-gray-700">
                    Active MoUs and collaborations with leading technology
                    companies to enhance practical exposure and employability.
                  </p>
                </div>

                <div className="transform rounded-xl border border-blue-300 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <img
                    src="/Highlights/labs.png"
                    alt="Advanced Computing Labs"
                    className="mb-3 h-12 w-auto object-contain"
                  />
                  <h3 className="mb-2 font-bold text-gray-900">
                    Advanced Computing Labs
                  </h3>
                  <p className="text-sm text-gray-700">
                    Well-equipped laboratories for AI & ML, Data Science, Cyber
                    Security, Cloud Computing, and core computing areas.
                  </p>
                </div>

                <div className="transform rounded-xl border border-blue-300 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <img
                    src="/Highlights/research.png"
                    alt="Research & Innovation"
                    className="mb-3 h-12 w-auto object-contain"
                  />
                  <h3 className="mb-2 font-bold text-gray-900">
                    Research & Innovation
                  </h3>
                  <p className="text-sm text-gray-700">
                    Strong research culture with publications, patents, funded
                    projects, and student involvement in emerging technologies.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
