export type AdminSectionId =
  | 'hero'
  | 'features'
  | 'packages'
  | 'teacher'
  | 'success'
  | 'testimonials'
  | 'faq'
  | 'cta'
  | 'navbar'
  | 'footer';

export interface AdminSectionConfig {
  id: AdminSectionId;
  label: string;
  description: string;
  path: string;
  icon: string;
}

export const adminSections: AdminSectionConfig[] = [
  {
    id: 'hero',
    label: 'Hero Bölümü',
    description: 'Başlık, görsel ve tanıtım videosunu güncelleyin.',
    path: 'content/hero',
    icon: 'sparkles',
  },
  {
    id: 'features',
    label: 'Öne Çıkanlar',
    description: 'Avantaj kartlarını düzenleyin.',
    path: 'content/features',
    icon: 'puzzle',
  },
  {
    id: 'packages',
    label: 'Paketler',
    description: 'Eğitim paketlerini ve içeriklerini yönetin.',
    path: 'content/packages',
    icon: 'boxes',
  },
  {
    id: 'teacher',
    label: 'Kadromuz',
    description: 'Öğretmen hikayesini ve istatistikleri düzenleyin.',
    path: 'content/teacher',
    icon: 'usersRound',
  },
  {
    id: 'success',
    label: 'Başarı Öyküleri',
    description: 'Öğrenci başarı hikayelerini güncelleyin.',
    path: 'content/success',
    icon: 'trophy',
  },
  {
    id: 'testimonials',
    label: 'Yorumlar',
    description: 'Öğrenci ve veli yorumlarını yönetin.',
    path: 'content/testimonials',
    icon: 'messageSquare',
  },
  {
    id: 'faq',
    label: 'SSS',
    description: 'Sıkça sorulan soruları düzenleyin.',
    path: 'content/faq',
    icon: 'helpCircle',
  },
  {
    id: 'cta',
    label: 'CTA Bölümü',
    description: 'Ana sayfa çağrı alanını düzenleyin.',
    path: 'content/cta',
    icon: 'megaphone',
  },
  {
    id: 'navbar',
    label: 'Navbar',
    description: 'Menü bağlantıları ve CTA butonunu güncelleyin.',
    path: 'content/navbar',
    icon: 'navigation',
  },
  {
    id: 'footer',
    label: 'Footer',
    description: 'İletişim bilgileri ve linkleri düzenleyin.',
    path: 'content/footer',
    icon: 'layoutTemplate',
  },
];
