import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SmartLearningSystem } from './components/SmartLearningSystem';
import { WhatWeOffer } from './components/WhatWeOffer';
import { StatsBanner } from './components/StatsBanner';
import { Solutions } from './components/Solutions';
import { Packages } from './components/Packages';
import { Testimonials } from './components/Testimonials';
import { Kadromuz } from './components/Kadromuz';
import { FAQ } from './components/FAQ';
import { BlogSection } from './components/BlogSection';
import { BlogList, BlogPost } from './components/BlogPage';
import { Footer } from './components/Footer';
import { useSiteContent } from './context/SiteContentContext';
import { AdminApp } from './admin/AdminApp';
import { SocialFloatingButtons } from './components/WhatsAppButton';

const LandingPage: React.FC = () => {
  const { content } = useSiteContent();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <SocialFloatingButtons />

      <main>
        {/* Hero Section - Slider */}
        <div id="hero"><Hero /></div>

        {/* Akıllı Öğrenme Sistemi */}
        <div id="akilli-ogrenme"><SmartLearningSystem /></div>

        {/* Neler Var? */}
        <div id="neler-var"><WhatWeOffer /></div>

        {/* Stats Banner - Eğitimde Başarının Adresi */}
        <StatsBanner />

        {/* Çözümlerimiz */}
        <div id="cozumler"><Solutions /></div>

        {/* Paketlerimiz */}
        <div id="paketler"><Packages /></div>

        {/* Kadromuz */}
        <div id="kadro"><Kadromuz /></div>

        {/* Yorumlar */}
        <div id="yorumlar"><Testimonials /></div>

        {/* SSS */}
        <div id="sss"><FAQ /></div>

        {/* Blog */}
        <div id="blog"><BlogSection /></div>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;