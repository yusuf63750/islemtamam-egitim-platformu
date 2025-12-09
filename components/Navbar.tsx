import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { useSiteContent } from '../context/SiteContentContext';
import { TopBar } from './TopBar';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content } = useSiteContent();
  const { navbar } = content;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // If it's a hash link, we might need to navigate to home first if not already there
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar - Always visible but maybe hide on scroll if desired, for now keeping it simple */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'}`}>
        <TopBar />
      </div>

      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <img src="/LOGO.png" alt="İşlemTamam Logo" className="w-12 h-12 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold tracking-tight uppercase text-slate-900">
                  {navbar.logoText}
                </span>
                <span className="text-slate-600 text-xs">
                  {navbar.tagline}
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navbar.links.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </Link>
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
              <Link
                key={link.id}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-primary-600 py-2 border-b border-slate-50"
              >
                {link.label}
              </Link>
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
    </div>
  );
};