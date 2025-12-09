import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { type SiteContent } from '../types';

interface SiteContentContextValue {
  content: SiteContent;
  updateSection: <K extends keyof SiteContent>(section: K, value: SiteContent[K]) => void;
  resetContent: () => void;
}

const STORAGE_KEY = 'islemtamam-site-content';

const defaultContent: SiteContent = {
  navbar: {
    logoText: 'İŞLEM TAMAM',
    tagline: 'ONLINE DERS SİSTEMİ | LGS',
    ctaLabel: 'Kayıt Ol',
    ctaHref: '/paketler',
    links: [
      { id: 'nav-packages', label: 'Eğitim Paketleri', href: '/paketler' },
      { id: 'nav-staff', label: 'Kadromuz', href: '/kadro' },
      { id: 'nav-success', label: 'Başarılar', href: '/basarilar' },
      { id: 'nav-testimonials', label: 'Yorumlar', href: '/yorumlar' },
      { id: 'nav-faq', label: 'SSS', href: '/sss' },
    ],
  },
  hero: {
    badgeText: 'LGS 2025 Kayıtları Açılmıştır',
    title: 'Liselere Giriş Sınavında',
    highlight: 'Başarıya Ulaş!',
    description:
      "10 kişilik uzman öğretmen kadromuzla, LGS'ye tam hazırlık yapın. Kişiye özel takip, canlı dersler ve sınırsız soru çözümü ile başarı tesadüf değil.",
    primaryButtonText: 'Paketleri İncele',
    primaryButtonHref: '#paketler',
    secondaryButtonText: 'Tanıtım Videosu',
    videoUrl: 'https://www.youtube.com/embed/2cFL-5vHc9s',
    stats: ['15+ Yıl LGS Tecrübesi', '%95 Başarı Oranı'],
    heroImageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    heroImageAlt: 'Mutlu öğrenciler',
    badgeInfo: {
      badgeTitle: '8500+ Öğrenci',
      badgeSubtitle: "LGS başarısı için bize güveniyor",
      studentCount: '8500+ Öğrenci',
      studentSubtext: "LGS başarısı için bize güveniyor",
      avatarUrls: [
        'https://picsum.photos/100/100?random=1',
        'https://picsum.photos/100/100?random=2',
        'https://picsum.photos/100/100?random=3',
        'https://picsum.photos/100/100?random=4',
      ],
    },
  },
  features: {
    eyebrow: 'Neden İşlemTamam LGS?',
    title: 'LGS Başarısına Giden Yolda Tam Donanımlı Destek',
    description: "LGS'ye özel hazırlanmış, modern ve sonuç odaklı bir eğitim sistemi sunuyoruz.",
    items: [
      {
        id: 'feature-expert-team',
        icon: 'users',
        color: 'bg-blue-500',
        title: '10 Kişilik LGS Uzman Kadro',
        description:
          'Her ders için LGS müfredatına hakim, sorulara cevap verebilen uzman öğretmenlerden oluşan ekip.',
      },
      {
        id: 'feature-live-classes',
        icon: 'video',
        color: 'bg-orange-500',
        title: 'Canlı LGS Dersleri & Kayıtlar',
        description: 'İster canlı katıl, LGS konularını anla; istersen kaçırdığın dersleri sınırsız tekrar et.',
      },
      {
        id: 'feature-library',
        icon: 'bookOpen',
        color: 'bg-green-500',
        title: 'LGS Soru Bankası ve Deneme',
        description:
          'Binlerce çıkmış LGS sorusu, çözümlü deneme sınavları ve konu kütüphanesine 7/24 erişim.',
      },
      {
        id: 'feature-coach',
        icon: 'target',
        color: 'bg-purple-500',
        title: 'Kişiye Özel LGS Koçluğu',
        description:
          'Zayıf branşlarında birebir destek, hedef puan belirleme ve motivasyon rehberliği.',
      },
      {
        id: 'feature-support',
        icon: 'messageCircle',
        color: 'bg-pink-500',
        title: 'LGS Soru Çözüm Sistemleri',
        description:
          'Yapamadığın LGS sorularını gönder, öğretmenlerimiz video ile anında çözüme kavuştur.',
      },
      {
        id: 'feature-focus',
        icon: 'clock',
        color: 'bg-indigo-500',
        title: 'Sınav Öncesi Yoğunlaşma',
        description:
          "LGS'ye 4-6 hafta kala son düşüş, eksiklikleri kapatma ve full tekrar kampları.",
      },
    ],
  },
  packages: {
    eyebrow: 'LGS Eğitim Paketlerimiz',
    title: 'Sana En Uygun LGS Paketini Seç',
    description: "LGS'ye tam hazırlık için video destekli isen başla, live dersler istiyorsan tam kapsamlıyı seç.",
    options: [
      {
        id: 'package-video',
        name: 'LGS Video Arşivi',
        description: 'Kendi hızında çalışmak isteyenler için tüm LGS konularının video ve kaynak arşivi.',
        price: '₺599',
        period: '/aylık',
        features: [
          'Tüm LGS Ders Videoları',
          'PDF Konu Anlatımları',
          'Aylık Deneme Sınavları',
          'Çıkmış Soruların Çözümü',
          'Rehberlik Seminerleri',
        ],
        highlight: false,
        buttonLabel: 'Hemen Başvur',
        buttonHref: '#contact',
      },
      {
        id: 'package-full',
        name: 'LGS Tam Hazırlık',
        description: 'Canlı LGS dersleri ve sıkı takip ile sınavda başarıyı garantileyin.',
        price: '₺1.299',
        period: '/aylık',
        features: [
          'Haftada 12 Saat Canlı LGS Dersler',
          'Sınırsız LGS Soru Çözüm',
          'Birebir Performans Koçluğu',
          'Haftalık LGS Ödev Takibi',
          'Tüm LGS Dijital Kaynakları',
          'Ayda 2 Deneme Sınavı',
        ],
        highlight: true,
        badgeText: 'EN ÇOK TERCİH EDİLEN',
        buttonLabel: 'Hemen Başvur',
        buttonHref: '#contact',
      },
      {
        id: 'package-vip',
        name: 'VIP LGS Koçluğu',
        description: "LGS'ye maksimum hazırlık için kişiye özel birebir ilgi ve destek.",
        price: '₺2.199',
        period: '/aylık',
        features: [
          'Kişiye Özel LGS Ders Programı',
          'Haftada 5 Saat Özel LGS Dersi',
          '7/24 Whatsapp Soru Desteği',
          'LGS Psikolojik Danışmanlığı',
          'Veli Bilgilendirme Sistemi',
          'Prioriteli Soru Çözümü',
        ],
        highlight: false,
        buttonLabel: 'Hemen Başvur',
        buttonHref: '#contact',
      },
    ],
    disclaimer:
      '* Tüm paketlerimizde 14 gün iade garantisi bulunmaktadır. Okul turu paketleri için iletişime geçiniz.',
  },
  teacherHighlight: {
    title: "LGS'ye 10 Kişilik",
    highlight: 'Öğretmen Ekibi ile Hazırlık',
    description:
      "LGS başarısı ekip çalışmasının ürünüdür. Her branşta uzmanlaşmış 10 kişilik öğretmen kadromuzla, öğrencinin her sorusuna, her konu zayıflığına anında yanıt veriyoruz.",
    details: [
      {
        id: 'teacher-expert',
        icon: 'award',
        title: 'LGS Uzmanı',
        description: 'Her öğretmen LGS müfredatında 10+ yıl deneyimli.',
      },
      {
        id: 'teacher-coach',
        icon: 'graduationCap',
        title: 'LGS Koçluğu',
        description: 'Akademik başarının yanında sınav psikolojisi desteği.',
      },
    ],
    stats: [
      { id: 'stat-experience', value: '15+', label: 'Yıl Deneyim' },
      { id: 'stat-graduates', value: '5000+', label: 'Mezun Öğrenci' },
      { id: 'stat-success', value: '%95', label: 'Başarı Oranı' },
      { id: 'stat-active', value: '250+', label: 'Aktif Öğrenci' },
    ],
    founderName: 'M.Osman DOĞRUER',
    founderTitle: 'İşlem Tamam Eğitim Kurucusu',
    founderQuote: '“Eğitim sadece bir meslek değil, geleceği inşa etme sanatıdır.”',
    founderBio: [
      'Yılların tecrübesiyle eğitim sektörünün en iyilerinden biri olmayı başaran M.Osman DOĞRUER, binlerce öğrenciyi hayallerine kavuşturmanın gururunu yaşıyor. LGS\'de %1\'lik dilime giren yüzlerce öğrenci yetiştiren eğitim vizyoneridir.',
      'İşlem Tamam markasını, "Her öğrenci başarabilir" felsefesiyle kurdu. Disiplinli çalışma, doğru strateji ve kararlılıkla her hedefin ulaşılabilir olduğuna inanır.',
    ],
    founderBadgeText: 'Kurucu',
    founderImageUrl: '/kurucu.jpg',
  },
  successStories: {
    title: 'LGS Başarı Öyküleri',
    subtitle: 'Onlar hedeflerine ulaştı, şimdi sıra sende.',
    stories: [
      {
        id: 'story-berkay',
        name: 'Berkay Yıldız',
        school: 'Kadıköy Anadolu Lisesi',
        score: 'LGS 2024 - 890 Puan',
        rank: 'TR 250.',
        quote:
          'Matematik net sayısını 8\'den 42\'ye çıkardım. İşlemTamam sayesinde LGS\'de en iyi sonucumu aldım.',
      },
      {
        id: 'story-zeynep',
        name: 'Zeynep Kara',
        school: 'Fenerbahçe Üniversite Lisesi',
        score: 'LGS 2024 - 920 Puan',
        rank: 'TR 80.',
        quote: 'Disiplinli LGS programı ve haftalık takip sistemi hayat kurtarıcı oldu.',
      },
      {
        id: 'story-canan',
        name: 'Canan Erkin',
        school: 'Bahçeşehir Koleji',
        score: 'LGS 2024 - 875 Puan',
        rank: 'TR 340.',
        quote: 'Öğretmenlerin canlı LGS derslerinde anında soru sorabilmek çok etkili oldu.',
      },
    ],
  },
  testimonials: {
    eyebrow: 'Sizden Gelenler',
    title: 'LGS Öğrencileri ve Velilerimiz Ne Diyor?',
    testimonials: [
      {
        id: 'testimonial-selin',
        name: 'Selin Yılmaz',
        role: '8. Sınıf Öğrencisi',
        image:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content:
          'Matematik netlerim 5-6 civarındaydı, İşlemTamam LGS kursları sayesinde 38\'e çıktım. Canlı derslerde hocalarımız çok yardımcı oluyor.',
        rating: 5,
      },
      {
        id: 'testimonial-mehmet',
        name: 'Mehmet Öztürk',
        role: 'LGS Öğrencisi Velisi',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content:
          'Oğlum için LGS hazırlığında endişeliydim ama bu kursu sayesinde hem özgüveni arttı hem de dersleri iyi anladı.',
        rating: 5,
      },
      {
        id: 'testimonial-ayse',
        name: 'Ayşe Demir',
        role: 'LGS 2024 - 920 Puan',
        image:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        content:
          'Soru çözüm grupları çok etkili. Gece 11\'de attığım soruya bile hocalarımız 10 dakika içinde video çözüm gönderiyor.',
        rating: 5,
      },
    ],
  },
  faq: {
    title: 'Sıkça Sorulan Sorular',
    items: [
      {
        id: 'faq-eligible',
        question: 'LGS kursuna kaç sınıf öğrencisi katılabilir?',
        answer:
          'Genellikle 8. sınıf öğrencileri katılır. Ancak 9. sınıfların LGS yılındaki ilk dönemi de içerir. En erken 7. sınıf ortasında başlayanlar da olmuştur.',
      },
      {
        id: 'faq-start-midyear',
        question: 'LGS kursunu yılın ortasında başlayabilir miyim?',
        answer:
          'Evet! Kayıt olduğunuz andan itibaren önceki tüm ders videoları, çıkmış sorular ve çözümlere erişiminiz açılır. Ayrıca kişiye özel telafi programı hazırlarız.',
      },
      {
        id: 'faq-questions',
        question: 'Öğretmenlere LGS konularında birebir soru sorabiliyor muyuz?',
        answer:
          'Kesinlikle. Haftalık canlı soru çözüm saatlerimizde anında soru sorabilir, diğer zamanlarda ise WhatsApp veya soru çözüm platformumuz üzerinden 7/24 destek alabilirsiniz.',
      },
      {
        id: 'faq-exams',
        question: 'LGS deneme sınavları ne sıklıkla yapılıyor?',
        answer:
          'Tam kapsamlı pakette ayda 2, video paketinde ayda 1 deneme sınavı yapılıyor. Sınavlar hem online hem de basılı olarak uygulanır. Türkiye geneli ranking sistemi sayesinde kendinizi karşılaştırabilirsiniz.',
      },
      {
        id: 'faq-pricing',
        question: 'LGS paket fiyatları nedir ve taksit seçenekleri var mı?',
        answer:
          'Paketlerimiz ₺599 ile ₺2.199 arasında değişmektedir. Kredi kartına 12 taksit imkanı, peşin ödemelerde %10 indirim ve okul turları için özel fiyatlandırma sunuyoruz.',
      },
      {
        id: 'faq-coverage',
        question: 'LGS müfredatındaki tüm konuları kapsıyor musunuz?',
        answer:
          'Evet, MEB\'in belirlediği tüm LGS konuları (Matematik, Fen Bilgisi, Türkçe, Sosyal Bilgiler, İngilizce) tamamen kapsamlı bir şekilde öğretilmektedir.',
      },
    ],
  },
  cta: {
    title: 'LGS Başarı Yolculuğuna Hemen Başla!',
    description:
      "Kontenjanlarımız sınırlıdır. 10 kişilik LGS uzman kadromuzla tanışmak ve deneme dersine katılmak için hemen başvurun.",
    primaryButtonText: "LGS'ye Başvur",
    primaryButtonHref: '#apply',
    secondaryButtonText: 'WhatsApp\'tan LGS Bilgi Al',
    secondaryButtonHref: 'https://wa.me/905001234567',
    backgroundPatternUrl: "https://www.transparenttextures.com/patterns/cubes.png",
  },
  footer: {
    brandName: 'İşlem',
    brandHighlight: 'Tamam',
    brandDescription:
      "LGS'ye hazırlık için 10 kişilik öğretmen kadromuzla başarıya ulaşın. Başarıyı şansa bırakmayın, işi LGS uzmanlarına bırakın.",
    socials: [
      { id: 'social-instagram', platform: 'instagram', url: '#' },
      { id: 'social-twitter', platform: 'twitter', url: '#' },
      { id: 'social-youtube', platform: 'youtube', url: '#' },
    ],
    quickLinks: [
      { id: 'quick-packages', label: 'Paketler', href: '#paketler' },
      { id: 'quick-teachers', label: 'Öğretmen Kadrosu', href: '#kadro' },
      { id: 'quick-success', label: 'Başarı Hikayeleri', href: '#basarilar' },
    ],
    resourceLinks: [
      { id: 'resource-testimonials', label: 'Öğrenci Yorumları', href: '#yorumlar' },
      { id: 'resource-faq', label: 'Sıkça Sorulan Sorular', href: '#sss' },
    ],
    contact: [
      {
        id: 'contact-address',
        type: 'address',
        value: 'Mecidiyeköy Mah. Büyükdere Cad. No:123 Şişli/İstanbul',
      },
      { id: 'contact-phone', type: 'phone', value: '0850 123 45 67' },
      { id: 'contact-email', type: 'email', value: 'iletisim@islemtamam.com' },
    ],
    copyright: '© 2024 LGS Hazırlık Platformu - İşlemTamam. Tüm hakları saklıdır.',
  },
};

