import React from 'react';
import { Award, GraduationCap, Users, Star, Quote, CheckCircle, Trophy, Target } from 'lucide-react';

export const Kadromuz: React.FC = () => {
    const stats = [
        { id: 'stat-experience', value: '15+', label: 'Yıl Deneyim', icon: Award },
        { id: 'stat-graduates', value: '5000+', label: 'Mezun Öğrenci', icon: GraduationCap },
        { id: 'stat-success', value: '%95', label: 'Başarı Oranı', icon: Trophy },
        { id: 'stat-active', value: '250+', label: 'Aktif Öğrenci', icon: Users },
    ];

    const achievements = [
        'LGS\'de %1\'lik dilime giren yüzlerce öğrenci',
        'Türkiye geneli ilk 1000\'e giren öğrenciler',
        'MEB onaylı eğitim programları',
        'Akademik başarı ödülleri',
    ];

    return (
        <section id="kadro" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden scroll-mt-20">
            {/* Fun Background Emojis */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">👨‍🏫</div>
                <div className="absolute top-1/4 right-10 text-6xl opacity-10 animate-bounce-slow">🎓</div>
                <div className="absolute bottom-20 left-1/4 text-6xl opacity-10 animate-wiggle">🏆</div>
                <div className="absolute bottom-10 right-1/4 text-5xl opacity-10 animate-float animation-delay-2000">⭐</div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Users className="w-4 h-4" />
                        Uzman Kadro
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 flex items-center justify-center gap-3">
                        <span className="text-4xl">👨‍🏫</span>
                        LGS'ye 10 Kişilik Öğretmen Ekibi ile Hazırlık
                        <span className="text-4xl">🌟</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        LGS başarısı ekip çalışmasının ürünüdür. Her branşta uzmanlaşmış öğretmen kadromuzla,
                        öğrencinin her sorusuna, her konu zayıflığına anında yanıt veriyoruz.
                    </p>
                </div>

                {/* Founder Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Founder Image */}
                    <div className="relative">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="/kurucu.jpg"
                                    alt="M.Osman Doğruer - Kurucu"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                                {/* Name Badge */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                                                <Award className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 text-lg">M.Osman DOĞRUER</h3>
                                                <p className="text-primary-600 text-sm font-medium">İşlem Tamam Eğitim Kurucusu</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-xl font-bold text-sm animate-wiggle shadow-lg flex items-center gap-2">
                                <Star className="w-4 h-4 fill-white" />
                                Kurucu
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-4 py-2 rounded-xl font-bold text-sm animate-bounce-slow shadow-lg">
                                🎓 15+ Yıl Tecrübe
                            </div>
                        </div>
                    </div>

                    {/* Founder Info */}
                    <div>
                        {/* Quote */}
                        <div className="relative bg-gradient-to-br from-primary-50 to-blue-50 rounded-3xl p-8 mb-8">
                            <Quote className="absolute top-4 left-4 w-12 h-12 text-primary-200" />
                            <blockquote className="relative z-10">
                                <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed pl-8">
                                    "Eğitim sadece bir meslek değil, geleceği inşa etme sanatıdır."
                                </p>
                            </blockquote>
                        </div>

                        {/* Bio */}
                        <div className="space-y-4 mb-8">
                            <p className="text-slate-600 leading-relaxed">
                                Yılların tecrübesiyle eğitim sektörünün en iyilerinden biri olmayı başaran M.Osman DOĞRUER,
                                binlerce öğrenciyi hayallerine kavuşturmanın gururunu yaşıyor. LGS'de %1'lik dilime giren
                                yüzlerce öğrenci yetiştiren eğitim vizyoneridir.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                İşlem Tamam markasını, "Her öğrenci başarabilir" felsefesiyle kurdu. Disiplinli çalışma,
                                doğru strateji ve kararlılıkla her hedefin ulaşılabilir olduğuna inanır.
                            </p>
                        </div>

                        {/* Achievements */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-amber-500" />
                                Başarılar
                            </h4>
                            <ul className="space-y-3">
                                {achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-600">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div key={stat.id} className="text-center">
                                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center">
                                        <Icon className="w-7 h-7 text-amber-400" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                                    <div className="text-slate-400 text-sm">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Team Teaser */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                    key={i}
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                                >
                                    {i}
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-600 font-bold text-sm">
                                +5
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900">10 Kişilik Uzman Kadro</div>
                            <div className="text-slate-500 text-sm">Her branşta öğretmen desteği</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
