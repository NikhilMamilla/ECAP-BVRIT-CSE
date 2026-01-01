import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { FaHandshake, FaTrophy, FaSearch, FaAward, FaQuoteLeft } from 'react-icons/fa';
import { BATCH_2024, BATCH_2025 } from '../placementData';
import { useContext } from 'react';
import { StoreContext } from '../../storeContext/StoreContext';

const Placements = () => {
  const { placementsData } = useContext(StoreContext);
  const [currentInternship, setCurrentInternship] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState('2025');
  const [glimpseBatch, setGlimpseBatch] = useState('2025');
  const [searchTerm, setSearchTerm] = useState('');
  const studentsPerPage = 15;

  const getActiveBatchData = () => {
    const rawData = selectedBatch === '2025' ? BATCH_2025 : BATCH_2024;
    // Only show students who are placed
    return rawData.filter(student => {
      if (selectedBatch === '2025') {
        return (student['Total offers'] && student['Total offers'] > 0) || (typeof student.Jobs === 'string' && student.Jobs.trim() !== '');
      } else {
        return (typeof student.Offers === 'string' && student.Offers.trim() !== '');
      }
    });
  };

  const filteredData = getActiveBatchData().filter(student => {
    const search = searchTerm.toLowerCase();

    // Safely handle Name, RollNo, and Jobs/Offers which might be NaN or non-string from Excel
    const name = (student.Name && typeof student.Name === 'string') ? student.Name.toLowerCase() : '';
    const roll = (student.RollNo || student['R.No']) || '';
    const rollStr = typeof roll === 'string' ? roll.toLowerCase() : '';
    const jobs = (student.Jobs || student.Offers) || '';
    const jobsStr = typeof jobs === 'string' ? jobs.toLowerCase() : '';

    return name.includes(search) || rollStr.includes(search) || jobsStr.includes(search);
  });

  // Internship data - Dynamic from Google Sheets
  const dynamicInternships = placementsData?.filter((d) => d.section === 'internship').map((d) => ({
    company: d.key,
    count: parseInt(d.value) || 0,
    logo: d.logo || d.extra || `/images/companies/${d.key.toLowerCase().replace(/\s+/g, '')}.png`
  }));

  const internshipData = dynamicInternships || [];

  // Auto-play for internships carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInternship((prev) => (prev + 1) % (internshipData.length - 3)); // show 4 at a time
    }, 5000);
    return () => clearInterval(timer);
  }, [internshipData.length]);


  // Dream offers data - Dynamic
  const dynamicDreamOffers = placementsData?.filter((d) => d.section === 'dream_offer').map((d) => ({
    company: d.key,
    salary: d.value + (d.suffix ? ' ' + d.suffix : ' LPA'),
    students: parseInt(d.label) || 1,
    batch: d.extra || '2025',
    logo: d.logo || `/images/companies/${d.key.toLowerCase().replace(/\s+/g, '')}.png`
  }));

  const dreamOffers2025 = dynamicDreamOffers?.filter(d => d.batch === '2025') || [];

  const dreamOffers2024 = dynamicDreamOffers?.filter(d => d.batch === '2024') || [];

  const dynamicHighlights = placementsData?.filter((d) => d.section === 'highlight').map((d) => ({
    name: d.key,
    package: d.value + (d.suffix ? ' ' + d.suffix : ' LPA'),
    company: d.label || '',
    year: d.extra || '2025',
    image: d.logo || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop'
  }));

  const highlights2025 = dynamicHighlights?.filter(d => d.year === '2025') || [];

  const highlights2024 = dynamicHighlights?.filter(d => d.year === '2024') || [];

  // Top recruiters - Static as requested
  const topRecruiters = [
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

  // Placement Page Links
  const placementLinks = [
    { id: 'Stats', label: 'Overview' },
    { id: 'Recruiters', label: 'Recruiters' },
    { id: 'SalaryStats', label: 'Salary' },
    { id: 'DreamOffers', label: 'Dream Offers' },
    { id: 'Internships', label: 'Internships' },
    { id: 'Highlights', label: 'Highlights' },
    { id: 'PlacementData', label: 'Student Records' },
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
              {placementsData.find(d => d.section === 'hero' && d.key === 'count')?.value || '260'} Students Placed
              <span className="block text-blue-400 mt-2">
                {placementsData.find(d => d.section === 'hero' && d.key === 'batch')?.label || 'Batch 2025 (2021-25)'}
              </span>
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
              Placements Statistics ({placementsData.find(d => d.section === 'stats' && d.key === 'year_range')?.value || '24-25'})
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
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">
                  {placementsData.find(d => d.section === 'stats' && d.key === 'companies')?.value || '48'}
                </h3>
                <p className="text-lg md:text-xl font-semibold mb-1">COMPANIES</p>
                <p className="text-xs md:text-sm opacity-90">
                  {placementsData.find(d => d.section === 'stats' && d.key === 'companies')?.label || 'Visited for Batch 2025'}
                </p>
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
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">
                  {placementsData.find(d => d.section === 'stats' && d.key === 'offers')?.value || '1008'}
                </h3>
                <p className="text-lg md:text-xl font-semibold mb-1">OFFERS</p>
                <p className="text-xs md:text-sm opacity-90">
                  {placementsData.find(d => d.section === 'stats' && d.key === 'offers')?.label || 'Secured in Session'}
                </p>
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
                <h3 className="text-4xl md:text-5xl font-bold mb-1 md:mb-2">
                  {placementsData.find(d => d.section === 'stats' && d.key === 'highest')?.value || '49.12'} {placementsData.find(d => d.section === 'stats' && d.key === 'highest')?.suffix || 'LPA'}
                </h3>
                <p className="text-lg md:text-xl font-semibold mb-1">HIGHEST</p>
                <p className="text-xs md:text-sm opacity-90">
                  {placementsData.find(d => d.section === 'stats' && d.key === 'highest')?.label || 'Package Offered'}
                </p>
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
                animation: scroll-left 50s linear infinite;
              }
              .scroll-container:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="flex overflow-hidden">
              <div className="scroll-container">
                {[...topRecruiters, ...topRecruiters].map((company, index) => (
                  <div
                    key={index}
                    className="group flex-shrink-0 w-64 h-40 mx-4 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center p-6 border border-slate-700/30"
                  >
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const span = document.createElement('span');
                            span.className = 'text-slate-800 font-bold text-center px-4 break-words';
                            span.innerText = company.name;
                            parent.appendChild(span);
                          }
                        }}
                      />
                    ) : (
                      <span className="text-slate-800 font-bold text-center px-4 break-words">
                        {company.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Packages and Major Bulk Recruiters */}
      <section id="EliteBulk" className="w-full py-16 px-8 md:px-28 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Elite Salary Packages */}
            <div className="text-center">
              <div className="mb-6 md:mb-8">
                <h3 className="text-slate-400 text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-widest">Elite Salary Packages</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-400">15+ LPA</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {(() => {
                  const dynamicElite = placementsData?.filter(d => d.section === 'elite_package').map(d => ({
                    name: d.key,
                    logo: d.logo || d.Logo || `/images/companies/${d.key.toLowerCase().replace(/\s+/g, '')}.png`,
                    package: d.value + (d.suffix ? ' ' + d.suffix : ' LPA')
                  }));
                  return dynamicElite || [];
                })().map((company, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center min-h-[110px] md:min-h-[130px] border border-slate-100 shadow-sm relative group">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-12 md:max-h-16 object-contain mb-2"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span className="text-[10px] font-bold text-blue-600 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                      {company.package}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold block md:hidden group-hover:block mt-1">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Bulk Recruiters */}
            <div className="text-center">
              <div className="mb-6 md:mb-8">
                <h3 className="text-slate-400 text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-widest">Major Bulk Recruiters</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-blue-400">50+ Offers</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
                {(() => {
                  const dynamicBulk = placementsData?.filter(d => d.section === 'bulk_recruiter').map(d => ({
                    name: d.key,
                    logo: d.logo || d.Logo || `/images/companies/${d.key.toLowerCase().replace(/\s+/g, '')}.png`,
                    offers: d.value + (d.suffix ? ' ' + d.suffix : ' Offers')
                  }));
                  return dynamicBulk || [];
                })().map((company, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center min-h-[110px] md:min-h-[130px] border border-slate-100 shadow-sm relative group">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-12 md:max-h-16 object-contain mb-2"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <span className="text-[10px] font-bold text-blue-600 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                      {company.offers}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold block md:hidden group-hover:block mt-1">{company.name}</span>
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
                  {(() => {
                    const medianData = placementsData?.filter(d => d.section === 'chart_median').map(d => ({
                      year: d.key,
                      value: parseFloat(d.value) || 0
                    }));
                    return medianData || [];
                  })().map((data, idx) => {
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
            {(() => {
              const packageConfigs = [
                { title: 'Highest Package', section: 'chart_highest', default: [{ year: '2022', value: 44.0 }, { year: '2023', value: 52.0 }, { year: '2024', value: 49.12 }, { year: '2025', value: 32.0 }] },
                { title: 'Average Package', section: 'chart_average', default: [{ year: '2022', value: 4.5 }, { year: '2023', value: 4.8 }, { year: '2024', value: 5.5 }, { year: '2025', value: 5.7 }] },
                { title: 'Median Package', section: 'chart_median_package', default: [{ year: '2022', value: 4.2 }, { year: '2023', value: 4.5 }, { year: '2024', value: 4.5 }, { year: '2025', value: 4.5 }] }
              ];

              return packageConfigs.map(config => {
                const dynamicValues = placementsData?.filter(d => d.section === config.section).map(d => ({
                  year: d.key,
                  value: parseFloat(d.value) || 0
                }));
                return {
                  title: config.title,
                  values: dynamicValues && dynamicValues.length > 0 ? dynamicValues : config.default
                };
              });
            })().map((package_data, idx) => {
              const maxValue = Math.max(...package_data.values.map(v => v.value));
              const minValue = 0; // Ground all graphs at 0 for accurate visualization
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
                      <div className="absolute inset-0 flex flex-col justify-between ml-10">
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
                          <defs>
                            <linearGradient id={`gradient-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                            </linearGradient>
                            <filter id={`shadow-${idx}`} x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                              <feOffset dx="0" dy="4" result="offsetblur" />
                              <feComponentTransfer>
                                <feFuncA type="linear" slope="0.3" />
                              </feComponentTransfer>
                              <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                              </feMerge>
                            </filter>
                          </defs>

                          {/* Connection Path */}
                          <path
                            d={`M 0 ${200 - ((package_data.values[0].value - minValue) / (maxValue - minValue || 1) * 170)} 
                                 C 50 ${200 - ((package_data.values[0].value - minValue) / (maxValue - minValue || 1) * 170)}, 50 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue || 1) * 170)}, 100 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue || 1) * 170)}
                                 C 150 ${200 - ((package_data.values[1].value - minValue) / (maxValue - minValue || 1) * 170)}, 150 ${200 - ((package_data.values[2].value - minValue) / (maxValue - minValue || 1) * 170)}, 200 ${200 - ((package_data.values[2].value - minValue) / (maxValue - minValue || 1) * 170)}
                                 C 250 ${200 - ((package_data.values[2].value - minValue) / (maxValue - minValue || 1) * 170)}, 250 ${200 - ((package_data.values[3].value - minValue) / (maxValue - minValue || 1) * 170)}, 300 ${200 - ((package_data.values[3].value - minValue) / (maxValue - minValue || 1) * 170)}`}
                            fill="none"
                            stroke="rgb(59, 130, 246)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            filter={`url(#shadow-${idx})`}
                          />

                          {/* Enhanced data points */}
                          {package_data.values.map((val, i) => (
                            <g key={i}>
                              <circle
                                cx={(i * 300) / (package_data.values.length - 1)}
                                cy={200 - ((val.value - minValue) / (maxValue - minValue || 1) * 170)}
                                r="5"
                                fill="white"
                                stroke="rgb(59, 130, 246)"
                                strokeWidth="3"
                              />
                            </g>
                          ))}
                        </svg>

                        {/* Value labels correctly positioned relative to the Chart Area */}
                        {package_data.values.map((val, i) => (
                          <div
                            key={i}
                            className="absolute"
                            style={{
                              top: `${200 - ((val.value - minValue) / (maxValue - minValue || 1) * 170) - 30}px`,
                              left: `${(i * 100) / (package_data.values.length - 1)}%`,
                              transform: 'translateX(-50%)'
                            }}
                          >
                            <div className="bg-blue-500 text-white px-2 py-1 rounded shadow-lg whitespace-nowrap">
                              <span className="text-[11px] font-bold">{val.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* X-axis labels */}
                      <div className="flex justify-between mt-2 ml-10">
                        {package_data.values.map((val, i) => (
                          <span key={i} className="text-xs text-slate-600 font-bold">{val.year}</span>
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
                animation: scroll-dream-offers 25s linear infinite;
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
              {(() => {
                const offers = selectedBatch === '2025' ? dreamOffers2025 : dreamOffers2024;
                return [...offers, ...offers].map((offer, index) => (
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
                ));
              })()}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(selectedBatch === '2025' ? highlights2025 : highlights2024).map((student, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

                <div>
                  <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                    {student.name}
                  </h3>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Package Secured</p>
                      <p className="text-3xl font-black text-blue-600 tracking-tight">{student.package}</p>
                    </div>

                    <div className="w-full h-px bg-slate-100"></div>

                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Company</p>
                        <p className="text-lg font-bold text-slate-700">{student.company}</p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-300 bg-slate-50 px-2 py-1 rounded-md">{student.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Glimpses Batch Switcher */}
      <section className="bg-[#050505] pt-12">
        <div className="max-w-[1500px] mx-auto px-8">
          <div className="flex items-center gap-4 bg-white/5 p-1 rounded-xl w-fit">
            <button
              onClick={() => setGlimpseBatch('2025')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${glimpseBatch === '2025' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-white/10'}`}
            >
              2025 Glimpses
            </button>
            <button
              onClick={() => setGlimpseBatch('2024')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${glimpseBatch === '2024' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:bg-white/10'}`}
            >
              2024 Glimpses
            </button>
          </div>
        </div>
      </section>

      {/* Placement Glimpses - Compact Viewport Fit Grid */}
      <section id="Glimpses" className="w-full bg-[#050505] overflow-hidden lg:h-[calc(100vh-160px)] flex items-center scroll-mt-24">
        <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row w-full h-full">
          {/* Left Title Area */}
          <div className="lg:w-[420px] p-8 md:p-12 flex items-center bg-[#050505] relative shrink-0">
            <h2 className="text-white text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              Placement <br />
              Glimpses <br />
              {glimpseBatch}
            </h2>
          </div>

          {/* Right Grid Area */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 border-t border-black lg:border-t-0 lg:border-l-[3px] border-black">
            {/* Row 1 */}
            <div className="md:col-span-8 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-5xl md:text-7xl font-black text-blue-900 leading-none mb-2 tracking-tighter">
                {placementsData.find(d => d.section === `glimpse_${glimpseBatch}` && d.key === 'offers')?.value || (glimpseBatch === '2025' ? '1008' : '279')}
              </h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">No. of Placement Offered</p>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">
                {placementsData.find(d => d.section === `glimpse_${glimpseBatch}` && d.key === 'highest')?.value || (glimpseBatch === '2025' ? '32' : '49.12')} LPA
              </h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">Highest Salary Package</p>
            </div>

            {/* Row 2 */}
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">
                {placementsData.find(d => d.section === `glimpse_${glimpseBatch}` && d.key === 'companies')?.value || (glimpseBatch === '2025' ? '48+' : '50+')}
              </h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">Total Company Visited</p>
            </div>
            <div className="md:col-span-4 bg-[#0a0a0a] p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0 text-white">
              <h3 className="text-4xl md:text-6xl font-black leading-none mb-2 tracking-tighter text-white">
                {placementsData.find(d => d.section === `glimpse_${glimpseBatch}` && d.key === 'percentage')?.value || (glimpseBatch === '2025' ? '86.38%' : '75.2%')}
              </h3>
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] leading-tight opacity-80">Placement %</p>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-2 tracking-tighter">
                {placementsData.find(d => d.section === `glimpse_${glimpseBatch}` && d.key === 'students_placed')?.value || (glimpseBatch === '2025' ? '260' : '243')}
              </h3>
              <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.2em] leading-tight">Total Students Placed</p>
            </div>

            {/* Row 3 */}
            <div className="md:col-span-5 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] md:border-b-0 border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-6xl font-black text-blue-900 leading-none mb-3 tracking-tighter">
                {placementsData.find(d => d.section === `glimpse_${glimpseBatch}` && d.key === 'dream_offers')?.value || (glimpseBatch === '2025' ? '15+' : '190')}
              </h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Dream Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">((CTC &gt;= 7.00 LPA))</p>
              </div>
            </div>
            <div className="md:col-span-3 bg-white p-6 md:p-10 flex flex-col justify-center border-b-[3px] md:border-b-0 border-r-0 md:border-r-[3px] border-black min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-5xl font-black text-blue-900 leading-none mb-3 tracking-tighter">
                {placementsData.find(d => d.section === `glimpse_${glimpseBatch}` && d.key === 'super_dream_of')?.value || (glimpseBatch === '2025' ? '52+' : '60')}
              </h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Super Dream Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">(CTC &gt;= 10 LPA)</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-white p-6 md:p-10 flex flex-col justify-center min-h-[160px] md:min-h-0">
              <h3 className="text-4xl md:text-5xl font-black text-blue-900 leading-none mb-3 tracking-tighter">
                {placementsData.find(d => d.section === `glimpse_${glimpseBatch}` && d.key === 'super_offers')?.value || (glimpseBatch === '2025' ? '83+' : '239')}
              </h3>
              <div className="space-y-1">
                <p className="text-xs md:text-sm font-black text-black uppercase tracking-[0.15em] leading-tight">Super Offers</p>
                <p className="text-[9px] md:text-[10px] font-bold text-slate-500 leading-tight">(CTC &gt;= 5.00 LPA)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Placement Data Section */}
      <section id="PlacementData" className="w-full py-16 md:py-20 px-6 md:px-28 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10 md:mb-12 text-center">
            <h2 className="text-slate-800 text-3xl md:text-5xl font-bold leading-tight mb-4">
              Student Placement Records
            </h2>
            <p className="text-slate-600 text-base md:text-lg max-w-3xl mx-auto">
              Comprehensive list of students and their career achievements at BVRIT CSE.
            </p>
            <div className="w-32 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Controls: Search and Batch Switch */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <div className="flex items-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-slate-200">
              <button
                onClick={() => { setSelectedBatch('2025'); setCurrentPage(1); }}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${selectedBatch === '2025' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                Batch 2021-25
              </button>
              <button
                onClick={() => { setSelectedBatch('2024'); setCurrentPage(1); }}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${selectedBatch === '2024' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                Batch 2020-24
              </button>
            </div>

            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, roll no, or company..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all"
              />
            </div>
          </div>

          {/* Placement Data Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Roll No</th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Student Name</th>
                    {selectedBatch === '2025' && <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Section</th>}
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">Company / Offers</th>
                    {selectedBatch === '2025' && <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-center">Total</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 italic">
                  {filteredData.length > 0 ? (
                    filteredData.slice((currentPage - 1) * studentsPerPage, currentPage * studentsPerPage).map((student, index) => (
                      <tr
                        key={student.RollNo || student['R.No'] || index}
                        className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-blue-50/50 transition-colors duration-200`}
                      >
                        <td className="px-6 py-4 text-sm font-mono text-blue-600 font-bold tracking-tight">
                          {student.RollNo || student['R.No']}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-slate-800 uppercase tracking-tight">
                          {student.Name}
                        </td>
                        {selectedBatch === '2025' && (
                          <td className="px-6 py-4 text-sm font-bold text-slate-500">
                            {student.Section}
                          </td>
                        )}
                        <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                          {student.Jobs || student.Offers || <span className="text-slate-300">Not Placed</span>}
                        </td>
                        {selectedBatch === '2025' && (
                          <td className="px-6 py-4 text-sm font-black text-blue-900 text-center">
                            {student['Total offers'] || 0}
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-20 text-center">
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                            <FaSearch className="text-slate-400 text-2xl" />
                          </div>
                          <p className="text-slate-500 font-medium tracking-tight">No students found matching your search.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Controls */}
          {filteredData.length > studentsPerPage && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-full">
                Showing {((currentPage - 1) * studentsPerPage) + 1} - {Math.min(currentPage * studentsPerPage, filteredData.length)} of {filteredData.length} Students
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => { setCurrentPage(prev => Math.max(prev - 1, 1)); window.scrollTo({ top: document.getElementById('PlacementData')?.offsetTop! - 100, behavior: 'smooth' }); }}
                  disabled={currentPage === 1}
                  className={`px-6 py-2 rounded-xl font-black text-xs uppercase tracking-tighter shadow-sm transition-all duration-300 ${currentPage === 1 ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white'}`}
                >
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">Page</span>
                  <span className="w-12 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg font-black text-lg shadow-lg shadow-blue-200">
                    {currentPage}
                  </span>
                  <span className="text-sm font-black text-slate-400 uppercase tracking-tighter">of {Math.ceil(filteredData.length / studentsPerPage)}</span>
                </div>

                <button
                  onClick={() => { setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredData.length / studentsPerPage))); window.scrollTo({ top: document.getElementById('PlacementData')?.offsetTop! - 100, behavior: 'smooth' }); }}
                  disabled={currentPage === Math.ceil(filteredData.length / studentsPerPage)}
                  className={`px-6 py-2 rounded-xl font-black text-xs uppercase tracking-tighter shadow-sm transition-all duration-300 ${currentPage === Math.ceil(filteredData.length / studentsPerPage) ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white'}`}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-50 border border-blue-100 px-6 py-3 rounded-2xl">
              <p className="text-blue-800 text-sm font-bold flex items-center gap-2">
                <FaAward className="text-blue-500" />
                Data updated as of December 2025. Continuous updates in progress.
              </p>
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
      </section>
      <Footer />
    </div>
  );
};

export default Placements;
