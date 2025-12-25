import React, { useState, useEffect } from 'react';
import Header from '../Header';
import { FaQuoteLeft } from "react-icons/fa";
import Footer from '../Footer';
import { FaBriefcase, FaHandshake, FaTrophy, FaUsers, FaChartLine, FaGraduationCap, FaBuilding, FaRocket, FaAward } from 'react-icons/fa';

const Placements = () => {
  const [currentInternship, setCurrentInternship] = useState(0);

  // Internship data
  const internshipData = [
    { company: 'Accenture', count: 12, logo: '/images/companies/Accenture_logo.png' },
    { company: 'Deloitte', count: 8, logo: '/images/companies/Deloitte_logo.png' },
    { company: 'Wipro', count: 15, logo: '/images/companies/Wipro_logo.jpg' },
    { company: 'Cisco', count: 4, logo: '/images/companies/Cisco_logo.png' },
    { company: 'Cognizant', count: 20, logo: '/images/companies/Cognizant_logo.png' },
    { company: 'Amazon', count: 5, logo: '/images/companies/Amazon_logo.webp' },
    { company: 'TCS', count: 12, logo: '/images/companies/TCS_logo.png' },
    { company: 'Infosys', count: 8, logo: '/images/companies/Infosys_logo.png' },
  ];

  // Auto-play for internships carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInternship((prev) => (prev + 1) % (internshipData.length - 3)); // show 4 at a time
    }, 5000);
    return () => clearInterval(timer);
  }, [internshipData.length]);

  // Statistics data
  const stats = [
    {
      icon: FaBriefcase,
      number: '425',
      label: 'COMPANIES',
      subtitle: 'For Campus Placements',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaHandshake,
      number: '1873',
      label: 'PLACEMENTS',
      subtitle: 'Offered in 2024-25',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: FaTrophy,
      number: '39 LPA',
      label: 'HIGHEST',
      subtitle: 'Package Offered',
      gradient: 'from-blue-700 to-blue-800'
    }
  ];

  // Dream offers data
  const dreamOffers = [
    { company: 'Infosys', salary: '9.5 LPA', students: 6, batch: '2024-25', logo: '/images/companies/Infosys_logo.png' },
    { company: 'TCS', salary: '9 LPA', students: 2, batch: '2024-25', logo: '/images/companies/TCS_logo.png' },
    { company: 'Cognizant', salary: '8.28 LPA', students: 14, batch: '2024-25', logo: '/images/companies/Cognizant_logo.png' },
    { company: 'Akrivia HCM', salary: '7.65 LPA', students: 11, batch: '2024-25', logo: '/images/companies/AkriviaHCM_logo.png' },
    { company: 'Amazon', salary: '44 LPA', students: 35, batch: '2021-23', logo: '/images/companies/Amazon_logo.webp' },
    { company: 'Wipro', salary: '12 LPA', students: 25, batch: '2023-24', logo: '/images/companies/Wipro_logo.jpg' },
    { company: 'Deloitte', salary: '52 LPA', students: 2, batch: '2023-24', logo: '/images/companies/Deloitte_logo.png' },
    { company: 'Accenture', salary: '15 LPA', students: 18, batch: '2024', logo: '/images/companies/Accenture_logo.png' },
  ];

  // Placement highlights
  const placementHighlights = [
    { name: 'AYUSKA SINGH', package: '40 LPA', company: 'Amazon', year: '2024-25', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop' },
    { name: 'ANUKRATI AGARWAL', package: '40 LPA', company: 'Amazon', year: '2024-25', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop' },
    { name: 'SEJAL MAHESHWARI', package: '59.9 LPA', company: 'Atlassian India LLP', year: '2023-24', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop' },
    { name: 'PRAKHAR TANDON', package: '49 LPA', company: 'Microsoft India (R & D) Pvt. Ltd.', year: '2023-24', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' },
    { name: 'PRAKHAR PANDEY', package: '49 LPA', company: 'Microsoft India (R & D) Pvt. Ltd.', year: '2023-24', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop' },
    { name: 'KUSUMLATA BHATT', package: '52 LPA', company: 'Google India Pvt. Ltd.', year: '2022-23', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop' },
  ];

  // Top recruiters
  const topRecruiters = [
    'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=400&h=200&fit=crop',
  ];

  // Hall of Fame Data
  const hallOfFameData = [
    { sno: 1, name: 'DAYA SINGH', branch: 'CS', company: 'Amazon India LLP', salary: '40,00,000', designation: 'SDE' },
    { sno: 2, name: 'UTIKARSH SINGH', branch: 'CSE(DS)', company: 'Deloitte', salary: '25,00,000', designation: 'SDE' },
    { sno: 3, name: 'YASH GARG', branch: 'IT', company: 'Zscaler', salary: '23,00,000', designation: 'Intern Q.A.' },
    { sno: 4, name: 'NISHITA SAXENA', branch: 'CSE(AIML)', company: 'Playtech', salary: '21,00,000', designation: 'Software Development' },
    { sno: 5, name: 'DIVYANSH SAXENA', branch: 'CSE', company: 'Playtech', salary: '21,00,000', designation: 'Software Development' },
    { sno: 6, name: 'ARYAN SAXENA', branch: 'CS', company: 'Playtech', salary: '21,00,000', designation: 'DEVELOPER SUPPORT ENGINEER' },
    { sno: 7, name: 'MANI PRATAP SINGH', branch: 'CS', company: 'CISCO', salary: '17,44,055', designation: 'Technical intern' },
    { sno: 8, name: 'SHASHI MISHRA', branch: 'CSE(DS)', company: 'PLAYBOOK INC', salary: '20,00,000', designation: 'Software Engineer' },
    { sno: 9, name: 'AYUSKA SINGH', branch: 'CSE', company: 'Amazon', salary: '40,00,000', designation: 'Software Dev Engineer Intern' },
    { sno: 10, name: 'ANUKRATI AGARWAL', branch: 'CSE', company: 'Amazon', salary: '40,00,000', designation: 'Software Dev Engineer Intern' },
    { sno: 11, name: 'MANVI TYAGI', branch: 'CSE', company: 'Amazon', salary: '40,00,000', designation: 'Software Dev Engineer Intern' },
    { sno: 12, name: 'SEJAL MAHESHWARI', branch: 'CSE', company: 'Atlassian India LLP', salary: '59,91,000', designation: 'SDE' },
    { sno: 13, name: 'KUSUMLATA BHATT', branch: 'CSE', company: 'Google India Pvt. Ltd.', salary: '52,00,000', designation: 'SDE' },
  ];

  // Placement Page Links
  // Placement Page Links
  const placementLinks = [
    { id: 'Stats', label: 'Overview' },
    { id: 'DetailedStats', label: 'Detailed Stats' },
    { id: 'Recruiters', label: 'Recruiters' },
    { id: 'SalaryStats', label: 'Salary' },
    { id: 'DreamOffers', label: 'Dream Offers' },
    { id: 'Internships', label: 'Internships' },
    { id: 'Highlights', label: 'Highlights' },
    { id: 'HallOfFame', label: 'Hall of Fame' },
    { id: 'Glimpses', label: 'Glimpses' },
  ];

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Header customLinks={placementLinks} />

      {/* Hero Section */}
      <div
        className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000&h=1200&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Subtle Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-28 max-w-7xl mx-auto text-center">
          <div className="animate-fadeIn">
            <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight tracking-tight mb-6 drop-shadow-2xl">
              1873+ Offers in Session
              <span className="block text-blue-400 mt-2">2024-25</span>
            </h1>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto my-6 md:my-8"></div>
            <p className="text-white text-base md:text-xl font-light leading-relaxed max-w-4xl mx-auto drop-shadow-lg px-2">
              At B V Raju Institute of Technology, Narsapur (BVRIT), the Computer Science & Engineering Department is dedicated to building future-ready technology professionals. With a strong focus on core computer science fundamentals, industry-aligned learning, and continuous skill development, our CSE students are empowered to transition seamlessly from academics to successful professional careers.
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      {/* Main Statistics Section */}
      <section id="Stats" className="w-full py-16 px-8 md:px-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-slate-800 text-3xl md:text-4xl font-bold">
              Placements Statistics (24-25)
            </h2>
            <div className="w-full h-px bg-slate-300 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Companies */}
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80"
                alt="Companies"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <FaBriefcase className="text-3xl md:text-4xl mb-3 md:mb-4" />
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">425</h3>
                <p className="text-lg md:text-xl font-semibold mb-1">COMPANIES</p>
                <p className="text-xs md:text-sm opacity-90">For Campus Placements</p>
              </div>
            </div>

            {/* Card 2 - Placements */}
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&q=80"
                alt="Placements"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <FaHandshake className="text-3xl md:text-4xl mb-3 md:mb-4" />
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">1873</h3>
                <p className="text-lg md:text-xl font-semibold mb-1">PLACEMENTS</p>
                <p className="text-xs md:text-sm opacity-90">Offered in Session</p>
              </div>
            </div>

            {/* Card 3 - Highest Package */}
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80"
                alt="Highest Package"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <FaTrophy className="text-3xl md:text-4xl mb-3 md:mb-4" />
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">39 LPA</h3>
                <p className="text-lg md:text-xl font-semibold mb-1">HIGHEST</p>
                <p className="text-xs md:text-sm opacity-90">Package Offered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Statistics Section */}
      <section id="DetailedStats" className="w-full py-12 px-8 md:px-16 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 px-4">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              CSE Department – <span className="font-semibold text-slate-800">BVRIT, Narsapur</span><br className="md:hidden" />
              (Batch: <span className="font-semibold text-slate-800">2022–2026</span> | <span className="font-semibold text-slate-800 whitespace-nowrap">IV Year Students</span>)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Strength & Eligibility */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <FaUsers className="text-blue-500 text-lg" />
                Student Strength & Eligibility
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Total Students on Roll:', value: '349' },
                  { label: 'Students Registered for CRT:', value: '338' },
                  { label: 'Eligible for Placements:', value: '292' },
                  { label: 'Not Registered for CRT:', value: '11' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 last:border-0">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Outcomes */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <FaChartLine className="text-blue-500 text-lg" />
                Placement Outcomes
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Total Students Placed:', value: '181' },
                  { label: 'Placement Percentage:', value: '61.99%' },
                  { label: 'Multiple Offers:', value: '258' },
                  { label: 'Internships Secured:', value: '52' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 last:border-0">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gender-wise Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <FaGraduationCap className="text-blue-500 text-lg" />
                Gender-wise Placement Details
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Boys Placed:', value: '98' },
                  { label: 'Girls Placed:', value: '83' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 last:border-0">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unplaced Statistics */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-5 pb-3 border-b border-slate-200 flex items-center gap-2">
                <FaUsers className="text-blue-500 text-lg" />
                Unplaced Statistics
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Total Students Unplaced:', value: '111' },
                  { label: 'Boys Unplaced:', value: '68' },
                  { label: 'Girls Unplaced:', value: '43' }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-dashed border-slate-200 last:border-0">
                    <span className="text-slate-700 text-sm font-medium">{item.label}</span>
                    <span className="text-lg font-bold text-blue-600 leading-none">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Valued Patrons (Top Recruiters Carousel) */}
      <section id="Recruiters" className="w-full py-20 px-8 md:px-28 bg-slate-900 text-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Valued Patrons</h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              BVRIT has a vast network of recruiters that includes Fortune 500 companies, startups, and various other organizations. Some of our notable recruiters include:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-6"></div>
          </div>

          {/* Infinite Scroll Animation */}
          <div className="relative">
            <style>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .scroll-container {
                display: flex;
                animation: scroll-left 30s linear infinite;
              }
              .scroll-container:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex overflow-hidden">
              <div className="scroll-container">
                {[...topRecruiters, ...topRecruiters].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 h-40 mx-4 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={logo}
                      alt={`Recruiter ${index + 1}`}
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Companies with 20+ LPA and 100+ Offers */}
          {/* Companies with 20+ LPA and 100+ Offers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mt-16 md:mt-20 px-4 md:px-0">
            {/* 20+ LPA */}
            <div className="text-center">
              <div className="mb-6 md:mb-8">
                <h3 className="text-slate-400 text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-widest">Companies offering</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-400">20+ LPA</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { name: 'Amazon', logo: '/images/companies/Amazon_logo.webp' },
                  { name: 'Cisco', logo: '/images/companies/Cisco_logo.png' },
                  { name: 'Cognizant', logo: '/images/companies/Cognizant_logo.png' },
                  { name: 'Deloitte', logo: '/images/companies/Deloitte_logo.png' },
                  { name: 'Infosys', logo: '/images/companies/Infosys_logo.png' },
                  { name: 'SAP', logo: '/images/companies/SAP_logo.png' }
                ].map((company, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center h-20 md:h-24">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-12 md:max-h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 100+ Offers */}
            <div className="text-center">
              <div className="mb-6 md:mb-8">
                <h3 className="text-slate-400 text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-widest">Companies offering</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-400">100+ Offers</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { name: 'TCS', logo: '/images/companies/TCS_logo.png' },
                  { name: 'Accenture', logo: '/images/companies/Accenture_logo.png' },
                  { name: 'Wipro', logo: '/images/companies/Wipro_logo.jpg' },
                  { name: 'Meesho', logo: '/images/companies/Meesho_logo.png' },
                  { name: 'HDFC Life', logo: '/images/companies/HDFC-Life_logo.png' },
                  { name: 'CRED', logo: '/images/companies/CRED_logo.webp' }
                ].map((company, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center h-20 md:h-24">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-12 md:max-h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Median Salary & Packages Section */}
      <section id="SalaryStats" className="w-full py-16 md:py-20 px-6 md:px-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Median Salary (B.Tech Only) */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Median Salary
              </h2>
              <div className="w-full h-px bg-slate-300 mb-6"></div>

              {/* Bar Chart */}
              <div className="bg-slate-50 rounded-lg p-6 h-80">
                <div className="flex items-end justify-between gap-2 h-56">
                  {[
                    { year: '2021', value: 4.2 },
                    { year: '2022', value: 5.5 },
                    { year: '2023', value: 4.5 },
                    { year: '2024', value: 4.8 },
                    { year: '2025', value: 3.8 }
                  ].map((data, idx) => {
                    const maxValue = 6;
                    const heightPercent = (data.value / maxValue) * 100;
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full flex items-end justify-center" style={{ height: '180px' }}>
                          <div
                            className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t transition-all duration-500 hover:from-blue-600 hover:to-blue-500 flex items-start justify-center pt-2 shadow-md"
                            style={{ height: `${heightPercent}%` }}
                          >
                            <span className="text-xs font-bold text-white">{data.value}</span>
                          </div>
                        </div>
                        <span className="text-xs text-slate-600 font-medium">{data.year}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs text-slate-600 font-medium">B.Tech (LPA)</span>
                </div>
              </div>
            </div>

            {/* Packages at BVRIT - 3 Charts */}
            {[
              {
                title: 'Highest Package',
                values: [
                  { year: '2022', value: 14.65 },
                  { year: '2023', value: 10.8 },
                  { year: '2024', value: 10 }
                ]
              },
              {
                title: 'Average Package',
                values: [
                  { year: '2022', value: 4.5 },
                  { year: '2023', value: 3.8 },
                  { year: '2024', value: 4.5 }
                ]
              },
              {
                title: 'Median Package',
                values: [
                  { year: '2022', value: 4.25 },
                  { year: '2023', value: 3.6 },
                  { year: '2024', value: 3.1 }
                ]
              }
            ].map((package_data, idx) => {
              const maxValue = Math.max(...package_data.values.map(v => v.value));
              const minValue = Math.min(...package_data.values.map(v => v.value));
              const range = maxValue - minValue;

              return (
                <div key={idx}>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">
                    {package_data.title}
                  </h2>
                  <div className="w-full h-px bg-slate-300 mb-6"></div>

                  {/* Enhanced Area Chart */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-lg p-6 shadow-sm border border-slate-200 h-80">
                    <div className="relative h-56">
                      {/* Y-axis grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2, 3].map((i) => (
                          <div key={i} className="border-b border-slate-200/50"></div>
                        ))}
                      </div>

                      {/* Y-axis labels */}
                      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500 pr-3 -ml-2">
                        {[maxValue, maxValue * 0.66, maxValue * 0.33, 0].map((value, i) => (
                          <span key={i} className="text-right">{value.toFixed(1)}</span>
                        ))}
                      </div>

                      {/* Chart area */}
                      <div className="ml-10 h-full relative">
                        <svg className="w-full h-full" viewBox="0 0 300 200" preserveAspectRatio="none">
                          {/* Enhanced gradient */}
                          <defs>
                            <linearGradient id={`area-gradient-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                              <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="rgb(147, 197, 253)" stopOpacity="0.05" />
                            </linearGradient>

                            {/* Shadow gradient */}
                            <filter id={`shadow-${idx}`}>
                              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                              <feOffset dx="0" dy="2" result="offsetblur" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.3" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>

                          {/* Smooth area fill using quadratic curves */}
                          <path
                            d={`M 0 ${200 - ((package_data.values[0].value - minValue) / (maxValue - minValue) * 170)}
                               Q 75 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue) * 170)}, 150 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue) * 170)}
                               T 300 ${200 - ((package_data.values[2].value - minValue) / (maxValue - minValue) * 170)}
                               L 300 200 L 0 200 Z`}
                            fill={`url(#area-gradient-${idx})`}
                          />

                          {/* Smooth line with shadow */}
                          <path
                            d={`M 0 ${200 - ((package_data.values[0].value - minValue) / (maxValue - minValue) * 170)}
                               Q 75 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue) * 170)}, 150 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue) * 170)}
                               T 300 ${200 - ((package_data.values[2].value - minValue) / (maxValue - minValue) * 170)}`}
                            fill="none"
                            stroke="rgb(59, 130, 246)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            filter={`url(#shadow-${idx})`}
                          />

                          {/* Enhanced data points */}
                          {package_data.values.map((val, i) => (
                            <g key={i}>
                              {/* Outer glow circle */}
                              <circle
                                cx={i * 150}
                                cy={200 - ((val.value - minValue) / (maxValue - minValue) * 170)}
                                r="8"
                                fill="rgb(59, 130, 246)"
                                opacity="0.2"
                              />
                              {/* Main point */}
                              <circle
                                cx={i * 150}
                                cy={200 - ((val.value - minValue) / (maxValue - minValue) * 170)}
                                r="5"
                                fill="white"
                                stroke="rgb(59, 130, 246)"
                                strokeWidth="3"
                              />
                            </g>
                          ))}
                        </svg>

                        {/* Value labels above points */}
                        <div className="absolute inset-0 flex items-start justify-between pointer-events-none">
                          {package_data.values.map((val, i) => (
                            <div
                              key={i}
                              className="flex flex-col items-center"
                              style={{
                                marginTop: `${200 - ((val.value - minValue) / (maxValue - minValue) * 170) - 30}px`,
                                marginLeft: i === 0 ? '-15px' : i === 1 ? '-15px' : '-30px'
                              }}
                            >
                              <div className="bg-blue-500 text-white px-2 py-1 rounded-md shadow-lg">
                                <span className="text-xs font-bold">{val.value}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* X-axis labels */}
                      <div className="flex justify-between mt-1 ml-10">
                        {package_data.values.map((val, i) => (
                          <span key={i} className="text-xs text-slate-600 font-medium">{val.year}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Dream Offers Section */}
      <section id="DreamOffers" className="w-full min-h-screen flex items-center py-20 px-8 md:px-28 bg-slate-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">Dream Offers</h2>
            <div className="w-full h-px bg-slate-700 mx-auto"></div>
          </div>

          {/* Sliding Animation */}
          <div className="relative overflow-hidden py-12">
            <style>{`
              @keyframes scroll-dream-offers {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .dream-offers-slider {
                display: flex;
                animation: scroll-dream-offers 40s linear infinite;
                width: fit-content;
              }
              .dream-offers-slider:hover {
                animation-play-state: paused;
              }
              .dream-offer-card {
                flex: 0 0 auto;
                width: calc(100vw - 64px);
                max-width: 380px;
                margin: 0 12px;
              }
              @media (min-width: 768px) {
                .dream-offer-card {
                  margin: 0 20px;
                }
              }
            `}</style>

            <div className="dream-offers-slider">
              {/* Duplicate the array for seamless loop */}
              {[
                { company: 'Infosys', salary: '9.5 LPA', students: 6, batch: '2024-25', logo: '/images/companies/Infosys_logo.png' },
                { company: 'TCS', salary: '9 LPA', students: 2, batch: '2024-25', logo: '/images/companies/TCS_logo.png' },
                { company: 'Cognizant', salary: '8.28 LPA', students: 14, batch: '2024-25', logo: '/images/companies/Cognizant_logo.png' },
                { company: 'Samsung R&D', salary: '7.65 LPA', students: 11, batch: '2024-25', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Samsung_Logo.svg' },
                { company: 'Amazon', salary: '44 LPA', students: 35, batch: '2021-23', logo: '/images/companies/Amazon_logo.webp' },
                { company: 'Microsoft', salary: '49.12 LPA', students: 3, batch: '2022-24', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
                { company: 'Deloitte', salary: '52 LPA', students: 2, batch: '2023-24', logo: '/images/companies/Deloitte_logo.png' },
                { company: 'Accenture', salary: '59.91 LPA', students: 1, batch: '2024', logo: '/images/companies/Accenture_logo.png' },
                { company: 'Infosys', salary: '9.5 LPA', students: 6, batch: '2024-25', logo: '/images/companies/Infosys_logo.png' },
                { company: 'TCS', salary: '9 LPA', students: 2, batch: '2024-25', logo: '/images/companies/TCS_logo.png' },
                { company: 'Cognizant', salary: '8.28 LPA', students: 14, batch: '2024-25', logo: '/images/companies/Cognizant_logo.png' },
                { company: 'Samsung R&D', salary: '7.65 LPA', students: 11, batch: '2024-25', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Samsung_Logo.svg' },
                { company: 'Amazon', salary: '44 LPA', students: 35, batch: '2021-23', logo: '/images/companies/Amazon_logo.webp' },
                { company: 'Microsoft', salary: '49.12 LPA', students: 3, batch: '2022-24', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
                { company: 'Deloitte', salary: '52 LPA', students: 2, batch: '2023-24', logo: '/images/companies/Deloitte_logo.png' },
                { company: 'Accenture', salary: '59.91 LPA', students: 1, batch: '2024', logo: '/images/companies/Accenture_logo.png' },
              ].map((offer, index) => (
                <div key={index} className="dream-offer-card">
                  <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-700">
                    {/* Company Logo Area */}
                    <div className="relative h-56 bg-white flex items-center justify-center p-10">
                      <img
                        src={offer.logo}
                        alt={offer.company}
                        className="max-w-full max-h-32 object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Details Footer - Switched to Blue Theme */}
                    <div className="p-5 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
                      <h3 className="text-2xl font-black mb-1">{offer.salary}</h3>
                      <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/10">
                        <span className="text-[10px] uppercase font-bold tracking-wider opacity-60">Batch {offer.batch}</span>
                        <span className="text-[10px] uppercase font-bold tracking-wider">{offer.students} Student{offer.students > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Text */}
          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
              Hover to pause | Scroll to explore
            </p>
          </div>
        </div>
      </section>

      {/* Top Internships Section */}
      <section id="Internships" className="w-full min-h-screen flex items-center py-24 px-8 md:px-28 bg-white relative overflow-hidden scroll-mt-24">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
            <div className="relative">
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2 block">Our Proud Interns</span>
              <h2 className="text-slate-800 text-4xl md:text-5xl font-bold">Top Internships</h2>
              <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
            </div>
            <p className="text-slate-500 text-sm md:text-base max-w-md leading-relaxed">
              Celebrating our students who secured prestigious internships at global tech giants and industry leaders.
            </p>
          </div>

          {/* Stepped Animation Carousel */}
          <div className="relative overflow-hidden py-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentInternship * (100 / (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 4))}%)` }}
            >
              {internshipData.map((intern, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/4 px-4">
                  <div className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] border border-slate-100 h-full">
                    {/* Top Accent Line */}
                    <div className="h-1.5 w-full bg-slate-100 group-hover:bg-blue-600 transition-colors duration-500"></div>

                    {/* Logo Body */}
                    <div className="h-44 flex flex-col items-center justify-center p-8 bg-white">
                      <img
                        src={intern.logo}
                        alt={intern.company}
                        className="max-w-full max-h-24 object-contain group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                      />
                      <p className="mt-4 text-[11px] font-bold text-slate-400 uppercase tracking-tighter group-hover:text-blue-600 transition-colors text-center">
                        {intern.company}
                      </p>
                    </div>

                    {/* Footer - Student Count */}
                    <div className="bg-slate-900 group-hover:bg-blue-600 py-4 text-center transition-colors duration-500 relative overflow-hidden">
                      <div className="relative z-10 flex items-center justify-center gap-2">
                        <span className="text-white text-2xl font-black">{intern.count}</span>
                        <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Student{intern.count > 1 ? 's' : ''}</span>
                      </div>
                      {/* Decorative Background Element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-x-[-20%] -translate-y-[50%]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation/Indicators */}
          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={() => setCurrentInternship((prev) => (prev > 0 ? prev - 1 : internshipData.length - (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 4)))}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => setCurrentInternship((prev) => (prev < internshipData.length - (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 4) ? prev + 1 : 0))}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Placement Highlights Section */}
      <section id="Highlights" className="w-full py-20 px-6 md:px-28 bg-gradient-to-br from-slate-50 to-blue-50/50 scroll-mt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <h2 className="text-slate-800 text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">Placement Highlights</h2>
            <div className="w-full h-px bg-slate-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {placementHighlights.map((student, index) => (
              <div key={index} className="bg-white rounded-sm overflow-hidden flex shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100">
                {/* Info Container */}
                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-blue-800 font-extrabold text-base md:text-lg mb-1 md:mb-2 leading-tight uppercase tracking-tight">{student.name}</h3>
                  <div className="space-y-1">
                    <p className="text-slate-900 font-bold text-xs md:text-sm tracking-wide">{student.package}</p>
                    <p className="text-slate-600 text-[10px] md:text-xs font-semibold leading-relaxed">{student.company}</p>
                    <p className="text-slate-400 text-[9px] md:text-[10px] font-bold tracking-widest uppercase mt-0.5 md:mt-1">{student.year}</p>
                  </div>
                </div>
                {/* Image Container */}
                <div className="w-28 md:w-32 h-40 md:h-44 flex-shrink-0 relative overflow-hidden bg-slate-100">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-500/5 mix-blend-multiply"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Table Section */}
      <section id="HallOfFame" className="w-full py-16 md:py-24 px-6 md:px-28 bg-white overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-12 text-center md:text-left">
            <h2 className="text-slate-800 text-3xl md:text-5xl font-bold mb-4 md:mb-6 italic leading-tight">Hall of Fame</h2>
            <div className="w-full h-px bg-slate-200"></div>
          </div>

          {/* Modern Table Container */}
          <div className="relative overflow-x-auto rounded-xl border border-slate-200 shadow-lg bg-white">
            <div className="min-w-[800px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white border-b border-slate-800">
                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest whitespace-nowrap">S.no</th>
                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Student Name</th>
                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Br.</th>
                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Company Name</th>
                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Salary (INR)</th>
                    <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Designation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {hallOfFameData.map((row, index) => (
                    <tr key={index} className="hover:bg-blue-50/50 transition-colors duration-200 group">
                      <td className="px-6 py-4 text-sm font-medium text-slate-500">{row.sno}</td>
                      <td className="px-6 py-4 text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{row.name}</td>
                      <td className="px-6 py-4 text-xs font-semibold text-slate-600">{row.branch}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 uppercase">
                          {row.company}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-slate-800 tracking-tight">₹{row.salary}</td>
                      <td className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-tighter">{row.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 text-center text-slate-400 text-[10px] md:text-xs font-medium tracking-widest uppercase px-4">
            Swipe horizontally to view full table details
          </div>
        </div>
      </section>

      {/* Placement Glimpses 2024 - Compact Viewport Fit Grid */}
      <section id="Glimpses" className="w-full bg-[#050505] overflow-hidden lg:h-[calc(100vh-80px)] flex items-center scroll-mt-24">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row w-full h-full">
          {/* Left Title Area - Fixed width to ensure no clipping */}
          <div className="lg:w-[420px] p-8 md:p-12 flex items-center bg-[#050505] relative shrink-0">
            <h2 className="text-white text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              Placement <br />
              Glimpses <br />
              2024
            </h2>
          </div>

          {/* Right Grid Area */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 border-t border-black lg:border-t-0 lg:border-l-[3px] border-black">
            {/* Row 1 */}
            <div className="md:col-span-8 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-5xl md:text-7xl font-black text-blue-900 leading-none mb-2 tracking-tighter">1155</h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">No. of Placements</p>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">59.91 LPA</h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">Highest Salary Package</p>
            </div>

            {/* Row 2 */}
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">565</h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">Total Company Visited</p>
            </div>
            <div className="md:col-span-4 bg-[#0a0a0a] p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0 text-white">
              <h3 className="text-4xl md:text-6xl font-black leading-none mb-2 tracking-tighter text-white">78.57%</h3>
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] leading-tight opacity-80">Placement %</p>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">1683</h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">No. of Placement Offered</p>
            </div>

            {/* Row 3 */}
            <div className="md:col-span-5 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] md:border-b-0 border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-3 tracking-tighter">190</h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Dream Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">((CTC Between &lt;= 9.99 LPA &amp; &gt;= 7.00 LPA))</p>
              </div>
            </div>
            <div className="md:col-span-3 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] md:border-b-0 border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-5xl font-black text-blue-900 leading-none mb-3 tracking-tighter">60</h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Super Dream Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">(CTC &gt;= 10 LPA)</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-5xl font-black text-blue-900 leading-none mb-3 tracking-tighter">239</h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Super Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">(CTC Between &lt;= 6.99 LPA &amp; &gt;= 5.00 LPA)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Dean Section */}
      <section className="w-full min-h-screen flex items-center py-16 md:py-20 px-6 md:px-28 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-10 md:mb-12">
            <h2 className="text-slate-800 text-3xl md:text-5xl font-bold leading-tight">Message from HoD <br className="md:hidden" />(Department of CSE)</h2>
            <div className="w-full h-px bg-slate-200 mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start mb-12">
            {/* Dean Image */}
            <div className="lg:col-span-3 max-w-[280px] mx-auto lg:mx-0">
              <div className="shadow-xl rounded-sm overflow-hidden border border-slate-100">
                <img
                  src="/COEFaculty/madhubabu.jpeg"
                  alt="Dr. Ch. Madhu Babu"
                  className="w-full h-auto object-cover"
                  style={{ transform: 'none' }}
                />
              </div>
            </div>

            {/* Quote Area */}
            <div className="lg:col-span-9 flex flex-col justify-center pt-4 md:pt-8">
              <div className="relative">
                {/* Visual Quote Icon */}
                <FaQuoteLeft className="mb-6 text-blue-900/60 text-2xl md:text-4xl" />

                <h3 className="text-xl md:text-3xl font-bold text-slate-800 leading-snug mb-8 relative z-10 px-2 lg:px-0">
                  Our goal is not merely to produce graduates, but to nurture competent engineers who can think critically, innovate responsibly, and lead confidently in a rapidly evolving technological world.
                </h3>

                <div className="px-2 lg:px-0">
                  <p className="text-blue-700 font-bold text-base md:text-lg">
                    Dr. Ch. Madhu Babu, <br className="md:hidden" />
                    <span className="text-slate-600 font-semibold">HOD (Department of CSE)</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Detailed Message Footer */}
          <div className="mt-12 md:mt-16">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed text-left border-t border-slate-100 pt-8 px-2 lg:px-0">
              At BVRIT Narsapur, the Department of Computer Science & Engineering is committed to shaping industry-ready professionals with strong technical foundations, ethical values, and a mindset for continuous learning. Through academic rigor, hands-on practice, and industry-focused training, we prepare students to confidently meet real-world challenges confirm. Beyond placements, we guide our students towards leadership, innovation, and long-term career success.
            </p>
          </div>
        </div>
      </section >
      <Footer />
    </div >
  );
};

export default Placements;
