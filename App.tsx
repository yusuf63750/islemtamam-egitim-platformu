import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Packages />
        <TeacherHighlight />
        <SuccessStories />
        <Testimonials />
        
          {/* CTA Section */}
        <section className="py-20 bg-primary-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              LGS Başarı Yolculuğuna Hemen Başla!
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
              Kontenjanlarımız sınırlıdır. 10 kişilik LGS uzman kadromuzla tanışmak ve deneme dersine katılmak için hemen başvurun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="white" size="lg" className="text-primary-700 font-bold">
                LGS'ye Başvur
              </Button>
              <Button variant="secondary" size="lg" className="gap-2">
                WhatsApp'tan LGS Bilgi Al <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;