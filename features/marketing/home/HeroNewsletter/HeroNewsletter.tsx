'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/Button/Button';

export default function HeroNewsletter() {
  const [email, setEmail] = useState('');
  const t = useTranslations('homepage.hero');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-20 px-4 bg-primary-50">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
          {t('title')}
          <br />
          <span className="text-primary-600">{t('titleHighlight')}</span>
        </h1>
        
        <p className="text-lg text-primary-600 mb-8 leading-relaxed max-w-xl mx-auto">
          {t('description')}
        </p>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-primary-300 bg-primary-50 text-primary-900 placeholder-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
            <Button
              type="submit"
              className="whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {t('ctaButton')}
            </Button>
          </div>
        </form>

        <p className="text-sm text-primary-500 mb-8">
          {t('trialNote')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-600">
          <div className="flex items-center gap-2">
            <span className="text-success-600">✓</span>
            <span>{t('benefits.aiPowered')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success-600">✓</span>
            <span>{t('benefits.trustedSources')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success-600">✓</span>
            <span>{t('benefits.customFrequency')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}