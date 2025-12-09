import React, { useState } from 'react';
import { Boxes, Save, Plus, Trash2, Star, ChevronUp, ChevronDown } from 'lucide-react';

interface Package {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
  badgeText: string;
  buttonLabel: string;
  buttonHref: string;
}

const initialPackages: Package[] = [
  {
    id: '1',
    name: 'Başlangıç Paketi',
    description: 'LGS hazırlığına yeni başlayanlar için ideal',
    price: '₺299',
    period: '/aylık',
    features: ['Tüm video dersler', 'Online denemeler', 'Konu testleri', 'Mobil uygulama'],
    highlight: false,
    badgeText: '',
    buttonLabel: 'Hemen Başla',
    buttonHref: '#',
  },
  {
    id: '2',
    name: 'Premium Paket',
    description: 'En çok tercih edilen kapsamlı paket',
    price: '₺599',
    period: '/aylık',
    features: ['Başlangıç paketindeki her şey', 'Canlı dersler', 'Birebir koçluk', 'Haftalık raporlar', 'Ebeveyn takip paneli'],
    highlight: true,
    badgeText: 'EN POPÜLER',
    buttonLabel: 'Premium Başla',
    buttonHref: '#',
  },
  {
    id: '3',
    name: 'VIP Paket',
    description: 'Tam kapsamlı özel eğitim deneyimi',
    price: '₺999',
    period: '/aylık',
    features: ['Premium paketindeki her şey', 'Özel ders planı', 'Günlük takip', 'Öncelikli destek', 'Aile görüşmeleri'],
    highlight: false,
    badgeText: '',
    buttonLabel: 'VIP Başla',
    buttonHref: '#',
  },
];

export const PackagesSection: React.FC = () => {
  const [sectionTitle, setSectionTitle] = useState('Eğitim Paketlerimiz');
  const [sectionEyebrow, setSectionEyebrow] = useState('FİYATLANDIRMA');
  const [sectionDescription, setSectionDescription] = useState('Her bütçeye ve ihtiyaca uygun esnek paket seçenekleri');
  const [packages, setPackages] = useState<Package[]>(initialPackages);
  const [expandedPackage, setExpandedPackage] = useState<string | null>('2');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addPackage = () => {
    const newId = String(Date.now());
    const newPkg: Package = {
      id: newId,
      name: 'Yeni Paket',
      description: 'Paket açıklaması',
      price: '₺0',
      period: '/aylık',
      features: ['Özellik 1', 'Özellik 2'],
      highlight: false,
      badgeText: '',
      buttonLabel: 'Başla',
      buttonHref: '#',
    };
    setPackages([...packages, newPkg]);
    setExpandedPackage(newId);
  };

  const deletePackage = (id: string) => {
    if (packages.length > 1) {
      setPackages(packages.filter(p => p.id !== id));
    }
  };

  const updatePackage = (id: string, field: keyof Package, value: any) => {
    setPackages(packages.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const updateFeature = (pkgId: string, featureIndex: number, value: string) => {
    setPackages(packages.map(p => {
      if (p.id === pkgId) {
        const newFeatures = [...p.features];
        newFeatures[featureIndex] = value;
        return { ...p, features: newFeatures };
      }
      return p;
    }));
  };

  const addFeature = (pkgId: string) => {
    setPackages(packages.map(p => {
      if (p.id === pkgId) {
        return { ...p, features: [...p.features, 'Yeni özellik'] };
      }
      return p;
    }));
  };

  const deleteFeature = (pkgId: string, featureIndex: number) => {
    setPackages(packages.map(p => {
      if (p.id === pkgId) {
        return { ...p, features: p.features.filter((_, i) => i !== featureIndex) };
      }
      return p;
    }));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
            <Boxes className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Paketler</h2>
            <p className="text-slate-500">{packages.length} paket mevcut</p>
          </div>
        </div>
        <button
          onClick={addPackage}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
        >
          <Plus size={18} />
          Yeni Paket
        </button>
      </div>

      {/* Section Settings */}
      <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <h3 className="font-semibold text-slate-900">Bölüm Ayarları</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Üst Başlık</label>
            <input
              type="text"
              value={sectionEyebrow}
              onChange={(e) => setSectionEyebrow(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
            />
          </div>
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

      {/* Packages */}
      <div className="space-y-4">
        {packages.map((pkg, index) => (
          <div
            key={pkg.id}
            className={`rounded-2xl border overflow-hidden ${pkg.highlight ? 'border-primary-300 bg-primary-50/50' : 'border-slate-200 bg-slate-50'}`}
          >
            {/* Package Header */}
            <div
              className={`flex items-center justify-between p-4 cursor-pointer hover:bg-white/50 transition-colors ${pkg.highlight ? 'bg-primary-100/50' : ''}`}
              onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.highlight ? 'bg-primary-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-slate-900">{pkg.name}</h3>
                    {pkg.highlight && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-primary-500 text-white text-xs rounded-full">
                        <Star size={12} />
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">{pkg.price}{pkg.period}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); deletePackage(pkg.id); }}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  disabled={packages.length <= 1}
                >
                  <Trash2 size={18} />
                </button>
                {expandedPackage === pkg.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>

            {/* Package Content */}
            {expandedPackage === pkg.id && (
              <div className="p-6 pt-2 space-y-6 border-t border-slate-200 bg-white">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Paket Adı</label>
                    <input
                      type="text"
                      value={pkg.name}
                      onChange={(e) => updatePackage(pkg.id, 'name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Açıklama</label>
                    <input
                      type="text"
                      value={pkg.description}
                      onChange={(e) => updatePackage(pkg.id, 'description', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                </div>

                {/* Price */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Fiyat</label>
                    <input
                      type="text"
                      value={pkg.price}
                      onChange={(e) => updatePackage(pkg.id, 'price', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Dönem</label>
                    <input
                      type="text"
                      value={pkg.period}
                      onChange={(e) => updatePackage(pkg.id, 'period', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                      placeholder="/aylık"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Rozet Metni</label>
                    <input
                      type="text"
                      value={pkg.badgeText}
                      onChange={(e) => updatePackage(pkg.id, 'badgeText', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                      placeholder="EN POPÜLER"
                    />
                  </div>
                </div>

                {/* Highlight Toggle */}
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <input
                    type="checkbox"
                    id={`highlight-${pkg.id}`}
                    checked={pkg.highlight}
                    onChange={(e) => updatePackage(pkg.id, 'highlight', e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor={`highlight-${pkg.id}`} className="text-sm font-medium text-slate-700">
                    Bu paketi öne çıkar (en popüler olarak göster)
                  </label>
                </div>

                {/* Button */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Buton Metni</label>
                    <input
                      type="text"
                      value={pkg.buttonLabel}
                      onChange={(e) => updatePackage(pkg.id, 'buttonLabel', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Buton Linki</label>
                    <input
                      type="text"
                      value={pkg.buttonHref}
                      onChange={(e) => updatePackage(pkg.id, 'buttonHref', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Özellikler</label>
                  <div className="space-y-2">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex gap-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updateFeature(pkg.id, fIndex, e.target.value)}
                          className="flex-1 px-4 py-2 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition text-sm"
                        />
                        <button
                          onClick={() => deleteFeature(pkg.id, fIndex)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => addFeature(pkg.id)}
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      + Özellik Ekle
                    </button>
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
