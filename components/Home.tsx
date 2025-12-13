// import React from 'react';
import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Pagenav from './Pagenav';
import StatsSection from './StatsSection';
import CSEProgramOverview from './CSEProgramOverview';
import CSEFaculty from './CSEFaculty';
import PlacementsSection from './PlacementsSection';
import GraceHopperCOE from './GraceHopperCOE';
import Clubs from './Clubs';
import RAndDHomeSection from './RAndDHomeSection';

import Testimonials from './testominals';
import Footer from './Footer';
import Accreditations from './Accreditations';

const Home: React.FC = () => {
  const [showPagenav, setShowPagenav] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If Hero is not visible (scrolled past it), show Pagenav
        setShowPagenav(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1, // trigger when hero is barely out of view
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    // Scroll animation code
    const fadeElements = document.querySelectorAll('.fade-in-scroll');
    fadeElements.forEach(element => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(element);
    });

    const staggeredElements = document.querySelectorAll('.staggered-item');
    staggeredElements.forEach((element, index) => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(element);
    });

    return () => {
      // Clean up observers if needed
    };
  }, []);

  return (
    <div className="bg-white text-gray-800">

      {/* Keep original header visible initially
      {!showPagenav && <Header />}

      {/* /* PageNav replaces Header only AFTER hero scroll  */}
      {/* {showPagenav && (
        <div className="fixed top-0 w-full z-50 bg-white shadow-md transition-all duration-300">
          <Pagenav />
        </div>
      )}  */}
      {(isMobile || !showPagenav) && <Header />}
      {!isMobile && showPagenav && (
        <div className="fixed top-0 w-full z-50 bg-white shadow-md transition-all duration-300">
          <Pagenav />
        </div>
      )}

      <main className="space-y-0">
        <section id="Hero" ref={heroRef}>
          <Hero />
        </section>
        <section id='About'><About /></section>
        <section id="Accreditations"><Accreditations /></section>
        <section id="CSEPrograms"><CSEProgramOverview /></section>
        <section id="CSEStats"><StatsSection /></section>
        <section id="Faculty"><CSEFaculty /></section>
        <section id="GraceHopper">
          <GraceHopperCOE />
        </section>
        <section id="Clubs"><Clubs /></section>
        <section id="RAndD"><RAndDHomeSection /></section>
        <section id="Placements"><PlacementsSection /></section>

        <section id="Testimonials"><Testimonials /></section>
        <section id="Footer"><Footer /></section>
      </main>

    </div>


  );
};

export default Home;