const SiteContentContext = createContext<SiteContentContextValue | undefined>(undefined);

const cloneDefaultContent = (): SiteContent => JSON.parse(JSON.stringify(defaultContent));

const mergeWithDefaults = (stored: Partial<SiteContent>): SiteContent => {
  const clone = cloneDefaultContent();
  (Object.keys(stored) as (keyof SiteContent)[]).forEach((section) => {
    const sectionValue = stored[section];
    if (sectionValue) {
      if (Array.isArray(clone[section])) {
        (clone as any)[section] = sectionValue;
      } else {
        (clone as any)[section] = { ...(clone as any)[section], ...sectionValue };
      }
    }
  });
  return clone;
};

export const SiteContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    if (typeof window === 'undefined') {
      return cloneDefaultContent();
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return cloneDefaultContent();
    }
    try {
      const parsed = JSON.parse(stored) as Partial<SiteContent>;
      return mergeWithDefaults(parsed);
    } catch (error) {
      console.warn('Site content parse error, falling back to defaults.', error);
      return cloneDefaultContent();
    }
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const updateSection = useCallback(<K extends keyof SiteContent>(section: K, value: SiteContent[K]) => {
    setContent((prev) => ({ ...prev, [section]: value }));
  }, []);

  const resetContent = useCallback(() => {
    const defaults = cloneDefaultContent();
    setContent(defaults);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const value = useMemo(() => ({ content, updateSection, resetContent }), [content, updateSection, resetContent]);

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
};

export const useSiteContent = (): SiteContentContextValue => {
  const context = useContext(SiteContentContext);
  if (!context) {
    throw new Error('useSiteContent must be used within a SiteContentProvider');
  }
  return context;
};

export const getDefaultContent = (): SiteContent => cloneDefaultContent();
