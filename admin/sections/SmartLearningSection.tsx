import React, { useState } from 'react';
import { Brain, Save, Plus, Trash2 } from 'lucide-react';

interface Module {
    id: string;
    abbr: string;
    name: string;
    description: string;
}

const initialModules: Module[] = [
    { id: '1', abbr: 'HİS', name: 'Haftalık İzleme Sistemi', description: 'Haftalık öğrenme takibi' },
    { id: '2', abbr: 'KÖS', name: 'Konu Öğrenme Sistemi', description: 'Konu anlatımları ve içerikler' },
    { id: '3', abbr: 'ÇÖS', name: 'Çöz Öğren Sistemi', description: 'Alıştırma ve pratik' },
    { id: '4', abbr: 'ÜDS', name: 'Ünite Değerlendirme Sistemi', description: 'Ünite testleri' },
    { id: '5', abbr: 'ODS', name: 'Online Deneme Sistemi', description: 'Deneme sınavları' },
    { id: '6', abbr: 'GBS', name: 'Gelişim Bilgi Sistemi', description: 'İlerleme takibi' },
    { id: '7', abbr: 'CDS', name: 'Canlı Ders & Danışmanlık', description: 'Canlı dersler' },
];

interface Stat {
    id: string;
    value: string;
    label: string;
}

const initialStats: Stat[] = [
    { id: '1', value: '15+', label: 'Yıl Deneyim' },
    { id: '2', value: '%100', label: 'MEB Uyumlu' },
    { id: '3', value: '7/24', label: 'Aktif Platform' },
    { id: '4', value: '8500+', label: 'Öğrenci' },
];

export const SmartLearningSection: React.FC = () => {
    const [sectionTitle, setSectionTitle] = useState('Yapay Zeka Destekli Akıllı Öğrenme Sistemi');
    const [sectionDescription, setSectionDescription] = useState('Modern eğitim teknolojileri ile donatılmış, 7 farklı modülden oluşan kapsamlı öğrenme sistemi.');
    const [modules, setModules] = useState<Module[]>(initialModules);
    const [stats, setStats] = useState<Stat[]>(initialStats);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const updateModule = (id: string, field: keyof Module, value: string) => {
        setModules(modules.map(m => m.id === id ? { ...m, [field]: value } : m));
    };

    const addModule = () => {
        const newId = String(Date.now());
        setModules([...modules, { id: newId, abbr: 'YENİ', name: 'Yeni Modül', description: 'Açıklama' }]);
    };

    const deleteModule = (id: string) => {
        if (modules.length > 1) {
            setModules(modules.filter(m => m.id !== id));
        }
    };

    const updateStat = (id: string, field: keyof Stat, value: string) => {
        setStats(stats.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Akıllı Öğrenme Sistemi</h2>
                    <p className="text-slate-500">Başlık, modüller ve istatistikleri düzenleyin</p>
                </div>
            </div>

            {/* Section Title & Description */}
            <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-semibold text-slate-900">Bölüm Başlığı</h3>
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
                    <textarea
                        value={sectionDescription}
                        onChange={(e) => setSectionDescription(e.target.value)}
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none"
                    />
                </div>
            </div>

            {/* Modules */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">Modüller ({modules.length})</h3>
                    <button
                        onClick={addModule}
                        className="flex items-center gap-2 px-3 py-2 text-sm bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 transition-colors"
                    >
                        <Plus size={16} />
                        Modül Ekle
                    </button>
                </div>
                <div className="space-y-3">
                    {modules.map((module) => (
                        <div key={module.id} className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-200">
                            <input
                                type="text"
                                value={module.abbr}
                                onChange={(e) => updateModule(module.id, 'abbr', e.target.value)}
                                className="w-20 px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-center font-bold text-primary-600"
                                placeholder="KOD"
                            />
                            <div className="flex-1 space-y-2">
                                <input
                                    type="text"
                                    value={module.name}
                                    onChange={(e) => updateModule(module.id, 'name', e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition"
                                    placeholder="Modül adı"
                                />
                                <input
                                    type="text"
                                    value={module.description}
                                    onChange={(e) => updateModule(module.id, 'description', e.target.value)}
                                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-sm"
                                    placeholder="Açıklama"
                                />
                            </div>
                            <button
                                onClick={() => deleteModule(module.id)}
                                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                disabled={modules.length <= 1}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">İstatistikler</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <div key={stat.id} className="p-4 bg-slate-900 rounded-xl space-y-2">
                            <input
                                type="text"
                                value={stat.value}
                                onChange={(e) => updateStat(stat.id, 'value', e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-center font-bold text-xl focus:border-white/40 outline-none transition"
                            />
                            <input
                                type="text"
                                value={stat.label}
                                onChange={(e) => updateStat(stat.id, 'label', e.target.value)}
                                className="w-full px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-center text-sm focus:border-white/30 outline-none transition"
                            />
                        </div>
                    ))}
                </div>
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
