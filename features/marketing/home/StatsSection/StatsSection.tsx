'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function StatsSection() {
  const t = useTranslations('homepage.stats');

  const stats = [
    {
      value: '50K+',
      label: t('activeUsers')
    },
    {
      value: '2M+',
      label: t('articlesCurated')
    },
    {
      value: '500+',
      label: t('trustedSources')
    },
    {
      value: '98%',
      label: t('satisfactionRate')
    }
  ];

  return (
    <section className="py-16 px-4 bg-primary-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-50 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
