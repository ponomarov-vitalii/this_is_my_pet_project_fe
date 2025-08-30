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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-xl font-bold text-primary-700"
        >
          📰 <span>{t('logo')}</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-primary-600">
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

        {/* Right */}
        <div className="flex items-center gap-3">
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
      </div>

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