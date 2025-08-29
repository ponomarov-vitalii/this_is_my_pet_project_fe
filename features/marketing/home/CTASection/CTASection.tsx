'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';

export default function CTASection() {
  const t = useTranslations('homepage.cta');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const features = [
    { icon: '✅', text: t('noSpam') },
    { icon: '💳', text: t('noCard') },
    { icon: '❌', text: t('cancel') }
  ];

  return (
    <section className="py-20 px-4 bg-primary-900 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-50 mb-6">{t('title')}</h2>
      <p className="text-lg text-primary-300 mb-12 max-w-2xl mx-auto">{t('subtitle')}</p>

      {/* Email Signup */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
        <Input
          variant="ghost"
          inputSize="lg"
          type="email"
          placeholder={t('placeholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" variant="primary" size="lg" className="sm:px-8">
          {t('ctaButton')}
        </Button>
      </form>

      {/* Features */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-400">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <span>{f.icon}</span>
            <span>{f.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
