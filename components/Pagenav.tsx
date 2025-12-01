import React, { useState, useEffect } from 'react';

interface PagenavProps {
  onLogoClick?: () => void;
}

const Pagenav: React.FC<PagenavProps> = ({ onLogoClick }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScroll = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navHeight = document.getElementById("pagenav-bar")?.offsetHeight || 0;
    const offset = sectionId === 'About' ? 0 : navHeight;

    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };



  useEffect(() => {
    const sections = [
      'About',
      'Accreditations',
      'CSEPrograms',
      'CSEStats',
      'Faculty',
      'GraceHopper',
      'Clubs',
      'Placements',
      'Testimonials',
      'Footer',
    ];

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(id);
          break;
        }
      }
    };



    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollSpy();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      id="pagenav-bar"
      className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200 hidden md:block"

    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-10 py-2">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <img
            src="/images/BVRIT.png"
            alt="BVRIT Logo"
            width={140}
            height={140}
            className="cursor-pointer transition-all duration-300 hover:scale-105 object-contain"
            onClick={onLogoClick}
            style={{
              objectFit: "contain",
              maxWidth: "100%"
            }}
          />
        </div>

        {/* Centered Links */}
        <div className="flex-grow">
          <ul className="flex justify-center items-center gap-6 text-sm font-medium text-gray-700">
            <li>
              <a
                href="#About"
                onClick={(e) => handleScroll(e, 'About')}
                className={`transition-colors ${activeSection === 'About' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Accreditations"
                onClick={(e) => handleScroll(e, 'Accreditations')}
                className={`transition-colors ${activeSection === 'Accreditations' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                Accreditations
              </a>
            </li>
            <li>
              <a
                href="#CSEPrograms"
                onClick={(e) => handleScroll(e, 'CSEPrograms')}
                className={`transition-colors ${activeSection === 'CSEPrograms' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#CSEStats"
                onClick={(e) => handleScroll(e, 'CSEStats')}
                className={`transition-colors ${activeSection === 'CSEStats' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                Stats
              </a>
            </li>
            <li>
              <a
                href="#Faculty"
                onClick={(e) => handleScroll(e, 'Faculty')}
                className={`transition-colors ${activeSection === 'Faculty' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                Faculty
              </a>
            </li>
            <li>
              <a
                href="#GraceHopper"
                onClick={(e) => handleScroll(e, 'GraceHopper')}
                className={`transition-colors ${activeSection === 'GraceHopper' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                COE
              </a>
            </li>
            <li>
              <a
                href="#Clubs"
                onClick={(e) => handleScroll(e, 'Clubs')}
                className={`transition-colors ${activeSection === 'Clubs' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                Clubs
              </a>
            </li>
            <li>
              <a
                href="#Placements"
                onClick={(e) => handleScroll(e, 'Placements')}
                className={`transition-colors ${activeSection === 'Placements' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                Placements
              </a>
            </li>
            <li>
              <a
                href="#Testimonials"
                onClick={(e) => handleScroll(e, 'Testimonials')}
                className={`transition-colors ${activeSection === 'Testimonials' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#Footer"
                onClick={(e) => handleScroll(e, 'Footer')}
                className={`transition-colors ${activeSection === 'Footer' ? 'text-red-600 font-semibold' : 'hover:text-red-500'}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Pagenav;