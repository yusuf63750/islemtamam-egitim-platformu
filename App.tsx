import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Packages } from './components/Packages';
import { TeacherHighlight } from './components/TeacherHighlight';
import { SuccessStories } from './components/SuccessStories';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ArrowRight } from 'lucide-react';
import { useSiteContent } from './context/SiteContentContext';
import { AdminApp } from './admin/AdminApp';
import { WhatsAppButton } from './components/WhatsAppButton';

// Wrapper for pages to ensure they have top padding for fixed navbar
const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="pt-32 min-h-screen bg-slate-50">
      {children}
    </div>
  );
};

const LandingPage: React.FC = () => {
  const { content } = useSiteContent();
  const cta = content.cta;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <WhatsAppButton />

      <main>
        <Hero />
        <Features />

        {/* Preview sections on home page */}
        <Packages />
        <TeacherHighlight />
        <SuccessStories />
        <Testimonials />

        {/* CTA Section */}
        <section className="py-20 bg-primary-600 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={
              cta.backgroundPatternUrl
                ? { backgroundImage: `url(${cta.backgroundPatternUrl})`, backgroundRepeat: 'repeat' }
                : undefined
            }
          ></div>
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {cta.title}
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="white"
                size="lg"
                className="text-primary-700 font-bold"
                onClick={() => window.location.href = cta.primaryButtonHref}
              >
                {cta.primaryButtonText}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="gap-2"
                onClick={() => window.open(cta.secondaryButtonHref, '_blank')}
              >
                {cta.secondaryButtonText} <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

// Generic Page Layout
const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <WhatsAppButton />
      <PageWrapper>
        {children}
      </PageWrapper>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/paketler" element={
        <PageLayout>
          <Packages />
        </PageLayout>
      } />

      <Route path="/kadro" element={
        <PageLayout>
          <TeacherHighlight />
        </PageLayout>
      } />

      <Route path="/basarilar" element={
        <PageLayout>
          <SuccessStories />
        </PageLayout>
      } />

      <Route path="/yorumlar" element={
        <PageLayout>
          <Testimonials />
        </PageLayout>
      } />

      <Route path="/sss" element={
        <PageLayout>
          <FAQ />
        </PageLayout>
      } />

      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;