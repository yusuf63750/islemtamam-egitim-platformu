import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  LogOut,
  Sparkles,
  Puzzle,
  Boxes,
  UsersRound,
  Trophy,
  MessageSquare,
  HelpCircle,
  Megaphone,
  Navigation,
  LayoutTemplate,
} from 'lucide-react';
import { adminSections } from '../sections/config';

interface AdminLayoutProps {
  onLogout: () => void;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ onLogout }) => {
  const location = useLocation();
  const iconMap = {
    sparkles: Sparkles,
    puzzle: Puzzle,
    boxes: Boxes,
    usersRound: UsersRound,
    trophy: Trophy,
    messageSquare: MessageSquare,
    helpCircle: HelpCircle,
    megaphone: Megaphone,
    navigation: Navigation,
    layoutTemplate: LayoutTemplate,
  } as const;

  const activeSection = adminSections.find((section) =>
    location.pathname.includes(section.path)
  );

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200 bg-white/95 backdrop-blur">
        <div className="px-6 py-8 border-b border-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-500 font-semibold">İşlemTamam</p>
          <h2 className="text-xl font-bold text-slate-900 mt-2">Yönetim Paneli</h2>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Site içeriğini güncellemek için aşağıdaki bölümlerden seçim yapın.
          </p>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-2">
          {adminSections.map((section) => {
            const Icon = iconMap[section.icon as keyof typeof iconMap] ?? Sparkles;
            return (
              <NavLink
                key={section.id}
                to={section.path}
                className={({ isActive }) =>
                  `group flex items-start gap-3 rounded-2xl px-4 py-3 text-sm transition shadow-sm border ${
                    isActive
                      ? 'bg-primary-50 border-primary-100 text-primary-700 shadow-primary-100/60'
                      : 'bg-white border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                <span className={`mt-0.5 rounded-xl border px-2 py-1 text-xs font-semibold ${
                  section.id === activeSection?.id
                    ? 'border-primary-200 bg-primary-100 text-primary-700'
                    : 'border-slate-200 bg-slate-100 text-slate-500'
                }`}
                >
                  <Icon size={16} />
                </span>
                <span className="flex-1">
                  <span className="font-semibold block">{section.label}</span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {section.description}
                  </span>
                </span>
              </NavLink>
            );
          })}
        </nav>
        <div className="px-6 py-6 border-t border-slate-200">
          <button
            onClick={onLogout}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 transition"
          >
            <LogOut size={16} />
            Çıkış Yap
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between bg-white shadow-sm px-6 py-4 border-b border-slate-200">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              {activeSection ? activeSection.label : 'Admin Paneli'}
            </p>
            <h1 className="text-xl font-bold text-slate-900">
              {activeSection ? activeSection.description : 'Site içeriklerini buradan yönetin.'}
            </h1>
          </div>
          <button
            onClick={onLogout}
            className="inline-flex lg:hidden items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 transition"
          >
            <LogOut size={16} />
            Çıkış Yap
          </button>
        </header>

        <div className="lg:hidden border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="flex gap-2 overflow-x-auto px-4 py-3">
            {adminSections.map((section) => (
              <NavLink
                key={section.id}
                to={section.path}
                className={({ isActive }) =>
                  `flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-primary-600 text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`
                }
              >
                {section.label}
              </NavLink>
            ))}
          </div>
        </div>

        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-10 py-8">
          <div className="mx-auto w-full max-w-5xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
