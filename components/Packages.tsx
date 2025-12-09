import React from 'react';
import { Check, Zap } from 'lucide-react';
import { Button } from './Button';
import { useSiteContent } from '../context/SiteContentContext';

export const Packages: React.FC = () => {
  const { content } = useSiteContent();
  const packages = content.packages;

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <section id="paketler" className="py-20 bg-slate-50 scroll-mt-20 relative overflow-hidden">
      {/* Moving Pattern Background */}
      <div className="absolute inset-0 opacity-10 animate-slide-diagonal animation-delay-2000"
        style={{ backgroundImage: 'url(/fun_animated_bg_pattern_1765316023098.png)', backgroundSize: '400px' }}>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-20 right-10 animate-bounce-slow hidden lg:block opacity-20 pointer-events-none">
        <span className="text-6xl">🎓</span>
      </div>
      <div className="absolute bottom-20 left-10 animate-wiggle hidden lg:block opacity-20 pointer-events-none">
        <span className="text-6xl">🚀</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">{packages.eyebrow}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl flex items-center justify-center gap-3">
            <span className="text-4xl">💎</span>
            {packages.title}
            <span className="text-4xl">🌟</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {packages.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.options.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-8 border transition-all duration-300 ${pkg.highlight
                ? 'bg-white border-primary-200 shadow-xl ring-4 ring-primary-50 scale-105 z-10'
                : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
                }`}
            >
              {pkg.highlight && (
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold mb-4">
                  <Zap size={14} className="fill-primary-700" />
                  {pkg.badgeText ?? 'POPÜLER'}
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900">{pkg.name}</h3>
              <p className="mt-2 text-slate-500 text-sm">{pkg.description}</p>

              <div className="my-6 flex items-baseline">
                <span className="text-4xl font-extrabold text-slate-900">{pkg.price}</span>
                <span className="text-slate-500 ml-2">{pkg.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600">
                    <Check size={20} className="text-green-500 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.highlight ? 'primary' : 'outline'}
                className="w-full justify-center"
                onClick={() => handleNavigation(pkg.buttonHref)}
              >
                {pkg.buttonLabel}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            {packages.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};