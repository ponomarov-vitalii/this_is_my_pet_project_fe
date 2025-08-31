'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from '../Button/Button';
import ThemeCustomizer from '../ThemeCustomizer/ThemeCustomizer';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];
   
  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsLanguageOpen(false);
  };

  return (
    <header className="w-full border-b border-primary-200 bg-primary-50 text-primary-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-1 sm:gap-2 text-base sm:text-lg lg:text-xl font-bold text-primary-700"
        >
          📰 <span className="truncate">{t('logo')}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 text-sm text-primary-600">
          <Link href={`/${locale}/features`} className="hover:text-primary-800 transition-colors">
            {t('nav.features')}
          </Link>
          <Link href={`/${locale}/pricing`} className="hover:text-primary-800 transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-primary-800 transition-colors">
            {t('nav.about')}
          </Link>
          <Link href={`/${locale}/help`} className="hover:text-primary-800 transition-colors">
            {t('nav.help')}
          </Link>
        </nav>

        {/* Right - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-primary-600 hover:text-primary-800 hover:bg-primary-100 rounded-lg transition-all duration-200"
              aria-label={t('language')}
            >
              <span>{currentLanguage.flag}</span>
              <span className="hidden sm:inline">{currentLanguage.name}</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-1 bg-primary-50 border border-primary-200 rounded-lg shadow-lg py-1 z-50 min-w-[140px]">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => switchLanguage(language.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-primary-100 transition-colors flex items-center gap-3 ${
                      locale === language.code 
                        ? 'text-primary-900 bg-primary-100' 
                        : 'text-primary-600'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href={`/${locale}/login`}
            className="text-sm text-primary-600 hover:text-primary-800 transition-colors"
          >
            {t('auth.signIn')}
          </Link>
          <Button size="sm">{t('auth.getStarted')}</Button>
          <ThemeCustomizer />
        </div>

        {/* Mobile/Tablet Controls */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-primary-600 hover:text-primary-800 hover:bg-primary-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-primary-200">
          <div className="px-4 sm:px-6 py-4 space-y-4">
            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-3">
              <Link 
                href={`/${locale}/features`} 
                className="text-primary-600 hover:text-primary-800 hover:bg-primary-100 px-3 py-2 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.features')}
              </Link>
              <Link 
                href={`/${locale}/pricing`} 
                className="text-primary-600 hover:text-primary-800 hover:bg-primary-100 px-3 py-2 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.pricing')}
              </Link>
              <Link 
                href={`/${locale}/about`} 
                className="text-primary-600 hover:text-primary-800 hover:bg-primary-100 px-3 py-2 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href={`/${locale}/help`} 
                className="text-primary-600 hover:text-primary-800 hover:bg-primary-100 px-3 py-2 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.help')}
              </Link>
            </nav>

            {/* Divider */}
            <div className="border-t border-primary-200"></div>

            {/* Language Selector - Mobile */}
            <div className="flex gap-2 items-center justify-start">
              <span className="text-sm text-primary-500 pr-3">{t('language')}:</span>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      switchLanguage(language.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                      locale === language.code 
                        ? 'text-primary-900 bg-primary-100' 
                        : 'text-primary-600 hover:bg-primary-100'
                    }`}
                  >
                    <span>{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Theme Customizer - Mobile */}
            <ThemeCustomizer />

            {/* Divider */}
            <div className="border-t border-primary-200"></div>

            {/* Auth Actions - Mobile */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/${locale}/login`}
                className="flex-1 text-center px-4 py-2 text-sm text-primary-600 hover:text-primary-800 hover:bg-primary-100 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('auth.signIn')}
              </Link>
              <Button 
                size="sm" 
                className="flex-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('auth.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isLanguageOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </header>
  );
}