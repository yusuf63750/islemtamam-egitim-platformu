import React, { useState } from 'react';
import { Puzzle, Save, Plus, Trash2 } from 'lucide-react';

interface Solution {
    id: string;
    title: string;
    description: string;
    color: string;
    icon: string;
}

const colorOptions = [
    { value: 'bg-blue-500', label: 'Mavi' },
    { value: 'bg-emerald-500', label: 'Yeşil' },
    { value: 'bg-purple-500', label: 'Mor' },
    { value: 'bg-red-500', label: 'Kırmızı' },
    { value: 'bg-orange-500', label: 'Turuncu' },
    { value: 'bg-pink-500', label: 'Pembe' },
    { value: 'bg-amber-500', label: 'Sarı' },
    { value: 'bg-cyan-500', label: 'Cyan' },
];

const initialSolutions: Solution[] = [
    { id: '1', title: 'Online Öğrenci', description: 'Bireysel öğrenci çözümü', color: 'bg-blue-500', icon: '🎓' },
    { id: '2', title: 'Online Sınıf & Öğretmen', description: 'Sınıf yönetimi çözümü', color: 'bg-emerald-500', icon: '🏫' },
    { id: '3', title: 'Okul - Dershane - Koçlar', description: 'Kurumsal çözümler', color: 'bg-purple-500', icon: '🏢' },
    { id: '4', title: 'Online Canlı Ders', description: 'Canlı ders platformu', color: 'bg-red-500', icon: '📹' },
    { id: '5', title: 'SınavOptik & SoruBank', description: 'Sınav ve soru sistemi', color: 'bg-orange-500', icon: '📝' },
    { id: '6', title: 'Portal ve EtkinlikTV', description: 'Video ve etkinlik portalı', color: 'bg-pink-500', icon: '📺' },
];

export const SolutionsSection: React.FC = () => {
    const [sectionTitle, setSectionTitle] = useState('Çözümlerimiz');
    const [sectionDescription, setSectionDescription] = useState('Her ihtiyaca uygun, esnek ve ölçeklenebilir eğitim teknolojisi çözümleri.');
    const [solutions, setSolutions] = useState<Solution[]>(initialSolutions);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const updateSolution = (id: string, field: keyof Solution, value: string) => {
        setSolutions(solutions.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    const addSolution = () => {
        const newId = String(Date.now());
        setSolutions([...solutions, { id: newId, title: 'Yeni Çözüm', description: 'Açıklama', color: 'bg-blue-500', icon: '🔧' }]);
    };

    const deleteSolution = (id: string) => {
        if (solutions.length > 1) {
            setSolutions(solutions.filter(s => s.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Puzzle className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Çözümlerimiz</h2>
                    <p className="text-slate-500">Eğitim çözümlerini düzenleyin</p>
                </div>
            </div>

            {/* Section Title */}
            <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-semibold text-slate-900">Bölüm Başlığı</h3>
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

            {/* Solutions */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">Çözümler ({solutions.length})</h3>
                    <button
                        onClick={addSolution}
                        className="flex items-center gap-2 px-3 py-2 text-sm bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 transition-colors"
                    >
                        <Plus size={16} />
                        Çözüm Ekle
                    </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    {solutions.map((solution) => (
                        <div key={solution.id} className="p-4 bg-white rounded-xl border border-slate-200 space-y-4">
                            <div className="flex items-start gap-4">
                                <div className={`w-12 h-12 rounded-xl ${solution.color} flex items-center justify-center text-2xl shrink-0`}>
                                    {solution.icon}
                                </div>
                                <div className="flex-1 space-y-2">
                                    <input
                                        type="text"
                                        value={solution.title}
                                        onChange={(e) => updateSolution(solution.id, 'title', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition font-medium"
                                        placeholder="Başlık"
                                    />
                                    <input
                                        type="text"
                                        value={solution.description}
                                        onChange={(e) => updateSolution(solution.id, 'description', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-sm"
                                        placeholder="Açıklama"
                                    />
                                </div>
                                <button
                                    onClick={() => deleteSolution(solution.id)}
                                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Emoji</label>
                                    <input
                                        type="text"
                                        value={solution.icon}
                                        onChange={(e) => updateSolution(solution.id, 'icon', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-center text-xl"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Renk</label>
                                    <select
                                        value={solution.color}
                                        onChange={(e) => updateSolution(solution.id, 'color', e.target.value)}
                                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-primary-500 outline-none transition text-sm"
                                    >
                                        {colorOptions.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
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
