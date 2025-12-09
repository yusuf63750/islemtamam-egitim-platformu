import React from 'react';
import { Award, Calendar, Clock, TrendingUp } from 'lucide-react';

const stats = [
    {
        id: 'experience',
        icon: Award,
        value: 'Eğitimde 15.Yıl',
        subtitle: 'Kesintisiz hizmet',
        color: 'from-amber-400 to-orange-500',
    },
    {
        id: 'curriculum',
        icon: Calendar,
        value: '%100 MEB Uyumlu',
        subtitle: 'Güncel müfredat',
        color: 'from-emerald-400 to-teal-500',
    },
    {
        id: 'motto',
        icon: TrendingUp,
        value: 'Eksiğini Farket',
        subtitle: 'Heyecanını Yen, Başarıya Ulaş',
        color: 'from-blue-400 to-indigo-500',
    },
    {
        id: 'active',
        icon: Clock,
        value: '7x24 Aktif',
        subtitle: 'Online öğrenme',
        color: 'from-purple-400 to-pink-500',
    },
];

export const StatsBanner: React.FC = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px',
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.id}
                                className="relative group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shrink-0`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <div className="text-lg md:text-xl font-bold text-white">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-slate-400">
                                                {stat.subtitle}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
