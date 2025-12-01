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
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />

      <section className="bg-white pt-32 pb-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Title */}
          <div className="text-center mb-10">
            <AnimatedElement animation="slide-down" className="block">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                Complete Faculty Directory
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fade-in" delay={200} className="block">
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Meet all the teaching and non-teaching staff of the CSE department.
              </p>
            </AnimatedElement>
          </div>

          {/* Sticky Search & Filter Header */}
          <div className="sticky top-20 z-30 bg-white/90 backdrop-blur-md py-4 border-b border-gray-100 shadow-sm mb-10 -mx-4 px-4 md:mx-0 md:px-0 md:rounded-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-6xl mx-auto">

              {/* Search Bar */}
              <div className="relative w-full md:w-96 group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Search by name or designation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category Tabs */}
              <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto gap-2 no-scrollbar">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === category
                      ? 'bg-blue-600 text-white shadow-md transform scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="min-h-[400px]">
            {displayCategories.length === 0 ? (
              <div className="text-center py-20">
                <div className="inline-block p-6 bg-gray-50 rounded-full mb-4">
                  <Filter className="w-12 h-12 text-gray-300" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No faculty found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-6 text-blue-600 font-semibold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              displayCategories.map(category => (
                <div key={category} className="mb-16">
                  <div className="flex items-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">{category}</h3>
                    <div className="flex-grow h-px bg-gray-200 ml-6"></div>
                    <span className="text-sm font-medium text-gray-400 ml-4 whitespace-nowrap">
                      {groupedFaculty[category]?.length} Members
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {groupedFaculty[category]?.map((faculty, idx) => (
                      <AnimatedElement key={`${category}-${idx}`} animation="slide-up" delay={idx * 50} className="h-full">
                        <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 flex flex-col items-center text-center h-full transform hover:-translate-y-1">
                          <div className="relative mb-5">
                            <div className="absolute inset-0 bg-teal-100 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-300 opacity-50"></div>
                            <img
                              src={faculty.image || 'https://randomuser.me/api/portraits/lego/1.jpg'}
                              alt={faculty.name}
                              className="relative w-28 h-28 object-cover object-top rounded-full border-4 border-white shadow-sm group-hover:border-blue-50 transition-colors duration-300"
                            />
                          </div>

                          <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors duration-300 line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                            {faculty.name}
                          </h4>

                          <div className="w-12 h-1 bg-teal-100 rounded-full mb-3 group-hover:bg-teal-500 transition-colors duration-300"></div>

                          <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide text-xs">
                            {faculty.designation}
                          </p>
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
