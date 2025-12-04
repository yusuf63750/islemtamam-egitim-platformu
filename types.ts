export type FeatureIconKey =
  | 'users'
  | 'video'
  | 'bookOpen'
  | 'target'
  | 'messageCircle'
  | 'clock';

export type TeacherIconKey = 'award' | 'graduationCap';

export interface NavbarLink {
  id: string;
  label: string;
  href: string;
}

export interface NavbarContent {
  logoText: string;
  tagline: string;
  ctaLabel: string;
  ctaHref: string;
  links: NavbarLink[];
}

export interface HeroBadgeContent {
  badgeTitle: string;
  badgeSubtitle: string;
  studentCount: string;
  studentSubtext: string;
  avatarUrls: string[];
}

export interface HeroContent {
  badgeText: string;
  title: string;
  highlight: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  videoUrl: string;
  stats: string[];
  heroImageUrl: string;
  heroImageAlt: string;
  badgeInfo: HeroBadgeContent;
}

export interface FeatureItem {
  id: string;
  icon: FeatureIconKey;
  color: string;
  title: string;
  description: string;
}

export interface FeaturesContent {
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureItem[];
}

export interface PackageOption {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
  badgeText?: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface PackagesContent {
  eyebrow: string;
  title: string;
  description: string;
  options: PackageOption[];
  disclaimer: string;
}

export interface TeacherHighlightDetail {
  id: string;
  icon: TeacherIconKey;
  title: string;
  description: string;
}

export interface TeacherStat {
  id: string;
  value: string;
  label: string;
}

export interface TeacherHighlightContent {
  title: string;
  highlight: string;
  description: string;
  details: TeacherHighlightDetail[];
  stats: TeacherStat[];
  founderName: string;
  founderTitle: string;
  founderQuote: string;
  founderBio: string[];
  founderBadgeText: string;
  founderImageUrl: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  school: string;
  score: string;
  rank: string;
  quote: string;
}

export interface SuccessStoriesContent {
  title: string;
  subtitle: string;
  stories: SuccessStory[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  testimonials: Testimonial[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQContent {
  title: string;
  items: FAQItem[];
}

export interface CTAContent {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText: string;
  secondaryButtonHref: string;
  backgroundPatternUrl: string;
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'twitter' | 'youtube';
  url: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface ContactItem {
  id: string;
  type: 'address' | 'phone' | 'email';
  value: string;
}

export interface FooterContent {
  brandName: string;
  brandHighlight: string;
  brandDescription: string;
  socials: SocialLink[];
  quickLinks: FooterLink[];
  resourceLinks: FooterLink[];
  contact: ContactItem[];
  copyright: string;
}

export interface SiteContent {
  navbar: NavbarContent;
  hero: HeroContent;
  features: FeaturesContent;
  packages: PackagesContent;
  teacherHighlight: TeacherHighlightContent;
  successStories: SuccessStoriesContent;
  testimonials: TestimonialsContent;
  faq: FAQContent;
  cta: CTAContent;
  footer: FooterContent;
}