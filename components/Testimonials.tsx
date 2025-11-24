import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Selin Yılmaz",
    role: "12. Sınıf Öğrencisi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content: "Matematik netlerim 5-6 civarındaydı, İşlemTamam ile tanıştıktan sonra 25 üstüne sabitledim. Hocaların ilgisi gerçekten çok farklı.",
    rating: 5
  },
  {
    id: 2,
    name: "Mehmet Öztürk",
    role: "Öğrenci Velisi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content: "Kızım için endişeliydim ama koçluk sistemi sayesinde hem stresi azaldı hem de çalışma disiplini kazandı. Tüm öğretmenlere teşekkürler.",
    rating: 5
  },
  {
    id: 3,
    name: "Ayşe Demir",
    role: "Mezun Öğrenci (Tıp Kazandı)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    content: "Soru çözüm grupları hayat kurtarıcı. Gece 11'de attığım soruya bile 10 dakika içinde görüntülü çözüm geliyordu. Harika bir sistem.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="yorumlar" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Sizden Gelenler</h2>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Öğrencilerimiz ve Velilerimiz Ne Diyor?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 rounded-2xl p-8 relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
              <Quote className="absolute top-6 right-6 text-primary-200 w-10 h-10 group-hover:text-primary-500 transition-colors duration-300" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-primary-600 text-xs font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};