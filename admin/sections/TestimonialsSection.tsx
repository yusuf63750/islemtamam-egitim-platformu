import React, { useState } from 'react';
import { MessageSquare, Save, Plus, Trash2, Star, ChevronUp, ChevronDown } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  featured: boolean;
}

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ayşe K.',
    role: 'Öğrenci Velisi',
    content: 'Çocuğum bu platform sayesinde LGS\'de çok başarılı oldu. Öğretmenler gerçekten ilgili ve içerikler çok kaliteli.',
    rating: 5,
    avatar: '',
    featured: true,
  },
  {
    id: '2',
    name: 'Mehmet Y.',
    role: '8. Sınıf Öğrencisi',
    content: 'Dersler çok eğlenceli ve anlaşılır. Özellikle canlı dersler çok faydalı oluyor.',
    rating: 5,
    avatar: '',
    featured: false,
  },
  {
    id: '3',
    name: 'Fatma S.',
    role: 'Öğrenci Velisi',
    content: 'Haftalık raporlar sayesinde çocuğumun gelişimini takip edebiliyorum. Harika bir sistem!',
    rating: 5,
    avatar: '',
    featured: false,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [sectionTitle, setSectionTitle] = useState('Öğrenci ve Veli Yorumları');
  const [sectionDescription, setSectionDescription] = useState('Binlerce mutlu öğrenci ve velinin deneyimlerini keşfedin');
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [expandedTestimonial, setExpandedTestimonial] = useState<string | null>('1');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addTestimonial = () => {
    const newId = String(Date.now());
    const newTestimonial: Testimonial = {
      id: newId,
      name: 'Yeni Kullanıcı',
      role: 'Öğrenci / Veli',
      content: 'Yorum içeriği...',
      rating: 5,
      avatar: '',
      featured: false,
    };
    setTestimonials([...testimonials, newTestimonial]);
    setExpandedTestimonial(newId);
  };

  const deleteTestimonial = (id: string) => {
    if (testimonials.length > 1) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const updateTestimonial = (id: string, field: keyof Testimonial, value: any) => {
    setTestimonials(testimonials.map(t => t.id === id ? { ...t, [field]: value } : t));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Yorumlar</h2>
            <p className="text-slate-500">{testimonials.length} yorum mevcut</p>
          </div>
        </div>
        <button
          onClick={addTestimonial}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
        >
          <Plus size={18} />
          Yeni Yorum
        </button>
      </div>

      {/* Section Settings */}
      <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="font-semibold text-slate-900">Bölüm Ayarları</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Başlık</label>
            <input
              type="text"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Açıklama</label>
            <input
              type="text"
              value={sectionDescription}
              onChange={(e) => setSectionDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`rounded-2xl border overflow-hidden ${testimonial.featured ? 'border-amber-300 bg-amber-50/50' : 'border-slate-200 bg-slate-50'}`}
          >
            {/* Testimonial Header */}
            <div
              className={`flex items-center justify-between p-4 cursor-pointer hover:bg-white/50 transition-colors`}
              onClick={() => setExpandedTestimonial(expandedTestimonial === testimonial.id ? null : testimonial.id)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                    {testimonial.featured && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-amber-500 text-white text-xs rounded-full">
                        <Star size={12} />
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}
                    />
                  ))}
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); deleteTestimonial(testimonial.id); }}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  disabled={testimonials.length <= 1}
                >
                  <Trash2 size={18} />
                </button>
                {expandedTestimonial === testimonial.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {/* Testimonial Content */}
            {expandedTestimonial === testimonial.id && (
              <div className="p-6 pt-2 space-y-6 border-t border-slate-200 bg-white">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">İsim</label>
                    <input
                      type="text"
                      value={testimonial.name}
                      onChange={(e) => updateTestimonial(testimonial.id, 'name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Rol</label>
                    <input
                      type="text"
                      value={testimonial.role}
                      onChange={(e) => updateTestimonial(testimonial.id, 'role', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                      placeholder="Öğrenci / Öğrenci Velisi"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Yorum İçeriği</label>
                  <textarea
                    value={testimonial.content}
                    onChange={(e) => updateTestimonial(testimonial.id, 'content', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none"
                  />
                </div>

                {/* Rating & Avatar */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Puan (1-5)</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => updateTestimonial(testimonial.id, 'rating', star)}
                          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <Star
                            size={24}
                            className={star <= testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Avatar URL (opsiyonel)</label>
                    <input
                      type="text"
                      value={testimonial.avatar}
                      onChange={(e) => updateTestimonial(testimonial.id, 'avatar', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                      placeholder="https://..."
                    />
                  </div>
                </div>

                {/* Featured Toggle */}
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <input
                    type="checkbox"
                    id={`featured-${testimonial.id}`}
                    checked={testimonial.featured}
                    onChange={(e) => updateTestimonial(testimonial.id, 'featured', e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
                  />
                  <label htmlFor={`featured-${testimonial.id}`} className="text-sm font-medium text-slate-700">
                    Bu yorumu öne çıkar ("En Beğenilen" olarak göster)
                  </label>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-6 border-t border-slate-200">
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${saved
              ? 'bg-emerald-500 text-white'
              : 'bg-gradient-to-r from-primary-500 to-blue-500 text-white hover:shadow-lg'
            }`}
        >
          <Save size={18} />
          {saved ? 'Kaydedildi!' : 'Değişiklikleri Kaydet'}
        </button>
      </div>
    </div>
  );
};
