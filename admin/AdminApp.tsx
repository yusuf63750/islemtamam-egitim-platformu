import React, { useCallback, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLogin } from './components/AdminLogin';
import { AdminLayout } from './components/AdminLayout';
import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { PackagesSection } from './sections/PackagesSection';
import { TeacherSection } from './sections/TeacherSection';
import { SuccessSection } from './sections/SuccessSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FaqSection } from './sections/FaqSection';
import { CtaSection } from './sections/CtaSection';
import { NavbarSection } from './sections/NavbarSection';
import { FooterSection } from './sections/FooterSection';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin';
const AUTH_STORAGE_KEY = 'islemtamam-admin-auth';

const getInitialAuthState = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
};

export const AdminApp: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getInitialAuthState);

  const handleLogin = useCallback(async (username: string, password: string) => {
    const success = username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
    if (success) {
      setIsAuthenticated(true);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      }
    }
    return success;
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  }, []);

  return (
    <Routes>
      <Route
        path="login"
        element={
          isAuthenticated ? <Navigate to="/admin" replace /> : <AdminLogin onLogin={handleLogin} />
        }
      />
      <Route
        path="*"
        element={
          isAuthenticated ? (
            <AdminLayout onLogout={handleLogout} />
          ) : (
            <Navigate to="/admin/login" replace />
          )
        }
      >
        <Route index element={<Navigate to="content/hero" replace />} />
        <Route path="content/hero" element={<HeroSection />} />
        <Route path="content/features" element={<FeaturesSection />} />
        <Route path="content/packages" element={<PackagesSection />} />
        <Route path="content/teacher" element={<TeacherSection />} />
        <Route path="content/success" element={<SuccessSection />} />
        <Route path="content/testimonials" element={<TestimonialsSection />} />
        <Route path="content/faq" element={<FaqSection />} />
        <Route path="content/cta" element={<CtaSection />} />
        <Route path="content/navbar" element={<NavbarSection />} />
        <Route path="content/footer" element={<FooterSection />} />
        <Route path="*" element={<Navigate to="content/hero" replace />} />
      </Route>
    </Routes>
  );
};
