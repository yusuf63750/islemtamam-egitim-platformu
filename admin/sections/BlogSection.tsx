import React, { useState } from 'react';
import { FileText, Plus, Trash2, Save, Calendar, Tag, Eye } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    published: boolean;
}

const initialPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Uzaktan Eğitimde Öğrenci Rehberi',
        excerpt: 'Online eğitimde başarılı olmak için öğrencilerin dikkat etmesi gereken önemli noktalar.',
        category: 'Rehberlik',
        date: '2024-12-01',
        published: true,
    },
    {
        id: '2',
        title: 'Eğitmenlerin Dikkat Etmesi Gereken Davranışlar',
        excerpt: 'Uzaktan eğitimde öğretmenlerin etkili ders anlatımı için uygulaması gereken stratejiler.',
        category: 'Öğretmenler',
        date: '2024-11-25',
        published: true,
    },
    {
        id: '3',
        title: 'Uzaktan Eğitime Zemin Hazırlamak',
        excerpt: 'Evde verimli çalışma ortamı oluşturma ve teknolojik altyapı hazırlığı.',
        category: 'Hazırlık',
        date: '2024-11-18',
        published: true,
    },
];

export const BlogSection: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
    const [saved, setSaved] = useState(false);

    const handleDelete = (id: string) => {
        setPosts(posts.filter(p => p.id !== id));
    };

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">Blog Yazıları</h2>
                        <p className="text-slate-500">{posts.length} yazı mevcut</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow">
                    <Plus size={18} />
                    Yeni Yazı
                </button>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:bg-white hover:shadow-sm transition-all"
                    >
                        {/* Thumbnail */}
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-3xl shrink-0">
                            📝
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-slate-900 truncate">{post.title}</h3>
                                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">{post.excerpt}</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                        <Eye size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Meta */}
                            <div className="flex items-center gap-4 mt-3">
                                <span className="flex items-center gap-1 text-xs text-slate-500">
                                    <Calendar size={12} />
                                    {new Date(post.date).toLocaleDateString('tr-TR')}
                                </span>
                                <span className="flex items-center gap-1 text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                                    <Tag size={12} />
                                    {post.category}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${post.published
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-amber-100 text-amber-700'
                                    }`}>
                                    {post.published ? 'Yayında' : 'Taslak'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State */}
            {posts.length === 0 && (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Henüz blog yazısı yok</h3>
                    <p className="text-slate-500 text-sm">İlk yazınızı eklemek için yukarıdaki butonu kullanın.</p>
                </div>
            )}

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
