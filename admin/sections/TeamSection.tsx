import React, { useState } from 'react';
import { Users, Award, Save, Upload } from 'lucide-react';

export const TeamSection: React.FC = () => {
    const [founderName, setFounderName] = useState('M.Osman DOĞRUER');
    const [founderTitle, setFounderTitle] = useState('İşlem Tamam Eğitim Kurucusu');
    const [founderQuote, setFounderQuote] = useState('Eğitim sadece bir meslek değil, geleceği inşa etme sanatıdır.');
    const [founderBio, setFounderBio] = useState('Yılların tecrübesiyle eğitim sektörünün en iyilerinden biri olmayı başaran M.Osman DOĞRUER, binlerce öğrenciyi hayallerine kavuşturmanın gururunu yaşıyor.');
    const [teamSize, setTeamSize] = useState('10');
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Kadromuz</h2>
                    <p className="text-slate-500">Kurucu ve öğretmen bilgilerini yönetin</p>
                </div>
            </div>

            {/* Founder Section */}
            <div className="space-y-6">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    Kurucu Bilgileri
                </h3>

                {/* Founder Image */}
                <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-2xl bg-slate-200 overflow-hidden">
                        <img src="/kurucu.jpg" alt="Kurucu" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Kurucu Fotoğrafı</label>
                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-medium text-slate-700 transition-colors">
                            <Upload size={16} />
                            Fotoğraf Yükle
                        </button>
                        <p className="text-xs text-slate-500 mt-1">Dosya: /kurucu.jpg</p>
                    </div>
                </div>

                {/* Founder Name */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">İsim</label>
                    <input
                        type="text"
                        value={founderName}
                        onChange={(e) => setFounderName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                </div>

                {/* Founder Title */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Unvan</label>
                    <input
                        type="text"
                        value={founderTitle}
                        onChange={(e) => setFounderTitle(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                </div>

                {/* Founder Quote */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Alıntı/Slogan</label>
                    <textarea
                        value={founderQuote}
                        onChange={(e) => setFounderQuote(e.target.value)}
                        rows={2}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none"
                    />
                </div>

                {/* Founder Bio */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Biyografi</label>
                    <textarea
                        value={founderBio}
                        onChange={(e) => setFounderBio(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none"
                    />
                </div>
            </div>

            {/* Team Size */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900">👥 Ekip Bilgileri</h3>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Öğretmen Sayısı</label>
                    <input
                        type="number"
                        value={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                        className="w-32 px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                    />
                    <p className="text-xs text-slate-500 mt-1">Ana sayfada "{teamSize} Kişilik Uzman Kadro" olarak gösterilir</p>
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
