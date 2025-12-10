import React from 'react';
import { Globe, Users, Building2 } from 'lucide-react';

const offerings = [
    {
        id: 'online-platform',
        icon: Globe,
        title: '7x24 Online Platform',
        description: 'İstediğiniz zaman, istediğiniz yerden tüm eğitim içeriklerine erişin. Mobil uyumlu, hızlı ve güvenilir altyapı.',
        features: ['Sınırsız video izleme', 'Mobil uygulama', 'Offline erişim', 'Hızlı streaming'],
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600',
    },
    {
        id: 'class-system',
        icon: Users,
        title: 'Sınıf ve Öğretmen Sistemi',
        description: 'Sanal sınıf ortamında canlı dersler, ödev takibi ve birebir öğretmen iletişimi.',
        features: ['Canlı ders', 'Ödev sistemi', 'Mesajlaşma', 'Performans takibi'],
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50',
        iconColor: 'text-emerald-600',
    },
    {
        id: 'corporate',
        icon: Building2,
        title: 'Kurumsal Eğitim Yönetimi',
        description: 'Okullar, dershaneler ve koçluk merkezleri için özel kurumsal çözümler ve toplu yönetim paneli.',
        features: ['Çoklu sınıf yönetimi', 'Raporlama', 'API entegrasyonu', 'Özel içerik'],
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600',
    },
];

export const WhatWeOffer: React.FC = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Fun Background Emojis */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 right-10 text-6xl opacity-10 animate-float">🌐</div>
                <div className="absolute bottom-10 left-10 text-6xl opacity-10 animate-bounce-slow">👥</div>
                <div className="absolute top-1/2 right-5 text-5xl opacity-10 animate-wiggle">🏢</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <span className="text-4xl">🎁</span>
                        Neler Var?
                        <span className="text-4xl">✨</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Tüm ihtiyaçlarınızı karşılayan kapsamlı eğitim çözümlerimizi keşfedin.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {offerings.map((offering) => {
                        const Icon = offering.icon;
                        return (
                            <div
                                key={offering.id}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden"
                            >
                                {/* Gradient Border Top */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${offering.color}`}></div>

                                {/* Icon */}
                                <div className={`w-16 h-16 ${offering.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-8 h-8 ${offering.iconColor}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {offering.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {offering.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {offering.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1 ${offering.bgColor} ${offering.iconColor} text-xs font-medium rounded-full`}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
