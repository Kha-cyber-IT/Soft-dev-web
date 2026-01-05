import React, { useState, useEffect } from 'react';
import { X, Home, Building, Users, Heart, Calendar, BookOpen, MapPin, Menu } from 'lucide-react';
import { Page, NavigationProps } from '../types';

interface ExtendedNavProps extends NavigationProps {
  currentPage: Page;
}

export const Navigation: React.FC<ExtendedNavProps> = ({ 
  setPage, 
  currentPage 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    setIsOpen(false);
    setPage(page);
  };

  const navItems = [
    { id: Page.Home, label: 'Home' },
    { id: Page.NewBuilding, label: 'Building' },
    { id: Page.OurStaff, label: 'Staff' },
    { id: Page.Conference2025, label: 'Conference' },
    { id: Page.Events2026, label: 'Events 2026' },
    { id: Page.Stories, label: 'Stories' },
  ];

  return (
    <>
      <nav className={`liquid-glass-nav sticky top-0 z-50 w-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'shadow-lg border-b border-white/10' : 'bg-transparent border-transparent'
      }`}>
        {/* Logo - Sized to be more visible and clear while keeping it proportional */}
        <div className="flex items-center gap-2 cursor-pointer active-elevate" onClick={() => handleNavClick(Page.Home)}>
          <div className="h-10 w-28 md:w-36 bg-white rounded-md flex items-center justify-center px-3 py-1 shadow-sm">
            <img 
              src="https://i.postimg.cc/HW79Ljpk/1763367303077.png" 
              alt="PH Logo" 
              className="h-full w-auto object-contain" 
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-blue-400 font-heading ${
                currentPage === item.id ? 'text-blue-400' : 'text-white/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={() => window.open('https://www.cfmmap.org/', '_blank')}
            className="px-4 py-2 text-sm font-medium hover-elevate border border-white/20 rounded-md text-white/80 hover:text-white"
          >
            Find Church
          </button>
          <button 
            onClick={() => handleNavClick(Page.Give)}
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md shadow-sm active-elevate-2 hover:bg-blue-500 transition-colors"
          >
            Give Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 active-elevate rounded-md bg-white/5 border border-white/10"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Slide-in Menu Panel */}
      <div 
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-[110] bg-black/98 backdrop-blur-2xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-8 right-8 p-4 text-white/50 hover:text-white transition-colors active-elevate"
          aria-label="Close menu"
        >
            <X size={40} />
        </button>

        <div className="w-full max-w-sm px-8 space-y-4">
            <div className="text-center mb-12">
                <div className="bg-white px-4 py-2 rounded-xl inline-block mb-4 shadow-xl">
                    <img src="https://i.postimg.cc/HW79Ljpk/1763367303077.png" alt="Logo" className="h-12 md:h-16 w-auto object-contain" />
                </div>
                <h2 className="text-2xl font-black text-white tracking-widest uppercase font-heading">The Potter's House</h2>
            </div>
            
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-center py-5 px-8 text-lg font-bold rounded-2xl border transition-all active-elevate-2 font-heading ${
                        currentPage === item.id 
                        ? 'border-blue-500 bg-blue-600 text-white shadow-lg' 
                        : 'border-white/5 bg-white/5 text-white/80 hover:bg-white/10'
                    }`}
                >
                    {item.label}
                </button>
            ))}
            
            <button 
                onClick={() => handleNavClick(Page.Give)}
                className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-5 px-8 text-lg rounded-2xl border border-blue-400 shadow-lg active-elevate-2 mt-6"
            >
                Give Online
            </button>
        </div>
      </div>
    </>
  );
};