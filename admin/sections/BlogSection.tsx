import React, { useState } from 'react';
import { FileText, Plus, Trash2, Save, Calendar, Tag, Eye, Edit, ChevronUp, ChevronDown } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    image: string;
    date: string;
    published: boolean;
}

const initialPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Uzaktan Eğitimde Öğrenci Rehberi',
        slug: 'uzaktan-egitimde-ogrenci-rehberi',
        excerpt: 'Online eğitimde başarılı olmak için öğrencilerin dikkat etmesi gereken önemli noktalar.',
        content: `## Giriş\n\nUzaktan eğitim, günümüzde giderek yaygınlaşan bir eğitim modelidir...\n\n## İpuçları\n\n1. Düzenli bir çalışma ortamı oluşturun\n2. Ders programınıza sadık kalın\n3. Not almayı ihmal etmeyin\n\n## Sonuç\n\nBu ipuçlarını uygulayarak uzaktan eğitimde başarılı olabilirsiniz.`,
        category: 'Rehberlik',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800',
        date: '2024-12-01',
        published: true,
    },
    {
        id: '2',
        title: 'Eğitmenlerin Dikkat Etmesi Gereken Davranışlar',
        slug: 'egitmenlerin-dikkat-etmesi-gereken-davranislar',
        excerpt: 'Uzaktan eğitimde öğretmenlerin etkili ders anlatımı için uygulaması gereken stratejiler.',
        content: `## Etkili Online Ders Anlatımı\n\nÖğretmenler için online ders anlatım teknikleri...\n\n## Öğrenci Katılımı\n\nÖğrencilerin derse aktif katılımını sağlamak için yapılabilecekler...`,
        category: 'Öğretmenler',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
        date: '2024-11-25',
        published: true,
    },
    {
        id: '3',
        title: 'Uzaktan Eğitime Zemin Hazırlamak',
        slug: 'uzaktan-egitime-zemin-hazirlamak',
        excerpt: 'Evde verimli çalışma ortamı oluşturma ve teknolojik altyapı hazırlığı.',
        content: `## Çalışma Ortamı\n\nEvde uygun bir çalışma alanı oluşturmak için...\n\n## Teknolojik Gereksinimler\n\n- Stabil internet bağlantısı\n- Bilgisayar veya tablet\n- Kulaklık ve mikrofon`,
        category: 'Hazırlık',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
        date: '2024-11-18',
        published: true,
    },
];

const categories = ['Rehberlik', 'Öğretmenler', 'Hazırlık', 'LGS', 'Eğitim', 'Teknoloji', 'Motivasyon'];

