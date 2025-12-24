import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVideo } from '../contexts/VideoContext';

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

interface HeaderProps {
  onLogoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isMobileAdminPanelOpen, setIsMobileAdminPanelOpen] = useState(false);
  const mobileAdminPanelRef = useRef<HTMLDivElement>(null);
  const adminMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { playVideo } = useVideo();
  const navigate = useNavigate();

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
                            <div className="text-base font-medium text-slate-800 group-hover:text-red-600">{link.name}</div>
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
                              <div className="text-sm font-medium text-slate-800 group-hover:text-red-600">
                                {link.name}
                              </div>
                              <div className="text-xs text-slate-500">{link.desc}</div>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-slate-400 group-hover:text-red-500 group-hover:translate-x-1 transition-transform"
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
                {/* (You may add a hamburger/mobile menu here if needed) */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
