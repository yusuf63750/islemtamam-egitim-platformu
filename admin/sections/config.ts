export type AdminSectionId =
  | 'hero'
  | 'smart-learning'
  | 'solutions'
  | 'packages'
  | 'team'
  | 'testimonials'
  | 'faq'
  | 'blog'
  | 'navbar'
  | 'footer';

export interface AdminSectionConfig {
  id: AdminSectionId;
  label: string;
  description: string;
  path: string;
  icon: string;
  emoji: string;
}

export const adminSections: AdminSectionConfig[] = [
  {
    id: 'hero',
    label: 'Hero Slider',
    description: 'Ana sayfa slider içeriklerini düzenleyin.',
    path: 'content/hero',
    icon: 'sparkles',
    emoji: '🎯',
  },
  {
    id: 'smart-learning',
    label: 'Akıllı Öğrenme',
    description: '7 modüllü öğrenme sistemini güncelleyin.',
    path: 'content/smart-learning',
    icon: 'brain',
    emoji: '🧠',
  },
  {
    id: 'solutions',
    label: 'Çözümlerimiz',
    description: 'Eğitim çözümlerini yönetin.',
    path: 'content/solutions',
    icon: 'puzzle',
    emoji: '🛠️',
  },
  {
    id: 'packages',
    label: 'Paketler',
    description: 'Eğitim paketlerini ve fiyatları düzenleyin.',
    path: 'content/packages',
    icon: 'boxes',
    emoji: '💎',
  },
  {
    id: 'team',
    label: 'Kadromuz',
    description: 'Kurucu ve öğretmen bilgilerini güncelleyin.',
    path: 'content/team',
    icon: 'usersRound',
    emoji: '👨‍🏫',
  },
  {
    id: 'testimonials',
    label: 'Yorumlar',
    description: 'Öğrenci ve veli yorumlarını yönetin.',
    path: 'content/testimonials',
    icon: 'messageSquare',
    emoji: '💬',
  },
  {
    id: 'faq',
    label: 'SSS',
    description: 'Sıkça sorulan soruları düzenleyin.',
    path: 'content/faq',
    icon: 'helpCircle',
    emoji: '❓',
  },
  {
    id: 'blog',
    label: 'Blog',
    description: 'Blog yazılarını yönetin.',
    path: 'content/blog',
    icon: 'fileText',
    emoji: '📝',
  },
  {
    id: 'navbar',
    label: 'Navbar & TopBar',
    description: 'Menü, logo ve iletişim bilgilerini düzenleyin.',
    path: 'content/navbar',
    icon: 'navigation',
    emoji: '🔗',
  },
  {
    id: 'footer',
    label: 'Footer',
    description: 'Alt bilgi ve sosyal medya linklerini düzenleyin.',
    path: 'content/footer',
    icon: 'layoutTemplate',
    emoji: '📋',
  },
];
