import React, { useState, useMemo } from 'react';
import { AnimatedElement } from './AnimatedElement';
import FacultyData from './data/facultyData';
import Header from './Header';
import Footer from './Footer';
import { Search, Filter } from 'lucide-react';

const categoriesInOrder = ['HOD', 'Professor', 'Associate Professor', 'Assistant Professor', 'Non-Teaching'];
const allCategories = ['All', ...categoriesInOrder];

const FacultyAll: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter data based on search query and active category
  const filteredFaculty = useMemo(() => {
    return FacultyData.filter(person => {
      const matchesSearch =
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.designation.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = activeCategory === 'All' || person.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // Group the filtered data
  const groupedFaculty = useMemo(() => {
    return filteredFaculty.reduce((acc: Record<string, typeof FacultyData>, person) => {
      if (!acc[person.category]) acc[person.category] = [];
      acc[person.category].push(person);
      return acc;
    }, {} as Record<string, typeof FacultyData>);
  }, [filteredFaculty]);

  // Determine which categories to show
  const displayCategories = activeCategory === 'All'
    ? categoriesInOrder.filter(cat => groupedFaculty[cat]?.length > 0)
    : [activeCategory].filter(cat => groupedFaculty[cat]?.length > 0);

  return (
    <div className="min-h-screen bg-[#fafbfc] font-inter text-gray-800 antialiased">
      <Header customLinks={[]} />

      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">

          {/* Page Banner - Minimal & Professional */}
          <div className="text-center mb-12 sm:mb-16">
            <AnimatedElement animation="slide-down" className="block">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Complete Faculty Directory
              </h1>
              <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full opacity-80"></div>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={200} className="block mt-4">
              <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
                Our world-class faculty members are dedicated to fostering innovation and excellence in engineering.
              </p>
            </AnimatedElement>
          </div>

          {/* Integrated Search & Filter - No Scrollers, Wrapping Layout */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col gap-10">

              {/* Search Field - Centered & Elegant */}
              <div className="relative max-w-2xl mx-auto w-full group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-14 pr-6 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:shadow-md transition-all duration-300 outline-none text-lg"
                  placeholder="Find a faculty member by name, role or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Filter Tabs - Wrapping Layout (No Scroll) */}
              <div className="flex flex-wrap justify-center gap-3">
                {allCategories.map((category) => {
                  const count = category === 'All'
                    ? filteredFaculty.length
                    : FacultyData.filter(f => f.category === category).length;

                  return (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${activeCategory === category
                        ? 'bg-gray-900 text-white border-gray-900 shadow-md'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                    >
                      {category}
                      <span className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-md text-[10px] font-black ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Grid - Professional Proportions */}
          <div className="min-h-[500px]">
            {displayCategories.length === 0 ? (
              <AnimatedElement animation="fade-in" className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <Filter className="w-10 h-10 text-gray-200" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Matching Records</h3>
                <p className="text-gray-500 mb-8">Refine your search parameters to find the faculty you're looking for.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
                >
                  Reset Filter Controls
                </button>
              </AnimatedElement>
            ) : (
              displayCategories.map((category) => (
                <div key={category} className="mb-20 last:mb-0">
                  <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{category}</h2>
                    <div className="h-[2px] bg-gradient-to-r from-blue-600/50 to-transparent flex-1 rounded-full"></div>
                    <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                      {groupedFaculty[category]?.length} Professionals
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
                    {groupedFaculty[category]?.map((faculty, idx) => (
                      <AnimatedElement
                        key={`${category}-${idx}`}
                        animation="slide-up"
                        delay={idx % 5 * 50}
                        className="h-full"
                      >
                        <div className="group flex flex-col items-center">
                          {/* Portrait Container - Enhanced Circular Style */}
                          <div className="relative w-full aspect-square max-w-[180px] rounded-full overflow-hidden mb-5 border-4 border-white shadow-xl shadow-gray-200 transition-all duration-500 group-hover:shadow-blue-100 group-hover:scale-105">
                            {/* Colorful Base Image */}
                            <img
                              src={faculty.image || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&fit=crop'}
                              alt={faculty.name}
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Subtle Blue Glow on hover */}
                            <div className="absolute inset-0 ring-4 ring-blue-500/0 group-hover:ring-blue-500/10 transition-all duration-500 rounded-full"></div>
                          </div>

                          {/* Refined Identity Block */}
                          <div className="text-center px-1">
                            <h4 className="text-base md:text-lg font-bold text-gray-800 tracking-tight leading-tight mb-2 group-hover:text-blue-700 transition-colors">
                              {faculty.name}
                            </h4>
                            <div className="w-5 h-0.5 bg-gray-200 mx-auto mb-2 group-hover:w-10 group-hover:bg-blue-500 transition-all duration-500"></div>
                            <p className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.1em] leading-tight px-2">
                              {faculty.designation}
                            </p>
                          </div>
                        </div>
                      </AnimatedElement>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FacultyAll;
