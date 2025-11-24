export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g., "Tıp Fakültesi Öğrencisi"
  content: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PackageFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeacherStat {
  label: string;
  value: string;
  icon: React.ReactNode;
}