import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles, Lightbulb, BookOpen, CreditCard, Clock, Users } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

const categoryIcons: Record<string, React.ElementType> = {
  general: HelpCircle,
  program: BookOpen,
  payment: CreditCard,
  schedule: Clock,
  teachers: Users,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  general: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
  program: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
  payment: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
  schedule: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
  teachers: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' },
};

const funFacts = [
  { emoji: '🎯', text: '8500+ öğrenci bize güveniyor!' },
  { emoji: '🏆', text: '%95 başarı oranı' },
  { emoji: '📚', text: '1000+ video ders' },
  { emoji: '⭐', text: '4.9/5 öğrenci memnuniyeti' },
];

export const FAQ: React.FC = () => {
  const { content } = useSiteContent();
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      category: 'general',
      question: 'LGS kursuna kaç sınıf öğrencisi katılabilir?',
      answer: 'Genellikle 8. sınıf öğrencileri katılır. Ancak 9. sınıfların LGS yılındaki ilk dönemi de içerir. En erken 7. sınıf ortasında başlayanlar da olmuştur.',
    },
    {
      category: 'program',
      question: 'LGS kursunu yılın ortasında başlayabilir miyim?',
      answer: 'Evet! Kayıt olduğunuz andan itibaren önceki tüm ders videoları, çıkmış sorular ve çözümlere erişiminiz açılır. Ayrıca kişiye özel telafi programı hazırlarız.',
    },
    {
      category: 'teachers',
      question: 'Öğretmenlere LGS konularında birebir soru sorabiliyor muyuz?',
      answer: 'Kesinlikle! Haftalık canlı soru çözüm saatlerimizde anında soru sorabilir, diğer zamanlarda ise WhatsApp veya soru çözüm platformumuz üzerinden 7/24 destek alabilirsiniz.',
    },
    {
      category: 'schedule',
      question: 'LGS deneme sınavları ne sıklıkla yapılıyor?',
      answer: 'Tam kapsamlı pakette ayda 2, video paketinde ayda 1 deneme sınavı yapılıyor. Sınavlar hem online hem de basılı olarak uygulanır. Türkiye geneli ranking sistemi sayesinde kendinizi karşılaştırabilirsiniz.',
    },
    {
      category: 'payment',
      question: 'LGS paket fiyatları nedir ve taksit seçenekleri var mı?',
      answer: 'Paketlerimiz ₺599 ile ₺2.199 arasında değişmektedir. Kredi kartına 12 taksit imkanı, peşin ödemelerde %10 indirim ve okul turları için özel fiyatlandırma sunuyoruz.',
    },
    {
      category: 'program',
      question: 'LGS müfredatındaki tüm konuları kapsıyor musunuz?',
      answer: "Evet, MEB'in belirlediği tüm LGS konuları (Matematik, Fen Bilgisi, Türkçe, Sosyal Bilgiler, İngilizce) tamamen kapsamlı bir şekilde öğretilmektedir.",
    },
  ];

  return (
    <section id="sss" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden scroll-mt-20">
      {/* Fun Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">❓</div>
        <div className="absolute top-1/4 right-10 text-6xl opacity-10 animate-float animation-delay-2000">💡</div>
        <div className="absolute bottom-10 left-1/4 text-6xl opacity-10 animate-bounce-slow">🎓</div>
        <div className="absolute bottom-1/4 right-1/4 text-6xl opacity-10 animate-wiggle">📚</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Fun Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageCircle className="w-4 h-4" />
            Merak ettikleriniz
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl">🤔</span>
            Sıkça Sorulan Sorular
            <span className="text-4xl">💬</span>
          </h2>
          <p className="text-lg text-slate-600">
            Aklınızdaki tüm soruların cevapları burada!
          </p>
        </div>

        {/* Fun Facts Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {funFacts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 shadow-md border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{fact.emoji}</div>
              <div className="text-sm font-medium text-slate-700">{fact.text}</div>
            </div>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const Icon = categoryIcons[item.category] || HelpCircle;
            const colors = categoryColors[item.category] || categoryColors.general;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${isOpen ? `${colors.border} shadow-lg` : 'border-slate-100 hover:border-slate-200'
                  }`}
              >
                <button
                  className="w-full flex items-center gap-4 p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {/* Category Icon */}
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Question */}
                  <span className="flex-1 font-semibold text-slate-900 text-lg">
                    {item.question}
                  </span>

                  {/* Toggle Icon */}
                  <div className={`w-10 h-10 rounded-full ${isOpen ? colors.bg : 'bg-slate-100'} flex items-center justify-center transition-all duration-300`}>
                    <ChevronDown
                      className={`w-5 h-5 ${isOpen ? colors.text : 'text-slate-500'} transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-5 pb-5 pl-[88px]">
                    <div className={`${colors.bg} rounded-xl p-4`}>
                      <div className="flex items-start gap-3">
                        <Lightbulb className={`w-5 h-5 ${colors.text} shrink-0 mt-0.5`} />
                        <p className="text-slate-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px',
            }}></div>
          </div>
          <div className="relative z-10">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-2">Başka sorunuz mu var?</h3>
            <p className="text-primary-100 mb-6">WhatsApp'tan bize ulaşın, anında cevap verelim!</p>
            <a
              href="https://wa.me/905001234567"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              <span className="text-xl">📱</span>
              WhatsApp'tan Sor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};