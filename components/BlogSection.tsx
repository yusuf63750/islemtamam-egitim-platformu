import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
        id: 'uzaktan-egitimde-ogrenci-rehberi',
        title: 'Uzaktan Eğitimde Öğrenci Rehberi',
        excerpt: 'Online eğitimde başarılı olmak için öğrencilerin dikkat etmesi gereken önemli noktalar ve ipuçları.',
        date: '2024-12-01',
        category: 'Rehberlik',
        readTime: '5 dk',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    },
    {
        id: 'egitmenlerin-dikkat-etmesi-gereken-davranislar',
        title: 'Eğitmenlerin Dikkat Etmesi Gereken Davranışlar',
        excerpt: 'Uzaktan eğitimde öğretmenlerin etkili ders anlatımı için uygulaması gereken stratejiler.',
        date: '2024-11-25',
        category: 'Öğretmenler',
        readTime: '4 dk',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=250&fit=crop',
    },
    {
        id: 'uzaktan-egitime-zemin-hazirlamak',
        title: 'Uzaktan Eğitime Zemin Hazırlamak',
        excerpt: 'Evde verimli çalışma ortamı oluşturma ve teknolojik altyapı hazırlığı hakkında öneriler.',
        date: '2024-11-18',
        category: 'Hazırlık',
        readTime: '3 dk',
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=250&fit=crop',
    },
];

const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
};

export const BlogSection: React.FC = () => {
    return (
        <section id="blog" className="py-20 bg-slate-50 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <div className="text-4xl mb-2">📰</div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                            Blog
                        </h2>
                        <p className="text-lg text-slate-600">
                            Eğitim dünyasından haberler ve faydalı içerikler.
                        </p>
                    </div>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-primary-600 font-semibold mt-4 md:mt-0 hover:gap-3 transition-all"
                    >
                        Tüm Yazılar <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Date */}
                                <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {formatDate(post.date)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                    Devamını Oku <ArrowRight size={14} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
