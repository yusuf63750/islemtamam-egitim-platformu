import React, { useState } from 'react';
import { Sparkles, Plus, Trash2, Save, ChevronUp, ChevronDown, Image } from 'lucide-react';

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonHref: string;
  emoji: string;
  bgImage: string;
}

const initialSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Deneme Üyeliği Başvurusu',
    description: 'Yapay Zeka Destekli Akıllı Öğrenme Sistemi ile tanışın.',
    features: [
      'İlkokul 2-3-4, Ortaokul 5-6-7-8. Sınıf öğrencileri için',
      'Eğitim Koçu takibinde 34 haftalık program',
      'Canlı Ders Programına 1 hafta ücretsiz katılım',
      'Bitiminde ayrıntılı karne ve analiz raporu',
    ],
    buttonText: 'ÜCRETSİZ BAŞVUR',
    buttonHref: '#basvuru',
    emoji: '🎓',
    bgImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop',
  },
  {
    id: 2,
    title: "İşlemTamam'a Hoşgeldiniz!",
    description: 'MEB müfredatına %100 uyumlu, yeni nesil akıllı öğrenme platformu.',
    features: [
      '7x24 uzaktan erişim',
      'Okul öncesi, ilkokul, ortaokul, lise desteği',
      'Akıllı Öğrenme, Ders Merkezi, Sınav Merkezi',
      'Eğitim danışmanları ile akademik rehberlik',
    ],
    buttonText: 'HEMEN BAŞLA',
    buttonHref: '#paketler',
    emoji: '🚀',
    bgImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop',
  },
  {
    id: 3,
    title: 'LGS Hazırlık Programı',
    description: '10 kişilik uzman öğretmen kadromuzla LGS eğitimi.',
    features: [
      'Canlı LGS dersleri ve sınırsız tekrar',
      'Kişiye özel LGS koçluğu',
      'Haftalık deneme sınavları',
      '7/24 soru çözüm desteği',
    ],
    buttonText: 'LGS PAKETLERİ',
    buttonHref: '#paketler',
    emoji: '⭐',
    bgImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
  },
];

export const HeroSection: React.FC = () => {
  const [slides, setSlides] = useState<HeroSlide[]>(initialSlides);
  const [expandedSlide, setExpandedSlide] = useState<number | null>(1);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addSlide = () => {
    const newId = Math.max(...slides.map(s => s.id), 0) + 1;
    setSlides([...slides, {
      id: newId,
      title: 'Yeni Slide',
      description: 'Açıklama yazın...',
      features: ['Özellik 1', 'Özellik 2'],
      buttonText: 'BUTON',
      buttonHref: '#',
      emoji: '📚',
      bgImage: '',
    }]);
    setExpandedSlide(newId);
  };

  const deleteSlide = (id: number) => {
    if (slides.length > 1) {
      setSlides(slides.filter(s => s.id !== id));
    }
  };

  const updateSlide = (id: number, field: keyof HeroSlide, value: any) => {
    setSlides(slides.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const updateFeature = (slideId: number, featureIndex: number, value: string) => {
    setSlides(slides.map(s => {
      if (s.id === slideId) {
        const newFeatures = [...s.features];
        newFeatures[featureIndex] = value;
        return { ...s, features: newFeatures };
      }
      return s;
    }));
  };

  const addFeature = (slideId: number) => {
    setSlides(slides.map(s => {
      if (s.id === slideId) {
        return { ...s, features: [...s.features, 'Yeni özellik'] };
      }
      return s;
    }));
  };

  const deleteFeature = (slideId: number, featureIndex: number) => {
    setSlides(slides.map(s => {
      if (s.id === slideId) {
        return { ...s, features: s.features.filter((_, i) => i !== featureIndex) };
      }
      return s;
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Hero Slider</h2>
            <p className="text-slate-500">{slides.length} slide mevcut</p>
          </div>
        </div>
        <button
          onClick={addSlide}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
        >
          <Plus size={18} />
          Yeni Slide
        </button>
      </div>

      {/* Slides */}
      <div className="space-y-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden"
          >
            {/* Slide Header */}
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-100 transition-colors"
              onClick={() => setExpandedSlide(expandedSlide === slide.id ? null : slide.id)}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{slide.emoji}</span>
                <div>
                  <h3 className="font-semibold text-slate-900">{slide.title}</h3>
                  <p className="text-sm text-slate-500">Slide {index + 1}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); deleteSlide(slide.id); }}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  disabled={slides.length <= 1}
                >
                  <Trash2 size={18} />
                </button>
                {expandedSlide === slide.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {/* Slide Content */}
            {expandedSlide === slide.id && (
              <div className="p-6 pt-2 space-y-6 border-t border-slate-200 bg-white">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Başlık</label>
                    <input
                      type="text"
                      value={slide.title}
                      onChange={(e) => updateSlide(slide.id, 'title', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Emoji</label>
                    <input
                      type="text"
                      value={slide.emoji}
                      onChange={(e) => updateSlide(slide.id, 'emoji', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Açıklama</label>
                  <textarea
                    value={slide.description}
                    onChange={(e) => updateSlide(slide.id, 'description', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none"
                  />
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Özellikler</label>
                  <div className="space-y-2">
                    {slide.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex gap-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updateFeature(slide.id, fIndex, e.target.value)}
                          className="flex-1 px-4 py-2 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition text-sm"
                        />
                        <button
                          onClick={() => deleteFeature(slide.id, fIndex)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addFeature(slide.id)}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      + Özellik Ekle
                    </button>
                  </div>
                </div>

                {/* Button */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Buton Metni</label>
                    <input
                      type="text"
                      value={slide.buttonText}
                      onChange={(e) => updateSlide(slide.id, 'buttonText', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Buton Linki</label>
                    <input
                      type="text"
                      value={slide.buttonHref}
                      onChange={(e) => updateSlide(slide.id, 'buttonHref', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                      placeholder="#paketler"
                    />
                  </div>
                </div>

                {/* Background Image */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Arka Plan Görseli (URL)</label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={slide.bgImage}
                      onChange={(e) => updateSlide(slide.id, 'bgImage', e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                      placeholder="https://..."
                    />
                    {slide.bgImage && (
                      <div className="w-20 h-12 rounded-lg overflow-hidden bg-slate-200">
                        <img src={slide.bgImage} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
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