export const BlogSection: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
    const [expandedPost, setExpandedPost] = useState<string | null>(null);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const addPost = () => {
        const newId = String(Date.now());
        const newPost: BlogPost = {
            id: newId,
            title: 'Yeni Blog Yazısı',
            slug: 'yeni-blog-yazisi-' + newId,
            excerpt: 'Yazı özeti...',
            content: '## Başlık\n\nİçerik buraya yazılacak...',
            category: 'Rehberlik',
            image: '',
            date: new Date().toISOString().split('T')[0],
            published: false,
        };
        setPosts([newPost, ...posts]);
        setExpandedPost(newId);
    };

    const deletePost = (id: string) => {
        setPosts(posts.filter(p => p.id !== id));
    };

    const updatePost = (id: string, field: keyof BlogPost, value: any) => {
        setPosts(posts.map(p => p.id === id ? { ...p, [field]: value } : p));
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/ğ/g, 'g')
            .replace(/ü/g, 'u')
            .replace(/ş/g, 's')
            .replace(/ı/g, 'i')
            .replace(/ö/g, 'o')
            .replace(/ç/g, 'c')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
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
                <button
                    onClick={addPost}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg transition-shadow"
                >
                    <Plus size={18} />
                    Yeni Yazı
                </button>
            </div>

            {/* Posts List */}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className={`rounded-2xl border overflow-hidden ${post.published ? 'border-slate-200 bg-slate-50' : 'border-amber-200 bg-amber-50/50'}`}
                    >
                        {/* Post Header */}
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/50 transition-colors"
                            onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                        >
                            <div className="flex items-center gap-4">
                                {/* Thumbnail */}
                                <div className="w-16 h-16 rounded-xl bg-slate-200 overflow-hidden shrink-0">
                                    {post.image ? (
                                        <img src={post.image} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-2xl">📝</div>
                                    )}
                                </div>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-semibold text-slate-900 truncate">{post.title}</h3>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${post.published
                                                ? 'bg-emerald-100 text-emerald-700'
                                                : 'bg-amber-100 text-amber-700'
                                            }`}>
                                            {post.published ? 'Yayında' : 'Taslak'}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="flex items-center gap-1 text-xs text-slate-500">
                                            <Calendar size={12} />
                                            {new Date(post.date).toLocaleDateString('tr-TR')}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full">
                                            <Tag size={12} />
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={(e) => { e.stopPropagation(); deletePost(post.id); }}
                                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                                {expandedPost === post.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                        </div>

                        {/* Post Content Editor */}
                        {expandedPost === post.id && (
                            <div className="p-6 pt-2 space-y-6 border-t border-slate-200 bg-white">
                                {/* Title & Slug */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Başlık</label>
                                        <input
                                            type="text"
                                            value={post.title}
                                            onChange={(e) => {
                                                updatePost(post.id, 'title', e.target.value);
                                                updatePost(post.id, 'slug', generateSlug(e.target.value));
                                            }}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">URL Slug</label>
                                        <input
                                            type="text"
                                            value={post.slug}
                                            onChange={(e) => updatePost(post.id, 'slug', e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition font-mono text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Excerpt */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Özet (Kısa Açıklama)</label>
                                    <textarea
                                        value={post.excerpt}
                                        onChange={(e) => updatePost(post.id, 'excerpt', e.target.value)}
                                        rows={2}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none"
                                        placeholder="Yazının kısa özeti..."
                                    />
                                </div>

                                {/* Content */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        İçerik (Markdown destekler)
                                    </label>
                                    <textarea
                                        value={post.content}
                                        onChange={(e) => updatePost(post.id, 'content', e.target.value)}
                                        rows={12}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition resize-none font-mono text-sm"
                                        placeholder="## Başlık&#10;&#10;İçerik buraya..."
                                    />
                                    <p className="text-xs text-slate-500 mt-1">
                                        Markdown formatı kullanabilirsiniz: ## Başlık, **kalın**, *italik*, - liste
                                    </p>
                                </div>

                                {/* Category, Date, Image */}
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Kategori</label>
                                        <select
                                            value={post.category}
                                            onChange={(e) => updatePost(post.id, 'category', e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                                        >
                                            {categories.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Tarih</label>
                                        <input
                                            type="date"
                                            value={post.date}
                                            onChange={(e) => updatePost(post.id, 'date', e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Görsel URL</label>
                                        <input
                                            type="text"
                                            value={post.image}
                                            onChange={(e) => updatePost(post.id, 'image', e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                                            placeholder="https://..."
                                        />
                                    </div>
                                </div>

                                {/* Image Preview */}
                                {post.image && (
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Görsel Önizleme</label>
                                        <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-100">
                                            <img src={post.image} alt="" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                )}

                                {/* Published Toggle */}
                                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id={`published-${post.id}`}
                                            checked={post.published}
                                            onChange={(e) => updatePost(post.id, 'published', e.target.checked)}
                                            className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                                        />
                                        <label htmlFor={`published-${post.id}`} className="text-sm font-medium text-slate-700">
                                            Yayınla (işaretlenmezse taslak olarak kalır)
                                        </label>
                                    </div>
                                    <a
                                        href={`/blog/${post.slug}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 px-3 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                    >
                                        <Eye size={16} />
                                        Önizle
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Empty State */}
                {posts.length === 0 && (
                    <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="w-8 h-8 text-slate-400" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2">Henüz blog yazısı yok</h3>
                        <p className="text-slate-500 text-sm mb-4">İlk yazınızı eklemek için yukarıdaki butonu kullanın.</p>
                        <button
                            onClick={addPost}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors"
                        >
                            <Plus size={18} />
                            Yeni Yazı Ekle
                        </button>
                    </div>
                )}
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
