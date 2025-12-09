import React from 'react';
import {
    Calendar,
    BookOpen,
    PenTool,
    FileCheck,
    Target,
    TrendingUp,
    Video,
    Brain
} from 'lucide-react';

const learningModules = [
    {
        id: 'his',
        abbr: 'HİS',
        title: 'Haftalık İzleme Sistemi',
        description: 'Haftalık düzenli sınavlarla öğrenci performansını takip eder ve eksikleri belirler.',
        icon: Calendar,
        color: 'bg-gradient-to-br from-blue-500 to-blue-600',
        hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    },
    {
        id: 'kos',
        abbr: 'KÖS',
        title: 'Konu Öğrenme Sistemi',
        description: 'Her konunun video anlatımı, interaktif içerikler ve özet notlarla tam kavranmasını sağlar.',
        icon: BookOpen,
        color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
        hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
    },
    {
        id: 'cos',
        abbr: 'ÇÖS',
        title: 'Çöz Öğren Sistemi',
        description: 'Soru çözümü yaparak öğrenmeyi pekiştirir, çözümlü video anlatımlarla destekler.',
        icon: PenTool,
        color: 'bg-gradient-to-br from-orange-500 to-orange-600',
        hoverColor: 'hover:from-orange-600 hover:to-orange-700',
    },
    {
        id: 'uds',
        abbr: 'ÜDS',
        title: 'Ünite Değerlendirme Sistemi',
        description: 'Her ünitenin sonunda kapsamlı değerlendirme sınavları ile kazanımları ölçer.',
        icon: FileCheck,
        color: 'bg-gradient-to-br from-purple-500 to-purple-600',
        hoverColor: 'hover:from-purple-600 hover:to-purple-700',
    },
    {
        id: 'ods',
        abbr: 'ODS',
        title: 'Online Deneme Sistemi',
        description: 'Gerçek sınav formatında online denemeler ve Türkiye geneli sıralama.',
        icon: Target,
        color: 'bg-gradient-to-br from-red-500 to-red-600',
        hoverColor: 'hover:from-red-600 hover:to-red-700',
    },
    {
        id: 'gbs',
        abbr: 'GBS',
        title: 'Gelişim Bilgi Sistemi',
        description: 'Öğrencinin gelişimini takip eden raporlar, grafikler ve analiz araçları.',
        icon: TrendingUp,
        color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
        hoverColor: 'hover:from-cyan-600 hover:to-cyan-700',
    },
    {
        id: 'cds',
        abbr: 'CDS',
        title: 'Canlı Ders & Danışmanlık',
        description: 'Uzman öğretmenlerle canlı dersler, birebir danışmanlık ve soru çözüm seansları.',
        icon: Video,
        color: 'bg-gradient-to-br from-pink-500 to-pink-600',
        hoverColor: 'hover:from-pink-600 hover:to-pink-700',
    },
];

export const SmartLearningSystem: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
            {/* Fun Background Emojis */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">🧠</div>
                <div className="absolute top-1/4 right-10 text-6xl opacity-10 animate-float animation-delay-2000">📊</div>
                <div className="absolute bottom-20 left-1/4 text-6xl opacity-10 animate-bounce-slow">🎯</div>
                <div className="absolute bottom-10 right-1/4 text-6xl opacity-10 animate-wiggle">💡</div>
                <div className="absolute top-1/2 left-5 text-5xl opacity-10 animate-float animation-delay-4000">📚</div>
                <div className="absolute top-20 right-1/3 text-5xl opacity-10 animate-bounce-slow">✨</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Brain className="w-4 h-4" />
                        Yapay Zeka Destekli
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
                        Akıllı Öğrenme Sistemi Nedir?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        7 farklı modül ile öğrencinizin her aşamada başarılı olmasını sağlayan,
                        kişiselleştirilmiş ve interaktif eğitim deneyimi.
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {learningModules.map((module, index) => {
                        const Icon = module.icon;
                        return (
                            <div
                                key={module.id}
                                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 cursor-pointer overflow-hidden ${index === learningModules.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Background Gradient on Hover */}
                                <div className={`absolute inset-0 ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon & Abbr */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-14 h-14 ${module.color} rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <span className="text-2xl font-extrabold text-slate-900 group-hover:text-white transition-colors duration-300">
                                            {module.abbr}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-white transition-colors duration-300 mb-2">
                                        {module.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                                        {module.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="mt-4 flex items-center gap-2 text-primary-600 group-hover:text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                        Detaylı İncele →
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Banner */}
                <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">15+</div>
                            <div className="text-slate-400 text-sm">Yıllık Deneyim</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">%100</div>
                            <div className="text-slate-400 text-sm">MEB Uyumlu</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">7/24</div>
                            <div className="text-slate-400 text-sm">Aktif Platform</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">8500+</div>
                            <div className="text-slate-400 text-sm">Mutlu Öğrenci</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
