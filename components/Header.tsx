import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVideo } from '../contexts/VideoContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, GraduationCap, ExternalLink } from 'lucide-react';

// Admin Panel Links
interface AdminLink {
  name: string;
  link: string;
  target?: string;
  desc: string;
  color: string;
}
const adminPanelLinks: AdminLink[] = [
  {
    name: 'ECAP',
    link: 'https://bvrit.edu.in/Default.aspx?ReturnUrl=%2f',
    target: '_blank',
    desc: 'Academic & exam portal',
    color: 'from-blue-500 to-cyan-500'
  },

];

// Navigation Link key interface
interface LinkItem {
  id: string;
  label: string;
}

const defaultLinks: LinkItem[] = [
  { id: 'About', label: 'About' },
  { id: 'Accreditations', label: 'Accreditations' },
  { id: 'CSEStats', label: 'Stats' },
  { id: 'GraceHopper', label: 'COE' },
  { id: 'Clubs', label: 'Clubs' },
  { id: 'RAndD', label: 'R&D' },
  { id: 'Placements', label: 'Placements' },
  { id: 'Faculty', label: 'Faculty' },
  { id: 'Testimonials', label: 'Testimonials' },
  { id: 'Footer', label: 'Contact' },
];

interface HeaderProps {
  onLogoClick?: () => void;
  customLinks?: LinkItem[];
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, customLinks }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isMobileAdminPanelOpen, setIsMobileAdminPanelOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileAdminPanelRef = useRef<HTMLDivElement>(null);
  const adminMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { playVideo } = useVideo();
  const navigate = useNavigate();

  // Determine which links to use
  const navLinks = customLinks || defaultLinks;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(y > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileAdminPanelRef.current &&
        !mobileAdminPanelRef.current.contains(event.target as Node)
      ) {
        setIsMobileAdminPanelOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileAdminPanelRef]);

  // Navigation Logic
  const [activeSection, setActiveSection] = useState<string>('');

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleScrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    // Header is fixed, approx 64px (h-16)
    const offset = 64;

    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(link.id);
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
  }, [navLinks]);

  const handleAdminPanelEnter = () => {
    if (adminMenuTimeoutRef.current) clearTimeout(adminMenuTimeoutRef.current);
    setIsAdminPanelOpen(true);
  };
  const handleAdminPanelLeave = () => {
    adminMenuTimeoutRef.current = setTimeout(() => setIsAdminPanelOpen(false), 200);
  };

  return (
    <>
      <style>{`
@keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
`}</style>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out"
        onMouseLeave={() => handleAdminPanelLeave()}
      >
        <div
          className="absolute top-0 left-0 h-full right-0 transition-all duration-300"
          style={{
            background: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            boxShadow: isScrolled
              ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
              : 'none'
          }}
        ></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-16'}`}>
            <div className="flex items-center gap-x-6">
              <div className="flex-shrink-0">
                <img
                  src="/images/BVRIT.png"
                  alt="BVRIT Logo"
                  width={isScrolled ? 110 : 138}
                  height={isScrolled ? 110 : 138}
                  className="cursor-pointer transition-all duration-300 hover:scale-105 object-contain"
                  onClick={() => {
                    playVideo();
                    navigate('/');
                    if (onLogoClick) onLogoClick();
                  }}
                  style={{
                    objectFit: 'contain',
                    maxWidth: '100%'
                  }}
                />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex flex-grow justify-center">
              <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleScrollToSection(e, item.id)}
                      className={`transition-colors ${activeSection === item.id ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'}`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center">
              <div
                className="hidden lg:flex h-full items-center justify-center relative ml-4"
                onMouseEnter={handleAdminPanelEnter}
                onMouseLeave={handleAdminPanelLeave}
              >
                <button
                  className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'hover:bg-slate-200 text-slate-700' : 'hover:bg-white/20 text-slate-700'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </button>
                <div
                  className={`absolute top-full right-0 mt-3 w-[320px] transition-all duration-300 ease-in-out transform-gpu ${isAdminPanelOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200/70 overflow-hidden">
                    <div className="bg-slate-100 px-4 py-3">
                      <h4 className="text-sm font-semibold text-slate-700">Quick Access</h4>
                    </div>
                    <div className="p-3">
                      {adminPanelLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.link}
                          target={link.target}
                          rel="noopener noreferrer"
                          className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-100 transition-all duration-200 mb-1 last:mb-0"
                        >
                          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold">
                            {link.name.substring(0, 1)}
                          </div>
                          <div className="flex-1">
                            <div className="text-base font-medium text-slate-800 group-hover:text-blue-600">{link.name}</div>
                            <div className="text-xs text-slate-500">{link.desc}</div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-slate-400 group-hover:text-red-500 group-hover:translate-x-1 transition-transform"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden space-x-2">
                <div className="relative" ref={mobileAdminPanelRef}>
                  <button
                    onClick={() => setIsMobileAdminPanelOpen(!isMobileAdminPanelOpen)}
                    className={`p-2 rounded-lg transition-colors duration-300 focus:outline-none mr-2 ${isMobileAdminPanelOpen ? 'bg-slate-200' : 'hover:bg-slate-100'
                      }`}
                    aria-label="Toggle admin panel"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </button>
                  <div
                    className={`absolute top-full right-0 mt-2 w-[280px] transition-all duration-300 ease-in-out transform-gpu ${isMobileAdminPanelOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                  >
                    <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200/70 overflow-hidden">
                      <div className="bg-slate-100 px-3 py-2">
                        <h4 className="text-sm font-semibold text-slate-700">Quick Access</h4>
                      </div>
                      <div className="py-2">
                        {adminPanelLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.link}
                            target={link.target}
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 transition-all duration-200"
                            onClick={() => setIsMobileAdminPanelOpen(false)}
                          >
                            <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-sm font-bold">
                              {link.name.substring(0, 1)}
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-slate-800 group-hover:text-blue-600">
                                {link.name}
                              </div>
                              <div className="text-xs text-slate-500">{link.desc}</div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Custom Hamburger Menu for Navigation */}
                <div className="relative">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`p-2.5 rounded-full transition-all duration-300 z-[100] relative ${isMobileMenuOpen ? 'text-slate-900' : 'text-slate-700'}`}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-8 w-8" strokeWidth={1} />
                    ) : (
                      <Menu className="h-8 w-8" />
                    )}
                  </button>

                  {/* Full Screen Mobile Navigation Overlay */}
                  <AnimatePresence>
                    {isMobileMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 w-full h-screen bg-white z-[90] flex items-center justify-center"
                        style={{ position: 'fixed', top: 0, left: 0 }}
                      >
                        <nav className="w-full text-center">
                          <ul className="flex flex-col items-center gap-y-7">
                            {navLinks.map((item, index) => (
                              <motion.li
                                key={item.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 + 0.1 }}
                              >
                                <a
                                  href={`#${item.id}`}
                                  onClick={(e) => {
                                    handleScrollToSection(e, item.id);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className={`text-2xl font-semibold transition-all duration-300 ${activeSection === item.id
                                    ? 'text-blue-600'
                                    : 'text-slate-800 active:text-blue-500'
                                    }`}
                                >
                                  {item.label}
                                </a>
                              </motion.li>
                            ))}
                          </ul>

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16"
                          >
                            <a
                              href="https://bvrit.edu.in/Default.aspx?ReturnUrl=%2f"
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-bold text-black/70 uppercase tracking-[0.2em] flex items-center justify-center gap-1.5"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              ECAP PORTAL <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </motion.div>
                        </nav>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
