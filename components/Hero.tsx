import React, { useState, useEffect, useCallback } from 'react';

// Define the props for the Hero component
interface HeroProps {
  onClick?: () => void;
}

// Custom Arrow Component
const ChevronLeft = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const Hero: React.FC<HeroProps> = ({ onClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // The 5 requested images
  const slides = [
    { url: 'https://bvrit.ac.in/wp-content/uploads/2023/06/freshman.webp', alt: 'Freshman' },
    { url: 'https://bvrit.ac.in/wp-content/uploads/2023/06/IndoorSportsCom.webp', alt: 'Indoor Sports Complex' },
    { url: 'https://bvrit.ac.in/wp-content/uploads/2023/06/ab.webp', alt: 'Academic Block' },
    { url: 'https://bvrit.ac.in/wp-content/uploads/2023/07/HomePage-Banner-.png', alt: 'Home Page Banner' },
    { url: 'https://bvrit.ac.in/wp-content/uploads/2024/10/Optum-Offer.png', alt: 'Optum Offer' }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000); // 7 seconds per slide (Medium speed)

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      onClick={onClick}
      className="relative w-full h-[110vh] overflow-hidden bg-slate-900 -mt-16 md:-mt-20 pt-0"
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Image */}
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay if needed for text visibility elsewhere, but user asked for 'no blurr' and clear images. 
              We'll keep it clean as requested, similar to how Placements handles background but without the heavy text overlay here for now.
              Placements uses bg-black/50, but let's stick to clean images unless text is added. 
              If the images are banners, they might already have text. 
           */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      ))}

      {/* Navigation Arrows (Hidden on very small screens if preferred, or kept for control) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-20 pointer-events-none">
        <button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="pointer-events-auto w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          className="pointer-events-auto w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); }}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 md:w-8 bg-white' : 'w-1.5 md:w-2 bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;