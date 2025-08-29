import React from 'react';
import { getTranslations } from 'next-intl/server';

export default async function WhyChooseSection() {
  const t = await getTranslations('homepage.whyChoose');

  const features = [
    {
      emoji: '🧠',
      title: t('features.aiCuration.title'),
      description: t('features.aiCuration.description')
    },
    {
      emoji: '🛡️',
      title: t('features.trustedSources.title'),
      description: t('features.trustedSources.description')
    },
    {
      emoji: '⚙️',
      title: t('features.customizable.title'),
      description: t('features.customizable.description')
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-primary-50 rounded-xl mb-6">
                <span className="text-2xl">{feature.emoji}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-primary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}