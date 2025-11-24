import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Eğitim Paketleri', href: '#paketler' },
    { name: 'Kadromuz', href: '#kadro' },
    { name: 'Başarılar', href: '#basarilar' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'SSS', href: '#sss' },
  ];

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
                İŞLEM TAMAM
              </span>
              <span className="text-slate-600 text-xs">
                ONLINE DERS SİSTEMİ | LGS
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="sm">Kayıt Ol</Button>
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
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-600 hover:text-primary-600 py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="w-full">Hemen Başla</Button>
        </div>
      )}
    </nav>
  );
};