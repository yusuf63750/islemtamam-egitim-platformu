import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from './Button';
import { useSiteContent } from '../context/SiteContentContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content } = useSiteContent();
  const { navbar } = content;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_self');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo (image + text beside it to match provided artwork) */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {/* Place your logo image at the project root or public folder as /LOGO.png */}
            <img src="/LOGO.png" alt="İşlemTamam Logo" className="w-12 h-12 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight uppercase text-slate-900">
                {navbar.logoText}
              </span>
              <span className="text-slate-600 text-xs">
                {navbar.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navbar.links.map((link) => (
              <a 
                key={link.id} 
                href={link.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigation(link.href);
                }}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavigation(navbar.ctaHref)}
            >
              {navbar.ctaLabel}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
          {navbar.links.map((link) => (
            <a 
              key={link.id} 
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                setIsMobileMenuOpen(false);
                handleNavigation(link.href);
              }}
              className="text-base font-medium text-slate-600 hover:text-primary-600 py-2 border-b border-slate-50"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="primary"
            className="w-full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              handleNavigation(navbar.ctaHref);
            }}
          >
            {navbar.ctaLabel}
          </Button>
        </div>
      )}
    </nav>
  );
};