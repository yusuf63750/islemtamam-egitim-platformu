import React from 'react';
import {
    GraduationCap,
    School,
    Building,
    Video,
    FileText,
    Tv,
    ArrowRight
} from 'lucide-react';

const solutions = [
    {
        id: 'online-student',
        icon: GraduationCap,
        title: 'Online Öğrenci',
        description: 'Bireysel öğrenciler için kişiselleştirilmiş online eğitim deneyimi. Kendi hızınızda öğrenin.',
        href: '#paketler',
        color: 'bg-blue-500',
        lightColor: 'bg-blue-100',
        textColor: 'text-blue-600',
    },
    {
        id: 'online-class',
        icon: School,
        title: 'Online Sınıf & Öğretmen',
        description: 'Öğretmenler için sanal sınıf oluşturma ve yönetme araçları. Öğrencilerinizi takip edin.',
        href: '#iletisim',
        color: 'bg-emerald-500',
        lightColor: 'bg-emerald-100',
        textColor: 'text-emerald-600',
    },
    {
        id: 'corporate',
        icon: Building,
        title: 'Okul - Dershane - Koçlar',
        description: 'Kurumsal lisanslama ve toplu kullanım çözümleri. Kendi markanızla hizmet verin.',
        href: '#iletisim',
        color: 'bg-purple-500',
        lightColor: 'bg-purple-100',
        textColor: 'text-purple-600',
    },
    {
        id: 'live-class',
        icon: Video,
        title: 'Online Canlı Ders',
        description: 'Gerçek zamanlı etkileşimli canlı dersler. Soru-cevap ve whiteboard desteği.',
        href: '#paketler',
        color: 'bg-red-500',
        lightColor: 'bg-red-100',
        textColor: 'text-red-600',
    },
    {
        id: 'exam-system',
        icon: FileText,
        title: 'SınavOptik & SoruBank',
        description: 'Optik form okuma, sınav oluşturma ve zengin soru bankası araçları.',
        href: '#iletisim',
        color: 'bg-orange-500',
        lightColor: 'bg-orange-100',
        textColor: 'text-orange-600',
    },
    {
        id: 'portal-tv',
        icon: Tv,
        title: 'Portal ve EtkinlikTV',
        description: 'Eğitim portali ve canlı yayın altyapısı. Etkinlik ve seminer yayınları.',
        href: '#iletisim',
        color: 'bg-pink-500',
        lightColor: 'bg-pink-100',
        textColor: 'text-pink-600',
    },
];

export const Solutions: React.FC = () => {
    return (
        <section id="cozumler" className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden scroll-mt-20">
            {/* Fun Background Emojis */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">🎓</div>
                <div className="absolute top-1/3 right-10 text-6xl opacity-10 animate-bounce-slow">📹</div>
                <div className="absolute bottom-10 left-1/4 text-6xl opacity-10 animate-wiggle">🏫</div>
                <div className="absolute bottom-1/4 right-1/4 text-5xl opacity-10 animate-float animation-delay-2000">📝</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <span className="text-4xl">🛠️</span>
                        Çözümlerimiz
                        <span className="text-4xl">🚀</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Her ihtiyaca uygun, esnek ve ölçeklenebilir eğitim teknolojisi çözümleri.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((solution) => {
                        const Icon = solution.icon;
                        return (
                            <a
                                key={solution.id}
                                href={solution.href}
                                className="group block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 ${solution.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    {solution.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                    {solution.description}
                                </p>

                                {/* Arrow */}
                                <div className={`flex items-center gap-2 ${solution.textColor} font-semibold text-sm`}>
                                    İncele <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
