import React from 'react';
import { Calendar, ArrowLeft, Clock, User, Share2, ThumbsUp, MessageCircle } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SocialFloatingButtons } from './WhatsAppButton';

const blogPosts = [
    {
        id: 'uzaktan-egitimde-ogrenci-rehberi',
        title: 'Uzaktan Eğitimde Öğrenci Rehberi',
        excerpt: 'Online eğitimde başarılı olmak için öğrencilerin dikkat etmesi gereken önemli noktalar ve ipuçları.',
        content: `
      <h2>Uzaktan Eğitimde Başarılı Olmak İçin İpuçları</h2>
      <p>Uzaktan eğitim, öğrencilere esneklik ve kolaylık sağlarken, bazı zorlukları da beraberinde getirir. Bu rehberde, online eğitimde başarılı olmanız için en önemli stratejileri paylaşıyoruz.</p>
      
      <h3>1. Düzenli Bir Çalışma Ortamı Oluşturun</h3>
      <p>Evinizde sessiz ve düzenli bir çalışma alanı belirleyin. Bu alan sadece ders çalışmak için kullanılmalı ve dikkat dağıtıcı unsurlardan uzak olmalıdır.</p>
      
      <h3>2. Günlük Program Yapın</h3>
      <p>Her gün için bir çalışma programı hazırlayın. Canlı derslerin saatlerini, ödev zamanlarını ve dinlenme aralarını bu programa dahil edin.</p>
      
      <h3>3. Aktif Katılım Gösterin</h3>
      <p>Canlı derslerde kameranızı açık tutun, sorular sorun ve tartışmalara katılın. Aktif katılım, öğrenmenizi pekiştirir.</p>
      
      <h3>4. Düzenli Molalar Verin</h3>
      <p>Her 45-50 dakikada bir 10-15 dakikalık molalar verin. Bu molalarda ekrandan uzaklaşın, hareket edin ve gözlerinizi dinlendirin.</p>
      
      <h3>5. İletişimde Kalın</h3>
      <p>Öğretmenleriniz ve arkadaşlarınızla düzenli iletişim kurun. Anlamadığınız konuları sormaktan çekinmeyin.</p>
    `,
        date: '2024-12-01',
        author: 'Eğitim Ekibi',
        category: 'Rehberlik',
        readTime: '5 dk',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    },
    {
        id: 'egitmenlerin-dikkat-etmesi-gereken-davranislar',
        title: 'Eğitmenlerin Dikkat Etmesi Gereken Davranışlar',
        excerpt: 'Uzaktan eğitimde öğretmenlerin etkili ders anlatımı için uygulaması gereken stratejiler.',
        content: `
      <h2>Online Eğitimde Etkili Öğretmenlik</h2>
      <p>Uzaktan eğitim, öğretmenler için de yeni bir öğrenme süreci. İşte online derslerde dikkat etmeniz gereken önemli noktalar.</p>
      
      <h3>1. Teknik Hazırlık</h3>
      <p>Ders öncesi tüm teknik ekipmanlarınızı kontrol edin. Mikrofon, kamera ve internet bağlantınızın düzgün çalıştığından emin olun.</p>
      
      <h3>2. Etkileşimli İçerik</h3>
      <p>Dersleri tek yönlü anlatım yapmak yerine, öğrencilerin katılımını sağlayacak aktiviteler planlayın.</p>
      
      <h3>3. Görsel Materyal Kullanımı</h3>
      <p>Sadece konuşmak yerine, ekran paylaşımı, sunumlar ve videolar kullanarak dersi zenginleştirin.</p>
      
      <h3>4. Geri Bildirim Verin</h3>
      <p>Öğrencilerin performansı hakkında düzenli ve yapıcı geri bildirimler verin.</p>
    `,
        date: '2024-11-25',
        author: 'Pedagoji Birimi',
        category: 'Öğretmenler',
        readTime: '4 dk',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop',
    },
    {
        id: 'uzaktan-egitime-zemin-hazirlamak',
        title: 'Uzaktan Eğitime Zemin Hazırlamak',
        excerpt: 'Evde verimli çalışma ortamı oluşturma ve teknolojik altyapı hazırlığı hakkında öneriler.',
        content: `
      <h2>Evde Eğitim Ortamı Nasıl Hazırlanır?</h2>
      <p>Verimli bir uzaktan eğitim için doğru ortam şarttır. Bu yazıda ev ortamınızı nasıl hazırlamanız gerektiğini anlatıyoruz.</p>
      
      <h3>1. Teknolojik Altyapı</h3>
      <p>Stabil bir internet bağlantısı, çalışan bir bilgisayar veya tablet, kulaklık ve varsa mikrofon temin edin.</p>
      
      <h3>2. Fiziksel Ortam</h3>
      <p>İyi aydınlatılmış, sessiz bir oda tercih edin. Ergonomik bir sandalye ve masa kullanın.</p>
      
      <h3>3. Dikkat Dağıtıcılardan Uzak Durun</h3>
      <p>Ders sırasında telefon bildirimlerini kapatın, sosyal medyadan uzak durun.</p>
      
      <h3>4. Aile Desteği</h3>
      <p>Aile üyelerinize ders saatlerinizi bildirin ve bu sürelerde rahatsız edilmemenizi isteyin.</p>
    `,
        date: '2024-11-18',
        author: 'Veli Rehberlik',
        category: 'Hazırlık',
        readTime: '3 dk',
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&h=400&fit=crop',
    },
];

// Blog List Component
export const BlogList: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <SocialFloatingButtons />

            {/* Hero */}
            <div className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-500">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        📚 Blog
                    </h1>
                    <p className="text-xl text-primary-100">
                        Eğitim dünyasından haberler ve faydalı içerikler
                    </p>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
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
                            <div className="p-6">
                                <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 text-sm line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

// Single Blog Post Component
export const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find(p => p.id === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <div className="pt-32 pb-16 max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Yazı Bulunamadı</h1>
                    <Link to="/blog" className="text-primary-600 hover:underline">← Blog'a dön</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />
            <SocialFloatingButtons />

            {/* Hero Image */}
            <div className="pt-24">
                <div className="relative h-64 md:h-96">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="max-w-4xl mx-auto">
                            <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full mb-4 inline-block">
                                {post.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-6 text-white/80 text-sm">
                                <span className="flex items-center gap-2">
                                    <User size={16} />
                                    {post.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={16} />
                                    {post.readTime} okuma
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:gap-3 transition-all"
                >
                    <ArrowLeft size={18} />
                    Blog'a Dön
                </Link>

                <article
                    className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-primary-600"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share & Like */}
                <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors">
                            <ThumbsUp size={18} />
                            Beğen
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors">
                            <MessageCircle size={18} />
                            Yorum Yap
                        </button>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-100 hover:bg-primary-200 rounded-full text-primary-700 transition-colors">
                        <Share2 size={18} />
                        Paylaş
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

// Get blog posts for other components
export const getBlogPosts = () => blogPosts;
