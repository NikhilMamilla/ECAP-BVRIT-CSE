// src/components/StatsSection.tsx

import React, { useContext } from 'react';
import { useInView } from '../hooks/useInView';
import { useCounter } from '../hooks/useCounter';
import { AnimatedElement } from './AnimatedElement';
import { StoreContext } from '../storeContext/StoreContext';

// Default Data for the statistics cards - CSE Department Specific (Fallback)
const defaultStatsData = [
  { value: 1000, label: 'CSE Students', description: 'Across all batches', suffix: '+', decimals: 0 },
  { value: 86.4, label: 'Placement Rate', description: 'Highest department placement', suffix: '%', decimals: 1 },
  { value: 52, label: 'Highest Package', description: 'Record student achievement', suffix: ' LPA', decimals: 0 },
  { value: 5.7, label: 'Average Package', description: 'For Batch 2025 graduates', suffix: ' LPA', decimals: 1 },
  { value: 75, label: 'Expert Faculty', description: 'Including 22 Ph.D. scholars', suffix: '+', decimals: 0 },
  { value: 200, label: 'Companies for CSE', description: 'Tech giants & startups', suffix: '+', decimals: 0 },
  { value: 150, label: 'Research Publications', description: 'In AI, ML, Cloud & Security', suffix: '+', decimals: 0 },
  { value: 15, label: 'Tech Partnerships', description: 'MoUs with Microsoft, AWS, Google', suffix: '+', decimals: 0 },
];

// Type definition for a single stat item
type StatItem = typeof defaultStatsData[0];

// StatCard Sub-Component
const StatCard: React.FC<{ stat: StatItem; inView: boolean; delay: string; index: number }> = ({ stat, index }) => {
  const count = useCounter(stat.value, 2000, true, stat.decimals);

  return (
    <AnimatedElement
      animation={index % 2 === 0 ? "slide-up" : "slide-down"}
      delay={index * 100}
      className="h-full w-full"
    >
      <div
        className="bg-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-center items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-blue-100"
      >
        <div className="flex items-baseline justify-center">
          <span className="text-4xl md:text-5xl font-bold text-blue-600 tabular-nums">
            {count}
          </span>
          <span className="text-xl md:text-2xl font-bold text-blue-600 ml-1">
            {stat.suffix}
          </span>
        </div>
        <h3 className="text-sm md:text-base font-bold text-gray-900 mt-3 uppercase tracking-wide">
          {stat.label}
        </h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed font-medium">
          {stat.description}
        </p>
      </div>
    </AnimatedElement>
  );
};

// Main StatsSection Component
const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { statsData } = useContext(StoreContext);

  // Filter and map stats for this section
  const dynamicStats = statsData?.filter((item: any) => item.section === 'at_a_glance');

  // Use dynamic stats if available, otherwise fallback to default
  const displayStats = dynamicStats && dynamicStats.length > 0 ? dynamicStats.map((item: any) => ({
    value: parseFloat(item.value), // Ensure value is a number
    label: item.label,
    description: item.note, // Mapping 'note' from sheet to 'description'
    suffix: item.suffix && item.suffix !== 'null' ? item.suffix : '', // Handle null/empty suffix
    decimals: item.value.includes('.') ? 1 : 0 // Simple auto-decimal detection
  })) : defaultStatsData;

  // Use the order from defaultStatsData if dynamic data is present to maintain layout if needed,
  // or just use the order from the sheet. Here we rely on sheet order.

  return (
    <section className="relative pt-6 sm:pt-10 pb-6 sm:pb-10 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">

        <div className="text-center mb-8 sm:mb-16">
          <AnimatedElement animation="slide-down" className="block">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              CSE Department at a Glance
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fade-in" delay={200} className="block">
            <p className="mt-2 text-sm sm:text-base text-gray-600 px-4">A snapshot of our achievements and community</p>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {displayStats.map((stat: StatItem, index: number) => (
            <StatCard key={index} stat={stat} inView={inView} delay={`${index * 100}ms`} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;