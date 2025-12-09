import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  LogOut,
  Sparkles,
  Puzzle,
  Boxes,
  UsersRound,
  MessageSquare,
  HelpCircle,
  Navigation,
  LayoutTemplate,
  Brain,
  FileText,
  Home,
  Eye,
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
    messageSquare: MessageSquare,
    helpCircle: HelpCircle,
    navigation: Navigation,
    layoutTemplate: LayoutTemplate,
    brain: Brain,
    fileText: FileText,
  } as const;

  const activeSection = adminSections.find((section) =>
    location.pathname.includes(section.path)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-80 flex-col fixed left-0 top-0 h-screen border-r border-slate-200/80 bg-white/95 backdrop-blur-lg z-40 shadow-xl">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-slate-100 bg-gradient-to-r from-primary-600 to-blue-600">
          <div className="flex items-center gap-3">
            <img src="/LOGO.png" alt="Logo" className="w-12 h-12 rounded-xl shadow-lg" />
            <div>
              <h2 className="text-xl font-extrabold text-white">İŞLEM TAMAM</h2>
              <p className="text-xs text-white/80">Yönetim Paneli</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-4 border-b border-slate-100">
          <div className="flex gap-2">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-medium text-slate-700 transition-colors"
            >
              <Home size={16} />
              Ana Sayfa
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-emerald-100 hover:bg-emerald-200 rounded-xl text-sm font-medium text-emerald-700 transition-colors"
            >
              <Eye size={16} />
              Önizleme
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5">
          <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Site İçerikleri
          </p>
          {adminSections.map((section) => {
            const Icon = iconMap[section.icon as keyof typeof iconMap] ?? Sparkles;
            const isActive = location.pathname.includes(section.path);

            return (
              <NavLink
                key={section.id}
                to={section.path}
                className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition-all duration-200 ${isActive
                  ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white shadow-lg shadow-primary-500/25'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
              >
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${isActive ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-slate-200'
                  }`}>
                  {section.emoji}
                </span>
                <span className="flex-1">
                  <span className="font-semibold block">{section.label}</span>
                  <span className={`text-xs block mt-0.5 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                    {section.description}
                  </span>
                </span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-80">
        {/* Header */}
        <header className="sticky top-0 z-40 flex items-center justify-between bg-white/80 backdrop-blur-lg shadow-sm px-6 py-4 border-b border-slate-200/80">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{activeSection?.emoji || '🎛️'}</span>
            <div>
              <p className="text-xs uppercase tracking-wider text-primary-600 font-semibold">
                {activeSection ? activeSection.label : 'Admin Paneli'}
              </p>
              <h1 className="text-xl font-bold text-slate-900">
                {activeSection ? activeSection.description : 'Site içeriklerini buradan yönetin.'}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 transition"
            >
              <Eye size={16} />
              Önizle
            </a>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 transition"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Çıkış</span>
            </button>
          </div>
        </header>

        {/* Mobile Navigation */}
        <div className="lg:hidden border-b border-slate-200 bg-white/90 backdrop-blur sticky top-16 z-40">
          <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
            {adminSections.map((section) => {
              const isActive = location.pathname.includes(section.path);
              return (
                <NavLink
                  key={section.id}
                  to={section.path}
                  className={`flex-shrink-0 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${isActive
                    ? 'bg-gradient-to-r from-primary-500 to-blue-500 text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                >
                  <span>{section.emoji}</span>
                  {section.label}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-10 py-8">
          <div className="mx-auto w-full max-w-5xl">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50">
              <Outlet />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 text-center text-sm text-slate-500 border-t border-slate-200/80 bg-white/50">
          İşlemTamam Yönetim Paneli © 2024 - Tüm hakları saklıdır.
        </footer>
      </div>
    </div>
  );
};
